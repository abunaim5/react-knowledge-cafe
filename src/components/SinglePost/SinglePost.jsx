import PropTypes from 'prop-types';

const SinglePost = ({blog}) => {
    const { cover, title, author_img, author_name, posted_date, reading_time } = blog;
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
                    <div>
                        <p className="text-xl font-medium text-gray-400">{reading_time} min read</p>
                        <p></p>
                    </div>
                </div>
                <h1 className="text-4xl font-bold">{title}</h1>
                <p></p>
                <a className="text-xl font-semibold underline text-purple-600" href="">Mark as read</a>
            </div>
            <hr />
        </div>
    );
};

SinglePost.propTypes = {
    blog: PropTypes.object.isRequired
}

export default SinglePost;