import React from 'react'
import { BannerCard } from '../home/BannerCard'

export const Banner = () => {
  return (
  
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center '>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* left side */}
        <div className='space-y-8 md:w-1/2 h-full'>
        <h2 className='text-5xl font-bold leading-snug text-black'>Rent and Sell your Items <span className='text-blue-700'>for the best prices</span></h2>
        <p className='md:w-4/5/'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem cupiditate quidem ullam saepe, ad, quae, adipisci similique impedit laboriosam excepturi et itaque! Quis vero iste quod reiciendis provident placeat.</p>
        <div>
          <input type="text" name='search' id='search' placeholder='Search an Item' className='py-2 px-2 rounded-s-sm outline-none' />
          <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-blue-500 transition-all ease-in duration-200'>Search</button>
        </div>
        </div>

          {/* right side */}
          <div>
            <BannerCard/>
          </div>
      </div>

      </div>


  )
}
