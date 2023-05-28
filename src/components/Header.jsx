import React from 'react'

import logo from '../images/logo.png'

function Header() {
  return (
    <div>
        <div className='flex flex-row justify-between items-center m-16'>
            <div className='flex flex-row gap-6'>
                <img src={logo} alt="" />
                <h1 className='font-bold text-xl'>Dentalist</h1>
            </div>
            <div className='flex flex-row gap-8 font-semibold'>
                <h1>About Us</h1>
                <h1>New Patient</h1>
                <h1>Our Services</h1>
                <h1>Contact Us</h1>
            </div>
            <button className='bg-[#583FBC] px-8 py-2 rounded-lg text-white'>Book appointment</button>
        </div>
    </div>
  )
}

export default Header