import React from 'react'
import Menu from '../../components/admin/Menu'
import Library from '../../components/admin/Library'



const MyLibraryPage = () => {
  return (
    <div className='flex'>
      <div className='w-[13%] h-screen flex flex-col'>
        <Menu menu="tab3" icon="tab3" text="tab3" deco="tab3" />
      </div>
      <div className='w-[87%] h-screen overflow-y-scroll bg-gray-200'>
        <Library />
      </div>
    </div>
  )
}

export default MyLibraryPage