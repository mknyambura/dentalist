import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

import robert from '../images/robertfox.png'
import image1 from '../images/pexels-daniel-frank.png'
import image2 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import blog3 from '../images/blog3.png'


function Article() {
  return (
    <div>
        <Header/>
        <div className='flex flex-col gap-8 m-16'>
            <h1 className='text-[#583FBC] uppercase font-bold'>Technology</h1>
            <h1 className='font-bold text-6xl'>New Technology Make for Better Dental Operation</h1>
            <div className='flex items-center  gap-4'>
                <img src={robert} alt="" className='rounded-full'/>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold'>Robert Fox</h1>
                    <h1 className='text-sm text-slate-400'>12 August 2021</h1>
                </div>
            </div>
            <p className='text-slate-500'>The paper discusses the use of epoxy resins in construction and repair of offshore concrete structures. Typical properties of resin systems are described, and the range of conditions encountered in practice and the development of a wide range of epoxy</p>
            <img src={image1} alt="" className='rounded-[40px]'/>
            <p className='text-slate-500'>
                The paper discusses the use of epoxy resins in construction and repair of offshore concrete structures. Typical properties of resin systems are described, and the range of conditions encountered in practice and the development of a wide range of epoxy systems for a variety of applications are discussed. Several applications such as surface and underwater repairs, and the use of epoxy resins as curing membranes, and to seal cracks and joints are described in detail. It is shown that careful selection of materials and good quality of workmanship are essential to derive the maximum benefit from the use of epoxy systems. A wide range of properties could be obtained from epoxies to suit the requirements of the designer and the contractor. 
            </p>
            <p className='text-slate-500'>
                To this day, it’s not entirely clear which seven lines the article referenced. The prevailing theory is that it’s the roughly seven lines of curl it took to create a Charge. However, a search for the seven lines of code ultimately misses the point: the ability to open up a terminal, run this curl snippet, then immediately see a successful credit card payment felt like seven lines of code. It’s unlikely that a developer believed a production-ready payments integration involved literally only seven lines of code. But taking something as complex as credit card processing and reducing.
            </p>
            <h1 className='font-bold text-3xl'>How is technology affecting the dental surgery?</h1>
            <p className='text-slate-500'>
                A few years ago, Bloomberg Businessweek published a feature story on Stripe. Four words spanned the center of the cover: “seven lines of code,” suggesting that’s all it took for a business to power payments on Stripe. The assertion was bold—and became a theme and meme for us. 
            </p>
            <p className='text-slate-500'>
                To this day, it’s not entirely clear which seven lines the article referenced. The prevailing theory is that it’s the roughly seven lines of curl it took to create a Charge. However, a search for the seven lines of code ultimately misses the point: the ability to open up a terminal, run this curl snippet, then immediately see a successful credit card payment felt like seven lines of code. It’s unlikely that a developer believed a production-ready payments integration involved literally only seven lines of code. But taking something as complex as credit card processing and reducing the integration to only a few lines of code that, when run, immediately returns a successful Charge object is really quite magical.
            </p>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-row justify-evenly'>
                    <img src={image1} alt="" className='rounded-[30px] w-[500px]'/>
                    <img src={image2} alt="" className='rounded-[30px] w-[500px]'/>
                </div>
                <div className='flex flex-row items-center bg-gradient-to-r from-[#DBEFFA] to-white'>
                    <div className='bg-[#583FBC] w-[2px] h-[150px] mr-4'></div>
                    <p className='font-semibold p-4'>“ Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor ”</p>
                </div>
            </div>
            <p className='text-slate-500'>
                A few years ago, Bloomberg Businessweek published a feature story on Stripe. Four words spanned the center of the cover: “seven lines of code,” suggesting that’s all it took for a business to power payments on Stripe. The assertion was bold—and became a theme and meme for us.
            </p>
            <h1 className='font-bold'>Related resource: <span className='text-[#583FBC]'>What is root canal and what is causing it?</span></h1>
            <p className='text-slate-500'>
                A few years ago, Bloomberg Businessweek published a feature story on Stripe. Four words spanned the center of the cover: “seven lines of code,” suggesting that’s all it took for a business to power payments on Stripe. The assertion was bold—and became a theme and meme for us.
            </p>

            <div className='flex flex-col items-center m-16'>
                <h1 className='font-bold text-5xl'>Stay updated with our latest news</h1>
                <div className='grid grid-cols-3 justify-between gap-12 mt-16 ml-16 mr-16 mb-16 items-center'>
                    <Link to='/article' className='relative flex flex-col border border-slate-200 rounded-[30px] hover:shadow-2xl hover:shadowslate-'>
                        <img src={image2} alt="" className='px-3 py-3 rounded-[20px]' />
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
                            <h1 className='text-[#583FBC] uppercase font-bold mt-4 mb-4 ml-5 mr-4'>Technology</h1>
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
                            <h1 className='text-[#583FBC] uppercase font-bold mt-4 mb-4 ml-5 mr-4'>Technology</h1>
                            <h1 className='font-bold ml-5 mb-4 mr-4'>New Technology Make for Digital Operation</h1>
                            <p className='text-slate-400 ml-5 mb-8 mr-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Article