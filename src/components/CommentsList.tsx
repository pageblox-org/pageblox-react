import React, { RefObject } from "react";
import { format } from "date-fns";
import { useOutsideClick } from "../utils/hooks";
import { Comment, Reply } from "../pageblox";

interface CommentsListProps {
  pageRef: RefObject<HTMLElement>;
  showComments: boolean;
  setShowComments: (showComments: boolean) => void;
  comments: Comment[];
  replies: Reply[];
  navigateToComment: (commentId: string | null) => void;
}

const CommentsList = ({
  pageRef,
  showComments,
  setShowComments,
  comments,
  replies,
  navigateToComment,
}: CommentsListProps) => {
  const ref = useOutsideClick(() => {
    setShowComments(false);
  }, pageRef);

  const sortedComments = comments.sort((comment1, comment2) => {
    if (comment1.timestamp > comment2.timestamp) {
      return 1;
    } else {
      return -1;
    }
  });

  const handleItemClick = (commentID: string) => {
    navigateToComment(commentID);
    setShowComments(false);
  };

  return (
    <div
      ref={ref}
      style={{ zIndex: 9000 }}
      className={`tw-top-0 tw-right-0 tw-w-[25vw] tw-overflow-y-auto tw-bg-gray-900 tw-text-white tw-fixed tw-h-full tw-ease-in-out tw-duration-300 ${
        showComments ? "tw-translate-x-0" : "tw-translate-x-full"
      }`}
    >
      {sortedComments.length > 0 && (
        <ul className="tw-bg-gray-900 tw-divide-y tw-divide-gray-700 tw-mt-16 tw-overflow-y-auto">
          {sortedComments.map((comment) => {
            const commentReplies = replies.filter(
              (reply) => reply.parent_comment_id === comment.id
            );
            return (
              <li
                key={comment.id}
                className="tw-p-5 hover:tw-bg-gray-800"
                onClick={() => handleItemClick(comment.id)}
              >
                <div className="tw-flex tw-flex-col tw-text-sm hover:tw-bg-gray-800">
                  {comment.timestamp.nanoseconds !== undefined && (
                    <span className="text-gray-400 tw-self-end">
                      {format(comment.timestamp.toDate(), "MMM dd hh:mm a")}
                    </span>
                  )}
                  <div className="tw-flex tw-items-center">
                    <span
                      className="tw-h-4 tw-w-4 tw-inline-block"
                      style={{
                        borderRadius: "50%",
                        background: comment.profileColor,
                      }}
                    ></span>
                    <span className="tw-text-white tw-truncate tw-ml-2">
                      {comment.profileName}
                    </span>
                    {comment.resolved && (
                      <span className="tw-ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-check"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
                <p className="tw-mt-2">{comment.comment}</p>
                <div className="tw-mt-2 tw-flex tw-justify-end tw-items-center tw-text-sm tw-gap-2">
                  {commentReplies.length > 0 && (
                    <p className="tw-text-gray-100">{`${
                      commentReplies.length
                    } ${commentReplies.length === 1 ? "reply" : "replies"}`}</p>
                  )}
                  {comment.uploadedFilePath && (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#cbd5e1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-image"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CommentsList;
