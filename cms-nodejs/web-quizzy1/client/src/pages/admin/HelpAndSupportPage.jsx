import React from 'react'
import Menu from '../../components/admin/Menu'
import HelpAndSupport from '../../components/admin/HelpAndSupport'



const HelpAndSupportPage = () => {
  return (
    <div className='flex'>
      <div className='w-[13%] h-screen flex flex-col'>
        <Menu menu="tab8" icon="tab8" text="tab8" deco="tab8" />
      </div>
      <div className='w-[87%] h-screen overflow-y-scroll bg-gray-200'>
        <HelpAndSupport />
      </div>
    </div>
  )
}

export default HelpAndSupportPage