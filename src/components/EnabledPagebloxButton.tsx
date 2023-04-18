import React from "react";
import logo from "../images/pageblox-logo.svg";

interface EnabledPagebloxButtonInterface {
  shouldDisplay: boolean;
  reviewMode: boolean;
  onWidgetClick: () => void;
}

const EnabledPagebloxButton = ({
  shouldDisplay,
  reviewMode,
  onWidgetClick,
}: EnabledPagebloxButtonInterface) => {
  return (
    <div
      className={`tw-fixed tw-bottom-5 tw-right-2 ${
        shouldDisplay ? "tw-block" : "tw-hidden"
      }`}
    >
      <button
        className={`${
          reviewMode ? "tw-ring-green-500" : "tw-ring-pink-500"
        } tw-bg-slate-700 hover:bg-slate-900 tw-rounded-full tw-ring-4 tw-p-2.5 tw-inline-flex tw-items-center tw-mr-2`}
        onClick={onWidgetClick}
      >
        <img src={logo} height={30} width={30} alt="Pageblox logo" />
      </button>
    </div>
  );
};

export default EnabledPagebloxButton;
