import { RefObject } from "react";
import { Comment } from "../pageblox";
export interface SavedCoordinates {
    x: number;
    y: number;
}
interface UnpublishedCommentProps {
    block: Comment;
    deleteBlock: (id: string) => {};
    pageRef: RefObject<HTMLElement>;
}
export interface DomElement {
    identifier: string;
    className: string;
    tagName: string;
}
declare const UnpublishedComment: ({ block, deleteBlock, pageRef, }: UnpublishedCommentProps) => JSX.Element;
export default UnpublishedComment;
