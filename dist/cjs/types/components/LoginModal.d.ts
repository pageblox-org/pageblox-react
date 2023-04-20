/// <reference types="react" />
interface LoginModalProps {
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
    setReviewMode: (reviewMode: boolean) => void;
    setDisplayName: (name: string | null) => void;
}
export default function LoginModal({ showModal, setShowModal, setReviewMode, setDisplayName, }: LoginModalProps): JSX.Element | null;
export {};
