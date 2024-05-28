import React from 'react'
import banner from '../assets/images/banner.webp'
import { FaArrowRight } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { RiYoutubeFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Main = () => {
    return (
        <>
            <div className='px-3 lg:px-20'>
                <div className='bg-red-200 rounded-b-xl overflow-hidden '>
                    <div className=''>
                        <img src={banner} className='w-full h-56' alt="banner" />
                    </div>
                    <div className='bg-[#1F1F1F] flex gap-4 px-10 h-28'>
                        <div className='mt-[-40px] lg:mt-[-60px]'>
                            <div className='overflow-hidden rounded-2xl  border border-black'>
                                <img className="w-32 " src="https://res.cloudinary.com/glide/image/fetch/f_auto,h_150,c_limit/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fglide-prod.appspot.com%2Fo%2Ficon-images%252Fanonymous-b8b74b04-83a5-46d6-a2cc-25e0559d33df.png%3Falt%3Dmedia%26token%3D633ff17b-72a8-49f5-8f96-a06e64af4679" alt="logo" />
                            </div>
                        </div>
                        <div className=' mt-2 lg:mt-6'>
                            <h2 className='text-white font-bold text-2xl'>CoinMath</h2>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-6 bg-[#1F1F1F] rounded-xl my-10 py-8 px-10'>
                    <div className='overflow-hidden rounded-full '>
                        <img className="w-20 h-20" src="https://res.cloudinary.com/glide/image/fetch/f_auto,h_150,c_limit/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fglide-prod.appspot.com%2Fo%2Ficon-images%252Fanonymous-b8b74b04-83a5-46d6-a2cc-25e0559d33df.png%3Falt%3Dmedia%26token%3D633ff17b-72a8-49f5-8f96-a06e64af4679" alt="logo" />
                    </div>
                    <div>
                        <span className='text-[12px] text-yellow-900'>WALLET BALANCE</span>
                        <h3 className='text-2xl font-bold text-[#fff]'>0.009</h3>
                        <p className='text-sm text-gray-800'>COIM</p>
                    </div>
                </div>
                <div className=' bg-[#1F1F1F] rounded-xl my-10 py-8 px-10'>
                    <div className='flex items-center justify-between hover:bg-gray-600 cursor-pointer px-1 py-1 rounded-lg transition-colors duration-100'>
                        <h6 className='text-white'>COIM Generation</h6>
                        <div className='text-white bg-yellow-900 rounded-2xl px-2 py-1  flex gap-2 items-center'>
                            <div><FaArrowRight /></div>
                            <span>Minnnig</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-7  hover:bg-gray-600 px-1 py-1 cursor-pointer rounded-lg transition-colors duration-100'>
                        <h6 className='text-white'>Wallet</h6>
                        <div className='text-white bg-yellow-900 rounded-2xl px-2 py-1  flex gap-2 items-center'>
                            <div><FaArrowRight /></div>
                            <span>Wallet</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-7  hover:bg-gray-600 px-1 py-1 cursor-pointer rounded-lg transition-colors duration-100'>
                        <h6 className='text-white'>Refferals</h6>
                        <div className='text-white bg-yellow-900 rounded-2xl px-2 py-1  flex gap-2 items-center'>
                            <div><FaArrowRight /></div>
                            <span>Refferals</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-7  hover:bg-gray-600 px-1 py-1 cursor-pointer rounded-lg transition-colors duration-100'>
                        <h6 className='text-white'>News</h6>
                        <div className='text-white bg-yellow-900 rounded-2xl px-2 py-1  flex gap-2 items-center'>
                            <div><FaArrowRight /></div>
                            <span>News</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-7  hover:bg-gray-600 px-1 py-1 cursor-pointer rounded-lg transition-colors duration-100'>
                        <h6 className='text-white'>My Profile</h6>
                        <div className='text-white bg-yellow-900 rounded-2xl px-2 py-1  flex gap-2 items-center'>
                            <div><FaArrowRight /></div>
                            <span>My Profile</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-7  hover:bg-gray-600 px-1 py-1 cursor-pointer rounded-lg transition-colors duration-100'>
                        <h6 className='text-white'>Wallet</h6>
                        <div className='text-white bg-yellow-900 rounded-2xl px-2 py-1  flex gap-2 items-center'>
                            <div><FaArrowRight /></div>
                            <span>Minnnig</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-center gap-5'>
                        <div className='bg-yellow-900 rounded-2xl cursor-pointer pl-2 pr-2 md:pr-6 py-1 '><FaTwitter /></div>
                        <div className='bg-yellow-900 rounded-2xl cursor-pointer pl-2 pr-2 md:pr-6 py-1'><FaFacebookF /></div>
                        <div className='bg-yellow-900 rounded-2xl cursor-pointer pl-2 pr-2 md:pr-6 py-1'><AiFillInstagram /></div>
                        <div className='bg-yellow-900 rounded-2xl cursor-pointer pl-2 pr-2 md:pr-6 py-1'><SiGmail /></div>
                        <div className='bg-yellow-900 rounded-2xl cursor-pointer pl-2 pr-2 md:pr-6 py-1'> <RiYoutubeFill /></div>
                        <div className='bg-yellow-900 rounded-2xl cursor-pointer pl-2 pr-2 md:pr-6 py-1 flex  items-center gap-2'><FaTelegramPlane /><span className='hidden md:block'>Telegram</span></div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Main
