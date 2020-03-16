import Blog from "../models/Blog";
import * as lst from 'localStorage';
import {isArray} from "util";

class BlogRepository {
    private static key = 'blogs_data';

    public static listAllBlogs(): Blog[] {
        let blogs: Blog[] = [];
        if (BlogRepository.isKeyExist(BlogRepository.key)) {
            const data = lst.getItem(BlogRepository.key);
            blogs = JSON.parse(data);
        }
        return blogs;
    }

    public static addBlogData(blog: Blog): Boolean {
        let flag: Boolean = false;
        try {
            let data: Blog[] = [];
            if (BlogRepository.isKeyExist(BlogRepository.key)) {
                data = JSON.parse(lst.getItem(BlogRepository.key));
            }
            data.push(blog);
            lst.setItem(BlogRepository.key, JSON.stringify(data));
            flag = true;
        } catch (e) {
            console.error(e);
            flag = false;
        }
        return flag;
    }

    public static listBlogById(id: number): Blog {
        let blog: Blog = undefined;
        try {
            let data: Blog[] = [];
            if (BlogRepository.isKeyExist(BlogRepository.key)) {
                data = JSON.parse(lst.getItem(BlogRepository.key));
                for (let i = 0; i < data.length && blog == undefined; i++) {
                    if(data[i].id==id){
                        blog = data[i];
                    }
                }
            }
        } catch (e) {
            console.error(e);
        }
        return blog;
    }

    public static listByTopic(topic: string): Blog[] {
        let blog: Blog[] = [];
        try {
            let data: Blog[] = [];
            if (BlogRepository.isKeyExist(BlogRepository.key)) {
                data = JSON.parse(lst.getItem(BlogRepository.key));
                for (let i = 0; i < data.length; i++) {
                    if(data[i].topic==topic){
                        blog.push(data[i]);
                    }
                }
            }
        } catch (e) {
            console.error(e);
        }
        return blog;
    }
    public static updateBlogById(id: number, blogValue: Blog): boolean {
        let flag: boolean = false;
        try {
            let data: Blog[] = [];
            if (BlogRepository.isKeyExist(BlogRepository.key)) {
                data = JSON.parse(lst.getItem(BlogRepository.key));
                for (let i = 0; i < data.length&&!flag; i++) {
                    if(data[i].id==id){
                        data[i]= blogValue;
                        flag=true;
                    }
                }
            }
            if(flag){
                lst.setItem(BlogRepository.key, JSON.stringify(data));
            }
        } catch (e) {
            console.error(e);
            flag = false;
        }
        return flag;
    }
    public static deleteBlogById(id: number): boolean{
        let flag: boolean = false;
        try {
            let data: Blog[] = [];
            if (BlogRepository.isKeyExist(BlogRepository.key)) {
                data = JSON.parse(lst.getItem(BlogRepository.key));
                for (let i = 0; i < data.length&&!flag; i++) {
                    if(data[i].id==id){
                        data.splice(i,1);
                        flag=true;
                    }
                }
            }
            if(flag){
                lst.setItem(BlogRepository.key, JSON.stringify(data));
            }
        } catch (e) {
            console.error(e);
            flag = false;
        }
        return flag;
    }
    private static isKeyExist(key): Boolean {
        return lst.hasOwnProperty(key);
    }
}

export default BlogRepository
