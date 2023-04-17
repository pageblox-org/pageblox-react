import { RefObject } from "react";
import { Comment } from "../pageblox";
export interface CommentBlocksProps {
    blocks: Comment[];
    handleShowComment: (id: string) => void;
    pageRef: RefObject<HTMLElement>;
    selectedComment: Comment | null;
    setSelectedComment: (comment: Comment | null) => void;
    setShowCommentView: (showCommentView: boolean) => void;
}
declare const CommentBlocks: ({ blocks, handleShowComment, pageRef, selectedComment, setSelectedComment, setShowCommentView, }: CommentBlocksProps) => JSX.Element;
export default CommentBlocks;
