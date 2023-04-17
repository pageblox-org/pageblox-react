import React, { RefObject, useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { useOutsideClick } from "../utils/hooks";
import { Comment, Reply } from "../pageblox";
import { storage } from "../utils/firebase-config";
import { getDownloadURL, ref } from "firebase/storage";

interface CommentDisplayProps {
  pageRef: RefObject<HTMLElement>;
  selectedComment: Comment | null;
  setSelectedComment: (comment: Comment | null) => void;
  deleteComment: (id: string) => void;
  fetchReplies: (id: string) => Reply[];
  saveReply: (commentId: string, message: string) => void;
  onResolveChange: (commentID: string, shouldResolve: boolean) => void;
  setShowCommentView: (showCommentView: boolean) => void;
}

interface CommentSectionProps {
  selectedComment: Comment;
  screenshotUrl?: string;
}

interface ReplySectionProps {
  replies: Reply[];
  inputRef: RefObject<HTMLTextAreaElement>;
  newReply: string;
  setNewReply: (newReply: string) => void;
  handleReply: (event: React.KeyboardEvent) => void;
}

interface ButtonsProps {
  selectedComment: Comment;
  onResolveChange: (commentID: string, shouldResolve: boolean) => void;
  deleteComment: (id: string) => void;
}

const CommentSection = ({
  selectedComment,
  screenshotUrl,
}: CommentSectionProps) => (
  <div className="tw-flex tw-flex-col tw-gap-2 tw-p-5">
    <div className="tw-flex tw-flex-col tw-w-full">
      {selectedComment.timestamp !== undefined && (
        <span className="tw-text-sm tw-text-gray-400 tw-ml-5 tw-self-end">
          {format(selectedComment.timestamp.toDate(), "MMM dd hh:mm a")}
        </span>
      )}
      <div className="tw-flex tw-items-center">
        <span
          className="tw-h-4 tw-w-4 tw-inline-block"
          style={{
            borderRadius: "50%",
            background: selectedComment.profileColor,
          }}
        ></span>
        <span className="tw-text-white tw-ml-2">{`${selectedComment.profileName}`}</span>
      </div>
    </div>
    <p className="tw-text-gray-300 tw-m-3">{selectedComment.comment}</p>
    {screenshotUrl && (
      <div className="tw-my-2 tw-py-2">
        <img
          src={screenshotUrl}
          alt="Comment Attachment"
          className="tw-h-full tw-object-contain"
          width={300}
        />
      </div>
    )}
    <div className="tw-bg-gray-700" style={{ height: "1px" }}></div>
  </div>
);

const ReplySection = ({
  replies,
  inputRef,
  newReply,
  setNewReply,
  handleReply,
}: ReplySectionProps) => {
  const sortedReplies = replies.sort((reply1, reply2) => {
    if (reply1.timestamp > reply2.timestamp) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-text-sm tw-px-3">
      <div className="tw-overflow-y-auto tw-w-full">
        {sortedReplies.length > 0 &&
          sortedReplies.map((reply) => {
            return (
              <div
                className="tw-flex tw-flex-col tw-gap-2 tw-px-5 tw-py-3 tw-ml-5"
                key={reply.id}
              >
                <div className="tw-flex tw-items-center tw-justify-between">
                  <div>
                    <span
                      className="tw-h-3 tw-w-3 tw-inline-block"
                      style={{
                        borderRadius: "50%",
                        backgroundColor: reply.profileColor,
                      }}
                    ></span>
                    <span className="tw-text-white tw-ml-2">{`${reply.author}`}</span>
                  </div>
                  {reply.timestamp !== undefined && (
                    <span className="tw-text-gray-400 tw-ml-5">
                      {format(reply.timestamp.toDate(), "MMM dd hh:mm a")}
                    </span>
                  )}
                </div>
                <p className="tw-text-gray-300 tw-m-3">{reply.message}</p>
              </div>
            );
          })}
      </div>
      <textarea
        ref={inputRef}
        value={newReply}
        onChange={(e) => setNewReply(e.target.value)}
        onKeyDown={handleReply}
        id="message"
        rows={2}
        className="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-rounded-lg tw-border tw-bg-gray-700 tw-border-gray-600 tw-placeholder-gray-400 tw-text-white"
        placeholder="Add a reply"
      ></textarea>
    </div>
  );
};

const Buttons = ({
  selectedComment,
  onResolveChange,
  deleteComment,
}: ButtonsProps) => {
  const onDeleteClick = (event: any) => {
    deleteComment(selectedComment.id);
  };

  return (
    <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-gap-2 tw-mt-3 tw-p-2 tw-mx-2">
      {selectedComment?.resolved ? (
        <button
          className="tw-px-3 tw-py-2 tw-text-sm tw-font-medium  tw-bg-yellow-700 tw-white hover:tw-bg-yellow-800 tw-rounded-lg"
          onClick={() => {
            onResolveChange(selectedComment.id, false);
          }}
        >
          Unresolve
        </button>
      ) : (
        <button
          className="tw-px-3 tw-py-2 tw-text-sm tw-font-medium  tw-bg-green-700 tw-white hover:tw-bg-green-800 tw-rounded-lg"
          onClick={() => {
            onResolveChange(selectedComment.id, true);
          }}
        >
          Resolve
        </button>
      )}
      <button
        className="tw-px-3 tw-py-2 tw-text-sm tw-font-medium  tw-bg-red-700 tw-white hover:tw-bg-red-800 tw-rounded-lg"
        onClick={onDeleteClick}
      >
        Delete
      </button>
    </div>
  );
};

const CommentDisplay = ({
  pageRef,
  selectedComment,
  setSelectedComment,
  deleteComment,
  fetchReplies,
  saveReply,
  onResolveChange,
  setShowCommentView,
}: CommentDisplayProps) => {
  const [newReply, setNewReply] = useState("");
  const [screenshotUrl, setScreenshotUrl] = useState("");
  const inputRef = useRef(
    null
  ) as React.MutableRefObject<HTMLTextAreaElement | null>;

  const replies: Reply[] = selectedComment
    ? fetchReplies(selectedComment?.id)
    : [];

  const handleReply = (event: React.KeyboardEvent) => {
    if (selectedComment && newReply.length > 0 && event.key === "Enter") {
      saveReply(selectedComment.id, newReply);
      setNewReply("");
      inputRef.current?.blur();
    }
  };

  const modalRef = useOutsideClick(() => {
    setSelectedComment(null);
    setShowCommentView(false);
  }, pageRef);

  const fetchScreenshotIfExists = async () => {
    if (selectedComment?.uploadedFilePath) {
      const filePathRef = ref(storage, selectedComment.uploadedFilePath);

      try {
        const url = await getDownloadURL(filePathRef);
        setScreenshotUrl(url);
      } catch (error) {
        console.log("An error occurred fetching screenshots", error);
      }
    }
  };

  useEffect(() => {
    fetchScreenshotIfExists();
  }, [selectedComment?.uploadedFilePath]);

  return (
    <>
      <div
        ref={modalRef}
        style={{ zIndex: "1000" }}
        className={`tw-top-0 tw-right-0 tw-w-[25vw] tw-overflow-y-auto tw-bg-gray-900 tw-text-white tw-fixed tw-h-full tw-ease-in-out tw-duration-300 ${
          selectedComment !== null ? "tw-translate-x-0" : "tw-translate-x-full"
        }`}
      >
        {selectedComment && (
          <Buttons
            selectedComment={selectedComment}
            onResolveChange={onResolveChange}
            deleteComment={deleteComment}
          />
        )}
        {selectedComment && (
          <CommentSection
            selectedComment={selectedComment}
            screenshotUrl={screenshotUrl}
          />
        )}
        <ReplySection
          replies={replies}
          inputRef={inputRef}
          newReply={newReply}
          setNewReply={setNewReply}
          handleReply={handleReply}
        />
      </div>
    </>
  );
};

export default CommentDisplay;
