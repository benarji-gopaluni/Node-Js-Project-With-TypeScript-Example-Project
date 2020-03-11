export class Blog {
    private _id: number;
    private _title: string;
    private _topic: string;
    private _author: string;
    private _link: string;
    private _doc: Date;
    private _last_dou: Date;
    private _visits: number;

    constructor() {
        this.doc = undefined;
        this.last_dou = undefined;
        this.visits = 0;
    }

    public init(id: number, title: string, topic: string, author: string, link: string, doc: Date, last_dou: Date, visits: number): void {
        this._id = id;
        this._title = title;
        this._topic = topic;
        this._author = author;
        this._link = link;
        this._doc = doc;
        this._last_dou = last_dou;
        this._visits = visits;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get topic(): string {
        return this._topic;
    }

    set topic(value: string) {
        this._topic = value;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    get link(): string {
        return this._link;
    }

    set link(value: string) {
        this._link = value;
    }

    get doc(): Date {
        return this._doc;
    }

    set doc(value: Date) {
        this._doc = value;
    }

    get last_dou(): Date {
        return this._last_dou;
    }

    set last_dou(value: Date) {
        this._last_dou = value;
    }

    get visits(): number {
        return this._visits;
    }

    set visits(value: number) {
        this._visits = value;
    }
}
export default Blog;
