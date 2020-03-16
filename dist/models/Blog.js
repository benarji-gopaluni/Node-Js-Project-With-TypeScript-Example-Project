"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Blog {
    constructor() {
        this.doc = undefined;
        this.last_dou = undefined;
        this.visits = 0;
    }
    init(id, title, topic, author, link, doc, last_dou, visits) {
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
exports.Blog = Blog;
exports.default = Blog;
//# sourceMappingURL=Blog.js.map