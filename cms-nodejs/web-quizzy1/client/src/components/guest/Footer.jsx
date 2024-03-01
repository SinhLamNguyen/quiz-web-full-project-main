import React from 'react'
import logo1 from '../../assets/logo-2 (1).png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='w-full h-auto flex flex-col px-32'>
            <div className='flex justify-between py-12'>
                <div className='flex flex-col justify-between'>
                    <img src={logo1} alt="logo-1" />
                    <div className='flex items-center gap-1'>
                        <img src="https://quizizz.com/wf/assets/64a3c543f0df3bde4580f844_Accessibility_Icon.png" alt="accessibility" />
                        <p className='text-blue-500 text-lg leading-tight font-medium '>Accessibility <br /> & Inclusion</p>
                    </div>
                </div>
                <div className='flex justify-between gap-16'>
                    <div className='flex flex-col gap-4 mt-6'>
                        <p className='font-serif text-lg hover:text-purple-500'>The Quizzy Blog</p>
                        <p className='font-serif text-lg hover:text-purple-500'>Teacher Resources</p>
                        <p className='font-serif text-lg hover:text-purple-500'>Quizzy For Work</p>
                        <p className='font-serif text-lg hover:text-purple-500'>Help Center</p>
                        <p className='font-serif text-lg hover:text-purple-500'>Accessibility & Inclusion</p>
                        <p className='font-serif text-lg hover:text-purple-500'>Sitemap</p>
                        <p className='font-serif text-lg hover:text-purple-500'>Terms of Service</p>
                    </div>
                    <div className='flex flex-col gap-4 mt-6'>
                        <p className='font-serif text-lg hover:text-purple-500'>Worksheet</p>
                        <p className='font-serif text-lg hover:text-purple-500'>Reseller Program</p>
                        <p className='font-serif text-lg hover:text-purple-500'>Privacy Policy</p>
                        <p className='font-serif text-lg hover:text-purple-500'>Privacy Center</p>
                        <p className='font-serif text-lg hover:text-purple-500'>Careers</p>
                        <p className='font-serif text-lg hover:text-purple-500'>About Us</p>
                    </div>
                    <div className='pt-16 pr-8 flex flex-col gap-3'>
                        <img className='w-44 h-16 object-cover' src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" alt="google-play" />
                        <img className='w-44 h-16 object-cover' src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" alt="app-store" />
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex justify-between py-6'>
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-gray-500'> 1. 2021 survey of 800+ teachers conducted by Quizizz </p>
                    <p className='text-sm text-gray-500'> 2. Journal of Education and e-Learning Research (Source) </p>
                    <p className='text-sm text-gray-500'> 3. International Online Journal of Education and Teaching (Source) </p>
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex gap-10'>
                        <FaTwitter className='text-[#9A4292]' size={32}/>
                        <FaFacebook className='text-[#9A4292]' size={32}/>
                        <AiFillInstagram className='text-[#9A4292]' size={32}/>
                    </div>
                    <div className='text-end'> 2023 Quizzy Inc.</div>
                </div>
            </div>
        </div>

    )
}

export default Footer