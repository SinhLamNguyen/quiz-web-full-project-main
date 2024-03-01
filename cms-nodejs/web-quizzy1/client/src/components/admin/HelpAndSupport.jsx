import React from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import { GoBell } from 'react-icons/go'

const HelpAndSupport = () => {
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
                <button className="flex items-center gap-2 justify-center px-4 py-2 bg-purple-800 bg-opacity-80 text-white rounded-md hover:bg-opacity-50 focus:outline-none">
                    <FaPlus size={12} />
                    <p className='text-xs font-medium'> CREATE NEW CONTENT</p>
                </button>
            </div>
            <div>Help And Support</div>
        </div>
    )
}

export default HelpAndSupport