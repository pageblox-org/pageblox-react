import React, { RefObject } from "react";
import { Comment } from "../pageblox";
import { PublishedComment } from "./PublishedComment";

export interface CommentBlocksProps {
  blocks: Comment[];
  handleShowComment: (id: string) => void;
  pageRef: RefObject<HTMLElement>;
  selectedComment: Comment | null;
  setSelectedComment: (comment: Comment | null) => void;
  setShowCommentView: (showCommentView: boolean) => void;
}

const CommentBlocks = ({
  blocks,
  handleShowComment,
  pageRef,
  selectedComment,
  setSelectedComment,
  setShowCommentView,
}: CommentBlocksProps): JSX.Element => {
  const selectedCommentExists = selectedComment !== null;

  return (
    <div className="tw-pageblox">
      {blocks.map((block: Comment) => {
        if (block.resolved === false) {
          if (selectedCommentExists) {
            return (
              <PublishedComment
                key={block.id}
                pageRef={pageRef}
                setSelectedComment={setSelectedComment}
                block={block}
                showReplies={handleShowComment}
                shouldHideLabel={selectedComment?.id !== block.id}
                isSelectedComment={selectedComment.id === block.id}
                setShowCommentView={setShowCommentView}
              />
            );
          } else {
            return (
              <PublishedComment
                key={block.id}
                block={block}
                pageRef={pageRef}
                setSelectedComment={setSelectedComment}
                showReplies={handleShowComment}
                setShowCommentView={setShowCommentView}
              />
            );
          }
        }
      })}
    </div>
  );
};

export default CommentBlocks;
