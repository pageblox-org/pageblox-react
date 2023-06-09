/// <reference types="react" />
interface Comment {
    id: string;
    timestamp: any;
    profileColor: string;
    profileName: string;
    comment: string;
    resolved: boolean;
    dom: string;
    x: number;
    y: number;
    uploadedFilePath?: string;
}
interface Reply {
    id: string;
    author: string;
    profileColor: string;
    message: string;
    parent_comment_id: string;
    timestamp: any;
}
interface PagebloxProviderInterface {
    children: JSX.Element;
    projectKey: string;
    excludePaths?: string[];
    enabled: boolean;
}
declare const PagebloxProvider: (pagebloxProvider: PagebloxProviderInterface) => JSX.Element;

export { Comment, PagebloxProvider, Reply };
