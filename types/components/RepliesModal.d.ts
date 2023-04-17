/// <reference types="react" />
import { Comment, Reply } from "../pageblox";
interface RepliesModalProps {
    selectedComment: Comment;
    setSelectedComment: (comment: Comment | null) => void;
    fetchReplies: (id: string) => Reply[];
    saveReply: (commentId: string, message: string) => void;
    onResolveChange: (commentID: string, shouldResolve: boolean) => void;
}
declare const RepliesModal: ({ selectedComment, setSelectedComment, fetchReplies, saveReply, onResolveChange }: RepliesModalProps) => JSX.Element;
export default RepliesModal;
