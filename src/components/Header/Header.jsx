import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <nav className='max-w-7xl mx-auto py-6 px-10'>
            <div className='flex justify-between items-center pb-6'>
                <h1 className='text-4xl font-bold'><span className='text-purple-800'>Knowledge</span> Cafe</h1>
                <div>
                    <img src={profile} alt="" />
                </div>
            </div>
            <hr />
        </nav>
    );
};

export default Header;