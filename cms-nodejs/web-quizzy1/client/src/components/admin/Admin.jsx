import React, { useContext, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { GoBell } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

const Admin = () => {
    const [isHidden, setIsHidden] = useState(true);
    const { userInfo } = useContext(AuthContext);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };
    const nav = useNavigate();
    function goToCreateQuiz() {
        nav('/admin/createQuiz');
    }


    return (

        <div className='w-full h-auto flex flex-col bg-gray-200'>
            {/* search bar */}
            <div className='w-full h-auto flex flex-row py-3 justify-center gap-4 bg-white'>
                <div className='w-[80%] max-w-screen-lg h-auto flex items-center pl-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                    <FaSearch size={12} className='text-gray-200' />
                    <input
                        id='input'
                        type="text"
                        className="w-full ml-3 focus:outline-none"
                        placeholder="Search..."
                    />
                    <select
                        id="select"
                        className="w-auto border-l-2 border-l-gray-200 pl-2 pr-4 bg-transparent focus:outline-none"
                    >
                        <option value="option1" className='font-semibold hover:bg-gray-100' selected>Quiz Library</option>
                        <option value="option2" className='font-semibold hover:bg-gray-100' >My Library</option>
                        <option value="option3" className='font-semibold hover:bg-gray-100'>Reports</option>
                    </select>
                </div>
                <button className="flex items-center justify-center px-4 py-2 bg-white border text-white rounded-md hover:bg-gray-100 focus:outline-none">
                    <GoBell className='text-black' />
                </button>
                <button
                    onClick={() => goToCreateQuiz()}
                    className="flex items-center gap-2 justify-center px-4 py-2 bg-purple-800 bg-opacity-80 text-white rounded-md hover:bg-opacity-50 focus:outline-none">
                    <FaPlus size={12} />
                    <p className='text-xs font-medium'> CREATE NEW CONTENT</p>
                </button>
            </div>

            {/* play - create - invite */}
            <div className='h-auto mx-16 my-3'>
                <div className='flex flex-col gap-1 my-3 bg-slate-200'>
                    <span className='text-gray-900 font-bold text-3xl'> {userInfo != null ? `${userInfo.username}` : <div>Error</div>}, welcome to Quizzy! 🎉 </span>
                    <span className='font-normal text-gray-800 text-base'> Get the most out of your free trial and make your trainings more engaging and impactful. </span>
                </div>
                <div className='flex flex-row justify-between my-6'>
                    <div className='w-[31%] bg-white relative flex flex-col rounded-md shadow-sm justify-between gap-3 hover:shadow-lg'>
                        <div className='w-full h-auto absolute flex justify-end items-center '>
                            <p className='w-12 h-12 text-xl md:text-3xl text-gray-200 flex justify-center items-center font-bold'>1</p>
                        </div>
                        <div className=' flex flex-row gap-2 items-center mx-6 mt-3'>
                            <img className='w-20 h-20 object-contain' src="https://cf.quizizz.com/image/demoQuizDice.png" alt="dice" />
                            <div className='flex flex-col gap-1'>
                                <span className='text-base font-semibold'> Try the player experience</span>
                                <span className='text-xs font-normal'> in less than 2 minutes! </span>
                            </div>
                        </div>
                        <button className='w-[50%] flex justify-center items-center px-3 py-1 bg-purple-500 text-white text-sm font-semibold mx-6 mb-6 hover:bg-opacity-50'>
                            PLAY DEMO QUIZ
                        </button>
                    </div>
                    <div className='h-full flex justify-center m-auto px-1 items-center'>
                        <MdKeyboardDoubleArrowRight size={24} className='text-gray-500' />
                    </div>
                    <div className='w-[31%] bg-white relative flex flex-col rounded-md shadow-sm justify-between gap-3 hover:shadow-lg'>
                        <div className='w-full h-auto absolute flex justify-end items-center '>
                            <p className='w-12 h-12 text-xl md:text-3xl text-gray-200 flex justify-center items-center font-bold'>2</p>
                        </div>
                        <div className=' flex flex-row gap-2 items-center mx-6 mt-3'>
                            <img className='w-20 h-20 object-contain' src="https://cf.quizizz.com/image/create-quiz-frame.png" alt="dice" />
                            <div className='flex flex-col gap-1'>
                                <span className='text-base font-semibold'> Create your first quiz </span>
                                <span className='text-xs font-normal'> and level up your trainings </span>
                            </div>
                        </div>
                        <button className='w-[50%] flex justify-center items-center px-3 py-1 bg-gray-200 text-purple-500 text-sm font-semibold mx-6 mb-6 hover:text-opacity-50'>
                            CREATE QUIZ
                        </button>
                    </div>
                    <div className='h-full flex justify-center m-auto px-1 items-center'>
                        <MdKeyboardDoubleArrowRight size={24} className='text-gray-500' />
                    </div>
                    <div className='w-[31%] bg-white relative flex flex-col rounded-md shadow-sm justify-between gap-3 hover:shadow-lg'>
                        <div className='w-full h-auto absolute flex justify-end items-center '>
                            <p className='w-12 h-12 text-xl md:text-3xl text-gray-200 flex justify-center items-center font-bold'>3</p>
                        </div>
                        <div className=' flex flex-row gap-2 items-center mx-6 mt-3'>
                            <img className='w-20 h-20 object-contain' src="https://cf.quizizz.com/image/invite-team-member.png" alt="dice" />
                            <div className='flex flex-col gap-1'>
                                <span className='text-base font-semibold'> Invite team members </span>
                                <span className='text-xs font-normal'> You have 4 unused seats left in your organization </span>
                            </div>
                        </div>
                        <button className='w-[50%] flex justify-center items-center px-3 py-1 bg-gray-200 text-purple-500 text-sm font-semibold mx-6 mb-6 hover:text-opacity-50'>
                            INVITE NOW
                        </button>
                    </div>
                </div>
            </div>

            {/* templates */}
            <div className='h-[auto] mx-16 my-10 flex flex-col'>
                <span className='font-bold text-xl'>Templates</span>
                <div className='flex flex-row justify-between'>
                    <span className='text-gray-700'>Duplicate and start creating your own Quiz using these templates</span>
                    <div className='flex flex-row items-center gap-1'>
                        <span className='text-purple-500'>View All</span>
                        <IoIosArrowForward size={20} className='text-purple-500' />
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-3 my-5'>
                    <div className='w-full bg-white hover:shadow-lg rounded'>
                        <div className='w-full h-[70%]'>
                            <img className='object-cover rounded-br-xl' src="https://www.theladders.com/wp-content/uploads/american-casual-cellphone-friends.jpg" alt="hinh1" />
                        </div>
                        <div className='w-full h-[30%] px-3 py-2 flex flex-col gap-2'>
                            <span className='font-semibold text-lg'> [Template] Fun Fridays </span>
                            <div className='w-full flex items-center gap-1.5'>
                                <span className='text-sm'> Quiz </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 10 Questions </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 1904 Plays </span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white hover:shadow-lg rounded'>
                        <div className='w-full h-[70%]'>
                            <img className='object-cover rounded-br-xl' src="https://www.theladders.com/wp-content/uploads/american-casual-cellphone-friends.jpg" alt="hinh1" />
                        </div>
                        <div className='w-full h-[30%] px-3 py-2 flex flex-col gap-2'>
                            <span className='font-semibold text-lg'> [Template] Fun Fridays </span>
                            <div className='w-full flex items-center gap-1.5'>
                                <span className='text-sm'> Quiz </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 10 Questions </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 1904 Plays </span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white hover:shadow-lg rounded'>
                        <div className='w-full h-[70%]'>
                            <img className='object-cover rounded-br-xl' src="https://www.theladders.com/wp-content/uploads/american-casual-cellphone-friends.jpg" alt="hinh1" />
                        </div>
                        <div className='w-full h-[30%] px-3 py-2 flex flex-col gap-2'>
                            <span className='font-semibold text-lg'> [Template] Fun Fridays </span>
                            <div className='w-full flex items-center gap-1.5'>
                                <span className='text-sm'> Quiz </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 10 Questions </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 1904 Plays </span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white hover:shadow-lg rounded'>
                        <div className='w-full h-[70%]'>
                            <img className='object-cover rounded-br-xl' src="https://www.theladders.com/wp-content/uploads/american-casual-cellphone-friends.jpg" alt="hinh1" />
                        </div>
                        <div className='w-full h-[30%] px-3 py-2 flex flex-col gap-2'>
                            <span className='font-semibold text-lg'> [Template] Fun Fridays </span>
                            <div className='w-full flex items-center gap-1.5'>
                                <span className='text-sm'> Quiz </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 10 Questions </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 1904 Plays </span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white hover:shadow-lg rounded'>
                        <div className='w-full h-[70%]'>
                            <img className='object-cover rounded-br-xl' src="https://www.theladders.com/wp-content/uploads/american-casual-cellphone-friends.jpg" alt="hinh1" />
                        </div>
                        <div className='w-full h-[30%] px-3 py-2 flex flex-col gap-2'>
                            <span className='font-semibold text-lg'> [Template] Fun Fridays </span>
                            <div className='w-full flex items-center gap-1.5'>
                                <span className='text-sm'> Quiz </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 10 Questions </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 1904 Plays </span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white hover:shadow-lg rounded'>
                        <div className='w-full h-[70%]'>
                            <img className='object-cover rounded-br-xl' src="https://www.theladders.com/wp-content/uploads/american-casual-cellphone-friends.jpg" alt="hinh1" />
                        </div>
                        <div className='w-full h-[30%] px-3 py-2 flex flex-col gap-2'>
                            <span className='font-semibold text-lg'> [Template] Fun Fridays </span>
                            <div className='w-full flex items-center gap-1.5'>
                                <span className='text-sm'> Quiz </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 10 Questions </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 1904 Plays </span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white hover:shadow-lg rounded'>
                        <div className='w-full h-[70%]'>
                            <img className='object-cover rounded-br-xl' src="https://www.theladders.com/wp-content/uploads/american-casual-cellphone-friends.jpg" alt="hinh1" />
                        </div>
                        <div className='w-full h-[30%] px-3 py-2 flex flex-col gap-2'>
                            <span className='font-semibold text-lg'> [Template] Fun Fridays </span>
                            <div className='w-full flex items-center gap-1.5'>
                                <span className='text-sm'> Quiz </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 10 Questions </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 1904 Plays </span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white hover:shadow-lg rounded'>
                        <div className='w-full h-[70%]'>
                            <img className='object-cover rounded-br-xl' src="https://www.theladders.com/wp-content/uploads/american-casual-cellphone-friends.jpg" alt="hinh1" />
                        </div>
                        <div className='w-full h-[30%] px-3 py-2 flex flex-col gap-2'>
                            <span className='font-semibold text-lg'> [Template] Fun Fridays </span>
                            <div className='w-full flex items-center gap-1.5'>
                                <span className='text-sm'> Quiz </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 10 Questions </span>
                                <GoDotFill size={8} />
                                <span className='text-sm'> 1904 Plays </span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            {/* what's new */}
            <div className='h-[auto] mx-16 my-10 flex flex-col'>
                <span className='font-bold text-xl'>What's New</span>
                <div className='flex flex-row justify-between'>
                    <span className='text-gray-700'>We’ve added some new features to improve Quizzy. Check them out</span>
                    <div className='flex flex-row items-center gap-1'>
                        <button className='rounded-full bg-gray-200 w-6 h-6 flex items-center justify-center hover:bg-gray-400'>
                            <IoIosArrowBack />
                        </button>
                        <button className='rounded-full bg-gray-200 w-6 h-6 flex items-center justify-center hover:bg-gray-400'>
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
                <div className='w-full overflow-auto'>
                    <div className='w-screen flex gap-4 mt-3'>
                        <div className='relative w-[75%] flex flex-col'>
                            <span className='absolute ml-8 rounded bg-purple-500 px-2 py-1.5 text-white flex items-center text-xs'> NEW RELEASE </span>
                            <div className='w-full h-auto bg-white flex mt-3'>
                                <div className='w-1/2 flex flex-col justify-center p-8'>
                                    <p className='font-bold text-gray-700'> AI-Powered Audio Evaluations! </p>
                                    <p className='text-gray-700'> Designed for Sales Enablement and Call Center Training. Get objective, AI-Powered feedback on pronunciation, fluency, and empathy. </p>
                                    <button className='bg-gray-200 text-purple-500 w-24 h-10 mt-4 p-2 font-semibold rounded text-sm hover:text-opacity-50'>TRY NOW</button>
                                </div>
                                <div className='w-1/2'>
                                    <img src="https://cf.quizizz.com/img/qfw/audio_qt_whats_new.gif" alt="AI-gif" />
                                </div>
                            </div>
                        </div>
                        <div className='relative w-[75%] flex flex-col'>
                            <span className='absolute ml-8 rounded bg-purple-500 px-2 py-1.5 text-white flex items-center text-xs'> NEW RELEASE </span>
                            <div className='w-full h-auto bg-white flex mt-3'>
                                <div className='w-1/2 flex flex-col justify-center p-8'>
                                    <p className='font-bold text-gray-700'> Create a Quiz in less than a minute! </p>
                                    <p className='text-gray-700'> Whether you're a instructor, trainer, or content creator, QuizGPT can help you easily create engaging quizzes from any text or document </p>
                                    <div className='flex flex-row gap-4 mt-4'>
                                        <button className='bg-gray-200 text-purple-500 w-24 h-10 p-2 font-semibold rounded text-sm hover:text-opacity-50'>TRY NOW</button>
                                        <button className='bg-gray-200 w-28 h-10 p-2 font-semibold rounded text-sm text-black hover:text-opacity-70'>READ MORE</button>
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <img src="https://cf.quizizz.com/img/qfw/QuizGenBanner.png" alt="quiz-gpt-pic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* People love Quizzy */}
            <div className='h-auto mx-16 my-10 flex flex-col'>
                <span className='font-bold text-xl'>People love Quizzy</span>
                <span className='text-gray-700'>And we love them back. Read some of our best user stories and get inspired :&#41;</span>
                <div className=' my-5 grid grid-cols-3 gap-4'>
                    <div className='flex flex-col bg-white rounded hover:shadow-md'>
                        <div className='h-full w-full p-1'>
                            <img src="https://cf.quizizz.com/img/qfw/Montefiore.jpeg" alt="img1" />
                        </div>
                        <div className='h-full pt-3 pb-4 px-4 flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <p className=' font-semibold text-gray-700'>Read how Montefiore Institute from NY supercharged their EMTs trainings</p>
                                <p className=' font-light text-gray-700'>Quizizz helped Montefiore Institute reform their EMC program in a way that ensured candidates show progress week-on-week</p>
                            </div>
                            <button className='w-32 h-10 py-2 px-4 bg-gray-100 text-black hover:text-opacity-70 mt-3 text-sm font-semibold'> READ MORE</button>
                        </div>
                    </div>
                    <div className='flex flex-col bg-white rounded hover:shadow-md'>
                        <div className='h-full w-full p-1'>
                            <img src="https://cf.quizizz.com/img/qfw/Montefiore.jpeg" alt="img1" />
                        </div>
                        <div className='h-full pt-3 pb-4 px-4 flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <p className=' font-semibold text-gray-700'>How DP World uses Quizizz to assess their frontline staff</p>
                                <p className=' font-light text-gray-700'>Quizizz makes the work environment safer for crane operators in their high-risk jobs. The training helps them understand safety protocols better and also simplifies the working of port machines and cranes for them.</p>
                            </div>
                            <button className='w-32 h-10 py-2 px-4 bg-gray-100 text-black hover:text-opacity-70 mt-3 text-sm font-semibold'> READ MORE</button>
                        </div>
                    </div>
                    <div className='flex flex-col bg-white rounded hover:shadow-md'>
                        <div className='h-full w-full p-1'>
                            <img src="https://cf.quizizz.com/img/qfw/Montefiore.jpeg" alt="img1" />
                        </div>
                        <div className='h-full pt-3 pb-4 px-4 flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <p className=' font-semibold text-gray-700'>IDFC partners with Quizizz</p>
                                <p className=' font-light text-gray-700'>Quizizz made remote employee onboarding a reality for us. Now, our HR teams are able to ramp up frontline bank staff from the HQ, at scale</p>
                            </div>
                            <button className='w-32 h-10 py-2 px-4 bg-gray-100 text-black hover:text-opacity-70 mt-3 text-sm font-semibold'> READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* create new group */}
            <div className='h-auto mx-16 my-10 flex flex-col shadow-xl rounded-xl'>
                <div className='h-auto flex gap-4 justify-between bg-gradient-to-r from-gray-200 via-white to-white p-8 rounded-xl'>
                    <div className='w-[60%] flex flex-col justify-between'>
                        <div>
                            <p className='font-bold text-xl text-gray-700'> Invite several people at once! </p>
                            <p className='text-xl text-gray-700'> Create a group to invite all members of a group with just 1 click! </p>
                        </div>
                        <ul className="list-disc list-inside">
                            <li className="flex items-center text-sm text-gray-700">
                                <TiTick className='w-6 h-6' /> Assign activities to all group participants with a single click
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <TiTick className='w-6 h-6' /> Participants get automatic reminders of assigned activities
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <TiTick className='w-6 h-6' /> View Reports of all group participants at one place
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <TiTick className='w-6 h-6' /> Create Unlimited number of groups
                            </li>
                        </ul>
                        <button className='w-48 h-10 font-semibold p-2 mt-3 bg-purple-500 hover:bg-opacity-70 text-sm text-white rounded'> CREATE NEW GROUP </button>
                    </div>
                    <div className='w-[40%] flex items-end justify-end'>
                        <img className='h-56' src="https://cf.quizizz.com/img/qfw/Connected_Faces.png" alt="people-connect-img" />
                    </div>
                </div>
            </div>

            {/* contact us */}
            <div className='h-auto mx-16 my-10 flex flex-col shadow-inner rounded-xl'>
                <div className='h-auto flex gap-4 justify-between bg-gradient-to-r from-gray-200 via-white to-white p-8 rounded-xl'>
                    <div className='w-[60%] flex flex-col justify-between'>
                        <div>
                            <p className='font-bold text-xl text-gray-700'> Want to get an enterprise plan for your team? </p>
                            <p className='text-xl text-gray-700'> We provide tailor made plans to suit your needs. Contact us now! </p>
                        </div>
                        <button className='w-28 h-10 font-semibold p-2 mt-3 bg-purple-500 hover:bg-opacity-70 text-sm text-white rounded'> CONTACT US </button>
                    </div>
                    <div className='w-[40%] flex items-end justify-end'>
                        <img className='h-32' src="https://cf.quizizz.com/image/corporate.png" alt="corporate-img" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Admin