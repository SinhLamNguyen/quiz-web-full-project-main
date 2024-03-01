import React from 'react'
import Menu from '../../components/admin/Menu'
import Admin from '../../components/admin/Admin'



const AdminHomePage = () => {
  return (
    <div className='flex'>
      <div className='w-[13%] h-screen flex flex-col'>
        <Menu menu="tab1" icon="tab1" text="tab1" deco="tab1" />
      </div>
      <div className='w-[87%] h-screen overflow-y-scroll bg-gray-200'>
        <Admin />
      </div>
    </div>
  )
}

export default AdminHomePage