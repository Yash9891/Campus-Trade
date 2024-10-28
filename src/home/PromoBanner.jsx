import React from 'react'
import{ Link} from 'react-router-dom'
import itemPic from "../assets/banner-items/item3.jpg"
export const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12 '>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>2024 Most Popular Student Helper Item</h2>
                <Link to="/shop" className='block'><button className='bg-blue-500 text-white font-semibold px-5 py-2 rounded hover:bg-black ransition-all duration-300'>Get Promo</button></Link>
               
            </div>
            <div>
                <img src={itemPic} alt=""  className='w-96'/>
            </div>
        </div>
    </div>
  )
}
