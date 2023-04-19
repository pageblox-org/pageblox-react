import React from "react";

interface InstructionsPopupProps {
  showInstructionsPopup: boolean;
  setShowInstructionsPopup: (show: boolean) => void;
}

const InstructionsPopup = ({
  showInstructionsPopup,
  setShowInstructionsPopup,
}: InstructionsPopupProps) => (
  <>
    {showInstructionsPopup && (
      <div
        id="popup-modal"
        className="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-p-4 tw-overflow-x-hidden tw-overflow-y-auto md:tw-inset-0 tw-h-[calc(100%-1rem)] tw-max-h-full"
      >
        <div className="tw-relative tw-w-full tw-max-w-md tw-max-h-full">
          <div className="tw-relative tw-bg-white tw-rounded-lg tw-shadow dark:tw-bg-gray-700">
            <button
              type="button"
              className="tw-absolute tw-top-3 tw-right-2.5 tw-text-gray-400 tw-bg-transparent tw-rounded-lg tw-text-sm tw-p-1.5 tw-ml-auto tw-inline-flex tw-items-center hover:tw-bg-gray-800 hover:tw-text-white"
              onClick={() => setShowInstructionsPopup(false)}
              data-modal-hide="popup-modal"
            >
              <svg
                aria-hidden="true"
                className="tw-w-5 tw-h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="tw-sr-only">Close modal</span>
            </button>
            <div className="tw-p-6 tw-text-center">
              <h3 className="tw-mb-5 tw-text-lg tw-font-normal tw-text-gray-400">
                Double click on an element to start a review.
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                onClick={() => setShowInstructionsPopup(false)}
                className="tw-text-white tw-bg-blue-600 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-800 tw-font-medium tw-rounded-lg tw-text-sm tw-inline-flex tw-items-center tw-px-5 tw-py-2.5 tw-text-center tw-mr-2"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);

export default InstructionsPopup;
