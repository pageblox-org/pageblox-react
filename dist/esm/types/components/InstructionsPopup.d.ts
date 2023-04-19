/// <reference types="react" />
interface InstructionsPopupProps {
    showInstructionsPopup: boolean;
    setShowInstructionsPopup: (show: boolean) => void;
}
declare const InstructionsPopup: ({ showInstructionsPopup, setShowInstructionsPopup, }: InstructionsPopupProps) => JSX.Element;
export default InstructionsPopup;
