/// <reference types="react" />
interface LoginModalInterface {
    showLoginModal: boolean;
    setShowLoginModal: (shouldShow: boolean) => void;
    createUser: (name: string) => void;
}
declare const LoginModal: ({ showLoginModal, setShowLoginModal, createUser, }: LoginModalInterface) => JSX.Element;
export default LoginModal;
