import React from 'react'
import Header from './Header'
import Footer from './Footer'

import {MdPhoneInTalk} from 'react-icons/md'

import girlSmiling from '../images/girl-smiling.png'

function Home() {
  return (
    <div>
        <Header/>
        <div className='flex flex-row bg-[#7ABADD] m-16 rounded-[50px] px-16 py-16'>
            <div className='flex flex-col gap-8 w-[50%] '>
                <h1 className='font-bold text-6xl'>Entrust your smile to professionals</h1>
                <p className='text-slate-300 font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel cum fugiat quam veritatis minima delectus tempora saepe? Ex vitae, consequatur dolorem tempore, sapiente cumque, dicta eligendi quibusdam autem debitis eum.</p>
                <div className='flex flex-row items-center justify-between'>
                    <button className='bg-[#583FBC] px-4 py-2 rounded-lg text-white'>Book an appointment</button>
                    <div className='flex flex- items-center'>
                        <button className='px-2 py-2 bg-white rounded-lg gap-3'>
                            <MdPhoneInTalk className='text-[#583FBC]'/>
                        </button>
                        <button className='flex flex-col items-center'>
                            <h1 className='uppercase text-[#583FBC]'>Dental 24H Emergency</h1>
                            <h1>03482394123</h1>
                        </button>
                    </div>
                </div>
            </div>
            <img src={girlSmiling} alt="" width={600}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home