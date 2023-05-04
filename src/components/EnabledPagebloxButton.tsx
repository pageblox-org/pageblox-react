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
      className={`tw-pageblox tw-fixed tw-bottom-5 tw-right-2 ${
        shouldDisplay ? "tw-block" : "tw-hidden"
      }`}
    >
      <button
        className={`${
          reviewMode ? "tw-border-green-500" : "tw-border-pink-500"
        } tw-bg-slate-700 hover:tw-bg-slate-900 tw-rounded-full tw-border-solid tw-border-4 tw-p-2.5 tw-inline-flex tw-items-center tw-mr-2`}
        onClick={onWidgetClick}
      >
        <img src={logo} height={30} width={30} alt="Pageblox logo" />
      </button>
    </div>
  );
};

export default EnabledPagebloxButton;
