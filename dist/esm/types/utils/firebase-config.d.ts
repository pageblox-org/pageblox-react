export declare const signInWithGoogle: (setDisplayName: (name: string) => void, setReviewModeEnabled: (enabled: boolean) => void) => void;
export declare const signOutWithGoogle: (setDisplayName: (name: string | null) => void, setReviewModeEnabled: (enabled: boolean) => void) => void;
export declare const database: import("@firebase/firestore").Firestore;
export declare const storage: import("@firebase/storage").FirebaseStorage;
export declare const auth: import("@firebase/auth").Auth;
