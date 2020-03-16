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
    static listBlogById(id) {
        let blog = undefined;
        try {
            let data = [];
            if (BlogRepository.isKeyExist(BlogRepository.key)) {
                data = JSON.parse(lst.getItem(BlogRepository.key));
                for (let i = 0; i < data.length && blog == undefined; i++) {
                    if (data[i].id == id) {
                        blog = data[i];
                    }
                }
            }
        }
        catch (e) {
            console.error(e);
        }
        return blog;
    }
    static listByTopic(topic) {
        let blog = [];
        try {
            let data = [];
            if (BlogRepository.isKeyExist(BlogRepository.key)) {
                data = JSON.parse(lst.getItem(BlogRepository.key));
                for (let i = 0; i < data.length; i++) {
                    if (data[i].topic == topic) {
                        blog.push(data[i]);
                    }
                }
            }
        }
        catch (e) {
            console.error(e);
        }
        return blog;
    }
    static updateBlogById(id, blogValue) {
        let flag = false;
        try {
            let data = [];
            if (BlogRepository.isKeyExist(BlogRepository.key)) {
                data = JSON.parse(lst.getItem(BlogRepository.key));
                for (let i = 0; i < data.length && !flag; i++) {
                    if (data[i].id == id) {
                        data[i] = blogValue;
                        flag = true;
                    }
                }
            }
            if (flag) {
                lst.setItem(BlogRepository.key, JSON.stringify(data));
            }
        }
        catch (e) {
            console.error(e);
            flag = false;
        }
        return flag;
    }
    static deleteBlogById(id) {
        let flag = false;
        try {
            let data = [];
            if (BlogRepository.isKeyExist(BlogRepository.key)) {
                data = JSON.parse(lst.getItem(BlogRepository.key));
                for (let i = 0; i < data.length && !flag; i++) {
                    if (data[i].id == id) {
                        data.splice(i, 1);
                        flag = true;
                    }
                }
            }
            if (flag) {
                lst.setItem(BlogRepository.key, JSON.stringify(data));
            }
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