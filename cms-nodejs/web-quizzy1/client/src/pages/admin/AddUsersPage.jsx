import React from 'react'
import Menu from '../../components/admin/Menu'
import AddUsers from '../../components/admin/AddUsers'


const AddUsersPage = () => {
  return (
    <div className='flex'>
      <div className='w-[13%] h-screen flex flex-col'>
        <Menu menu="tab2" icon="tab2" text="tab2" deco="tab2" />
      </div>
      <div className='w-[87%] h-screen overflow-y-scroll bg-gray-200'>
        <AddUsers />
      </div>
    </div>
  )
}

export default AddUsersPage