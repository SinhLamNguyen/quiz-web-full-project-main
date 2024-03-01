import React from 'react'
import logo1 from '../../assets/logo-2 (1).png'

const Header = () => {
    return (
        <div className='w-full h-auto flex flex-row justify-between py-5 px-20 fixed top-0 z-10 bg-white shadow-md'>
            <div className='flex flex-row items-center gap-2'>
                <img className='object-cover' src={logo1} alt="logo1" />
                <span className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-[#662C60]'> For Schools </span>
                <span className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-[#662C60]'> Plans </span>
                <span className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-[#662C60]'> Solutions </span>
                <span className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-[#662C60]'> Resources </span>
                <span className='px-3 py-2 rounded-lg hover:bg-gray-200 hover:text-[#662C60]'> Quiz For Work </span>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <span className='px-3 py-2 rounded-lg text-[#662C60] border border-gray-200 hover:bg-gray-200'> School Plan Quote </span>
                <span className='px-3 py-2 rounded-lg text-[#662C60] border border-gray-200 hover:bg-gray-200'> Enter Code </span>
                <span className='px-3 py-2 rounded-lg text-[#662C60] bg-opacity-50 bg-[#DBCBEC] border border-gray-200 hover:bg-opacity-100'> Log In </span>
                <span className='px-3 py-2 rounded-lg text-white font-semibold bg-purple-600 border border-gray-200 hover:bg-[#5D2057]'> Sign Up </span>
            </div>
        </div>

    )
}

export default Header