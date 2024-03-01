import React, { useContext, useState } from 'react'
import logo from '../../assets/logo-3.png'
import { FaHome } from 'react-icons/fa'
import { RiGroupLine } from "react-icons/ri";
import { LuFolder } from 'react-icons/lu'
import { AiOutlineBars } from 'react-icons/ai'
import { GoGraph } from 'react-icons/go'
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineQuestion } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { AuthContext } from '../../AuthProvider';

const Menu = (props) => {
    const {userInfo} = useContext(AuthContext);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    const nav = useNavigate();
    function goToAdminHome() {
        nav("/admin");
    }
    function goToAddUsers() {
        nav("/admin/addUsers");
    }
    function goToLibrary() {
        nav("/admin/myLibrary");
    }
    function goToCourses() {
        nav("/admin/courses");
    }
    function goToReports() {
        nav("/admin/reports");
    }
    function goToGroup() {
        nav("/admin/groups");
    }
    function goToSetting() {
        nav("/admin/setting");
    }
    function goToSupport() {
        nav("/admin/support");
    }
    // function gotoHome() {
    //     nav("/");
    // }
    
    const tab = props.menu;
    const styleMenu1 = tab === "tab1" ? "hover:bg-purple-100" : "hover:bg-gray-200";
    const styleMenu2 = tab === "tab2" ? "hover:bg-purple-100" : "hover:bg-gray-200";
    const styleMenu3 = tab === "tab3" ? "hover:bg-purple-100" : "hover:bg-gray-200";
    const styleMenu4 = tab === "tab4" ? "hover:bg-purple-100" : "hover:bg-gray-200";
    const styleMenu5 = tab === "tab5" ? "hover:bg-purple-100" : "hover:bg-gray-200";
    const styleMenu6 = tab === "tab6" ? "hover:bg-purple-100" : "hover:bg-gray-200";
    const styleMenu7 = tab === "tab7" ? "hover:bg-purple-100" : "hover:bg-gray-200";
    const styleMenu8 = tab === "tab8" ? "hover:bg-purple-100" : "hover:bg-gray-200";
    const styleMenu9 = tab === "tab9" ? "hover:bg-purple-100" : "hover:bg-gray-200";

    const tab2 = props.text;
    const styleText1 = tab2 === "tab1" ? "text-purple-400 font-semibold" : "text-gray-600";
    const styleText2 = tab2 === "tab2" ? "text-purple-400 font-semibold" : "text-gray-600";
    const styleText3 = tab2 === "tab3" ? "text-purple-400 font-semibold" : "text-gray-600 ";
    const styleText4 = tab2 === "tab4" ? "text-purple-400 font-semibold" : "text-gray-600 ";
    const styleText5 = tab2 === "tab5" ? "text-purple-400 font-semibold" : "text-gray-600 ";
    const styleText6 = tab2 === "tab6" ? "text-purple-400 font-semibold" : "text-gray-600 ";
    const styleText7 = tab2 === "tab7" ? "text-purple-400 font-semibold" : "text-gray-600 ";
    const styleText8 = tab2 === "tab8" ? "text-purple-400 font-semibold" : "text-gray-600 ";
    const styleText9 = tab2 === "tab9" ? "text-purple-400 font-semibold" : "text-gray-600 ";

    const tab3 = props.deco;
    const styleDeco1 = tab3 === "tab1" ? "bg-purple-400" : "bg-transparent";
    const styleDeco2 = tab3 === "tab2" ? "bg-purple-400" : "bg-transparent";
    const styleDeco3 = tab3 === "tab3" ? "bg-purple-400" : "bg-transparent";
    const styleDeco4 = tab3 === "tab4" ? "bg-purple-400" : "bg-transparent";
    const styleDeco5 = tab3 === "tab5" ? "bg-purple-400" : "bg-transparent";
    const styleDeco6 = tab3 === "tab6" ? "bg-purple-400" : "bg-transparent";
    const styleDeco7 = tab3 === "tab7" ? "bg-purple-400" : "bg-transparent";
    const styleDeco8 = tab3 === "tab8" ? "bg-purple-400" : "bg-transparent";
    const styleDeco9 = tab3 === "tab9" ? "bg-purple-400" : "bg-transparent";

    return (
        <div className='w-full h-screen flex flex-col justify-between'>
            <img src={logo} className='w-full object-center' alt="logo" />
            <div className='w-full mb-20'>
                <nav>
                    <ul className='h-full flex flex-col gap-1'>
                        <li onClick={handleClick} className={`flex flex-row pl-3 py-2 justify-between ${styleMenu1} hover:bg-purple-100 hover:cursor-pointer`}>
                            <div onClick={()=>goToAdminHome()} className='flex flex-row items-center gap-3'>
                                <FaHome className={`${styleText1}`} />
                                <p className={`${styleText1}`}> Home </p>
                            </div>
                            <span className={`w-[4px] h-[20px] flex rounded-tl-xl rounded-bl-xl ${styleDeco1}`}></span>
                        </li>
                        <li className={`flex flex-row pl-3 py-2 justify-between ${styleMenu2}  hover:cursor-pointer`}>
                            <div onClick={()=>goToAddUsers()} className='flex flex-row items-center gap-3'>
                                <RiGroupLine className={`${styleText2}`} />
                                <p className={`${styleText2}`}> Add Users </p>
                            </div>
                            <span className={`w-[4px] h-[20px] flex rounded-tl-xl rounded-bl-xl ${styleDeco2}`}></span>
                        </li>
                        <li onClick={()=>goToLibrary()} className={`flex flex-row pl-3 py-2 justify-between ${styleMenu3}  hover:cursor-pointer`}>
                            <div className='flex flex-row items-center gap-3'>
                                <LuFolder className={`${styleText3}`} />
                                <p className={`${styleText3}`}> My Library </p>
                            </div>
                            <span className={`w-[4px] h-[20px] flex rounded-tl-xl rounded-bl-xl ${styleDeco3}`}></span>
                        </li>
                        <li onClick={()=>goToCourses()} className={`flex flex-row  pl-3 py-2 justify-between ${styleMenu4}  hover:cursor-pointer`}>
                            <div className='flex flex-row items-center gap-3'>
                                <AiOutlineBars className={`${styleText4}`} />
                                <p className={`${styleText4}`}> Courses </p>
                                <p className='mr-20 bg-purple-600 rounded px-2 py-0.5 text-white text-xs font-semibold'> NEW </p>
                            </div>
                            <span className={`w-[4px] h-[20px] flex rounded-tl-xl rounded-bl-xl ${styleDeco4}`}></span>
                        </li>
                        <li onClick={()=>goToReports()} className={`flex flex-row pl-3 py-2 justify-between ${styleMenu5}  hover:cursor-pointer`}>
                            <div className='flex flex-row items-center gap-3'>
                                <GoGraph className={`${styleText5}`} />
                                <p className={`${styleText5} mr-20`}> Reports </p>
                            </div>
                            <span className={`w-[4px] h-[20px] flex rounded-tl-xl rounded-bl-xl ${styleDeco5}`}></span>
                        </li>
                        <li onClick={()=>goToGroup()} className={`flex flex-row pl-3 py-2 justify-between ${styleMenu6}  hover:cursor-pointer`}>
                            <div className='flex flex-row items-center gap-3'>
                                <AiOutlineUsergroupAdd className={`${styleText6}`} />
                                <p className={`${styleText6} mr-20`}> Groups </p>
                            </div>
                            <span className={`w-[4px] h-[20px] flex rounded-tl-xl rounded-bl-xl ${styleDeco6}`}></span>
                        </li>
                        <li onClick={()=>goToSetting()} className={`flex flex-row pl-3 py-2 justify-between ${styleMenu7}  hover:cursor-pointer`}>
                            <div className='flex flex-row items-center gap-3'>
                                <IoSettingsOutline className={`${styleText7}`} />
                                <p className={`${styleText7} mr-20`}> Settings </p>
                            </div>
                            <span className={`w-[4px] h-[20px] flex rounded-tl-xl rounded-bl-xl ${styleDeco7}`}></span>
                        </li>
                        <li onClick={()=>goToSupport()} className={`flex flex-row pl-3 py-2 justify-between ${styleMenu8} hover:cursor-pointer`}>
                            <div className='flex flex-row items-center gap-3'>
                                <AiOutlineQuestion className={`${styleText8}`} />
                                <p className={`${styleText8} mr-6`}> Help & Support </p>
                            </div>
                            <span className={`w-[4px] h-[20px] flex rounded-tl-xl rounded-bl-xl ${styleDeco8}`}></span>
                        </li>
                        <li className={`flex flex-row pl-3 py-2 justify-between ${styleMenu9} hover:cursor-pointer`}>
                            <div className='flex flex-row items-center gap-3'>
                                <LuLogOut className={`${styleText9}`} />
                                <p className={`${styleText9} mr-20`}> Logout </p>
                            </div>
                            <span className={`w-[4px] h-[20px] flex rounded-tl-xl rounded-bl-xl ${styleDeco9}`}></span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='w-full'>
                <div className="bg-white shadow-inner p-4 flex items-center gap-2">
                    <FaCircleUser size={40}/>
                    <div className='flex flex-col'>
                        <h2 className="text-sm font-bold text-gray-900">{userInfo!=null?`${userInfo.username}`:<div>error</div>}</h2>
                        <p className="text-sm text-gray-600">{userInfo!=null?`${userInfo.email}`:<div>error</div>}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu