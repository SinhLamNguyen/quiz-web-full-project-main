import React, { useEffect, useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import { GoBell } from 'react-icons/go'
import { Button, Space, Table } from 'antd';
import { useNavigate } from 'react-router-dom'
import { convertDateFormat, deleteUser, getUsers } from '../../services/api'
import defaultImg from '../../assets/avatar-default-icon.png'

const Groups = () => {
    const [users, setUsers] = useState([]);
    const nav = useNavigate();

    const getRowClassName = (record, index) => {
        return index % 2 === 0 ? 'row-even' : 'row-odd';
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userList = await getUsers();
                console.log("userList", userList);
                setUsers(userList);
            } catch (error) {
                // Handle error
                console.error('Error:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleEdit = (id) => {
        console.log('Edit clicked for ID:', id);
        nav(`/admin/users/update/${id}`)
    };

    // const handleDelete = async (id) => {
    //     console.log('Delete clicked for ID:', id);
    //     const response = await deleteUser(id);
    //     refreshData();
    //     console.log("delete:", response);
    // };

    const refreshData = async () => {
        try {
            const userList = await getUsers();
            console.log("userList", userList);
            setUsers(userList);
        } catch (error) {
            // Handle error
            console.error('Error:', error);
        }
    }
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

    const handleDelete = (id) => {
        const newData = users.filter((item) => item.id !== id);
        setUsers(newData);
    };
    // Defining columns
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            // width: '10%'
        },
        {
            title: 'Tên người dùng',
            dataIndex: 'username',
            key: 'username',

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',

        },
        {
            title: 'Ảnh đại diện',
            dataIndex: 'image',
            key: 'image',
            render: (avatar) => <img
                src={avatar || defaultImg}
                alt="avatar"
                className="h-10 w-10 rounded-full"
            />,
        },
        {
            title: 'Điện thoại',
            dataIndex: 'phone',
            key: 'phone',

        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdDate',
            key: 'createdDate',
            render: (text) => convertDateFormat(text),
            // width: '20%'

        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                const statusStyle = {
                    color: status === 0 ? 'red' : 'inherit',
                };

                return <span style={statusStyle}>{(status === 1 ? 'Active' : 'Inactive')}</span>;
            },
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) =>
                users.length >= 1 ? (
                    <Space size="middle">
                        <Button className="bg-blue-500 text-white" type="primary" onClick={() => handleEdit(record.id)}>Edit</Button>
                        <Button className="bg-red-500 mr-5 text-white" type="danger" onClick={() => handleDelete(record.id)}>Delete</Button>
                    </Space>
                ) : null,
        },
        // Add more columns as needed
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
            {/* Groups */}
            <div className='w-full h-auto flex mx-10 my-5 justify-center bg-transparent'>
                <Table style={{ width: '80%', fontFamily: 'Courier New' }} rowClassName={getRowClassName} dataSource={users} columns={columns} size='small' />
            </div>
        </div>

    )
}

export default Groups