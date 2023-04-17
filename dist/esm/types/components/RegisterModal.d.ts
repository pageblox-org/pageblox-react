/// <reference types="react" />
interface RegisterModalInterface {
    showRegisterModal: boolean;
    setShowRegisterModal: (shouldShow: boolean) => void;
    handleRegisterUser: (name: string, email: string, password: string) => void;
}
declare const RegisterModal: ({ showRegisterModal, setShowRegisterModal, handleRegisterUser, }: RegisterModalInterface) => JSX.Element;
export default RegisterModal;
