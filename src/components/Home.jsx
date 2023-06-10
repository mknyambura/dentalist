import React from 'react'
// import {GoogleMap, Map, InfoWindow, Marker, GoogleApiWrapper, useLoadScript} from 'google-maps-react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

import Header from './Header'
import Footer from './Footer'

import { MdPhoneInTalk } from 'react-icons/md'
import { AiFillCheckCircle, AiFillRightCircle, AiFillStar, AiOutlineStar } from 'react-icons/ai'

import girlSmiling from '../images/girl-smiling.png'
import dentures from '../images/dentures.png'
import implants from '../images/implants.png'
import whitening from '../images/whitening.png'
import rootCanal from '../images/root-canal.png'
import patient from '../images/patient-receiving-dental-treatment.png'
import patient1 from '../images/young-asian-female-dentist-white-coat-posing-clinic-equipment.png'
import shield from '../images/shield.png'
import hands from '../images/hands.png'
import tooth from '../images/tooth.png'
import chair from '../images/chair.png'
import robert from '../images/robertfox.png'
import albert from '../images/albertflores.png'
import bessie from '../images/bessiecooper.png'
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import blog3 from '../images/blog3.png'
import googleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';


function Home() {
    // const {isLoaded} = useLoadScript({
    //     googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    // })

    // if (!isLoaded) return <div>Loading...</div>
  return (
    <div>
        <Header/>
        <div className='flex sm:flex-col md:flex-col lg:flex-row bg-[#7ABADD] m-16 rounded-[50px] px-16 py-16'>
            <div className='flex flex-col gap-8 lg:w-[50%] '>
                <h1 className='font-bold sm:text-5xl md:text-5xl lg:text-6xl'>Entrust your smile to professionals</h1>
                <p className='text-slate-300 font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel cum fugiat quam veritatis minima delectus tempora saepe? Ex vitae, consequatur dolorem tempore, sapiente cumque, dicta eligendi quibusdam autem debitis eum.</p>
                <div className='flex sm:flex-col md:flex-col lg:flex-row items-center justify-between'>
                    <button className='bg-[#583FBC] px-4 py-2 rounded-lg text-white'>Book an appointment</button>
                    <div className='flex sm:flex-col md:flex-col lg:flex-row gap-4 items-center justify-center'>
                        <button className='sm:w-1/4 px-3 py-2 bg-white rounded-lg gap-3 items-center'>
                            <MdPhoneInTalk className='text-[#583FBC] items-center justify-center'/>
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

        <div className='flex flex-col items-center justify-center gap-8'>
            <div className='flex flex-col w-[65%] gap-8 items-center m-16'>
                <p className='font-semibold sm:text-4xl md:text-4xl lg:text-5xl text-center'>Dentalist is re-imagining what the dental experience can be and proudly setting a new standard for patient care.</p>
                <div className='bg-[#583FBC] h-[2px] w-1/4 items-center justify-center'></div>
            </div>
            <div className='flex flex-col m-16 items-center'>
                <h1 className='mb-8 uppercase text-[#583FBC] font-bold'>Services</h1>
                <div className='sm:items-center md:items-center flex sm:flex-col md:flex-col lg:flex-row justify-between mb-16 mt-2'>
                    <h1 className=' font-bold sm:text-4xl lg:text-5xl text-start lg:w-[30%]'>Feel amazing about your oral health</h1>
                    <p className='font-thin sm:text-s lg:text-xl w-[50%]'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>
                <div className='flex flex-row sm:flex-wrap md:flex-wrap justify-evenly gap-14'>
                    <div className='flex flex-col items-center px-2 py-2 border border-slate-300 rounded-[20px] gap-6 hover:shadow-2xl hover:shadow-slate-500 hover:animate-bounce'>
                        <div className='flex bg-[#DBEFFA] rounded-[20px] px-20 py-20 items-center justify-center'>
                            <button disabled='disabled' className='border border-[#FAFCFD] bg-[#E5F5FD] px-2 py-2 rounded-lg items-center justify-center'>
                                <button disabled='disabled' className='bg-white px-4 py-4 items-center rounded-lg'>
                                    <img src={dentures} alt="" />
                                </button>
                            </button>
                        </div>
                        <h2 className='font-bold text-xl'>Dentures</h2>
                        <p className='text-center'>Lorem ipsum is a placeholder text commonly used in the graphic</p>
                    </div>

                    <div className='flex flex-col items-center px-2 py-2 border border-slate-300 rounded-[20px] gap-6 hover:shadow-2xl hover:shadow-slate-500 hover:animate-bounce'>
                        <div className='flex bg-[#DBDEFA] rounded-[20px] px-20 py-20 items-center justify-center'>
                            <button disabled='disabled' className='border border-[#FAFCFD] bg-transparent px-2 py-2 rounded-lg items-center justify-center'>
                                <button disabled='disabled' className='bg-white px-4 py-4 items-center rounded-lg'>
                                    <img src={implants} alt="" />
                                </button>
                            </button>
                        </div>
                        <h2 className='font-bold text-xl'>Implants</h2>
                        <p className='text-center'>Lorem ipsum is a placeholder text commonly used in the graphic</p>
                    </div>

                    <div className='flex flex-col items-center px-2 py-2 border border-slate-300 rounded-[20px] gap-6 hover:shadow-2xl hover:shadow-slate-500 hover:animate-bounce'>
                        <div className='flex bg-[#F6DBFA] rounded-[20px] px-20 py-20 items-center justify-center'>
                            <button disabled='disabled' className='border border-[#FAFCFD] bg-transparent px-2 py-2 rounded-lg items-center justify-center'>
                                <button disabled='disabled' className='bg-white px-4 py-4 items-center rounded-lg'>
                                    <img src={whitening} alt="" />
                                </button>
                            </button>
                        </div>
                        <h2 className='font-bold text-xl'>Whitening</h2>
                        <p className='text-center'>Lorem ipsum is a placeholder text commonly used in the graphic</p>
                    </div>

                    <div className='flex flex-col items-center px-2 py-2 border border-slate-300 rounded-[20px] gap-6 hover:shadow-2xl hover:shadow-slate-500 hover:animate-bounce'>
                        <div className='flex bg-[#FADBE2] rounded-[20px] px-20 py-20 items-center justify-center'>
                            <button disabled='disabled' className='border border-[#FAFCFD] bg-transparent px-2 py-2 rounded-lg items-center justify-center'>
                                <button disabled='disabled' className='bg-white px-4 py-4 items-center rounded-lg'>
                                    <img src={rootCanal} alt="" />
                                </button>
                            </button>
                        </div>
                        <h2 className='font-bold text-xl'>Root Canal</h2>
                        <p className='text-center'>Lorem ipsum is a placeholder text commonly used in the graphic</p>
                    </div>
                </div>
                <button className='text-[#583FBC] bg-[#583fbc1f] hover:bg-[#583FBC] hover:text-white rounded-lg font-bold flex flex-row justify-between px-8 py-4 lg:w-[20%] items-center mt-24 gap-4'>
                    View all service list
                    <AiFillRightCircle/>
                </button>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row m-16 items-center justify-between'>
            <div className='flex flex-col relative w-3/4 mb-24'>
                <div className=' bg-[#DBEFFA] sm:h-[400px] md:h-[420px] lg:h-[500px] w-[58%] rounded-[30px]'>

                </div>
                <div className='absolute top-[12%] right-[25%]'>
                    <img src={patient} alt=""/>
                </div>
            </div>
            <div className='flex flex-col gap-8 text-start lg:w-1/2 mb-24'>
                <h1 className='uppercase text-[#583FBC] font-bold'>Dental 24H Emergency</h1>
                <h1 className='font-bold text-5xl'>Gentle, friendly treatment from our local practice</h1>
                <p className='font-thin'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <button className='bg-[#583FBC] text-white font-bold px-8 py-3 rounded-lg w-[60%]'>Book an appointment</button>
            </div>
        </div>

        <div className='bg-[#DBDEFA] flex flex-col items-center justify-between m-16 rounded-[40px]'>
            <div className='flex flex-col m-10 gap-8'>
                <h1 className='text-[#583FBC] uppercase font-bold'>Features</h1>
                <h1 className='font-bold text-5xl'>Specialized care through experience</h1>
                <p className='font-thin'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 m-28 justify-evenly gap-12 items-center'> 
                <div className='flex flex-row  gap-4'>
                    <button disabled='disabled' className='border border-[#FAFCFD] bg-transparent px-2 py-2 rounded-lg items-center justify-center'>
                        <button disabled='disabled' className='bg-white px-4 py-4 items-center rounded-lg'>
                            <img src={shield} alt="" width={42}/>
                        </button>
                    </button>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-2xl'>Safety first</h1>
                        <p className='text-slate-500'>We prioritize safety with health checks and more</p>
                    </div>
                </div>

                <div className='flex flex-row gap-4'>
                    <button disabled='disabled' className='border border-[#FAFCFD] bg-transparent px-2 py-2 rounded-lg items-center justify-center'>
                        <button disabled='disabled' className='bg-white px-4 py-4 items-center rounded-lg'>
                            <img src={hands} alt="" width={50}/>
                        </button>
                    </button>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-2xl'>Insurance accepted</h1>
                        <p className='text-slate-500'>We're in network with major insurer such as Delta Dental, Aetna and Cigna</p>
                    </div>
                </div>

                <div className='flex flex-row gap-4'>
                    <button disabled='disabled' className='border border-[#FAFCFD] bg-transparent px-2 py-2 rounded-lg items-center justify-center'>
                        <button disabled='disabled' className='bg-white px-4 py-4 items-center rounded-lg'>
                            <img src={chair} alt="" width={50}/>
                        </button>
                    </button>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-2xl'>Full-service denstiry</h1>
                        <p className='text-slate-500'>Our clinic offers a full dental service from examinations to implants and veneers</p>
                    </div>
                </div>

                <div className='flex flex-row gap-4'>
                    <button disabled='disabled' className='border border-[#FAFCFD] bg-transparent px-2 py-2 rounded-lg items-center justify-center'>
                        <button disabled='disabled' className='bg-white px-4 py-4 items-center rounded-lg'>
                            <img src={tooth} alt="" width={43}/>
                        </button>
                    </button>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold text-2xl'>No judgement ever</h1>
                        <p className='text-slate-500'>From floss bosses to sweet tooths, every mouth is welcome.</p>
                    </div>
                </div>  
            </div>
        </div>

        <div className='flex sm:flex-col md:flex-col lg:flex-row m-16 items-center justify-between gap-12'>
            <div className='flex flex-col gap-8 text-start lg:w-1/2'>
                <h1 className='uppercase text-[#583FBC] font-bold'>Experts in Dental</h1>
                <h1 className='font-bold text-5xl'>Top-notch dentistry, from Seattle's top dentists</h1>
                <p className='font-thin'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <div className='flex flex-col'>
                    <h1 className='flex flex-row items-center gap-2'><AiFillCheckCircle className='text-[#583FBC]'/>Top duality dental team</h1>
                    <h1 className='flex flex-row items-center gap-2'><AiFillCheckCircle className='text-[#583FBC]'/>State of the art dental services</h1>
                    <h1 className='flex flex-row items-center gap-2'><AiFillCheckCircle className='text-[#583FBC]'/>Discount on all dental treatment</h1>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center relative w-1/2'>
                <div className=' flex bg-[#FADBE2] sm:h-[350px] md:h-[400px] h-[500px] w-[78%] rounded-[30px]'></div>
                <div className='absolute top-[12%] right-[25%]'>
                    <img src={patient1} alt=""/>
                </div>
            </div>
        </div>

        <div className='flex  flex-col bg-[#D9EBFA] m-16 rounded-[20px]'>
            <div className='flex flex-col m-16'>
                <h1 className='text-[#583FBC] font-bold uppercase mt-8'>Testimonial</h1>
                <div className='flex sm:flex-col md:flex-col lg:flex-row justify-between items-center sm:gap-4 md:gap-4 mt-8 mb-8'>
                    <h1 className='font-bold text-5xl'>What people have said about us</h1>
                    <p className='font-thin sm:text-s lg:text-xl'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts</p>
                </div>
            </div>
            <div className='flex sm:flex-col lg:flex-row justify-between gap-12 m-16'>
                <div className='bg-white rounded-[20px] flex flex-col relative items-center gap-8'>
                    <button disabled="disabled" className='absolute items-center top-[-60px] border bg-[#D9EBFA] rounded-full px-2 py-2 justify-center'>
                        <img src={robert} alt="" />
                    </button>
                    <div className='gap-8 flex flex-col items-center justify-center m-4'>
                        <h1 className='font-bold mt-24'>Robert Fox</h1>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts</p>    
                    </div>
                    <div className='text-[#FF8C4B] flex mb-16 items-center justify-between gap-2'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                </div>

                <div className='bg-white rounded-[20px] flex flex-col relative items-center gap-8'>
                    <button disabled="disabled" className='absolute items-center top-[-60px] border bg-[#D9EBFA] rounded-full px-2 py-2 justify-center'>
                        <img src={albert} alt="" />
                    </button>
                    <div className='gap-8 flex flex-col items-center justify-center m-4'>
                        <h1 className='font-bold mt-24'>Albert Flores</h1>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts</p>
                    </div>
                    <div className='text-[#FF8C4B] flex mb-16 items-center justify-between gap-2'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                </div>

                <div className='bg-white rounded-[20px] flex flex-col relative items-center gap-8'>
                    <button disabled="disabled" className='absolute items-center top-[-60px] border bg-[#D9EBFA] rounded-full px-2 py-2 justify-center'>
                        <img src={bessie} alt="" />
                    </button>
                    <div className='gap-8 flex flex-col items-center justify-center m-4'>
                        <h1 className='font-bold mt-24'>Bessie Cooper</h1>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts</p>
                    </div>
                    <div className='text-[#FF8C4B] flex mb-16 items-center justify-between gap-2'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col m-16 items-center justify-center'>
            <div className='flex flex-col items-center gap-8 mt-16'>
                <h1 className='text-[#583FBC] font-bold uppercase'>Blog</h1>
                <h1 className='font-bold text-5xl mb-16'>Stay updated with our latest news</h1>
            </div>
            <div className='flex sm:flex-col lg:flex-row justify-between gap-12 mt-16 ml-16 mr-16 items-center'>
                <div className='relative flex flex-col border border-slate-200 rounded-[30px]'>
                    <img src={blog1} alt="" className='px-3 py-3' />
                    <div className='absolute px-2 py-2 top-4 left-4'>
                        <button className='text-slate-400 flex flex-col justify-between items-center absolute px-4 py-2 bg-white rounded-[15px] '><span className='text-black font-bold'>23</span>Jan</button>
                    </div>
                    <div>
                        <h1 className='text-[#583FBC] uppercase font-bold mt-4 mb-4 ml-5 mr-4'>Technology</h1>
                        <h1 className='font-bold ml-5 mb-4 mr-4'>New Technology Make for Digital Operation</h1>
                        <p className='text-slate-400 ml-5 mb-8 mr-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
                    </div>
                </div>

                <div className='relative flex flex-col border border-slate-200 rounded-[30px]'>
                    <img src={blog2} alt="" className='px-3 py-3' />
                    <div className='absolute px-2 py-2 top-4 left-4'>
                        <button className='text-slate-400 flex flex-col justify-between items-center absolute px-4 py-2 bg-white rounded-[15px] '><span className='text-black font-bold'>23</span>Jan</button>
                    </div>
                    <div>
                        <h1 className='text-[#583FBC] uppercase font-bold mt-4 mb-4 ml-5 mr-4'>Digital</h1>
                        <h1 className='font-bold ml-5 mb-4 mr-4'>New Technology Make for Digital Operation</h1>
                        <p className='text-slate-400 ml-5 mb-8 mr-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
                    </div>
                </div>
                <div className='relative flex flex-col border border-slate-200 rounded-[30px]'>
                    <img src={blog3} alt="" className='px-3 py-3' />
                    <div className='absolute px-2 py-2 top-4 left-4'>
                        <button className='text-slate-400 flex flex-col justify-between items-center absolute px-4 py-2 bg-white rounded-[15px] '><span className='text-black font-bold'>23</span>Jan</button>
                    </div>
                    <div>
                        <h1 className='text-[#583FBC] uppercase font-bold mt-4 mb-4 ml-5 mr-4'>Hygiene</h1>
                        <h1 className='font-bold ml-5 mb-4 mr-4'>New Technology Make for Digital Operation</h1>
                        <p className='text-slate-400 ml-5 mb-8 mr-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</p>
                    </div>
                </div>
            </div>
            <Link to='/articles' className='text-[#583FBC] bg-[#583fbc1f] hover:bg-[#583FBC] hover:text-white rounded-lg font-bold flex flex-row justify-between px-8 py-4 gap-5 lg:w-[20%] items-center mt-24'>
                View more articles
                <AiFillRightCircle/>
            </Link>
        </div>

        <div className='flex items-center px-12 py-12'>
            <div className='flex flex-col gap-8 m-16'>
                <h1 className='text-[#583FBC] font-bold uppercase'>Book Appointment</h1>
                <h1 className='font-bold text-5xl'>Care at Dentalist is pleasure</h1>
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
        <Footer/>
    </div>
  )
}
// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyDGDKN0i2bVi_zHaZNAfFTC9FPHtpnUY8c")
//   })(Home)

export default Home