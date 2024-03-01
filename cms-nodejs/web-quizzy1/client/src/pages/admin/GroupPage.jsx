import React from 'react'
import Menu from '../../components/admin/Menu'
import Groups from '../../components/admin/Groups'


const GroupPage = () => {
  return (
    <div className='flex'>
      <div className='w-[13%] h-screen flex flex-col'>
        <Menu menu="tab6" icon="tab6" text="tab6" deco="tab6" />
      </div>
      <div className='w-[87%] h-screen overflow-y-scroll bg-gray-200'>
        <Groups/>
      </div>
    </div>
  )
}

export default GroupPage