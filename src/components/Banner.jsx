
import { BannerCard } from '../home/BannerCard'

export const Banner = () => {
  return (
  
    <div className='px-4 lg:px-24  flex items-center  homepage'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* left side */}
        <div className='space-y-8 md:w-1/2 h-full'>
        <h2 className='text-5xl font-bold leading-snug text-white'>The Smart Way to Rent and Sell <span className='text-blue-500 hometHeadin'> Your Items at the Best </span>Prices!</h2>
        <p className='md:w-4/5/ homePara'>
        CampusTrade is the ultimate platform to rent and sell items within your campus community. Whether it's textbooks, gadgets, or essentials, you can easily find great deals or make extra cash. With a secure and simple process, CampusTrade connects you with fellow students, making trading quick and hassle-free.</p>
        <div>
          <input type="text" name='search' id='search' placeholder='Search an Item' className='py-2 px-2 rounded-s-sm outline-none' />
          <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-purple-500 homebutton transition-all ease-in duration-200'>Search</button>
        </div>
        </div>

          {/* right side */}
          <div >
            <BannerCard/>
          </div>
      </div>

      </div>


  )
}
