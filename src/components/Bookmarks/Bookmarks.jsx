import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = () => {
    return (
        <div className="bg-gray-100 rounded-lg py-6 px-6 space-y-4">
            <h2 className="text-2xl font-bold">Bookmarked Blogs: 8</h2>
            <div className="bg-white rounded-lg p-4">
                <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default Bookmarks;