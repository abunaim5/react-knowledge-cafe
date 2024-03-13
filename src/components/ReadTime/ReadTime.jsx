import PropTypes from 'prop-types';

const ReadTime = ({readTime}) => {
    return (
        <div>
            <div className='border-2 border-purple-600 py-5 px-8 text-center rounded-lg bg-purple-100'>
                <h3 className='text-2xl font-bold text-purple-600'>Spent time on read: {readTime} min</h3>
            </div>
        </div>
    );
};

ReadTime.propTypes = {
    readTime: PropTypes.number.isRequired
}

export default ReadTime;