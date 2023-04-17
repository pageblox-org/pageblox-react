import React, { useState } from "react";

interface RegisterModalInterface {
  showRegisterModal: boolean;
  setShowRegisterModal: (shouldShow: boolean) => void;
  handleRegisterUser: (name: string, email: string, password: string) => void;
}

const RegisterModal = ({
  showRegisterModal,
  setShowRegisterModal,
  handleRegisterUser,
}: RegisterModalInterface) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onModalClose = () => {
    setShowRegisterModal(false);
  };

  const onRegisterUser = () => {
    handleRegisterUser(name, email, password);
  };

  return (
    <div
      className={` ${
        showRegisterModal ? "tw-block" : "tw-hidden"
      } tw-fixed tw-inset-0 tw-z-50 tw-overflow-auto tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center`}
    >
      <div className="tw-bg-slate-100 tw-w-96 tw-py-4 tw-px-4 tw-rounded">
        <div className="tw-flex tw-justify-end">
          <button className="tw-text-slate-700" onClick={onModalClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        {/* Modal content */}
        <h3 className="tw-text-xl tw-font-medium tw-text-gray-900 tw-mb-4">
          Create a user
        </h3>
        <div className="tw-space-y-6">
          <div>
            <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">
              Your e-mail
            </label>
            <input
              type="email"
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5"
              placeholder="name@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">
              Your password
            </label>
            <input
              type="password"
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5"
              placeholder="***********"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div>
            <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">
              Display name
            </label>
            <input
              type="text"
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5"
              placeholder="John Doe"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
        </div>
        {/* Close button */}
        <button
          className="tw-mt-6 tw-w-full tw-capitalize tw-bg-blue-700 hover:tw-bg-blue-800 tw-text-white tw-font-medium tw-rounded-lg tw-py-2.5 tw-px-5 tw-text-sm"
          onClick={onRegisterUser}
        >
          Create user
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
