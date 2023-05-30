import React from 'react'

import logo from '../images/logo.png'
import { BsFacebook, BsTwitter, BsInstagram, BsClockFill } from 'react-icons/bs'
import { MdLocationOn, MdPhoneInTalk } from 'react-icons/md'


function Footer() {
  return (
    <div className='bg-[#041434] text-white gap-8'>
      <div className='flex flex-row'>
        <div className='flex flex-col mt-22 ml-16 mr-16 w-[40%]'>
          <div className='mt-24 flex flex-row gap-4 items-center m-8'>
            <img src={logo} alt="" />
            <h1 className='font-bold text-2xl'>Dentalist</h1>
          </div>
          <p className='ml-8 text-slate-300'>Dental Care Seattle is a top-rated local practice for cosmetic, preventative, and restorative dentistry on First Hill</p>
          <div className='flex flex-col m-8 gap-4'>
            <h1 className='uppercase text-slate-400 text-sm'>Follow us on</h1>
            <div className='flex flex-row justify-between w-1/4'>
              <BsFacebook/>
              <BsTwitter/>
              <BsInstagram/>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-[20%] m-16'>
          <h1 className='uppercase text-slate-400 font-thin text-sm mb-3'>Quick Links</h1>
          <h1 className='text-white hover:underline hover:cursor-pointer font-semibold'>About Us</h1>
          <h1 className='text-white hover:underline hover:cursor-pointer font-semibold'>Dental Services</h1>
          <h1 className='text-white hover:underline hover:cursor-pointer font-semibold'>Dentist</h1>
          <h1 className='text-white hover:underline hover:cursor-pointer font-semibold'>Blog</h1>
          <h1 className='text-white hover:underline hover:cursor-pointer font-semibold'>FAQs</h1>
        </div>

        <div className='flex flex-col gap-4 w-[40%] justify-center'>
          <h1 className='text-slate-400 text-sm uppercase mb-3'>Contact & Information</h1>
          <div className='flex flex-col gap-4 justify-between'>
            <div className='flex flex-row  gap-4'>
              <button disabled="disabled" className='px-2 py-2 bg-[#583fbc3f] rounded-lg border border-slate-400'>
                <button disabled="disabled" className='px-2 py-2 bg-white text-[#583FBC] rounded-lg'><MdPhoneInTalk/></button>
              </button>
              <div className='flex flex-col'>
                <h1 className='text-slate-400 text-sm'>Phone Number</h1>
                <h1 className='font-bold'>+088123654987</h1>
              </div>
            </div>
            <div className='flex flex-row  gap-4'>
              <button disabled="disabled" className='px-2 py-2 bg-[#583fbc3f] rounded-lg border border-slate-400'>
                <button disabled="disabled" className='px-2 py-2 bg-white text-[#583FBC] rounded-lg'><BsClockFill/></button>
              </button>
              <div className='flex flex-col'>
                <h1 className='text-slate-400 text-sm'>Open Hours</h1>
                <h1 className='font-bold'>09:00AM - 6.00 PM</h1>
              </div>
            </div>
            <div className='flex flex-row gap-4'>
              <button disabled="disabled" className='px-2 py-2 bg-[#583fbc3f] rounded-lg border border-slate-400'>
                <button disabled="disabled" className='px-2 py-2 bg-white text-[#583FBC] rounded-lg'><MdLocationOn/></button>
              </button>
              <div className='flex flex-col'>
                <h1 className='text-slate-400 text-sm'>Clinic Address</h1>
                <h1 className='font-bold'>35 West Dental Street California 1004</h1>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='flex flex-row justify-between ml-24 mr-24'>
        <h1 className='mb-16 text-slate-300'>©Dentalist. All Rights Reserved</h1>
        <div className='mb-16 flex flex-row justify-between gap-8'>
          <h1 className='hover:underline hover:cursor-pointer'>Terms of Use</h1>
          <h1 className='hover:underline hover:cursor-pointer'>Privacy Policy</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer