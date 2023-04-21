import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { FormEvent, useState } from "react";
import { auth, database } from "../utils/firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";

interface LoginModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  setReviewMode: (reviewMode: boolean) => void;
  setDisplayName: (name: string | null) => void;
}

interface LoginFormProps {
  onSignupClick: () => void;
  onClose: () => void;
  onAuthenticate: (userId: string, displayName: string) => void;
}

interface SignupFormProps {
  onLoginClick: () => void;
  onClose: () => void;
  onAuthenticate: (userId: string, displayName: string) => void;
}

export default function LoginModal({
  showModal,
  setShowModal,
  setReviewMode,
  setDisplayName,
}: LoginModalProps) {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const onSignupClick = () => {
    setShowLoginForm(false);
  };

  const onLoginClick = () => {
    setShowLoginForm(true);
  };

  const onAuthenticate = (userId: string, displayName: string) => {
    localStorage.setItem(
      "pagebloxUserInfo",
      JSON.stringify({
        userCredential: userId,
        displayName: displayName,
      })
    );

    onClose();
    setDisplayName(displayName);
    setReviewMode(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  } else {
    if (showLoginForm) {
      return (
        <LoginForm
          onSignupClick={onSignupClick}
          onClose={onClose}
          onAuthenticate={onAuthenticate}
        />
      );
    } else {
      return (
        <SignupForm
          onLoginClick={onLoginClick}
          onClose={onClose}
          onAuthenticate={onAuthenticate}
        />
      );
    }
  }
}

const SignupForm = ({
  onLoginClick,
  onClose,
  onAuthenticate,
}: SignupFormProps) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignup = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setLoading(false);
          const user = userCredential.user;
          if (user) {
            const userId = user.uid;
            setDoc(doc(database, "users", userId), {
              displayName: displayName,
            })
              .then(() => {
                onAuthenticate(userId, displayName);
              })
              .catch((error) => {
                alert("Error writing user to database: " + error);
              });
          }
        })
        .catch((error) => {
          setLoading(false);
          alert("Signup Error: " + error.code + error.message);
        });
    } else {
      setLoading(false);
      alert("Passwords do not match");
    }
  };

  return (
    <div className="tw-fixed tw-z-10 tw-inset-0 tw-overflow-y-auto">
      <div className="tw-flex tw-items-end tw-justify-center tw-min-h-screen tw-pt-4 tw-px-4 tw-pb-20 tw-text-center sm:tw-block sm:tw-p-0">
        <div
          className="tw-fixed tw-inset-0 tw-transition-opacity"
          aria-hidden="true"
        >
          <div className="tw-absolute tw-inset-0 tw-bg-gray-500 tw-opacity-75"></div>
        </div>
        <span
          className="tw-hidden sm:tw-inline-block sm:tw-align-middle sm:tw-h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="tw-inline-block tw-align-bottom tw-bg-white tw-rounded-lg tw-text-left tw-overflow-hidden tw-shadow-xl tw-transform tw-transition-all sm:tw-my-8 sm:tw-align-middle sm:tw-max-w-lg sm:tw-w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <form onSubmit={onSignup}>
            <div className="tw-bg-gray-900 tw-px-4 tw-pt-5 tw-pb-4 sm:tw-p-6 sm:tw-pb-4">
              <div className="sm:tw-flex sm:tw-items-start">
                <div className="tw-mt-3 tw-text-center sm:tw-mt-0 sm:tw-ml-4 sm:tw-text-left">
                  <h3
                    className="tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-100"
                    id="modal-headline"
                  >
                    Signup
                  </h3>
                  <div className="tw-mt-5">
                    <input
                      type="text"
                      placeholder="Display Name"
                      className="tw-w-full tw-border tw-bg-slate-700 tw-rounded-md tw-p-2 tw-border-slate-700"
                      value={displayName}
                      required
                      onChange={(e) => setDisplayName(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="tw-w-full tw-border tw-bg-slate-700 tw-rounded-md tw-p-2 tw-border-slate-700 tw-mt-5"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="tw-w-full tw-border tw-bg-slate-700 tw-rounded-md tw-p-2 tw-border-slate-700 tw-mt-5"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="tw-w-full tw-border tw-bg-slate-700 tw-rounded-md tw-p-2 tw-border-slate-700 tw-mt-5"
                      value={confirmPassword}
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-bg-gray-900 tw-px-4 tw-py-3 sm:tw-px-6 tw-flex tw-items-center tw-justify-between">
              <p className="tw-text-sm tw-font-light tw-text-gray-400">
                Already have an account?{" "}
                <a
                  href="#"
                  className="tw-font-medium hover:tw-underline tw-text-blue-500"
                  onClick={onLoginClick}
                >
                  Login here
                </a>
              </p>
              <div className="tw-flex tw-items-center">
                {loading ? (
                  <button
                    type="button"
                    disabled
                    className="tw-w-full tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-shadow-sm tw-px-4 tw-py-2 tw-bg-blue-600 tw-text-base tw-font-medium tw-text-white hover:tw-bg-blue-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-blue-500 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm"
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="tw-inline tw-w-4 tw-h-4 tw-mr-3 tw-text-white tw-animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Loading...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="tw-w-full tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-shadow-sm tw-px-4 tw-py-2 tw-bg-blue-600 tw-text-base tw-font-medium tw-text-white hover:tw-bg-blue-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-blue-500 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm"
                  >
                    Sign up
                  </button>
                )}
                <button
                  type="button"
                  className="tw-mt-3 tw-w-full tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-gray-300 tw-shadow-sm tw-px-4 tw-py-2 tw-bg-white tw-text-base tw-font-medium tw-text-gray-700 hover:tw-bg-gray-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-blue-500 sm:tw-mt-0 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const LoginForm = ({
  onSignupClick,
  onClose,
  onAuthenticate,
}: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onLogin = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        getDoc(doc(database, "users", userCredential.user.uid))
          .then((doc) => {
            const userData = doc.data();
            if (userData) {
              setLoading(false);
              onAuthenticate(userCredential.user.uid, userData.displayName);
            } else {
              throw new Error("User data not found");
            }
          })
          .catch((error) => {
            setLoading(false);
            alert("Signup Error: " + error.code + error.message);
          });
      })
      .catch((error) => {
        setLoading(false);
        alert("Login Error: " + error.code + error.message);
      });
  };

  return (
    <div className="tw-fixed tw-z-10 tw-inset-0 tw-overflow-y-auto">
      <div className="tw-flex tw-items-end tw-justify-center tw-min-h-screen tw-pt-4 tw-px-4 tw-pb-20 tw-text-center sm:tw-block sm:tw-p-0">
        <div
          className="tw-fixed tw-inset-0 tw-transition-opacity"
          aria-hidden="true"
        >
          <div className="tw-absolute tw-inset-0 tw-bg-gray-500 tw-opacity-75"></div>
        </div>
        <span
          className="tw-hidden sm:tw-inline-block sm:tw-align-middle sm:tw-h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="tw-inline-block tw-align-bottom tw-bg-white tw-rounded-lg tw-text-left tw-overflow-hidden tw-shadow-xl tw-transform tw-transition-all sm:tw-my-8 sm:tw-align-middle sm:tw-max-w-lg sm:tw-w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <form onSubmit={onLogin}>
            <div className="tw-bg-gray-900 tw-px-4 tw-pt-5 tw-pb-4 sm:tw-p-6 sm:tw-pb-4">
              <div className="sm:tw-flex sm:tw-items-start">
                <div className="tw-mt-3 tw-text-center sm:tw-mt-0 sm:tw-ml-4 sm:tw-text-left">
                  <h3
                    className="tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-100"
                    id="modal-headline"
                  >
                    Login
                  </h3>
                  <div className="tw-mt-5">
                    <form>
                      <input
                        type="email"
                        placeholder="E-mail"
                        className="tw-w-full tw-border tw-bg-slate-700 tw-rounded-md tw-p-2 tw-border-slate-700"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="tw-w-full tw-border tw-bg-slate-700 tw-rounded-md tw-p-2 tw-border-slate-700 tw-mt-5"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-bg-gray-900 tw-px-4 tw-py-3 sm:tw-px-6 tw-flex tw-items-center tw-justify-between">
              <p className="tw-text-sm tw-font-light tw-text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="tw-font-medium hover:tw-underline tw-text-blue-500"
                  onClick={onSignupClick}
                >
                  Sign up
                </a>
              </p>
              <div className="tw-flex tw-items-center">
                {loading ? (
                  <button
                    type="button"
                    disabled
                    className="tw-w-full tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-shadow-sm tw-px-4 tw-py-2 tw-bg-blue-600 tw-text-base tw-font-medium tw-text-white hover:tw-bg-blue-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-blue-500 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm"
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="tw-inline tw-w-4 tw-h-4 tw-mr-3 tw-text-white tw-animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Loading...
                  </button>
                ) : (
                  <button
                    type="button"
                    className="tw-w-full tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-shadow-sm tw-px-4 tw-py-2 tw-bg-blue-600 tw-text-base tw-font-medium tw-text-white hover:tw-bg-blue-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-blue-500 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm"
                    onClick={onLogin}
                  >
                    Login
                  </button>
                )}
                <button
                  type="button"
                  className="tw-mt-3 tw-w-full tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-gray-300 tw-shadow-sm tw-px-4 tw-py-2 tw-bg-white tw-text-base tw-font-medium tw-text-gray-700 hover:tw-bg-gray-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-blue-500 sm:tw-mt-0 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
