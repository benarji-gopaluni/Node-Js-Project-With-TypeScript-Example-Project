import Blog from "../models/Blog";
import * as lst from 'localStorage';

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

    private static isKeyExist(key): Boolean {
        return lst.hasOwnProperty(key);
    }
}

export default BlogRepository
