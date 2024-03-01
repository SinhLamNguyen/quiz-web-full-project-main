import React from 'react'
import Navbar from '../../components/guest/Navbar'
import Home from '../../components/guest/Home'
import Footer from '../../components/guest/Footer'


const HomePage = () => {
  return (
    <div className='w-full h-auto flex flex-col overflow-auto relative'>
        {/* <Header/> */}
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default HomePage