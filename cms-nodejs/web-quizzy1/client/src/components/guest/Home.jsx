import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowForward, IoLogoGameControllerA } from "react-icons/io";
import { RiSparklingFill } from "react-icons/ri";
import { FaCheck, FaGlasses, FaUserClock } from "react-icons/fa6";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FiFilePlus } from "react-icons/fi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { AiOutlineBarChart } from "react-icons/ai";
import { PiBooksLight } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    

    const [isOpen, setIsOpen] = useState('true');
    const [isOpen1, setIsOpen1] = useState();
    const [isOpen2, setIsOpen2] = useState();
    const [isOpen3, setIsOpen3] = useState('true');
    const [isOpen4, setIsOpen4] = useState();
    const [isOpen5, setIsOpen5] = useState();
    // const [colorChange, setColorChange] = useState('');

    const onClickQuestion = () => {
        setIsOpen(true);
        setIsOpen1(false);
        setIsOpen2(false);
    }

    const onClickBolt = () => {
        setIsOpen(false);
        setIsOpen1(true);
        setIsOpen2(false);
    }

    const onClickAward = () => {
        setIsOpen(false);
        setIsOpen1(false);
        setIsOpen2(true);
    }

    const onClickLesson = () => {
        setIsOpen3(true);
        setIsOpen4(false);
        setIsOpen5(false);
    }

    const onClickWheel = () => {
        setIsOpen3(false);
        setIsOpen4(true);
        setIsOpen5(false);
    }

    const onClickWhiteboard = () => {
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen5(true);
    }

    // change color for text
    const [color, setColor] = useState('text-blue-500');
    useEffect(() => {
        const interval = setInterval(() => {
            setColor((prevColor) => (prevColor === 'text-blue-500' ? 'text-red-500' : 'text-blue-500'));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const settings = {
        
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        prevArrow: (
            <button type="button" size={24} className="slick-prev h-24 w-24">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        ),
        nextArrow: (
            <button type="button" size={24} className="slick-next">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        ),
    };
    // const [isClicked, setIsClicked] = useState();
    const sectionRef1 = useRef(null);
    const scrollToSection1 = () => {
        sectionRef1.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', });
    };
    const sectionRef2 = useRef(null);
    const scrollToSection2 = () => {
        sectionRef2.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', });
    };
    const sectionRef3 = useRef(null);
    const scrollToSection3 = () => {
        sectionRef3.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };
    // const handleClick1 = () => {
    //     setIsClicked(true);
    //     scrollToSection1();
    // };
    // const handleClick2 = () => {
    //     setIsClicked(true);
    //     scrollToSection2();
    // };
    // const handleClick3 = () => {
    //     setIsClicked(true);
    //     scrollToSection3();
    // };

    return (
        <div className='w-full h-auto flex flex-col'>

            {/* Header */}
            <div className='flex flex-col justify-center items-center mt-48'>
                <h1 className='text-7xl font-bold text-center py-2'>
                    It matters <span className={`${color} bg-opacity-50 transition-colors duration-500`}> how you ask </span>
                </h1>
                <img className='ml-96' src="https://quizizz.com/wf/assets/62fa6419161d3ab145681ca9_Red_420px_Line.svg" alt="line-1" />
                <p className='text-xl text-center py-2'>
                    Assessment, instruction, and practice that motivate every <br /> student—now enhanced with AI
                </p>
                <div className='flex flex-row justify-center gap-5 mt-5 mb-6'>
                    <button className='h-16 w-48 rounded-lg shadow-lg bg-[#8150B7] p-4 flex flex-col justify-center transform transition-transform duration-200 hover:translate-y-1 hover:shadow-2xl'>
                        <p className='font-bold text-white text-xs text-opacity-50 tracking-widest'>TEACHERS</p>
                        <div className='flex flex-row items-center gap-1 '>
                            <p className='text-lg text-white font-medium text-opacity-90' >Sign up for free</p>
                            <IoIosArrowForward size={20} className='text-white text-opacity-90' />
                        </div>
                    </button>
                    <button className='h-16 w-48 rounded-lg shadow-lg bg-gray-100 bg-opacity-95 p-4 flex flex-col justify-center transform transition-transform duration-200 hover:translate-y-1 hover:shadow-2xl'>
                        <p className='font-bold text-[#8150B7] text-xs text-opacity-50 tracking-widest'>ADMINS</p>
                        <div className='flex flex-row items-center gap-1'>
                            <p className='text-lg text-purple-900 text-opacity-90 font-medium'>Learn more</p>
                            <IoIosArrowForward size={20} className='text-purple-900 text-opacity-90' />
                        </div>
                    </button>
                </div>
                <div className='rounded-full flex items-center justify-center py-2 px-4 gap-3 bg-[#EDE6F6] w-auto'>
                    <RiSparklingFill className='text-[#8150B7]' size={20} />
                    <p className='text-lg font-semibold'>
                        Quizizz: Now empowering corporate trainers! <span className='text-lg font-medium text-[#8150B7]'>Explore now</span>
                    </p>
                </div>
                <div className='flex justify-center items-center gap-3 py-5'>
                    <FaCheck size={24} className='text-[#8150B7]' />
                    <p className='text-lg'>
                        <span className='font-semibold'> Used by 50 million+ educators and students </span> around the world</p>
                </div>
            </div>

            {/* certificates */}
            <div className='flex justify-center my-10'>
                <img className='max-w-screen-md' src="https://quizizz.com/wf/assets/6501a46f763d217ede2fac83_LOGOs_hidef.webp" alt="cert" />
            </div>

            {/* carousel */}
            {/* <Slider className='w-[75%] mx-auto' {...settings}>

            </Slider> */}
            <div className='w-full h-auto px-20 py-10 flex flex-row justify-center'>
                <Slider className='w-full h-auto  px-20 py-10 grid-cols-1 flex justify-between max-w-screen-xl' {...settings}>
                    <div className='flex flex-col p-6 h-[400px] bg-white rounded-xl border border-x-2 border-pink-500 '>
                        <div className='flex flex-row gap-5 mb-5'>
                            <img className='w-20 h-20 object-contain rounded-lg' src="https://quizizz.com/wf/assets/64f98a5134cd09847c7b3d2e_63340b96b33bb55480b15023_Yvette.webp" alt="" />
                            <div className='flex flex-col justify-center'>
                                <p>Yvette Switzer</p>
                                <p>4th Grade Teacher</p>
                            </div>
                        </div>
                        <p className='text-justify'>
                            “I use Quizizz to reinforce and check understanding after we've covered a concept pretty thoroughly. I use it in stations. I use it for tutoring. I also use it to review and prepare my students for benchmark and state tests. They love it every time.”
                        </p>
                    </div>
                    <div className='flex flex-col p-5 h-[400px] bg-white rounded-xl border border-x-2 border-cyan-500'>
                        <div className='flex flex-row gap-5 mb-5'>
                            <img className='w-20 h-20 object-contain rounded-lg' src="https://quizizz.com/wf/assets/64f98a5134cd09847c7b3d2e_63340b96b33bb55480b15023_Yvette.webp" alt="" />
                            <div className='flex flex-col justify-center'>
                                <p>Yvette Switzer</p>
                                <p>4th Grade Teacher</p>
                            </div>
                        </div>
                        <p className='text-justify'>
                            “I use Quizizz to reinforce and check understanding after we've covered a concept pretty thoroughly. I use it in stations. I use it for tutoring. I also use it to review and prepare my students for benchmark and state tests. They love it every time.”
                        </p>
                    </div>
                    <div className='flex flex-col p-5 h-[400px] bg-white rounded-xl border border-x-2 border-yellow-500'>
                        <div className='flex flex-row gap-5 mb-5'>
                            <img className='w-20 h-20 object-contain rounded-lg' src="https://quizizz.com/wf/assets/64f98a5134cd09847c7b3d2e_63340b96b33bb55480b15023_Yvette.webp" alt="" />
                            <div className='flex flex-col justify-center'>
                                <p>Yvette Switzer</p>
                                <p>4th Grade Teacher</p>
                            </div>
                        </div>
                        <p className='text-justify'>
                            “I use Quizizz to reinforce and check understanding after we've covered a concept pretty thoroughly. I use it in stations. I use it for tutoring. I also use it to review and prepare my students for benchmark and state tests. They love it every time.”
                        </p>
                    </div>
                    <div className='flex flex-col p-5 h-[400px] bg-white rounded-xl border border-x-2 border-purple-500'>
                        <div className='flex flex-row gap-5 mb-5'>
                            <img className='w-20 h-20 object-contain rounded-lg' src="https://quizizz.com/wf/assets/64f98a5134cd09847c7b3d2e_63340b96b33bb55480b15023_Yvette.webp" alt="" />
                            <div className='flex flex-col justify-center'>
                                <p>Yvette Switzer</p>
                                <p>4th Grade Teacher</p>
                            </div>
                        </div>
                        <p className='text-justify'>
                            “I use Quizizz to reinforce and check understanding after we've covered a concept pretty thoroughly. I use it in stations. I use it for tutoring. I also use it to review and prepare my students for benchmark and state tests. They love it every time.”
                        </p>
                    </div>
                    <div className='flex flex-col p-5 h-[400px] bg-white rounded-xl border border-x-2 border-blue-500'>
                        <div className='flex flex-row gap-5 mb-5'>
                            <img className='w-20 h-20 object-contain rounded-lg' src="https://quizizz.com/wf/assets/64f98a5134cd09847c7b3d2e_63340b96b33bb55480b15023_Yvette.webp" alt="" />
                            <div className='flex flex-col justify-center'>
                                <p>Yvette Switzer</p>
                                <p>4th Grade Teacher</p>
                            </div>
                        </div>
                        <p className='text-justify'>
                            “I use Quizizz to reinforce and check understanding after we've covered a concept pretty thoroughly. I use it in stations. I use it for tutoring. I also use it to review and prepare my students for benchmark and state tests. They love it every time.”
                        </p>
                    </div>
                    <div className='flex flex-col p-5 h-[400px] bg-white rounded-xl border border-x-2 border-pink-500'>
                        <div className='flex flex-row gap-5 mb-5'>
                            <img className='w-20 h-20 object-contain rounded-lg' src="https://quizizz.com/wf/assets/64f98a5134cd09847c7b3d2e_63340b96b33bb55480b15023_Yvette.webp" alt="" />
                            <div className='flex flex-col justify-center'>
                                <p>Yvette Switzer</p>
                                <p>4th Grade Teacher</p>
                            </div>
                        </div>
                        <p className='text-justify'>
                            “I use Quizizz to reinforce and check understanding after we've covered a concept pretty thoroughly. I use it in stations. I use it for tutoring. I also use it to review and prepare my students for benchmark and state tests. They love it every time.”
                        </p>
                    </div>
                    <div className='flex flex-col p-5 h-[400px] bg-white rounded-xl border border-x-2 border-cyan-500'>
                        <div className='flex flex-row gap-5 mb-5'>
                            <img className='w-20 h-20 object-contain rounded-lg' src="https://quizizz.com/wf/assets/64f98a5134cd09847c7b3d2e_63340b96b33bb55480b15023_Yvette.webp" alt="" />
                            <div className='flex flex-col justify-center'>
                                <p>Yvette Switzer</p>
                                <p>4th Grade Teacher</p>
                            </div>
                        </div>
                        <p className='text-justify'>
                            “I use Quizizz to reinforce and check understanding after we've covered a concept pretty thoroughly. I use it in stations. I use it for tutoring. I also use it to review and prepare my students for benchmark and state tests. They love it every time.”
                        </p>
                    </div>
                    <div className='flex flex-col p-5 h-[400px] bg-white rounded-xl border border-x-2 border-yellow-500'>
                        <div className='flex flex-row gap-5 mb-5'>
                            <img className='w-20 h-20 object-contain rounded-lg' src="https://quizizz.com/wf/assets/64f98a5134cd09847c7b3d2e_63340b96b33bb55480b15023_Yvette.webp" alt="" />
                            <div className='flex flex-col justify-center'>
                                <p>Yvette Switzer</p>
                                <p>4th Grade Teacher</p>
                            </div>
                        </div>
                        <p className='text-justify'>
                            “I use Quizizz to reinforce and check understanding after we've covered a concept pretty thoroughly. I use it in stations. I use it for tutoring. I also use it to review and prepare my students for benchmark and state tests. They love it every time.”
                        </p>
                    </div>
                    <div className='flex flex-col p-5 h-[400px] bg-white rounded-xl border border-x-2 border-yellow-500'>
                        <div className='flex flex-row gap-5 mb-5'>
                            <img className='w-20 h-20 object-contain rounded-lg' src="https://quizizz.com/wf/assets/64f98a5134cd09847c7b3d2e_63340b96b33bb55480b15023_Yvette.webp" alt="" />
                            <div className='flex flex-col justify-center'>
                                <p>Yvette Switzer</p>
                                <p>4th Grade Teacher</p>
                            </div>
                        </div>
                        <p className='text-justify'>
                            “I use Quizizz to reinforce and check understanding after we've covered a concept pretty thoroughly. I use it in stations. I use it for tutoring. I also use it to review and prepare my students for benchmark and state tests. They love it every time.”
                        </p>
                    </div>





                    {/* Add more slides as needed */}
                </Slider>
            </div>

            {/* Quizzy for schools and districts */}
            <div name='sectionId' id='sectionId' className='max-w-7xl mx-auto h-auto mt-14 py-20 px-10 flex items-center space-x-20 bg-[#E1CDDE] rounded-2xl'>
                <div className='px-10 ml-5 flex flex-col gap-5 w-1/2'>
                    <div className='flex items-center justify-between px-4'>
                        <img className='h-16' src="https://quizizz.com/wf/assets/63338fcc38b4fd01b7ea6d98_Group_40420-min.png" alt="logo1" />
                        <img className='h-12' src="https://quizizz.com/wf/assets/63338fe437f56002b90ea11d_logos-4-min.png" alt="logo2" />
                        <img className='h-16' src="https://quizizz.com/wf/assets/63338fffa81889035b01fc5f_logos-5-min.png" alt="logo3" />
                        <img className='h-14' src="https://quizizz.com/wf/assets/6333901d15649b4978ce09c0_logos-6-min.png" alt="logo4" />
                    </div>
                    <div className='flex items-center justify-between px-4'>
                        <img className='h-12' src="https://quizizz.com/wf/assets/63339041b4e2687711bf130b_logos-3-min.png" alt="logo5" />
                        <img className='h-16' src="https://quizizz.com/wf/assets/63339052fe94d09e5526c7d6_logos-2-min.png" alt="logo6" />
                        <img className='h-20' src="https://quizizz.com/wf/assets/63339063b8bd9810c0c46011_logos-1-min.png" alt="logo7" />
                        <img className='h-16' src="https://quizizz.com/wf/assets/6333907207f835db2f5867fc_logos-min.png" alt="logo8" />
                    </div>
                </div>
                <div className='flex flex-col items-start gap-10 w-1/2'>
                    <p className='text-5xl font-semibold'>See why administrators love Quizzy for their teachers and students.</p>
                    <button className='bg-purple-500 text-white text-lg font-semibold rounded-md hover:translate-y-1 shadow-xl hover:shadow-none px-8 py-4'>
                        <div className='flex gap-3 items-center'>
                            <p>Quizzy for schools and districts</p>
                            <IoIosArrowForward size={24} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Explore Quizzy for work */}
            <div className='max-w-7xl mx-auto h-auto mt-14 py-20 px-10 flex items-center space-x-20 bg-[#E7D5FF] rounded-2xl'>
                <img className='w-1/2' src="https://quizizz.com/wf/assets/64c5f50a4898da1574f4e06b_LogosQFW.png" alt="more-logo" />
                <div className='w-1/2 flex flex-col items-start gap-10'>
                    <p className='text-5xl font-semibold'>Bring the fun back to corporate trainings with Quizzy for work</p>
                    <button className='bg-purple-500 text-white text-lg font-semibold rounded-md hover:translate-y-1 shadow-xl hover:shadow-none px-8 py-4'>
                        <div className='flex gap-3 items-center'>
                            <p>Explore Quizzy for Work</p>
                            <IoIosArrowForward size={24} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Trusted by teachers */}
            <div className='max-w-6xl mx-auto h-auto my-20 flex flex-col justify-center space-y-10'>
                <div className='flex flex-col justify-center items-center space-y-1'>
                    <p className='text-6xl font-bold text-[#212121]'>Trusted by teachers in</p>
                    <p className='text-6xl font-bold text-[#EFA929]'>90% of U.S. Schools</p>
                    <img className='scale-125' src="https://quizizz.com/wf/assets/62fa641a161d3a7537681cf7_Yellow_448px.svg" alt="" />
                </div>
                <div className='flex space-x-4'>
                    <div className='flex flex-col space-y-10 items-center'>
                        <img className='w-32 h-32' src="https://quizizz.com/wf/assets/62fbfabe439c68667fe6896a_VectoriseIcons_MarketingWebsite-04.svg" alt="clock" />
                        <p className='text-center text-xl font-medium text-[#212121] tracking-wide'>Save teachers <span className='font-extrabold text-fuchsia-700 tracking-normal'> 3.5 </span> <br /> hrs/week<sup className="text-xs">(1)</sup> </p>
                    </div>
                    <img className='w-48 h-48' src="https://quizizz.com/wf/assets/62fa641a161d3af10c681d0a_Yellow_Arrow.svg" alt="arrow-1" />
                    <div className='flex flex-col space-y-10 mt-20 items-center'>
                        <img className='w-32 h-32' src="https://quizizz.com/wf/assets/62fbfabcdadc300b7afb716e_VectoriseIcons_MarketingWebsite-02.svg" alt="list" />
                        <p className='text-center text-xl font-medium text-[#212121] tracking-wide'>Improve test scores by up <br /> to <span className='font-extrabold text-fuchsia-700 tracking-normal'>50%</span><sup className="text-xs">(2)</sup> </p>
                    </div>
                    <img className='w-48 h-48' src="https://quizizz.com/wf/assets/62fa641a161d3aa501681cf6_Yellow_Arrow_2.svg" alt="arrow-2" />
                    <div className='flex flex-col space-y-10 items-center'>
                        <img className='w-32 h-32' src="https://quizizz.com/wf/assets/63067295229d7a743ba690ff_Balloon_Anxiety.svg" alt="balloon" />
                        <p className='text-center text-xl font-medium text-[#212121] tracking-wide'>Reduce test-taking <br /> anxiety<sup className="text-xs">(3)</sup> </p>
                    </div>
                </div>
            </div>

            {/* create - include - get */}
            {/* create - include - get button */}
            <div className='max-w-7xl mx-auto h-auto flex bg-gray-100 rounded-lg p-1'>
                <button
                    className={`bg-transparent w-[425px] text-xl text-black font-bold flex justify-center items-center py-4 rounded-lg transition-all duration-500`}
                    onClick={scrollToSection1}
                >
                    <div className='flex items-center gap-4'>
                        <p>Create & Customize</p>
                        <FiFilePlus size={28} />
                    </div>

                </button>
                <button
                    className="bg-fuchsia-500 w-[425px] text-xl font-bold flex justify-center items-center py-4 rounded-lg"
                    onClick={scrollToSection2}
                >
                    <div className='flex items-center gap-4'>
                        <p>Include & Engage</p>
                        <HiMiniUserGroup size={28} />
                    </div>
                </button>
                <button
                    className="bg-blue-500 w-[425px] text-xl font-bold flex justify-center items-center py-4 rounded-lg"
                    onClick={scrollToSection3}
                >
                    <div className='flex items-center gap-4'>
                        <p>Get Data</p>
                        <AiOutlineBarChart size={28} />
                    </div>
                </button>
            </div>
            {/* create & customize */}
            <div ref={sectionRef1} className='max-w-7xl mx-28 flex flex-col h-auto'>
                <div className='h-[96px] bg-transparent'></div>
                <div className='w-full h-auto flex justify-between gap-20 p-1'>
                    <div className='w-2/5 flex flex-col items-end p-2'>
                        <p className='text-5xl font-bold mb-5'><span className='text-blue-500'>Quickly find or create </span>anything in your curriculum</p>
                        <p className='text-lg mb-5'>Prepare high-quality, interactive content in as little as two minutes.</p>
                        <div className='flex flex-col space-y-5'>
                            <div className='flex items-start space-x-4'>
                                <PiBooksLight size={32} className='w-[10%] text-blue-500' />
                                <div className='w-[90%] flex flex-col space-y-3'>
                                    <p className='font-bold text-lg'>Customizable content library</p>
                                    <p className='text-lg'>30M+ teacher-created activities spanning all grade levels and subjects</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-4'>
                                <FaEdit size={24} className='w-[10%] text-blue-500' />
                                <div className='w-[90%] flex flex-col space-y-3'>
                                    <p className='font-bold text-lg'>Create, copy, or edit</p>
                                    <p className='text-lg'>Build from scratch, copy entire activities, or mix and match to meet students’ needs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/5 flex items-end justify-center'>
                        <img
                            className='w-full'
                            src="https://quizizz.com/wf/assets/632a2c2c8adda7ed0e12491c_Unique (1)-poster-00001.jpg"
                            alt="create&customize"
                        />
                    </div>
                </div>
            </div>

            {/* include & engage */}
            <div ref={sectionRef2} className='max-w-7xl mx-28 flex flex-col h-auto'>
                <div className='h-[96px] bg-transparent'></div>
                <div className='w-full h-auto flex justify-between gap-20 p-1'>
                    <div className='w-2/5 flex flex-col items-end p-2'>
                        <p className='text-5xl font-bold mb-5'>Include and engage <span className='text-fuchsia-500'>every student</span></p>
                        <p className='text-lg mb-5'>Flexibly engage students at their own pace, from any device.</p>
                        <div className='flex flex-col space-y-5'>
                            <div className='flex items-start space-x-4'>
                                <FaGlasses size={28} className='w-[10%] text-fuchsia-500' />
                                <div className='w-[90%] flex flex-col space-y-3'>
                                    <p className='font-bold text-lg'>Inclusive, accessible design</p>
                                    <p className='text-lg'>Enable Read Aloud for elementary and ELL students</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-4'>
                                <IoLogoGameControllerA size={32} className='w-[10%] text-fuchsia-500' />
                                <div className='w-[90%] flex flex-col space-y-3'>
                                    <p className='font-bold text-lg'>Gamification for good</p>
                                    <p className='text-lg'>A leaderboard, themes, music, and more to motivate students</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/5 flex items-end justify-center'>
                        <img
                            className='w-full'
                            src="https://quizizz.com/wf/assets/64f5b0963efaa4030e778e9f_63339124c299bb0fb4f8c452_Group_482935-min.webp"
                            alt="include&engage"
                        />
                    </div>
                </div>
            </div>

            {/* get data */}
            <div ref={sectionRef3} className='max-w-7xl mx-28 flex flex-col h-auto'>
                <div className='h-[96px] bg-transparent'></div>
                <div className='w-full h-auto flex justify-between gap-20 p-1'>
                    <div className='w-2/5 flex flex-col p-2'>
                        <p className='text-5xl font-bold mb-5'>Get data that’s <span className='text-blue-500'>easy to act on</span></p>
                        <p className='text-lg mb-5'>The exact insights you need to make data-driven instruction a reality.</p>
                        <div className='flex flex-col space-y-5'>
                            <div className='flex items-start space-x-4'>
                                <FaUserClock size={24} className='w-[10%] text-blue-500' />
                                <div className='w-[90%] flex flex-col space-y-3'>
                                    <p className='font-bold text-lg'>Real-time insights</p>
                                    <p className='text-lg'>Identify student’s needs and immediately adapt</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-4'>
                                <TbReportAnalytics size={32} className='w-[10%] text-blue-500' />
                                <div className='w-[90%] flex flex-col space-y-3'>
                                    <p className='font-bold text-lg'>Snapshot reports</p>
                                    <p className='text-lg'>See overall class performance, the toughest question or topic, and individual progress</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/5 flex items-end justify-center'>
                        <img
                            className='w-full'
                            src="https://quizizz.com/wf/assets/64f5b15937f3c9809b8db626_6333921d3b3392cd0cfc3681_Group_482936-min.webp"
                            alt="getdata"
                        />
                    </div>
                </div>
            </div>

            {/* assessment and practice */}
            <div className='bg-[#242424] flex justify-center py-10 px-20'>
                <div className='w-[40%] flex flex-col mr-20'>
                    <p className='font-extrabold mb-3 tracking-wider text-gray-300 text-xl'>ASSESSMENT AND PRACTICE</p>
                    <p className='text-6xl font-medium text-white mb-6'> <span className='text-[#EFA929] font-bold'>Beyond</span> multiple choice</p>
                    <div onClick={() => onClickQuestion()} className={`flex flex-col items-center px-3 py-2 gap-3 cursor-pointer ${isOpen ? "bg-[#333333]" : "bg-transparent"}`}>
                        {isOpen ? (
                            <div className='flex flex-col gap-3 bg-[#333333] px-3 py-2 my-2'>
                                <div className='flex items-center gap-3'>
                                    <img src="https://quizizz.com/wf/assets/6306738a1a15fcdb658d3bac_message-question_yellow.svg" alt="question" />
                                    <p className='text-white font-bold text-2xl'>Every question type</p>
                                </div>
                                <div className='w-full flex justify-center text-xl text-white'>
                                    Engage students with question types at every level of Bloom's taxonomy.
                                </div>
                            </div>
                        ) : (
                            <div className='w-full flex justify-start items-center p-2 gap-3 bg-transparent my-3 border-b-2 border-b-gray-600'>
                                <img className='w-10 h-10 object-contain' src="https://www.svgrepo.com/show/471686/message-question-square.svg" alt="question" />
                                <p className='text-gray-200 font-bold text-2xl'>Every question type</p>
                            </div>
                        )
                        }
                    </div>
                    <div onClick={() => onClickBolt()} className={`flex flex-col items-center px-3 py-2 gap-3 cursor-pointer ${isOpen1 ? "bg-[#333333]" : "bg-transparent"}`}>
                        {isOpen1 ? (
                            <div className='flex flex-col gap-3 bg-[#333333] px-3 py-2 my-2'>
                                <div className='flex items-center gap-3'>
                                    <img src="https://quizizz.com/wf/assets/630673099142af0d3c011842_square-bolt_yellow.svg" alt="thunder" />
                                    <p className='text-white font-bold text-2xl'>Powerful micro-motivators</p>
                                </div>
                                <div className='w-full flex justify-center text-xl text-white'>
                                    Redemption Questions and Power-Ups drive multiple retakes and mastery-in class and at home.
                                </div>
                            </div>
                        ) : (
                            <div className='w-full flex justify-start items-center p-2 gap-3 bg-transparent my-3 border-b-2 border-b-gray-600'>
                                <img className='w-10 h-10 object-contain' src="https://www.svgrepo.com/show/436655/bolt-circle-fill.svg" alt="award" />
                                <p className='text-gray-200 font-bold text-2xl'>Powerful micro-motivators</p>
                            </div>
                        )}
                    </div>
                    <div onClick={() => onClickAward()} className={`flex flex-col items-center px-3 py-2 gap-3 cursor-pointer ${isOpen2 ? "bg-[#333333]" : "bg-transparent"}`}>
                        {isOpen2 ? (
                            <div className='flex flex-col gap-3 bg-[#333333] px-3 py-2 my-2'>
                                <div className='flex items-center gap-3'>
                                    <img className='text-yellow-500' src="https://quizizz.com/wf/assets/62fa6419161d3a68ed681ce8_Award_-_Yellow.svg" alt="question" />
                                    <p className='text-white font-bold text-2xl'>Low stakes competition</p>
                                </div>
                                <div className='w-full flex justify-center text-xl text-white'>
                                    Promote friendly competition and get every student to participate, not just the loudest and the fastest.
                                </div>
                            </div>
                        ) : (
                            <div className='w-full flex justify-start items-center p-2 gap-3 bg-transparent my-3 border-b-2 border-b-gray-600'>
                                <img className='w-10 h-10 object-contain' src="https://www.svgrepo.com/show/532901/award.svg" alt="question" />
                                <p className='text-gray-200 font-bold text-2xl'>Low stakes competition</p>
                            </div>
                        )}
                    </div>
                </div>
                <img
                    className='w-[60%] py-10 object-contain'
                    src="https://quizizz.com/wf/assets/62ffd7d3b946fc53847c7e6d_Animation_3_6-poster-00001.jpg"
                    alt="assessment-question"
                />
            </div>

            {/* instruction */}
            <div className='bg-white flex justify-center py-10 px-20'>
                <div className='w-[40%] flex flex-col mr-20'>
                    <p className='font-extrabold mb-3 tracking-wider text-gray-600 text-xl'>INSTRUCTION</p>
                    <p className='text-6xl font-medium text-black mb-6'> <span className='text-[#2D9DA6] font-bold'>Beyond</span> quizzes </p>
                    <div onClick={() => onClickLesson()} className={`flex flex-col items-center px-3 py-2 gap-3 cursor-pointer ${isOpen ? "bg-[#F3F3F3]" : "bg-transparent"}`}>
                        {isOpen3 ? (
                            <div className='flex flex-col gap-3 bg-[#F3F3F3] px-3 py-2 my-2'>
                                <div className='flex items-center gap-3'>
                                    <img src="https://quizizz.com/wf/assets/6306738a1a15fcdb658d3bac_message-question_yellow.svg" alt="question" />
                                    <p className='text-black font-bold text-2xl'>Interactive lessons</p>
                                </div>
                                <div className='w-full flex justify-center text-xl text-black'>
                                    Easily embed images and video, import existing slides, and seamlessly blend in assessment.
                                </div>
                            </div>
                        ) : (
                            <div className='w-full flex justify-start items-center p-2 gap-3 bg-transparent my-3 border-b-2 border-b-gray-400'>
                                <img className='w-10 h-10 object-contain' src="https://www.svgrepo.com/show/471686/message-question-square.svg" alt="lesson" />
                                <p className='text-gray-400 font-bold text-2xl'>Interactive lessons</p>
                            </div>
                        )
                        }
                    </div>
                    <div onClick={() => onClickWheel()} className={`flex flex-col items-center px-3 py-2 gap-3 cursor-pointer ${isOpen1 ? "bg-[#F3F3F3]" : "bg-transparent"}`}>
                        {isOpen4 ? (
                            <div className='flex flex-col gap-3 bg-[#F3F3F3] px-3 py-2 my-2'>
                                <div className='flex items-center gap-3'>
                                    <img src="https://quizizz.com/wf/assets/630673099142af0d3c011842_square-bolt_yellow.svg" alt="thunder" />
                                    <p className='text-black font-bold text-2xl'>Spin the wheel</p>
                                </div>
                                <div className='w-full flex justify-center text-xl text-black'>
                                    Take the stress out of cold calls and make it fun for students to share what they know.
                                </div>
                            </div>
                        ) : (
                            <div className='w-full flex justify-start items-center p-2 gap-3 bg-transparent my-3 border-b-2 border-b-gray-400'>
                                <img className='w-10 h-10 object-contain' src="https://www.svgrepo.com/show/436655/bolt-circle-fill.svg" alt="wheel" />
                                <p className='text-gray-400 font-bold text-2xl'>Spin the wheel</p>
                            </div>
                        )}
                    </div>
                    <div onClick={() => onClickWhiteboard()} className={`flex flex-col items-center px-3 py-2 gap-3 cursor-pointer ${isOpen2 ? "bg-[#F3F3F3]" : "bg-transparent"}`}>
                        {isOpen5 ? (
                            <div className='flex flex-col gap-3 bg-[#F3F3F3] px-3 py-2 my-2'>
                                <div className='flex items-center gap-3'>
                                    <img className='text-yellow-500' src="https://quizizz.com/wf/assets/62fa6419161d3a68ed681ce8_Award_-_Yellow.svg" alt="whiteboard" />
                                    <p className='text-black font-bold text-2xl'>Whiteboard</p>
                                </div>
                                <div className='w-full flex justify-center text-xl text-black'>
                                    Enable real-time insights and check for understanding during instructions.
                                </div>
                            </div>
                        ) : (
                            <div className='w-full flex justify-start items-center p-2 gap-3 bg-transparent my-3 border-b-2 border-b-gray-400'>
                                <img className='w-10 h-10 object-contain' src="https://www.svgrepo.com/show/532901/award.svg" alt="question" />
                                <p className='text-gray-400 font-bold text-2xl'>Whiteboard</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='relative w-[60%] py-10 pl-5 flex flex-col items-start justify-end'>
                    <img
                        className='w-full object-contain'
                        src="https://quizizz.com/wf/assets/64f6d64977ade53deb4d94cd_6333995b5cbe41c32606ffba_Surface_Pro_8_-_13-min.webp"
                        alt="instruction-lesson-1"
                    />
                    <img
                        className='absolute z-10 w-1/2 h-1/4 object-contain -translate-x-5'
                        src="https://quizizz.com/wf/assets/64f6d6578dcca1b7d38bcfed_6333a4ea38b4fd5375eba022_Group_40512-min.webp"
                        alt="instruction-lesson-2" />
                </div>

            </div>

            {/* 30M quizzes */}
            <div className='w-full py-16 bg-[#E1CDDE] flex gap-16 justify-center'>
                <div className='flex flex-col bg-transparent items-center gap-5'>
                    <p className='text-7xl text-blue-500 font-extrabold'>30M+</p>
                    <p className='text-xl'>Quizzes and Lessons</p>
                </div>
                <div className='flex flex-col bg-transparent items-center gap-6'>
                    <p className='text-4xl text-fuchsia-500 font-bold'>
                        <span className='text-7xl'>A</span>
                        lgebra to&nbsp;
                        <span className='text-7xl'>Z</span>
                        oology
                    </p>
                    <p className='text-xl'>Subject and Topics</p>
                </div>
                <div className='flex flex-col bg-transparent items-center gap-5'>
                    <p className='text-7xl text-teal-500 font-extrabold'>K-12+</p>
                    <p className='text-xl'>Grades-Levels</p>
                </div>
            </div>

            {/* start motivating students */}
            <div className='w-full bg-[#333333] flex gap-10 py-10 px-20'>
                <div className='w-1/2 flex flex-col justify-center items-start gap-8'>
                    <p className='text-white text-xl'> The best way to ask questions, explore ideas, and let students show what they know.</p>
                    <p className='text-white text-6xl font-bold'>Start motivating students. <span className='text-yellow-500'>In minutes.</span> </p>
                    <div className='flex gap-3'>
                        <button className='h-16 w-48 shadow-md rounded-lg border-b-4 border-b-yellow-900 bg-yellow-500 p-4 flex flex-col justify-center transform transition-transform duration-400 hover:translate-y-1 hover:border-b-0'>
                            <p className='font-bold text-white text-xs text-opacity-50 tracking-widest'>TEACHERS</p>
                            <div className='flex flex-row items-center gap-1 '>
                                <p className='text-lg text-white font-medium text-opacity-90' >Sign up for free</p>
                                <IoIosArrowForward size={20} className='text-white text-opacity-90' />
                            </div>
                        </button>
                        <button className='h-16 w-48 rounded-lg shadow-md border-b-4 border-b-gray-700 bg-gray-100 bg-opacity-95 p-4 flex flex-col justify-center transform transition-transform duration-400 hover:translate-y-1 hover:border-b-0'>
                            <p className='font-bold text-[#8150B7] text-xs text-opacity-50 tracking-widest'>ADMINISTRATORS</p>
                            <div className='flex flex-row items-center gap-1'>
                                <p className='text-lg text-purple-900 text-opacity-90 font-medium'>Learn more</p>
                                <IoIosArrowForward size={20} className='text-purple-900 text-opacity-90' />
                            </div>
                        </button>
                    </div>
                </div>
                <img loading='lazy' className='w-1/2' src="https://quizizz.com/wf/assets/64f6d6f262069b42407b43db_6333fb9ca08e3adffcfc663b_Funding_CTA_Image.webp" alt="student-motivate-pic" />
            </div>

            {/* test
            <div className="my-4 p-4 bg-gray-200 transition-all duration-500 ease-in-out">
                <h2>Section Title</h2>
                <p>Section content goes here...</p>
            </div> */}
        </div>
    )
}

export default Home