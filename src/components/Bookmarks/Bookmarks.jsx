import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="bg-gray-100 rounded-lg py-6 px-6 space-y-4">
            <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            <div className="bg-white rounded-lg p-4">
                <Bookmark></Bookmark>
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;