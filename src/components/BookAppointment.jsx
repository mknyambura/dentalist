import React from 'react'
import { MdPhoneInTalk } from 'react-icons/md'

const BookAppointment = () => {
  return (
    <div id='book-appointment' className='flex items-center px-12 py-12'>
        <div className='flex flex-col gap-8 m-16'>
            <h1 className='text-[#583FBC] font-bold uppercase'>Book Appointment</h1>
            <h1 className='font-bold sm:text-4xl md:text-4xl lg:text-5xl'>Care at Dentalist is pleasure</h1>
            <p className='font-thin'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
            <form action="" className='items-center'>
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
                <div className='flex flex-row justify-between mt-16 mb-16'>
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
            </form>
        </div>
    </div>
  )
}

export default BookAppointment