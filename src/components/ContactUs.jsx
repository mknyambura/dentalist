import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { MdPhoneInTalk } from 'react-icons/md'

import branch1 from '../images/branch1.png'
import branch2 from '../images/branch2.png'


function ContactUs() {
  return (
    <div>
      <Header/>
      {/* <div>
        <div className="relative w-full h-44">
          <iframe className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                  frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
          </iframe>
        </div>
      </div> */}
      <div className='flex flex-col relative items-center bg-[#DBEFFA] rounded-[30px] m-16 h-[70vh]'>
        <h1 className='items-center font-bold text-6xl mt-16'>Contact Us</h1>
        
        <form action="" className='items-center absolute bg-white top-[40%] rounded-[20px] shadow-xl shadow-slate-300'>
          <div className='flex flex-col m-16'>

            <div className='flex flex-col gap-4 mt-4'>
                <label htmlFor="" className='uppercase text-slate-500'>Name</label>
                <input type="text" className='border border-slate-300 rounded-lg px-2 py-2' placeholder='Enter your name...'/>
            </div>

            <div className='flex flex-col gap-4 mt-4'>
                <label htmlFor="" className='uppercase text-slate-500'>Email Address</label>
                <input type="email" className='border border-slate-300 rounded-lg px-2 py-2' placeholder='Your email address...'/>
            </div>

            <div className='flex flex-col gap-4 mt-4'>
                <label htmlFor="" className='uppercase text-slate-500'>Messages</label>
                <textarea placeholder="Write your thoughts here..." className='h-[200px] p-3 text-sm w-full rounded-lg border border-slate-300 focus:ring-slate-300 focus:border-slate-300'></textarea>
            </div>
            <div className='flex flex-row justify-between mt-16 mb-16 text-sm gap-12'>
              <div className='flex flex-row items-center justify-evenly gap-4'>
                <button className='bg-[#583fbc2f] px-2 py-2 rounded-lg'>
                  <button className='bg-[#583FBC] px-2 py-2 rounded-lg text-white'><MdPhoneInTalk/></button>
                </button>
                <div className='flex flex-col justify-center gap-1'>
                  <h1 className='text-[#583FBC] font-bold uppercase'>Dental 24H Emergency</h1>
                  <h1 className='font-bold'>03482 394 123</h1>
                </div>
              </div>
                          
              <div className='flex flex-row items-center justify-evenly gap-4'>
                <button className='bg-[#583FBC] px-8 py-2 rounded-lg text-white font-bold'>Book an appointment</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='bg-transparent h-screen'></div>
      <div className='flex flex-col items-center m-16 gap-8'>
        <div className='flex flex-col items-center gap-8 m-16'>
          <h1 className='text-[#583FBC] font-bold uppercase'>Our Clinic</h1>
          <h1 className='font-bold text-6xl text-center'>Come to our clinic and get the best dental services</h1>
        </div>
        <div className='flex flex-row justify-between gap-16 mb-16'>
          <div className='flex flex-col items-center gap-8 border border-slate-300 rounded-[20px] px-2 py-2'>
            <img src={branch1} alt="" />
            <div className='flex flex-col items-center gap-2'>
              <h1 className='font-bold'>Dentalist Main Clinic</h1>
              <h1 className='text-slate-400'>35 West Denatl street California 1004</h1>
            </div>
          </div>
          <div className='flex flex-col items-center gap-8 border border-slate-300 rounded-[20px] px-2 py-2'>
            <img src={branch2} alt="" />
            <div className='flex flex-col items-center gap-2'>
              <h1 className='font-bold'>Dentalist Main Clinic</h1>
              <h1 className='text-slate-400'>35 West Denatl street California 1004</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactUs