import React from 'react';
import logo from '../../assets/logo-2 (1).png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const nav = useNavigate();
    function goToLogin() {
        nav('/login');
    }
    function goToSignup() {
        nav('/signup');
    }
    function goToJoin() {
        nav('/join');
    }
    return (
        // <div className='w-full h-auto flex flex-row justify-between py-5 px-20 fixed top-0 z-10 bg-white shadow-md'>
        //         <div className='flex flex-row items-center gap-2'>
        //             <img className='object-cover' src={logo1} alt="logo1" />
        //             <span className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-[#662C60]'> For Schools </span>
        //             <span className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-[#662C60]'> Plans </span>
        //             <span className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-[#662C60]'> Solutions </span>
        //             <span className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-[#662C60]'> Resources </span>
        //             <span className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-[#662C60]'> Quiz For Work </span>
        //         </div>
        //         <div className='flex flex-row items-center gap-2'>
        //             <span className='px-3 py-2 rounded-lg text-[#662C60] border border-gray-200 hover:bg-gray-200'> School Plan Quote </span>
        //             <span className='px-3 py-2 rounded-lg text-[#662C60] border border-gray-200 hover:bg-gray-200'> Enter Code </span>
        //             <span className='px-3 py-2 rounded-lg text-[#662C60] bg-opacity-50 bg-[#DBCBEC] border border-gray-200 hover:bg-opacity-100'> Log In </span>
        //             <span className='px-3 py-2 rounded-lg text-white font-semibold bg-purple-600 border border-gray-200 hover:bg-[#5D2057]'> Sign Up </span>
        //         </div>
        //     </div>
        <nav className="bg-white shadow-md shadow-gray-50 py-4 fixed z-10 w-full">
            <div className="max-w-8xl mx-5 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex">
                            <img className="object-cover" src={logo} alt="Logo" />
                            <div className='flex items-center gap-2'>
                                <NavItem label="For Schools"
                                    options={['Overview', 'Impact', 'Product', 'Funding', "What's new"]}
                                    images={['https://quizizz.com/wf/assets/632b579034dcb77743b131fb_School.svg', 'https://quizizz.com/wf/assets/632b57a19843187e5697ea32_screen-users_2.svg', 'https://quizizz.com/wf/assets/632b57e283d43912e086909f_chalkboard-user_10.svg', 'https://quizizz.com/wf/assets/632b57b39ab52921fc1d933b_hand-holding-dollar_2.svg', 'https://quizizz.com/wf/assets/64abd09d032d0b717c014b1d_whats_new_icon.svg']}
                                />
                                <NavItem label="Plans" />
                                <NavItem label="Solutions"
                                    options={['Overview', 'Quizizz AI', 'CAASPP Prep', 'PLCs', 'STAAR Prep', 'MTSS', 'Secondary', 'Substitutes', 'SEL', 'EduProtocols', 'ELLs and ESOL', 'World Language', 'Social Studies', 'Special Education', 'Elementary', 'Science', 'State Test Prep', 'Math', 'ELA', 'Worksheets', 'Paper Mode']}
                                    images={'https://quizizz.com/wf/assets/632b579034dcb77743b131fb_School.svg'}
                                    newFeatureIndex={1} />
                                <NavItem label="Resources"
                                    options={['Overview', 'Certified Educators', 'Quiz University', 'Blog', 'Teacher Wish List', 'Help Center', 'Contact Support']}
                                    images={['https://quizizz.com/wf/assets/635c34524464542ef9fa8e9d_book-bookmark_1.svg', 'https://quizizz.com/wf/assets/6332064ac11c2a5449906881_file-certificate_1.svg', 'https://quizizz.com/wf/assets/64fae8c0092889ca80028115_grad_icon.webp', 'https://quizizz.com/wf/assets/6332067bc211b1ca44d7d167_newspaper_1.svg', 'https://quizizz.com/wf/assets/6332067b417792cb477ad8d6_list-check_2.svg', 'https://quizizz.com/wf/assets/6332067bba88a96b771afce0_user-headset_1.svg', 'https://quizizz.com/wf/assets/63dd8ca037e8c8afbae0859b_email.svg']} />
                                <NavItem label="Quiz For Work" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <button className='px-3 py-2 rounded-lg text-[#662C60] border border-gray-200 hover:bg-gray-200'> School Plan Quote </button>
                        <button onClick={()=>goToJoin()} className='px-3 py-2 rounded-lg text-[#662C60] border border-gray-200 hover:bg-gray-200'> Enter Code </button>
                        <button onClick={()=>goToLogin()} className='px-3 py-2 rounded-lg text-[#662C60] bg-opacity-50 bg-[#DBCBEC] border border-gray-200 hover:bg-opacity-100'> Log In </button>
                        <button onClick={()=>goToSignup()} className='px-3 py-2 rounded-lg text-white font-semibold bg-purple-600 border border-gray-200 hover:bg-[#5D2057]'> Sign Up </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ label, options, newFeatureIndex, images }) => {
    const [showOptions, setShowOptions] = React.useState(false);

    const handleMouseEnter = () => {
        setShowOptions(true);
    };

    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    return (
        <div
            className="relative px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-[#662C60] cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span>{label}</span>

            {showOptions && (
                <div className="absolute z-10 w-72 mt-2 p-3 bg-white rounded-md">
                    {options && options.length > 0 && (
                        <ul className="py-1 max-h-[42rem] overflow-y-auto">
                            {options.map((option, index) => (
                                <>
                                    <li key={index} className="px-2 py-2 my-2 text-black hover:bg-gray-200 hover:text-[#662C60] rounded-lg duration-200">
                                        <div className='flex gap-2 items-center'>
                                            <img src={images[index]} alt={option} className="w-4 h-4 mr-2" />
                                            {option}
                                            {newFeatureIndex !== undefined && newFeatureIndex >= 0 && index === 1 && (
                                                <span className="w-14 flex items-center justify-center text-sm text-purple-900 bg-purple-300 rounded-full">New</span>
                                            )}
                                        </div>
                                    </li>
                                    <hr />
                                </>


                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;