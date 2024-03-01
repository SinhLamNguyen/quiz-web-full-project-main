import React from 'react'
import Menu from '../../components/admin/Menu'
import Reports from '../../components/admin/Reports'



const ReportPage = () => {
  return (
    <div className='flex'>
      <div className='w-[13%] h-screen flex flex-col'>
        <Menu menu="tab5" icon="tab5" text="tab5" deco="tab5" />
      </div>
      <div className='w-[87%] h-screen overflow-y-scroll bg-gray-200'>
        <Reports />
      </div>
    </div>
  )
}

export default ReportPage