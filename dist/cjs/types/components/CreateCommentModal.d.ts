/// <reference types="react" />
interface CreateCommentModalInterface {
    showCreateView: boolean;
    toggleCreateModal: (shouldShow: boolean) => void;
    authorName: string;
    authorColor: string;
    onSaveComment: (comment: string, file?: File | null) => void;
}
declare const CreateCommentModal: ({ showCreateView, toggleCreateModal, authorName, authorColor, onSaveComment, }: CreateCommentModalInterface) => JSX.Element;
export default CreateCommentModal;
