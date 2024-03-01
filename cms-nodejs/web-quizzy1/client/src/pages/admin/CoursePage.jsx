import React from 'react'
import Menu from '../../components/admin/Menu'
import Courses from '../../components/admin/Courses'



const CoursePage = () => {
  return (
    <div className='flex'>
      <div className='w-[13%] h-screen flex flex-col'>
        <Menu menu="tab4" icon="tab4" text="tab4" deco="tab4" />
      </div>
      <div className='w-[87%] h-screen overflow-y-scroll bg-gray-200'>
        <Courses />
      </div>
    </div>
  )
}

export default CoursePage