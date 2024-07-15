declare class Clipbord {
    copyList: string[];
    element: HTMLTextAreaElement;
    version: string;
    constructor();
    private init;
    copy(text: string, callback: (err?: Error) => void): void;
    getHistory(): string[];
    clearHistroy(): void;
}
declare const TinyClipbord: Clipbord;
export default TinyClipbord;
