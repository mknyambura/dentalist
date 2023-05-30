import React from 'react'
import { BsSearch } from 'react-icons/bs'

import Header from './Header'
import Footer from './Footer'

import background from '../images/background1.png'
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import blog3 from '../images/blog3.png'
import blog4 from '../images/blog4.png'
import blog5 from '../images/blog5.png'
import blog6 from '../images/blog6.png'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom'

function Articles() {
  return (
    <div>
        <Header/>
        <div className='flex flex-row relative justify-between m-24'>
            <div className='flex flex-col justify-evenly'>
                <h1 className='font-bold text-6xl'>News & Articles</h1>
                <p>Stays updated with our latest blog and news and get healthy tips & trick for oral health</p>
                <div className='relative flex flex-row items-center'>
                    <input type="search" className='bg-transparent border border-slate-300 px-8 py-3 w-full rounded-[10px]' placeholder='Search article news...'/>
                    <button className='absolute flex flex-row items-center gap-2 bg-[#583FBC] px-6 py-2 rounded-lg text-white font-bold right-1 outline-none focus:ring-0 focus:ring-offset-0'>
                        Search
                        <BsSearch/>
                    </button>
                </div>
            </div>
            <div className='relative items-center'>
                <div className='items-center bg-[#FADBE2] w-[300px] h-[400px] rounded-[20px]'></div>
                <div className='absolute top-[-50px] right-[-50px]'>
                    <img src={background} alt="" />
                </div>
            </div>
        </div>

        <div className='flex flex-col m-16 items-center justify-center'>
            <div className='flex flex-col items-center gap-8 mt-16'>
                <h1 className='font-bold text-5xl mb-16'>Stay updated with out latest news</h1>
            </div>
            <div className='grid grid-cols-3 justify-between gap-12 mt-16 ml-16 mr-16 items-center'>
                <Link to='/article' className='relative flex flex-col border border-slate-200 rounded-[30px] hover:shadow-2xl hover:shadowslate-'>
                    <img src={blog1} alt="" className='px-3 py-3 rounded-[20px]' />
                    <div className='absolute px-2 py-2 top-4 left-4'>
                        <button className='text-slate-400 flex flex-col justify-between items-center absolute px-4 py-2 bg-white rounded-[15px] '><span className='text-black font-bold'>23</span>Jan</button>
                    </div>
                    <div>
                        <h1 className='text-[#583FBC] uppercase font-bold mt-4 mb-4 ml-5 mr-4'>Technology</h1>
                        <h1 className='font-bold ml-5 mb-4 mr-4'>New Technology Make for Digital Operation</h1>
                        <p className='text-slate-400 ml-5 mb-8 mr-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
                    </div>
                </Link>

                <Link to='/article' className='relative flex flex-col border border-slate-200 rounded-[30px] hover:shadow-2xl hover:shadowslate-'>
                    <img src={blog2} alt="" className='px-3 py-3 rounded-[20px]' />
                    <div className='absolute px-2 py-2 top-4 left-4'>
                        <button className='text-slate-400 flex flex-col justify-between items-center absolute px-4 py-2 bg-white rounded-[15px] '><span className='text-black font-bold'>23</span>Jan</button>
                    </div>
                    <div>
                        <h1 className='text-[#583FBC] uppercase font-bold mt-4 mb-4 ml-5 mr-4'>Digital</h1>
                        <h1 className='font-bold ml-5 mb-4 mr-4'>New Technology Make for Digital Operation</h1>
                        <p className='text-slate-400 ml-5 mb-8 mr-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
                    </div>
                </Link>
                <Link to='/article' className='relative flex flex-col border border-slate-200 rounded-[30px] hover:shadow-2xl hover:shadowslate-'>
                    <img src={blog3} alt="" className='px-3 py-3 rounded-[20px]' />
                    <div className='absolute px-2 py-2 top-4 left-4'>
                        <button className='text-slate-400 flex flex-col justify-between items-center absolute px-4 py-2 bg-white rounded-[15px] '><span className='text-black font-bold'>23</span>Jan</button>
                    </div>
                    <div>
                        <h1 className='text-[#583FBC] uppercase font-bold mt-4 mb-4 ml-5 mr-4'>Hygiene</h1>
                        <h1 className='font-bold ml-5 mb-4 mr-4'>New Technology Make for Digital Operation</h1>
                        <p className='text-slate-400 ml-5 mb-8 mr-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
                    </div>
                </Link>
                <Link to='/article' className='relative flex flex-col border border-slate-200 rounded-[30px] hover:shadow-2xl hover:shadowslate-'>
                    <img src={blog4} alt="" className='px-3 py-3 rounded-[30px]' />
                    <div className='absolute px-2 py-2 top-4 left-4'>
                        <button className='text-slate-400 flex flex-col justify-between items-center absolute px-4 py-2 bg-white rounded-[15px] '><span className='text-black font-bold'>23</span>Jan</button>
                    </div>
                    <div>
                        <h1 className='text-[#583FBC] uppercase font-bold mt-4 mb-4 ml-5 mr-4'>Technology</h1>
                        <h1 className='font-bold ml-5 mb-4 mr-4'>New Technology Make for Digital Operation</h1>
                        <p className='text-slate-400 ml-5 mb-8 mr-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
                    </div>
                </Link>
                <Link to='/article' className='relative flex flex-col border border-slate-200 rounded-[30px] hover:shadow-2xl hover:shadowslate-'>
                    <img src={blog5} alt="" className='px-3 py-3 rounded-[30px]' />
                    <div className='absolute px-2 py-2 top-4 left-4'>
                        <button className='text-slate-400 flex flex-col justify-between items-center absolute px-4 py-2 bg-white rounded-[15px] '><span className='text-black font-bold'>23</span>Jan</button>
                    </div>
                    <div>
                        <h1 className='text-[#583FBC] uppercase font-bold mt-4 mb-4 ml-5 mr-4'>Digital</h1>
                        <h1 className='font-bold ml-5 mb-4 mr-4'>New Technology Make for Digital Operation</h1>
                        <p className='text-slate-400 ml-5 mb-8 mr-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
                    </div>
                </Link>
                <Link to='/article' className='relative flex flex-col border border-slate-200 rounded-[30px] hover:shadow-2xl hover:shadowslate-'>
                    <img src={blog6} alt="" className='px-3 py-3 rounded-[30px]' />
                    <div className='absolute px-2 py-2 top-4 left-4'>
                        <button className='text-slate-400 flex flex-col justify-between items-center absolute px-4 py-2 bg-white rounded-[15px] '><span className='text-black font-bold'>23</span>Jan</button>
                    </div>
                    <div>
                        <h1 className='text-[#583FBC] uppercase font-bold mt-4 mb-4 ml-5 mr-4'>Hygiene</h1>
                        <h1 className='font-bold ml-5 mb-4 mr-4'>New Technology Make for Digital Operation</h1>
                        <p className='text-slate-400 ml-5 mb-8 mr-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
                    </div>
                </Link>
            </div>
            <div className='flex flex-row gap-8 items-center mt-16 mb-16'>
                <button className='px-4 py-2 rounded-[10px] border bg-[#583FBC] text-white'>1</button>
                <button className='px-4 py-2 rounded-[10px] border hover:bg-[#583FBC] hover:text-white'>2</button>
                <button className='px-4 py-2 rounded-[10px] border hover:bg-[#583FBC] hover:text-white'>3</button>
                <button className='px-4 py-2 rounded-[10px] border hover:bg-[#583FBC] hover:text-white'>4</button>
                <button className='px-4 py-2 rounded-[10px] border hover:bg-[#583FBC] hover:text-white'>5</button>
                <button className='px-4 py-2 rounded-[10px] border hover:bg-[#583FBC] hover:text-white'>...</button>
                <SlArrowRight className='hover:cursor-pointer hover:text-[#583FBC]'/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Articles