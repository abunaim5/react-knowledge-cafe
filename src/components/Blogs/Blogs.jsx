import { useEffect } from "react";
import { useState } from "react";
import SinglePost from "../SinglePost/SinglePost";
import ReadTime from "../ReadTime/ReadTime";
import Bookmarks from "../Bookmarks/Bookmarks";
import PropTypes from 'prop-types';

const Blogs = ({handleBookMarks, bookmarks}) => {
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
                        handleBookMarks={handleBookMarks}
                    ></SinglePost>)
                }
            </div>
            <div className="flex-1 space-y-6">
                <ReadTime></ReadTime>
                <Bookmarks bookmarks={bookmarks}></Bookmarks>
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleBookMarks: PropTypes.func.isRequired,
    bookmarks: PropTypes.array.isRequired
}

export default Blogs;