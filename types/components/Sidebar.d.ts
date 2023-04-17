import { RefObject } from "react";
import { Comment, Reply } from "../pageblox";
interface SidebarProps {
    reviewMode: boolean;
    pageRef: RefObject<HTMLElement>;
    comments: Comment[];
    replies: Reply[];
    deleteComment: (id: string) => void;
    fetchReplies: (id: string) => Reply[];
    saveReply: (commentId: string, message: string) => void;
    onResolveChange: (commentID: string, shouldResolve: boolean) => void;
    selectedComment: Comment | null;
    setSelectedComment: (comment: Comment | null) => void;
}
declare const Sidebar: ({ reviewMode, pageRef, comments, replies, deleteComment, fetchReplies, saveReply, onResolveChange, selectedComment, setSelectedComment }: SidebarProps) => JSX.Element;
export default Sidebar;
