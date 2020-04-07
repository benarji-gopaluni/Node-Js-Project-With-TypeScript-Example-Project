"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lst = require("localStorage");
class BlogRepository {
    static listAllBlogs() {
        let blogs = [];
        if (BlogRepository.isKeyExist(BlogRepository.key)) {
            const data = lst.getItem(BlogRepository.key);
            blogs = JSON.parse(data);
        }
        return blogs;
    }
    static addBlogData(blog) {
        let flag = false;
        try {
            let data = [];
            if (BlogRepository.isKeyExist(BlogRepository.key)) {
                data = JSON.parse(lst.getItem(BlogRepository.key));
            }
            data.push(blog);
            lst.setItem(BlogRepository.key, JSON.stringify(data));
            flag = true;
        }
        catch (e) {
            console.error(e);
            flag = false;
        }
        return flag;
    }
    static isKeyExist(key) {
        return lst.hasOwnProperty(key);
    }
}
BlogRepository.key = 'blogs_data';
exports.default = BlogRepository;
//# sourceMappingURL=BlogRepository.js.map