import React, { RefObject, useState } from "react";
import { Comment, Reply } from "../pageblox";
import CommentsList from "./CommentsList";
import CommentDisplay from "./CommentDisplay";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase-config";

interface SidebarButtonsProps {
  setShowComments: (show: boolean) => void;
  comments: Comment[];
  setDisplayName: (name: string | null) => void;
  setReviewMode: (reviewMode: boolean) => void;
}

interface ToolbarProps {
  showCommentView: boolean;
  setShowCommentView: (showCommentView: boolean) => void;
  pageRef: RefObject<HTMLElement>;
  comments: Comment[];
  replies: Reply[];
  deleteComment: (id: string) => void;
  fetchReplies: (id: string) => Reply[];
  saveReply: (commentId: string, message: string) => void;
  onResolveChange: (commentID: string, shouldResolve: boolean) => void;
  selectedComment: Comment | null;
  setSelectedComment: (comment: Comment | null) => void;
  setDisplayName: (name: string | null) => void;
  setReviewMode: (reviewMode: boolean) => void;
}

const SidebarButtons = ({
  setShowComments,
  comments,
  setDisplayName,
  setReviewMode,
}: SidebarButtonsProps) => {
  const onSignout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("pagebloxUserInfo");

      setDisplayName(null);
      setReviewMode(false);
    } catch (error) {
      alert(`Error signing out: ${error}`);
    }
  };

  return (
    <div className="tw-right-7 tw-top-5 tw-z-50 tw-fixed tw-flex tw-items-center tw-gap-5">
      <button
        className="tw-border focus:tw-outline-none focus:tw-ring-4 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-tw-mr-2 tw-bg-gray-800 tw-text-white tw-border-gray-600 hover:tw-bg-gray-700 hover:tw-border-gray-600 focus:tw-ring-gray-700"
        onClick={() => onSignout()}
      >
        Sign out
      </button>
      <button
        type="button"
        className="tw-relative tw-bg-gray-700 hover:tw-bg-gray-600 tw-rounded-full tw-p-2.5 tw-inline-flex tw-items-center"
        onClick={() => setShowComments(true)}
      >
        <svg
          className="feather feather-message-square"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        {comments.length > 0 && (
          <div className="tw-absolute tw-inline-flex tw-items-center tw-justify-center tw-w-6 tw-h-6 tw-text-xs tw-font-bold tw-text-white tw-bg-indigo-700 tw-border-2 tw-rounded-full -tw-top-2 -tw-right-2 tw-border-gray-900">
            {comments.length}
          </div>
        )}
      </button>
    </div>
  );
};

const Toolbar = ({
  showCommentView,
  setShowCommentView,
  pageRef,
  comments,
  replies,
  deleteComment,
  fetchReplies,
  saveReply,
  onResolveChange,
  selectedComment,
  setSelectedComment,
  setDisplayName,
  setReviewMode,
}: ToolbarProps): JSX.Element => {
  const [showComments, setShowComments] = useState(false);

  const onClose = () => {
    setShowComments(false);
    setShowCommentView(false);
    setSelectedComment(null);
  };

  const navigateToComment = (commentId: string | null) => {
    if (commentId) {
      const selectedComment = comments.filter(
        (comment) => comment.id === commentId
      )[0];
      setSelectedComment(selectedComment);

      if (!selectedComment.resolved) {
        const element = document.getElementById(commentId);

        if (element) {
          const y = element?.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }

      setShowCommentView(true);
    }
  };

  return (
    <div
      className="tw-pageblox tw-w-full tw-flex tw-items-center tw-justify-start tw-p-5 tw-fixed tw-left-0 tw-top-0 tw-h-20 tw-bg-gray-900"
      style={{ zIndex: 9000 }}
    >
      {showComments || showCommentView ? (
        <button
          type="button"
          style={{ zIndex: 9050 }}
          className="tw-fixed tw-right-7 tw-top-5 tw-py-2 tw-px-3 tw-text-sm tw-font-medium tw-border tw-border-gray-600 tw-bg-gray-800 tw-text-gray-400 hover:tw-text-white hover:tw-bg-gray-700 tw-rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      ) : (
        <div className="tw-flex tw-items-end">
          <SidebarButtons
            setShowComments={setShowComments}
            comments={comments}
            setDisplayName={setDisplayName}
            setReviewMode={setReviewMode}
          />
        </div>
      )}
      <CommentsList
        pageRef={pageRef}
        showComments={showComments}
        setShowComments={setShowComments}
        comments={comments}
        replies={replies}
        navigateToComment={navigateToComment}
      />
      {showCommentView && (
        <CommentDisplay
          pageRef={pageRef}
          selectedComment={selectedComment}
          setSelectedComment={setSelectedComment}
          deleteComment={deleteComment}
          fetchReplies={fetchReplies}
          saveReply={saveReply}
          onResolveChange={onResolveChange}
          setShowCommentView={setShowCommentView}
        />
      )}
    </div>
  );
};

export default Toolbar;
