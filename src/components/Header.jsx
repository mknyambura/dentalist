import React, { useState } from 'react'

import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'


function Header() {
  const [open, setOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  
  const handleclick =() => {
    setOpen(!open)
  }

  return (
    <div>
        {/* <div className='flex flex-row justify-between items-center m-16'>
            <div className='flex flex-row gap-6'>
            </div>
            <div className='flex flex-row gap-8 font-semibold'>
                <Link to='/contact-us'>Contact Us</Link>
            </div>
            
        </div> */}
        


        <div className='lg:flex mg:flex-row justify-between items-center py-12'>
        
        <Link to='/'>
          <div className='flex flex-row  items-center gap-2 font-bold text-3xl sm:px-16'>
            <img src={logo} alt="" />
            <h1 to='/' className='font-bold text-xl hover:cursor-pointer'>Dentalist</h1>
          </div>
        </Link>
        <div className='absolute right-8 top-[5%] lg:hidden' onClick={handleclick}>
          {
            open ?  <FaBars className='text-[#583FBC] text-3xl'/> : <FaTimes className='text-[#583FBC] text-3xl'/>
          }
        </div>
        <ul className={`sm:w-full md:w-full lg:w-auto sm:z-10 md:z-10 z-[-1] sm:absolute md:absolute lg:static sm:py-6 sm:px-6 sm:mb-6 sm:mt-6 md:py-6 md:px-6 md:mb-6 md:mt-6 sm:bg-[#583FBC] md:bg-[#583FBC] lg:bg-transparent flex sm:flex-col md:flex-col lg:flex-row lg:gap-14 sm:gap-8 md:gap-8 items-center ${open ? "top-[-1090px]": "top-auto"}`}>
          <li className='opacity-70 hover:font-bold active:text-[#583FBC] active:underline hover:cursor-pointer'>
            <a href="/about-us">About Us</a>
          </li>
          <li className='opacity-70 hover:font-bold active:text-[#583FBC] active:underline hover:cursor-pointer'>New Patient</li>
          <li className='opacity-70 hover:font-bold active:text-[#583FBC] active:underline hover:cursor-pointer'>
            <a href="/services">Our Services</a>
          </li>
          <li className='opacity-70 hover:font-bold active:text-[#583FBC] active:underline hover:cursor-pointer'>
            <a href="/contact-us">Contact Us</a>
          </li>
          <div className='flex flex-row gap-4 '>
            <a href="#book-appointment">
              <button className='bg-[#583FBC] px-8 py-2 rounded-lg text-white font-bold'>Book appointment</button>
            </a>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Header