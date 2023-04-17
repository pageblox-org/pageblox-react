/// <reference types="react" />
interface EnabledPagebloxButtonInterface {
    shouldDisplay: boolean;
    reviewModeEnabled: boolean;
    onWidgetClick: () => void;
}
declare const EnabledPagebloxButton: ({ shouldDisplay, reviewModeEnabled, onWidgetClick, }: EnabledPagebloxButtonInterface) => JSX.Element;
export default EnabledPagebloxButton;
