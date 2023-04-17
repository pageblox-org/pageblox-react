import { RefObject } from "react";
import { Comment, Reply } from "../pageblox";
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
declare const CommentDisplay: ({ pageRef, selectedComment, setSelectedComment, deleteComment, fetchReplies, saveReply, onResolveChange, setShowCommentView, }: CommentDisplayProps) => JSX.Element;
export default CommentDisplay;
