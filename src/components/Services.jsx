import React from 'react'
import Header from './Header'
import Footer from './Footer'

import image from '../images/image2.png'
import toothache from '../images/toothache.png'
import tooth from '../images/tooth1.png'
import moon from '../images/Moon.png'
import gum from '../images/gum.png'
import sensitivity from '../images/sensitivity.png'
import toothcheck from '../images/toothcheck.png'
import toothcheck1 from '../images/toothcheck1.png'
import doctorWriting from '../images/doctor-writing.png'
import scan from '../images/scan.png'
import doctorTools from '../images/doctor-tools.png'
import analysis from '../images/analysis.png'
import { MdPhoneInTalk } from 'react-icons/md'
import BookAppointment from './BookAppointment'

function Services() {
  return (
    <div>
        <Header/>
        <div className='bg-[#DBEFFA] flex sm:flex-col lg:flex-row items-center justify-between m-16 rounded-[20px]'>
            <div className='flex flex-col w-[40%] m-16 gap-8'>
                <h1 className='font-bold text-6xl'>Root canals</h1>
                <p className='font-thin text-slate-500'>Root canals have gotten a bad reputation, but us dentists don’t know why! These are the types of treatments that actually make you feel better!</p>
                <a href="#book-appointment">
                    <button className='w-[55%] rounded-lg font-bold text-white px-4 py-2 bg-[#583FBC]'>Book an appointment</button>
                </a>
            </div>
            <div className='sm:hidden md:hidden bg-transaparent h-[400px]'></div>
            <div className='sm:hidden md:hidden lg:flex items-center absolute w-1/2  rounded-lg right-0 top-[40%]'>
                <img src={image} alt="" className='rounded-lg' width={400}/>
            </div>
        </div>

        <div className='bg-[#FADBE2] flex flex-col mt-[250px] m-16 rounded-[20px]'>
            <div className='flex flex-col gap-14 ml-24 mr-24 mt-24 items-center justify-center'>
                <h1 className='text-[#583FBC] uppercase font-bold text-center'>Symptoms</h1>
                <h1 className='font-bold sm:text-4xl md:text-4xl lg:text-6xl text-center'>Signs and symptoms that you ned a root canal</h1>
                <p className='font-thin'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2  gap-8 m-20 items-center'>
                <div className='flex flex-row items-center gap-8'>
                    <div className='bg-transparent rounded-lg px-2 py-2 border border-white'>
                        <div className='bg-white px-2 py-2 rounded-lg items-center justify-center'>
                            <img src={toothache} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-xl'>Spontaneous pain</h1>
                        <p>Spontaneous pain even wne you're not eating or drinking</p>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-8'>
                    <div className='bg-transparent rounded-lg px-2 py-2 border border-white'>
                        <div className='bg-white px-2 py-2 rounded-lg items-center justify-center'>
                            <img src={tooth} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-xl'>Discoloration of tooth</h1>
                        <p>Darkening or discoloration of a tooth</p>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-8'>
                    <div className='bg-transparent rounded-lg px-2 py-2 border border-white'>
                        <div className='bg-white px-2 py-2 rounded-lg items-center justify-center'>
                            <img src={moon} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-xl'>Middle night pain</h1>
                        <p>Pain that wakes you up in the middle of the night</p>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-8'>
                    <div className='bg-transparent rounded-lg px-2 py-2 border border-white'>
                        <div className='bg-white px-2 py-2 rounded-lg items-center justify-center'>
                            <img src={gum} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-xl'>Tnderness in gumsain</h1>
                        <p>From floss bosses to sweet tooths, every mouth is welcome.</p>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-8'>
                    <div className='bg-transparent rounded-lg px-2 py-2 border border-white'>
                        <div className='bg-white px-2 py-2 rounded-lg items-center justify-center'>
                            <img src={sensitivity} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-xl'>Extreme Sensitivity</h1>
                        <p>Extreme sensitivity to cold or hot foods and drinks</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-8 m-16 '>
            <h1 className='mt-24 uppercase text-[#583FBC] font-bold'>Gallery</h1>
            <div className='flex sm:flex-col md:flex-col lg:flex-row justify-between gap-8 mb-8'>
                <h1 className='font-bold sm:text-4xl md:text-4xl lg:text-6xl'>Some proof about our services for you</h1>
                <p className='font-thin'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div className='flex flex-row flex-wrap justify-center gap-12'>
                <img src={toothcheck} alt="" className='rounded-[30px]'/>
                <img src={doctorWriting} alt="" className='rounded-[30px]'/>
                <img src={scan} alt="" className='rounded-[30px]'/>
                <img src={doctorTools} alt="" className='rounded-[30px]'/>
                <img src={toothcheck1} alt="" className='rounded-[30px]'/>
                <img src={analysis} alt="" className='rounded-[30px]'/>
            </div>
        </div>

        <BookAppointment/>
        <Footer/>
    </div>
  )
}

export default Services