import React from 'react'
import FavItemImg from "../assets/banner-items/sys1.jpg"
import {Link} from 'react-router-dom'
export const FavItem = () => {
  return (
    <div className='px-4 mx-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center'>
        <div className='md:w-1/2'>
        <img src={FavItemImg} alt="" className='rounded md:w-10/12 '/>
        </div>

        <div className='md:w-1/2 space-y-6'>
        <h2 className='text-4xl font-bold my-5 md:w-3/4 leading-snug'>Discover Your  <span className='text-purple-600'>Perfect Pick</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>Explore a wide selection of quality items tailored to your needs. From everyday essentials to unique finds, we’ve got something for everyone. Enjoy a seamless shopping experience and find the best deals on products you’ll love!</p>



{/* stacts  */}
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>

            <div >
                <h3 className='text-2xl font-bold'>800+</h3>
                <p className='text-base'>Item Listing</p>
            </div>
            <div >
                <h3 className='text-2xl font-bold'>500+</h3>
                <p className='text-base'>Register Userrs</p>
            </div>
            <div >
                <h3 className='text-2xl font-bold'>1200+</h3>
                <p className='text-base'>Rented Items</p>
            </div>
        </div>



        <Link to="/shop" className='mt-12 block'><button className='bg-blue-500 text-white font-semibold px-5 py-2 rounded hover:bg-purple-600 ransition-all duration-300'>See More</button></Link>
        </div>
     
    </div>
  )
}
