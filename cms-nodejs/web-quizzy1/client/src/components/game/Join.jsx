import React, { useState } from 'react'
import { ReactComponent as QIcon } from '../../assets/quiz.svg'
import { ReactComponent as QuizizzIcon } from '../../assets/quizizz.svg'
import { FaFacebook, FaInstagram, FaTwitter, FaUniversalAccess } from 'react-icons/fa';
import AppStore from '../../assets/download-on-the-app-store.png'
import GooglePlay from '../../assets/get-it-on-google-play.png'
import { useNavigate } from 'react-router-dom';


const Join = () => {
    const [code, setCode] = useState();
    const nav = useNavigate();
    function goToGame() {
        nav('/join/game');
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Code:", code);
    }

    return (
        <div className='relative bg-gradient-to-b from-pink-500 via-purple-500 to-gray-900 w-full max-h-screen h-screen overflow-auto flex flex-col justify-between rounded-md'>
            {/* nav */}
            <div className='absolute z-10 w-full h-14 flex items-center justify-between border-b-gray-200 bg-black bg-opacity-50 p-2 rounded-tl-md rounded-tr-md'>
                <QIcon />
                <button className='flex items-center justify-center px-3 py-2 bg-gray-400 bg-opacity-60 rounded text-white font-bold text-sm cursor-pointer transition-opacity hover:bg-opacity-40'>
                    My dashboard
                </button>
            </div>
            {/* join game */}
            <div className=' flex flex-col justify-start items-center bg-transparent pt-20 gap-2 pb-60'>
                <QuizizzIcon />
                <div className='w-1/3 my-4 px-3 py-2 border border-gray-300 bg-white shadow-sm rounded-lg'>
                    <form onSubmit={handleSubmit} className='w-full flex justify-between'>
                        <input
                            className="w-[80%] py-2 px-4 focus:outline-none text-2xl placeholder:text-xl"
                            type="text"
                            placeholder="Enter a join code"
                        />
                        <button 
                        onClick={()=>goToGame()}
                        type='submit' 
                        className='w-[20%] bg-purple-500 border-b-4 border-b-purple-950 text-white p-3 text-xl font-semibold rounded-md hover:bg-purple-300 hover:border-b-purple-700'>
                            Join
                        </button>
                    </form>


                </div>
            </div>
            {/* footer */}
            <div className='flex h-20 px-4 py-2 justify-between items-center rounded-bl-md rounded-br-md bg-gray-800 border-t-2 border-t-white'>
                <div className='flex items-center gap-4'>
                    <div className='text-sm font-light cursor-pointer text-gray-300 hover:text-white'> Quick links </div>
                    <div className='text-sm font-light cursor-pointer text-gray-300 hover:text-white'> Worksheets </div>
                    <div className='text-sm font-light cursor-pointer text-gray-300 hover:text-white'> Teacher resources </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <FaUniversalAccess size={20} className='text-gray-300' />
                        <p className='text-gray-300 text-sm leading-tight font-light'>Accessibility <br /> & Inclusion</p>
                    </div>
                    <div className='text-sm font-light text-gray-300'> @ 2024 Quizizz Inc. </div>
                    <FaTwitter size={20} className='text-gray-300 hover:text-white cursor-pointer' />
                    <FaFacebook size={20} className='text-gray-300 hover:text-white cursor-pointer' />
                    <FaInstagram size={20} className='text-gray-300 hover:text-white cursor-pointer' />
                    <img src={AppStore} className='h-12 object-cover cursor-pointer' alt="appStore" />
                    <img src={GooglePlay} className='h-16 object-cover cursor-pointer' alt="googlePlay" />
                </div>
            </div>
        </div>
    )
}

export default Join