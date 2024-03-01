import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { IoArrowForward } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login = () => {
    const nav = useNavigate();
    function goToSignup() {
        nav('/signup');
    }
    function goToAdmin() {
        nav('/admin');
    }
    function goToHome() {
        nav('/');
    }
    function goToJoin() {
        nav('/join');
    }
    return (
        <div className='w-full h-screen flex flex-col bg-[#461A42] overflow-auto'>
            {/* navbar */}
            <div className='bg-[#461A42] flex flex-row justify-between shadow-lg py-5 '>
                <div onClick={() => goToHome()} className='w-full ml-10'>
                    <img className='w-32 h-10 object-contain hover:cursor-pointer' src="https://cf.quizizz.com/img/quizizz_logos/white-brandmark-600x164.png" alt="" />
                </div>
                <div className='w-full flex flex-row gap-6 mr-3 items-center justify-end'>
                    <button onClick={()=>goToJoin()} className=' bg-[#381535] py-2 px-4 scale-100 text-white flex items-center justify-center rounded hover:scale-110 transition-transform duration-300'> Join a game </button>
                    <button onClick={() => goToSignup()} className=' bg-[#5D2057] py-2 px-4 scale-100 text-white flex items-center justify-center rounded hover:scale-110 transition-transform duration-300'> Sign up </button>
                </div>
            </div>
            {/* login form */}
            <div className='bg-[#461A42] flex items-center justify-center py-20 px-24 shadow-inner shadow-zinc-900'>
                <div className='flex flex-row bg-white rounded-md'>
                    <div className='w-[60%] flex flex-col justify-between'>
                        <LoginForm />
                        <div className='p-10 flex flex-col'>
                            <p className='font-semibold text-xl text-gray-800 mb-3'>Log in to Quizizz</p>
                            <div className='w-full h-auto flex flex-col justify-between gap-3'>
                                <button className='border rounded shadow-sm py-2 px-4 hover:shadow-lg flex items-center'>
                                    <div className='w-full flex flex-row justify-between items-center'>
                                        <div onClick={() => goToAdmin()} className='flex flex-row gap-3 items-center'>
                                            <FcGoogle size={18} />
                                            <p className='font-semibold text-gray-800'>Continue with Google</p>
                                        </div>
                                        <IoArrowForward size={18} className='text-black text-opacity-30' />
                                    </div>
                                </button>
                                <button className='border rounded shadow-sm py-2 px-4 hover:shadow-lg flex items-center'>
                                    <div className='w-full flex flex-row justify-between items-center'>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <HiOutlineMail size={18} />
                                            <p className='font-semibold text-gray-800'>Continue with Email</p>
                                        </div>
                                        <IoArrowForward size={18} className='text-black text-opacity-30' />
                                    </div>
                                </button>
                                <button className='border rounded shadow-sm py-2 px-4 hover:shadow-lg flex items-center'>
                                    <div className='w-full flex flex-row justify-between items-center'>
                                        <div className='flex flex-row gap-3 items-center'>
                                            <FaFacebookF size={16} className='text-blue-500' />
                                            <p className='font-semibold text-gray-800'>Continue with Facebook</p>
                                        </div>
                                        <IoArrowForward size={18} className='text-black text-opacity-30' />
                                    </div>
                                </button>
                            </div>
                            <div className='text-center text-black text-opacity-50 pt-5 pb-4'>or continue with</div>
                            <div className='flex flex-row justify-center gap-4 py-1'>
                                <div className='flex flex-col gap-0.5 items-center'>
                                    <button className='w-10 h-10 shadow-md flex items-center justify-center rounded'>
                                        <img className='w-6 h-6 object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/768px-Microsoft_logo.svg.png?20210729021049" alt="microsoft-logo" />
                                    </button>
                                    <p className='text-xs'>Microsoft</p>
                                </div>
                                <div className='flex flex-col gap-0.5 items-center'>
                                    <button className='w-10 h-10 shadow-md flex items-center justify-center rounded'>
                                        <FiSmartphone className='text-gray-700 w-5 h-5' />
                                    </button>
                                    <p className='text-xs'>Phone</p>
                                </div>
                                <div className='flex flex-col gap-0.5 items-center'>
                                    <button className='w-10 h-10 shadow-md flex items-center justify-center bg-black bg-opacity-85 rounded'>
                                        <FaApple className='text-white w-5 h-5' />
                                    </button>
                                    <p className='text-xs'>Apple</p>
                                </div>
                                <div className='flex flex-col gap-0.5 items-center'>
                                    <button className='w-10 h-10 shadow-md flex items-center justify-center bg-purple-500 rounded'>
                                        <FaShieldAlt className='text-white w-5 h-5' />
                                    </button>
                                    <p className='text-xs'>Apple</p>
                                </div>
                            </div>
                        </div>
                        <div className='py-4 mt-24 bg-gray-50 flex items-center justify-center'>
                            <p className='text-xs'>Don't have an account?</p>
                            <button className='ml-1 flex items-center py-1 px-3 rounded bg-gray-200 text-purple-500 text-xs font-semibold'> Sign up </button>
                        </div>
                    </div>
                    <div
                        className='w-[40%] flex items-end rounded-r-md'
                        style={{ backgroundImage: `url("https://cf.quizizz.com/image/classroom-enjoyment.png")`, backgroundSize: `cover` }}
                    >
                        <div className='bg-black bg-opacity-70 flex flex-col p-4 gap-2 rounded-br-md'>
                            <p className='text-white font-semibold'> Teachers love us  😍 </p>
                            <p className='text-white font-semibold'> Join over 200 million educators and learners on Quizizz </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login