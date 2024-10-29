import React from 'react'
import{ Link} from 'react-router-dom'
import itemPic from "../assets/banner-items/ko.gif"
export const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 homepage px-4 lg:px-24 '>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12 promobanner'>
            <div className='md:w-1/2 '>
                <h2 className='text-4xl font-bold mb-6 leading-snug text-white'>Unlocking Potential, Embracing Innovation, and <span className='homeH'>Shaping a Brighter Future for Tomorrow's</span> Leaders!</h2>
                <Link to="/shop" className='block'><button className='bg-gray-700 text-white font-semibold px-5 py-2 rounded hover:bg-black ransition-all duration-300'>Get Promo</button></Link>
               
            </div>
            <div>
                <img src={itemPic} alt=""  className='w-96'/>
            </div>
        </div>
    </div>
  )
}
