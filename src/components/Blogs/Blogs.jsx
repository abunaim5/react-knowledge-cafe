import { useEffect } from "react";
import { useState } from "react";
import SinglePost from "../SinglePost/SinglePost";
import ReadTime from "../ReadTime/ReadTime";
import Bookmarks from "../Bookmarks/Bookmarks";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="max-w-7xl mx-auto px-10 flex justify-between gap-6">
            <div className="space-y-12 w-2/3">
                {
                    blogs.map(blog=><SinglePost
                        blog={blog}
                        key={blog.id}
                    ></SinglePost>)
                }
            </div>
            <div className="flex-1 space-y-6">
                <ReadTime></ReadTime>
                <Bookmarks></Bookmarks>
            </div>
        </div>
    );
};

export default Blogs;