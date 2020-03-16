export class Blog {
    public id: number;
    public title: string;
    public topic: string;
    public author: string;
    public link: string;
    public doc: Date;
    public last_dou: Date;
    public visits: number;

    constructor() {
        this.doc = undefined;
        this.last_dou = undefined;
        this.visits = 0;
    }

    public init(id: number, title: string, topic: string, author: string, link: string, doc: Date, last_dou: Date, visits: number): void {
        this.id = id;
        this.title = title;
        this.topic = topic;
        this.author = author;
        this.link = link;
        this.doc = doc;
        this.last_dou = last_dou;
        this.visits = visits;
    }



}
export default Blog;
