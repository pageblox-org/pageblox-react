import { RefObject } from "react";
import { Comment, Reply } from "../pageblox";
interface CommentsListProps {
    pageRef: RefObject<HTMLElement>;
    showComments: boolean;
    setShowComments: (showComments: boolean) => void;
    comments: Comment[];
    replies: Reply[];
    navigateToComment: (commentId: string | null) => void;
}
declare const CommentsList: ({ pageRef, showComments, setShowComments, comments, replies, navigateToComment, }: CommentsListProps) => JSX.Element;
export default CommentsList;
