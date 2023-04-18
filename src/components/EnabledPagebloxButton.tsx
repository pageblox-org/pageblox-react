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
          reviewMode ? "tw-opacity-100" : "tw-opacity-50"
        } tw-bg-slate-700 hover:bg-slate-900 tw-rounded-full tw-p-2.5 tw-inline-flex tw-items-center tw-mr-2`}
        onClick={onWidgetClick}
      >
        <img src={logo} height={25} width={25} alt="Pageblox logo" />
      </button>
    </div>
  );
};

export default EnabledPagebloxButton;
