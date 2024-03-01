import React, { useEffect, useState } from 'react'
import { FaPlus, FaSearch, FaUser } from 'react-icons/fa'
import { GoBell } from 'react-icons/go'
import { MdArrowDropDown, MdOutlineRestore } from 'react-icons/md'
import { TbFileImport } from 'react-icons/tb'
import { CiFilter, CiHeart } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { LuTags } from 'react-icons/lu'
import { HiOutlineArchiveBox } from 'react-icons/hi2'
import { RiFileAddLine } from 'react-icons/ri'
import { Table } from 'antd';
import { PiCaretUpDownDuotone } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { getQuestions } from '../../services/api'


const Library = () => {
    const [questions, setQuestions] = useState([]);
    const nav = useNavigate();

    const getRowClassName = (record, index) => {
        return index % 2 === 0 ? 'row-even' : 'row-odd';
    };

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const questionList = await getQuestions();
                console.log("questionList", questionList);
                setQuestions(questionList);
            } catch (error) {
                // Handle error
                console.error('Error:', error);
            }
        };
        fetchQuestions();
    }, []);
    // Sample data
    // const dataSource = [
    //     {
    //         key: '1',
    //         name: 'John Doe',
    //         age: 25,
    //         address: '123 Street, City',
    //     },
    //     {
    //         key: '2',
    //         name: 'Jane Smith',
    //         age: 30,
    //         address: '456 Avenue, Town',
    //     },
    //     // Add more data entries as needed
    // ];

    // Defining columns
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Answer List',
            dataIndex: 'answerList',
            key: 'answerList',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                const statusStyle = {
                    color: status === 0 ? 'red' : 'inherit',
                };
                return <span style={statusStyle}>{(status === 1 ? 'active' : 'inactive')}</span>;
            },
        },
    ];
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
            {/* My library */}
            <div className='w-[90%] max-w-screen-xl h-auto flex flex-row ml-20 my-5 justify-center gap-3 bg-transparent'>
                <div className='flex flex-col w-1/4'>
                    <div className='mb-3'>
                        <p className='font-bold text-2xl'>My library</p>
                    </div>
                    <div className='flex flex-col mb-4 gap-1'>
                        <div className='flex items-center bg-white rounded-md p-2 space-x-5 cursor-pointer'>
                            <FaUser size={14} />
                            <p className='font-bold text-sm'>Created by me</p>
                        </div>
                        <div className='flex bg-transparent items-center hover:bg-white rounded-md p-2 space-x-5 cursor-pointer text-gray-600 hover:text-black'>
                            <TbFileImport size={14} />
                            <p className='font-bold text-sm'>Imported</p>
                        </div>
                        <div className='flex bg-transparent items-center hover:bg-white rounded-md p-2 space-x-5 cursor-pointer text-gray-600 hover:text-black'>
                            <MdOutlineRestore size={14} />
                            <p className='font-bold text-sm'>Previously used</p>
                        </div>
                        <div className='flex bg-transparent items-center hover:bg-white rounded-md p-2 space-x-5 cursor-pointer text-gray-600 hover:text-black'>
                            <CiHeart size={14} />
                            <p className='font-bold text-sm'>Liked by me</p>
                        </div>
                        <div className='flex bg-transparent items-center hover:bg-white rounded-md p-2 space-x-5 cursor-pointer text-gray-600 hover:text-black'>
                            <GrGroup size={14} />
                            <p className='font-bold text-sm'>Share with me</p>
                        </div>
                        <div className='flex bg-transparent items-center hover:bg-white rounded-md p-2 space-x-5 cursor-pointer text-gray-600 hover:text-black'>
                            <LuTags size={14} />
                            <p className='font-bold text-sm'>Standards tagged</p>
                        </div>
                        <div className='flex bg-transparent  items-center hover:bg-white rounded-md p-2 space-x-5 cursor-pointer text-gray-600 hover:text-black'>
                            <HiOutlineArchiveBox size={14} />
                            <p className='font-bold text-sm'>All my content</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-sm mb-2'>My collections</p>
                    </div>
                    <div className='flex items-center gap-2 p-1 rounded-md justify-center hover:border bg-white hover:bg-gray-200'>
                        <RiFileAddLine />
                        <p className='text-sm font-bold'>New collection</p>
                    </div>
                </div>
                <div className='flex flex-col w-3/4'>
                    <div className='w-full flex flex-row justify-between mx-5 mb-5'>
                        <div className='flex gap-2'>
                            <p className='p-2 border border-b-2 border-b-purple-500 text-purple-500 cursor-pointer text-sm'> Published </p>
                            <p className='p-2 text-gray-600 cursor-pointer text-sm'> Draft </p>
                        </div>
                        <div className='flex gap-2 justify-end'>
                            <button className='w-auto h-10 p-1 flex gap-1 items-center justify-center rounded'>
                                <CiFilter size={14} />
                                <p className='font-bold text-sm'>All</p>
                                <MdArrowDropDown size={14} />
                            </button>
                            <button className='w-auto h-10 p-1 flex gap-1 items-center justify-center rounded'>
                                <PiCaretUpDownDuotone size={16} />
                                <p className='font-bold text-sm'>Most Recent</p>
                                <MdArrowDropDown size={14} />
                            </button>
                        </div>
                    </div>
                    <Table style={{ width: '100%', fontFamily: 'Courier New', marginLeft: '10px'}} rowClassName={getRowClassName} dataSource={questions} columns={columns} size='small' />
                </div>
            </div>
        </div>
    )
}

export default Library