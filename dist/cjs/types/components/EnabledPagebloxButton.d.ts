/// <reference types="react" />
interface EnabledPagebloxButtonInterface {
    shouldDisplay: boolean;
    reviewMode: boolean;
    onWidgetClick: () => void;
}
declare const EnabledPagebloxButton: ({ shouldDisplay, reviewMode, onWidgetClick, }: EnabledPagebloxButtonInterface) => JSX.Element;
export default EnabledPagebloxButton;
