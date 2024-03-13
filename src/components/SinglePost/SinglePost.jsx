import PropTypes from 'prop-types';
import { MdBookmarkBorder } from "react-icons/md";

const SinglePost = ({ blog, handleBookMarks }) => {
    const { cover, title, author_img, author_name, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <div className="space-y-6 pb-10">
                <div>
                    <img className="rounded-lg" src={cover} alt="" />
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full w-16 h-16">
                            <img className="w-full h-full rounded-full" src={author_img} alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">{author_name}</h2>
                            <p className="font-semibold text-gray-400">{posted_date}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-xl font-medium text-gray-400">{reading_time} min read</p>
                        <button onClick={() => handleBookMarks(blog)} className="text-gray-400 text-2xl"><MdBookmarkBorder /></button>
                    </div>
                </div>
                <h1 className="text-4xl font-bold">{title}</h1>
                <div className="flex gap-2">
                    {
                        hashtags.map((tag, inx) => <p key={inx}>#{tag}</p>)
                    }
                </div>
                <button className="text-xl font-semibold underline text-purple-600">Mark as read</button>
            </div>
            <hr />
        </div>
    );
};

SinglePost.propTypes = {
    blog: PropTypes.object.isRequired
}

export default SinglePost;