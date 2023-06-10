import React from 'react'

import { SlArrowDown } from 'react-icons/sl'

import Header from './Header'
import Footer from './Footer'

import image1 from '../images/image1.png'
import background1 from '../images/background1.png'
import patient1 from '../images/patient1.png'
import video from '../images/videochair.png'
import dianne from '../images/dianne.png'
import darrell from '../images/darrell.png'
import jenny from '../images/jenny.png'

function AboutUs() {
  return (
    <div>
        <Header/>
        <div className='flex sm:flex-col md:flex-col lg:flex-row justify-between m-16'>
            <div className='flex flex-col lg:w-[40%] justify-center text-start gap-14'>
                <h1 className='font-bold text-6xl'>About Us</h1>
                <p className='text-slate-400'>We want you to feel amazing about your oral wellness. Not just twice a year, but every time you take a bite, tell a joke, laugh, or share a kiss.</p>
                <button className='items-center justify-center w-[34%] bg-[#583FBC] text-white px-10 py-3 rounded-lg font-bold'>Contact Us</button>
            </div>
            <div className='relative lg:w-1/2  items-center'>
                <img src={image1} alt="" />
                <div className='flex absolute right-[48%] bottom-6 -z-10'>
                    <img src={background1} alt="" />
                </div>
            </div>
        </div>

        <div className='flex sm:flex-col md:flex-col lg:flex-row m-16 items-center justify-between'>
            <div className='flex flex-col relative w-3/4 mb-24'>
                <div className=' bg-[#DBEFFA] h-[350px] w-3/4 rounded-[30px]'>

                </div>
                <div className='absolute top-[25%] left-[15%]'>
                    <img src={patient1} alt=""/>
                </div>
            </div>
            <div className='flex flex-col gap-8 text-start lg:w-1/2 mb-24'>
                <h1 className='uppercase text-[#583FBC] font-bold'>Our Priority</h1>
                <h1 className='font-bold text-5xl'>Our clients are our priority</h1>
                <p className='font-thin'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <button className='bg-[#583FBC] text-white font-bold px-8 py-3 rounded-lg w-[60%]'>Book an appointment</button>
            </div>
        </div>
        <div className='flex flex-col m-4'>
            <div className='relative bg-[#DBDEFA] flex flex-col gap-8 items-center m-16 rounded-[20px] h-[80vh]'>
                <h1 className='mt-16 text-[#583FBC] uppercase font-bold'>Safety</h1>
                <h1 className='font-bold sm:text-4xl md:text-4xl lg:text-6xl'>We put the safety first</h1>
                <p className='font-thin text-center w-1/2'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <div className='absolute bottom-[-30%] sm:w-3/4 md:w-3/4 lg:w-1/2'>
                    <img src={video} alt="" />
                </div>
            </div>
        </div>

        <div className='mt-16'>
            <div className='flex flex-col m-16'>
                <h1 className='font-bold mt-28 text-[#583FBC] uppercase'>Meet Our Team</h1>
                <div className='mt-6 flex sm:flex-col sm:gap-8 lg:flex-row justify-between'>
                    <h1 className='font-bold text-6xl'>Get to know the dentalist dental team</h1>
                    <p className='font-thin'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                </div>
            </div>

            <div className='flex flex-row sm:flex-wrap md:flex-wrap justify-evenly items-center'>
                <div className='items-center justify-center'>
                    <div className='bg-[#DBEFFA] rounded-[20px]  px-8 py-8 flex items-center m-4'>
                        <img src={dianne} alt="" />
                    </div>
                    <p className='font-bold items-center text-center'>Dianne Russell</p>
                </div>

                <div className='items-center justify-center'>
                    <div className='bg-[#F6DBFA] rounded-[20px]  px-4 py-4 flex items-center m-4'>
                        <img src={darrell} alt="" />
                    </div>
                    <p className='font-bold items-center text-center'>Darrell Steward</p>
                </div>

                <div className='items-center justify-center'>
                    <div className='bg-[#FADBE2] rounded-[20px]  px-4 py-4 flex items-center m-4'>
                        <img src={jenny} alt="" />
                    </div>
                    <p className='font-bold items-center text-center'>Jenny Wilson</p>
                </div>
            </div>
        </div>

        <div className=' flex flex-col gap-8 mt-28 ml-8 mr-8 mb-16 justify-center'>
            <div className='flex flex-col items-center'>
                <h1 className='text-[#583FBC] uppercase font-bold'>FAQ</h1>
                <h1 className='font-bold sm:text-4xl md:text-4xl lg:text-6xl mt-8'>Frequently asked questions</h1>
            </div>

            <div className='flex flex-col items-center gap-8'>
                <div className='flex flex-col relative lg:w-1/2 bg-gradient-to-b from-[#DBEFFA] to-white'>
                    <input type="checkbox" className='absolute peer w-full h-full opacity-0'/>
                    <label htmlFor="" className='peer font-bold flex items-center h-[50px] mx-[20px]'>Is there any cost or obligation if l request an offer?</label>
                    <div className='flex absolute right-[30px] top-[15%] rotate-0 peer-checked:rotate-180'>
                        <SlArrowDown/>
                    </div>
                    <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                        <p className='p-[20px] text-sm peer-checked:max-h-full'>I see Coint being a long-term part of my business structure. Not just for this business, but also our future endeavors.</p>
                    </div>
                </div>

                <div className='flex flex-col relative lg:w-1/2 bg-gradient-to-b from-[#DBEFFA] to-white'>
                    <input type="checkbox" className='absolute peer w-full h-full opacity-0'/>
                    <label htmlFor="" className='peer font-bold flex items-center h-[50px] mx-[20px]'>What kind of construction services will be purchased?</label>
                    <div className='flex absolute right-[30px] top-[15%] rotate-0 peer-checked:rotate-180'>
                        <SlArrowDown/>
                    </div>
                    <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                        <p className='p-[20px] text-sm peer-checked:max-h-full'>I see Coint being a long-term part of my business structure. Not just for this business, but also our future endeavors.</p>
                    </div>
                </div>

                <div className='flex flex-col relative lg:w-1/2 bg-gradient-to-b from-[#DBEFFA] to-white'>
                    <input type="checkbox" className='absolute peer w-full h-full opacity-0'/>
                    <label htmlFor="" className='peer font-bold flex items-center h-[50px] mx-[20px]'>How Do I Print My Auto Insurance ID Card?</label>
                    <div className='flex absolute right-[30px] top-[15%] rotate-0 peer-checked:rotate-180'>
                        <SlArrowDown/>
                    </div>
                    <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                        <p className='p-[20px] text-sm peer-checked:max-h-full'>I see Coint being a long-term part of my business structure. Not just for this business, but also our future endeavors.</p>
                    </div>
                </div>

                <div className='flex flex-col relative lg:w-1/2 bg-gradient-to-b from-[#DBEFFA] to-white'>
                    <input type="checkbox" className='absolute peer w-full h-full opacity-0'/>
                    <label htmlFor="" className='peer font-bold flex items-center h-[50px] mx-[20px]'>How Do I Know What Deductible Applies To My Policy?</label>
                    <div className='flex absolute right-[30px] top-[15%] rotate-0 peer-checked:rotate-180'>
                        <SlArrowDown/>
                    </div>
                    <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                        <p className='p-[20px] text-sm peer-checked:max-h-full'>I see Coint being a long-term part of my business structure. Not just for this business, but also our future endeavors.</p>
                    </div>
                </div>

                <div className='flex flex-col relative lg:w-1/2 bg-gradient-to-b from-[#DBEFFA] to-white'>
                    <input type="checkbox" className='absolute peer w-full h-full opacity-0'/>
                    <label htmlFor="" className='peer font-bold flex items-center h-[50px] mx-[20px]'>If I Am Moving, Will I Need To Request A New Agent?</label>
                    <div className='flex absolute right-[30px] top-[15%] rotate-0 peer-checked:rotate-180'>
                        <SlArrowDown/>
                    </div>
                    <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                        <p className='p-[20px] text-sm peer-checked:max-h-full'>I see Coint being a long-term part of my business structure. Not just for this business, but also our future endeavors.</p>
                    </div>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs