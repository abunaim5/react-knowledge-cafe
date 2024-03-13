import PropTypes from 'prop-types';

const Bookmark = ({ bookmarks }) => {
    return (
        <div className='space-y-4'>
            {
                bookmarks.map((bookmark, idx) => <div key={idx} className="bg-white rounded-lg p-4">
                    <h3 className="font-semibold text-lg">{bookmark.title}</h3>
                </div>)
            }
        </div>
    );
};

Bookmark.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmark;