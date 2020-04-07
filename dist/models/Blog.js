"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Blog {
    constructor() {
        this.doc = undefined;
        this.last_dou = undefined;
        this.visits = 0;
    }
    init(id, title, topic, author, link, doc, last_dou, visits) {
        this._id = id;
        this._title = title;
        this._topic = topic;
        this._author = author;
        this._link = link;
        this._doc = doc;
        this._last_dou = last_dou;
        this._visits = visits;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get topic() {
        return this._topic;
    }
    set topic(value) {
        this._topic = value;
    }
    get author() {
        return this._author;
    }
    set author(value) {
        this._author = value;
    }
    get link() {
        return this._link;
    }
    set link(value) {
        this._link = value;
    }
    get doc() {
        return this._doc;
    }
    set doc(value) {
        this._doc = value;
    }
    get last_dou() {
        return this._last_dou;
    }
    set last_dou(value) {
        this._last_dou = value;
    }
    get visits() {
        return this._visits;
    }
    set visits(value) {
        this._visits = value;
    }
}
exports.Blog = Blog;
exports.default = Blog;
//# sourceMappingURL=Blog.js.map