import { RefObject } from "react";
import { Comment } from "../pageblox";
interface PublishedCommentProps {
    block: Comment;
    pageRef: RefObject<HTMLElement>;
    setSelectedComment: (comment: Comment | null) => void;
    showReplies: (id: string) => void;
    shouldHideLabel?: boolean;
    isSelectedComment?: boolean;
    setShowCommentView: (showCommentView: boolean) => void;
}
export declare const PublishedComment: ({ block, pageRef, setSelectedComment, showReplies, shouldHideLabel, isSelectedComment, setShowCommentView, }: PublishedCommentProps) => JSX.Element;
export {};
