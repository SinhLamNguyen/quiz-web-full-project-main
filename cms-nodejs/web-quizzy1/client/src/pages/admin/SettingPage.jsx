import React from 'react'
import Menu from '../../components/admin/Menu'


const SettingPage = () => {
  return (
    <div className='flex'>
      <div className='w-[13%] h-screen flex flex-col'>
        <Menu menu="tab7" icon="tab7" text="tab7" deco="tab7" />
      </div>
      <div className='w-[87%] h-screen overflow-y-scroll bg-gray-200'>
        <SettingPage />
      </div>
    </div>
  )
}

export default SettingPage