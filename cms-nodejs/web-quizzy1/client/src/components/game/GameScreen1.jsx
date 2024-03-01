import React, { useState } from 'react'
import { FaExpand, FaUser } from 'react-icons/fa'
import { HiMagnifyingGlassPlus } from 'react-icons/hi2'
import { IoMdSettings } from 'react-icons/io'
import { IoArrowForward } from 'react-icons/io5'
import { TbMusicOff } from 'react-icons/tb'

const GameScreen1 = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        if (inputValue) {
            // Perform the desired action when the button is clicked
            console.log('Button clicked!');
        }
    };
    return (
        <div className='w-full max-h-screen h-screen flex flex-col'>
            <div className='h-[15%] bg-black bg-opacity-80 flex justify-between items-center px-4'>
                <div className='flex gap-3 items-center'>
                    <div className='p-2 bg-gray-400 rounded flex items-center cursor-pointer'>
                        <IoMdSettings size={16} className='text-white' />
                    </div>
                    <div className='p-2 bg-gray-400 rounded flex items-center cursor-pointer'>
                        <TbMusicOff size={16} className='text-white' />
                    </div>
                    <div className='p-2 bg-gray-400 rounded flex items-center cursor-pointer' ml-3>
                        <HiMagnifyingGlassPlus size={16} className='text-white' />
                    </div>
                    <div className='p-2 bg-black border border-gray-400 font-bold rounded-full flex items-center'>
                        <p className='font-bold text-sm text-white'>Streak:&nbsp;</p>
                        <hr />
                        <p className='font-bold text-sm text-white'>0</p>
                    </div>
                    <div className='p-2 bg-gray-400 rounded flex items-center font-bold text-sm text-white'>
                        1/5
                        {/* số câu  */}
                    </div>
                </div>
                <div className='flex gap-3 items-center justify-end'>
                    <div className='py-2 bg-transparent flex items-center font-bold text-white'>
                        RoomID:
                    </div>
                    <div className='py-2 bg-transparent flex items-center font-bold text-white'>
                        178 780
                        {/* code */}
                    </div>
                    <div className='p-2 bg-gray-400 rounded flex items-center  cursor-pointer'>
                        <FaExpand size={16} className='text-white' />
                    </div>
                </div>
            </div>
            <div className='w-full h-[35%] bg-purple-400 flex justify-center items-center'>
                <p className='font-bold text-3xl text-white'>
                    They'll buy a new computer, _ _ _ _ _ _ _ _?
                    {/* question */}
                </p>

            </div>
            <div className='w-full h-[35%] bg-purple-700 flex justify-center items-center'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder='Type your answer...'
                    className='w-1/3 h-16 placeholder:text-white placeholder:text-xl bg-purple-400 bg-opacity-50 text-white text-xl p-4 rounded-tl-md rounded-tr-md border-b-2 border-b-white focus:outline-none' />
            </div>
            <div className='w-full h-[15%] bg-black bg-opacity-80 flex justify-between items-center px-4'>
                <div className='flex items-center my-5 gap-3 pr-5 border-r-2 border-r-white'>
                    <div className='w-14 h-14 rounded-full bg-gray-400 flex items-center justify-center'>
                        <FaUser size={20} className='text-white' />
                    </div>
                    <div className='p-2 flex items-center bg-transparent text-white font-bold'>
                        Username
                    </div>
                </div>
                <div className='flex items-center my-5 justify-end pl-5 border-l-2 border-l-white'>
                    <button
                        onClick={handleClick}
                        disabled={!inputValue}
                        className='px-4 py-2 flex items-center justify-center rounded-md hover:border-b-0 hover:translate-y-0.5 disabled:bg-gray-500 disabled:text-opacity-50 enabled:bg-purple-600 enabled:border-b-4 enabled:border-b-purple-950 enabled:shadow-md '>
                            <div className='flex justify-center items-center gap-2 text-white font-semibold text-lg'>
                                SUBMIT
                                <IoArrowForward size={16}/>
                            </div>
                        </button>
                </div>


            </div>
        </div>
    )
}

export default GameScreen1