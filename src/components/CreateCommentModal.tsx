import React, { useEffect, useRef, useState } from "react";

interface CreateCommentModalInterface {
  showCreateView: boolean;
  toggleCreateModal: (shouldShow: boolean) => void;
  authorName: string;
  authorColor: string;
  onSaveComment: (comment: string, file?: File | null) => void;
}

const CreateCommentModal = ({
  showCreateView,
  toggleCreateModal,
  authorName,
  authorColor,
  onSaveComment,
}: CreateCommentModalInterface) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const attachmentInputRef = useRef<HTMLInputElement>(null);
  const [commentInput, setCommentInput] = useState<string>("");
  const [isHoveringImage, setIsHoveringImage] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileDataUrl, setFileDataUrl] = useState<string | ArrayBuffer | null>(
    null
  );

  const onCreate = () => {
    onSaveComment(commentInput, file);
  };

  const onClose = () => {
    toggleCreateModal(false);
  };

  const onFocus = () => {
    inputRef.current?.focus();
  };

  const onTextAreaKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey && commentInput.length > 0) {
      onSaveComment(commentInput);
    }
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    const clipboardItem = event.clipboardData.items[0];

    if (clipboardItem.type.indexOf("image") === 0) {
      const file: File | null = clipboardItem.getAsFile();

      if (file) {
        let fileReader = new FileReader();
        fileReader.onload = (event) => {
          const result = event.target?.result;
          if (result) {
            setFileDataUrl(result);
          }
        };

        setFile(file);
        fileReader.readAsDataURL(file);
      }
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    setFile(event.target.files[0]);
  };

  const handleMouseOverImage = () => {
    setIsHoveringImage(true);
  };

  const handleMouseOutImage = () => {
    setIsHoveringImage(false);
  };

  const handleDeleteAttachment = () => {
    setFile(null);
    setFileDataUrl(null);
  };

  useEffect(() => {
    if (inputRef.current !== null) {
      onFocus();
    }
  }, [inputRef]);

  useEffect(() => {
    let fileReader: FileReader;
    let isCancel = false;

    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (event) => {
        const result = event.target?.result;
        if (result && !isCancel) {
          setFileDataUrl(result);
        }
      };

      fileReader.readAsDataURL(file);
    }

    return () => {
      isCancel = true;

      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <div
      className={`${
        showCreateView ? "tw-block" : "tw-hidden"
      } tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-w-full tw-p-4 tw-overflow-x-hidden tw-overflow-y-auto md:tw-inset-0 tw-h-[calc(100%-1rem)] md:tw-h-full`}
      style={{ zIndex: 200 }}
      onClick={onClose}
    >
      <div className="tw-relative tw-w-full tw-h-full tw-max-w-lg md:tw-h-auto">
        <div
          className="tw-relative tw-rounded-lg tw-shadow tw-bg-gray-800 tw-overflow-hidden tw-p-2"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div className="tw-flex tw-items-center tw-gap-2 tw-my-2 tw-ml-2">
            <span
              className="tw-h-6 tw-w-6 tw-inline-block"
              style={{ borderRadius: "50%", background: authorColor }}
            ></span>
            <h3 className="tw-font-semibold tw-lowercase">{authorName}</h3>
          </div>
          <div className="tw-mt-2 tw-py-2 tw-px-4 tw-rounded-t-lg tw-space-y-2 tw-overflow-y-auto tw-h-40">
            <textarea
              ref={inputRef}
              placeholder="Add Comment"
              className="tw-w-full tw-px-0 tw-text-sm tw-resize-none tw-h-28 tw-overflow-hidden tw-text-gray-300 tw-outline-none tw-bg-inherit"
              value={commentInput}
              onKeyDown={onTextAreaKeyDown}
              onChange={(e) => setCommentInput(e.target.value)}
              onPaste={handlePaste}
            ></textarea>
            {fileDataUrl && (
              <div
                className="tw-relative tw-my-2"
                style={{ width: 300 }}
                onMouseOver={handleMouseOverImage}
                onMouseOut={handleMouseOutImage}
              >
                <button
                  className={`${
                    isHoveringImage ? "tw-block" : "tw-hidden"
                  } tw-absolute tw-top-2 tw-right-2 tw-rounded-lg tw-p-2.5 tw-inline-flex tw-bg-gray-700 hover:tw-bg-gray-900 tw-justify-center tw-items-center`}
                  onClick={handleDeleteAttachment}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-trash"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
                <img
                  src={fileDataUrl as string}
                  alt="Comment Attachment"
                  className="tw-w-full tw-h-full tw-object-contain"
                />
              </div>
            )}
          </div>
          <div className="tw-flex tw-justify-between tw-items-center tw-gap-2 tw-mt-2">
            <div
              className="tw-tooltip tw-tooltip-right"
              data-tip="Attach an image or video."
            >
              <input
                type="file"
                ref={attachmentInputRef}
                onChange={handleFileChange}
                className="tw-hidden"
                accept="image/*"
              />
              <button
                className="tw-rounded-lg tw-p-2.5 tw-inline-flex tw-items-center tw-bg-inherit hover:tw-bg-gray-700"
                onClick={() => attachmentInputRef.current?.click()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#cbd5e1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-paperclip"
                >
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                </svg>
              </button>
            </div>
            <div>
              <button
                className="tw-bg-blue-600 hover:tw-bg-blue-700 tw-mr-2 tw-mb-2 tw-py-2.5 tw-px-5 tw-text-sm tw-rounded-lg tw-font-medium tw-text-white"
                disabled={commentInput.length === 0}
                onClick={onCreate}
              >
                Create
              </button>
              <button
                className="tw-text-white tw-bg-gray-700 hover:tw-bg-gray-600 tw-mb-2 tw-mr-2 tw-py-2.5 tw-px-5 tw-text-sm tw-rounded-lg tw-font-medium"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCommentModal;
