import React from "react";
interface ImagePreviewModalProps {
    imageURL: string;
    showModal: boolean;
    onClose: (event: React.MouseEvent) => void;
}
declare const ImagePreviewModal: ({ imageURL, showModal, onClose }: ImagePreviewModalProps) => JSX.Element;
export default ImagePreviewModal;
