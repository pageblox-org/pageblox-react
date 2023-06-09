import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDrop, XYCoord } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import uuid from "react-uuid";
import { database, storage } from "./utils/firebase-config";
import { ItemTypes } from "./utils/ItemTypes";
import Toolbar from "./components/Toolbar";
import CommentBlocks from "./components/CommentBlocks";
import EnabledPagebloxButton from "./components/EnabledPagebloxButton";
import { calculateScroll } from "./utils/calculateScroll";
import { getPathTo } from "./utils/getPathTo";
import CreateCommentModal from "./components/CreateCommentModal";
import { ref, uploadBytes } from "firebase/storage";
import InstructionsPopup from "./components/InstructionsPopup";
import LoginModal from "./components/LoginModal";

export interface Comment {
  id: string;
  timestamp: any;
  profileColor: string;
  profileName: string;
  comment: string;
  resolved: boolean;
  dom: string;
  x: number;
  y: number;
  uploadedFilePath?: string;
}

export interface Reply {
  id: string;
  author: string;
  profileColor: string;
  message: string;
  parent_comment_id: string;
  timestamp: any;
}

interface PagebloxProviderInterface {
  children: JSX.Element;
  projectKey: string;
  excludePaths?: string[];
  enabled: boolean;
}

const COMMENTS_COLLECTION =
  process.env.NODE_ENV === "production" ? "comments" : "comments-dev";
const REPLIES_COLLECTION =
  process.env.NODE_ENV === "production" ? "replies" : "replies-dev";

const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const PagebloxDndProvider = (pagebloxProvider: PagebloxProviderInterface) => {
  const [blocks, setBlocks] = useState<Comment[]>([]);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [reviewMode, setReviewMode] = useState<boolean>(false);
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const [showCommentView, setShowCommentView] = useState<boolean>(false);
  const [showCreateView, setShowCreateView] = useState<boolean>(false);
  const [draftedComment, setDraftedComment] = useState<Comment | null>(null);
  const [showPagebloxButton, setShowPagebloxButton] = useState<boolean>(true);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [showInstructionsPopup, setShowInstructionsPopup] =
    useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const currDom = useRef<HTMLElement | null>(null);
  const pageRef = useRef(null);
  const currentPathName =
    typeof window !== "undefined" ? window.location.pathname : "";

  const checkExcludedPaths = () => {
    if (pagebloxProvider.excludePaths) {
      const shouldExcludePage =
        pagebloxProvider?.excludePaths.includes(currentPathName);
      setShowPagebloxButton(!shouldExcludePage);
    }
  };

  const fetchDisplayName = () => {
    const currUserInfo = localStorage.getItem("pagebloxUserInfo");

    setDisplayName(currUserInfo ? JSON.parse(currUserInfo).displayName : null);
  };

  const shouldDisplayInstructions = () => {
    if (
      reviewMode &&
      localStorage.getItem("displayedInstructions") !== "true"
    ) {
      setShowInstructionsPopup(true);
      localStorage.setItem("displayedInstructions", "true");
    }
  };

  const moveComment = useCallback(
    async (id: string, left: number, top: number, domElement: HTMLElement) => {
      await updateDoc(doc(database, COMMENTS_COLLECTION, id), {
        dom: getPathTo(domElement),
        x: left,
        y: top,
      });
    },
    [blocks, setBlocks]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.COMMENT,
      drop(item: any, monitor) {
        const delta: XYCoord | null = monitor.getDifferenceFromInitialOffset();
        const windowCoords: XYCoord | null = monitor.getClientOffset();

        const initialElement: HTMLElement = item.domElement;

        console.log("Initial Element: ", initialElement);

        const finalElement: HTMLElement | null =
          windowCoords &&
          (document.elementFromPoint(
            windowCoords?.x,
            windowCoords?.y
          ) as HTMLElement);

        let finalDomElement: HTMLElement;

        if (finalElement?.tagName === "IMG") {
          finalDomElement = finalElement?.parentNode as HTMLElement;
        } else {
          finalDomElement = finalElement as HTMLElement;
        }

        if (finalDomElement) {
          if (currDom.current && finalDomElement === currDom.current) {
            currDom.current.style.backgroundColor = "";
            currDom.current = null;
          }

          const initialWindowCoords = {
            x: initialElement.getBoundingClientRect().left + item.x,
            y: initialElement.getBoundingClientRect().top + item.y,
          };

          const finalWindowCoords = {
            x: Math.round(initialWindowCoords.x + delta?.x),
            y: Math.round(initialWindowCoords.y + delta?.y),
          };

          const finalX =
            finalWindowCoords.x - finalDomElement.getBoundingClientRect().left;
          const finalY =
            finalWindowCoords.y - finalDomElement.getBoundingClientRect().top;

          moveComment(item.id, finalX, finalY, finalDomElement);
        }
      },
      hover(item, monitor) {
        const windowCoords: XYCoord | null = monitor.getClientOffset();

        if (windowCoords) {
          const domElement = document.elementFromPoint(
            windowCoords?.x,
            windowCoords?.y
          ) as HTMLElement;

          if (currDom.current !== domElement) {
            if (currDom.current) {
              currDom.current.style.backgroundColor = "";
              domElement.style.backgroundColor = "rgba(59, 130, 246, 0.5)";
              currDom.current = domElement;
            } else {
              currDom.current = domElement;
              currDom.current.style.backgroundColor = "rgba(59, 130, 246, 0.5)";
            }
          }
        }
      },
    }),
    [moveComment]
  );

  const saveReply = async (id: string, message: string) => {
    await addDoc(collection(database, REPLIES_COLLECTION), {
      id: uuid(),
      author: displayName,
      profileColor: randomColor,
      message: message,
      parent_comment_id: id,
      timestamp: new Date(),
    });
  };

  const onSaveComment = async (comment: string, file?: File | null) => {
    let uploadedFilePath: string = "";

    if (file) {
      const storageRef = ref(storage, `attachments/${file.name}`);

      await uploadBytes(storageRef, file);
      uploadedFilePath = `attachments/${file.name}`;
    }

    if (draftedComment && typeof window !== undefined) {
      setShowCreateView(false);

      let savedComment: Comment = {
        ...draftedComment,
        ...{ comment: comment },
        ...(uploadedFilePath.length > 0 && {
          uploadedFilePath: uploadedFilePath,
        }),
      };

      await setDoc(
        doc(database, COMMENTS_COLLECTION, savedComment.id),
        savedComment
      );
      setDraftedComment(null);
    }
  };

  const deleteComment = async (id: string) => {
    await deleteDoc(doc(database, COMMENTS_COLLECTION, id));

    const replyQuery = query(
      collection(database, REPLIES_COLLECTION),
      where("parent_comment_id", "==", id)
    );
    const querySnapshot = await getDocs(replyQuery);

    querySnapshot.forEach(async (document) => {
      await deleteDoc(doc(database, REPLIES_COLLECTION, document.id));
    });

    setSelectedComment(null);
  };

  const createComment = (event: any) => {
    let domElement;

    if (event.target.tagName === "IMG") {
      domElement = event.target.parentElement;
    } else {
      domElement = event.target;
    }

    const boundingClientRect = domElement.getBoundingClientRect();

    if (boundingClientRect !== null && displayName) {
      const [scrollTop, scrollLeft] = calculateScroll(domElement);
      const x = event.pageX - (boundingClientRect.left + scrollLeft);
      const y = event.pageY - (boundingClientRect.top + scrollTop);

      const newComment = {
        id: uuid(),
        timestamp: new Date(),
        profileColor: randomColor,
        profileName: displayName,
        comment: "",
        resolved: false,
        dom: getPathTo(domElement),
        projectId: pagebloxProvider.projectKey,
        pathname: window.location.pathname,
        x: x,
        y: y,
      };

      toggleCreateModal(true, newComment);
    }
  };

  const onPagebloxClick = (event: any) => {
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();
  };

  const fetchRepliesForComment = (commentID: string) => {
    return replies.filter((reply) => reply.parent_comment_id === commentID);
  };

  const onResolveChange = async (commentID: string, shouldResolve: boolean) => {
    await updateDoc(doc(database, COMMENTS_COLLECTION, commentID), {
      resolved: shouldResolve,
    });

    setSelectedComment(null);
    setShowCommentView(false);
  };

  const handleShowComment = (id: string) => {
    const comment = blocks.filter((block) => block.id === id)[0];

    setSelectedComment(comment);
    setShowCommentView(true);
  };

  const onWidgetClick = () => {
    if (displayName) {
      setReviewMode(!reviewMode);
    } else {
      setShowLoginModal(true);
    }
  };

  const toggleCreateModal = (
    shouldShowModal: boolean,
    newComment?: Comment | null
  ) => {
    if (shouldShowModal && newComment) {
      setShowCreateView(true);
      setDraftedComment(newComment);
    } else {
      setShowCreateView(false);
      setDraftedComment(null);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const unsubscribeComments = onSnapshot(
        query(
          collection(database, COMMENTS_COLLECTION),
          where("pathname", "==", window.location.pathname),
          where("projectId", "==", pagebloxProvider.projectKey)
        ),
        (querySnapshot) => {
          console.log("Fetching comments...");
          const blocks: Comment[] = [];

          querySnapshot.forEach((doc) => {
            blocks.push(Object.assign({ id: doc.id }, doc.data()) as Comment);
          });

          setBlocks(blocks);
        }
      );

      return () => {
        unsubscribeComments();
      };
    }
  }, [window.location.pathname, pagebloxProvider.projectKey]);

  useEffect(() => {
    if (typeof window !== "undefined" && blocks.length > 0) {
      const unsubscribeReplies = onSnapshot(
        query(
          collection(database, REPLIES_COLLECTION),
          where(
            "parent_comment_id",
            "in",
            blocks.map((block) => block.id.toString())
          )
        ),
        (querySnapshot) => {
          const replies: Reply[] = [];

          querySnapshot.forEach((doc) => {
            replies.push(doc.data() as Reply);
          });

          setReplies(replies);
        }
      );

      return () => {
        unsubscribeReplies();
      };
    }
  }, [blocks]);

  useEffect(() => {
    shouldDisplayInstructions();
  }, [reviewMode]);

  useEffect(() => {
    checkExcludedPaths();
    fetchDisplayName();
  }, []);

  if (pagebloxProvider.enabled) {
    return (
      <>
        <LoginModal
          showModal={showLoginModal}
          setShowModal={setShowLoginModal}
          setReviewMode={setReviewMode}
          setDisplayName={setDisplayName}
        />
        {reviewMode ? (
          <>
            <InstructionsPopup
              showInstructionsPopup={showInstructionsPopup}
              setShowInstructionsPopup={setShowInstructionsPopup}
            />
            <Toolbar
              showCommentView={showCommentView}
              setShowCommentView={setShowCommentView}
              pageRef={pageRef}
              comments={blocks}
              replies={replies}
              deleteComment={deleteComment}
              fetchReplies={fetchRepliesForComment}
              saveReply={saveReply}
              onResolveChange={onResolveChange}
              selectedComment={selectedComment}
              setSelectedComment={setSelectedComment}
              setDisplayName={setDisplayName}
              setReviewMode={setReviewMode}
            />
            <div ref={pageRef} className="tw-pt-20">
              <div
                id="pageblox-surface"
                ref={drop}
                style={{ position: "relative", cursor: "pointer" }}
              >
                <CommentBlocks
                  blocks={blocks}
                  handleShowComment={handleShowComment}
                  pageRef={pageRef}
                  selectedComment={selectedComment}
                  setSelectedComment={setSelectedComment}
                  setShowCommentView={setShowCommentView}
                />
                <div
                  onDoubleClickCapture={createComment}
                  onClickCapture={onPagebloxClick}
                >
                  {pagebloxProvider.children}
                </div>
                {draftedComment && (
                  <CreateCommentModal
                    showCreateView={showCreateView}
                    toggleCreateModal={toggleCreateModal}
                    authorName={draftedComment.profileName}
                    authorColor={draftedComment.profileColor}
                    onSaveComment={onSaveComment}
                  />
                )}
                <EnabledPagebloxButton
                  shouldDisplay={showPagebloxButton}
                  reviewMode={reviewMode}
                  onWidgetClick={onWidgetClick}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {pagebloxProvider.children}
            <EnabledPagebloxButton
              shouldDisplay={showPagebloxButton}
              reviewMode={reviewMode}
              onWidgetClick={onWidgetClick}
            />
          </>
        )}
      </>
    );
  } else {
    return <>{pagebloxProvider.children}</>;
  }
};

const PagebloxProvider = (pagebloxProvider: PagebloxProviderInterface) => (
  <DndProvider backend={HTML5Backend}>
    <PagebloxDndProvider
      projectKey={pagebloxProvider.projectKey}
      excludePaths={pagebloxProvider.excludePaths}
      enabled={pagebloxProvider.enabled}
    >
      {pagebloxProvider.children}
    </PagebloxDndProvider>
  </DndProvider>
);

export { PagebloxProvider };
