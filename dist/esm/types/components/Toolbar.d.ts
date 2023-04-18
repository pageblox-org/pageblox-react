import { RefObject } from "react";
import { Comment, Reply } from "../pageblox";
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
declare const Toolbar: ({ showCommentView, setShowCommentView, pageRef, comments, replies, deleteComment, fetchReplies, saveReply, onResolveChange, selectedComment, setSelectedComment, setDisplayName, setReviewMode, }: ToolbarProps) => JSX.Element;
export default Toolbar;
