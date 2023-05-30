import React from 'react'

import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div className='flex flex-row justify-between items-center m-16'>
            <div className='flex flex-row gap-6'>
                <img src={logo} alt="" />
                <Link to='/' className='font-bold text-xl'>Dentalist</Link>
            </div>
            <div className='flex flex-row gap-8 font-semibold'>
                <Link to='/about-us'>About Us</Link>
                <h1>New Patient</h1>
                <h1>Our Services</h1>
                <Link to='/contact-us'>Contact Us</Link>
            </div>
            <button className='bg-[#583FBC] px-8 py-2 rounded-lg text-white'>Book appointment</button>
        </div>
    </div>
  )
}

export default Header