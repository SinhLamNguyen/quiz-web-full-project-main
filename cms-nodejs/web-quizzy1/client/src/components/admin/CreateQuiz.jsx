import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa6'
import { IoIosArrowBack, IoMdSave, IoMdSettings } from 'react-icons/io'

const CreateQuiz = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Perform search logic here
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className='relative w-full h-auto flex flex-col'>
            <div className='w-full fixed z-10 p-3 bg-white rounded flex justify-between shadow-md'>
                <div className='flex items-center'>
                    <button className='rounded p-3 w-auto border hover:bg-gray-200'>
                        <IoIosArrowBack size={14} />
                    </button>
                    <button className='font-semibold p-2 rounded w-40 hover:bg-gray-300 flex justify-start'>
                        Untitled Quiz
                    </button>
                </div>
                <div className='flex items-center justify-end gap-4'>
                    <button className='rounded p-2 w-auto border hover:bg-gray-200'>
                        <IoMdSettings size={12} />
                    </button>
                    <button className='rounded p-2 w-auto border hover:bg-gray-200'>
                        <FaPlay size={12} />
                    </button >
                    <button className='py-2 px-4 rounded w-auto flex items-center justify-center text-white bg-pink-500 hover:bg-pink-800 gap-2'>
                        <IoMdSave size={12} className='text-white' />
                        Publish
                    </button>
                </div>
            </div>

            <div className='h-[500px] w-full'>
                <div className='w-[70%] bg-green-500'>
                    <div className='w-[80%] p-3 flex flex-col bg-white mt-20 gap-3'>
                        <p>Add questions from our quiz library</p>
                        <div className="flex items-center">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-r px-4 py-2 ml-0.5"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-[30%] bg-red-500'></div>
            </div>

        </div>
    )
}

export default CreateQuiz