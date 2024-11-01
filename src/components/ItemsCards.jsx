
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import { FaCartShopping } from 'react-icons/fa6'
// import required modules
import { Pagination } from 'swiper/modules';

export const ItemsCards = ({headline, items}) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'> {headline}</h2>
        {/* cards */}
        <div className='mt-12'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        
       {
        items.map(item=> <SwiperSlide key={item._id}>
            <Link to={`/item/${item._id}`}>
            <div className='relative'>
            <img src={item.imageURL} alt="" className="h-96  object-cover imagesize" />
                <div className=' absolute top-3 right-3 bg-white hover:bg-white p-2 rounded'>
                    <FaCartShopping className='w-4 h-4 text-black'/>
                </div>
                </div>
                <div>
                   <div>
                   <h3>{item.itemName}</h3>
                   <p>{item.brand}</p>
                   </div>
                   <div>
                    <p>{item.price}</p>
                   </div>
                </div>
                </Link>
        </SwiperSlide>)
       }
      </Swiper>
        </div>
    </div>
  )
}
