declare class TinyClipbord {
    constructor() 
    copyList: string[]
    element: HTMLTextAreaElement
    TinyClipbord: TinyClipbord
    copy(text: string, callback: (err?: Error) => void): void
    getHistory(): string[]
    clearHistroy(): void
}

export default TinyClipbord