import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from "flowbite-react";
import proPic from "../assets/banner-items/yo.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import {FaStar} from "react-icons/fa6"
// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>

        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Meet Our <span className='campus'>Campus Traders</span> </h2>
        
        <div >
        <Swiper  
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white paddingRe py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            {/* text */}
            <div className='mt-7'>
                <p className='mb-5'>This website has made trading within our campus so much easier! From textbooks to gadgets, I’ve been able to find great deals from fellow students. The user interface is clean and intuitive, making transactions simple and hassle-free. </p>
                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                <h5 className='text-lg font-medium'>Atharv Grover</h5>
                <p className='text-base'>Student at SRM</p>
            </div>
            </div>
            </SwiperSlide>

            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            {/* text */}
            <div className='mt-7'>
                <p className='mb-5'>This website isn’t just about buying and selling; it’s a fantastic way to connect with other students. I’ve made new friends through shared interests in books and tech. It’s a vibrant community where everyone benefits, making it more than just a trade platform.</p>
                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                <h5 className='text-lg font-medium'>Yash</h5>
                <p className='text-base'>Student at SRM</p>
            </div>
            </div>
            </SwiperSlide>

            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
            
                <FaStar/>
            </div>
            {/* text */}
            <div className='mt-7'>
                <p className='mb-5'>I was initially hesitant to trade items online, but this platform has built-in safety features that give me peace of mind. I’ve met trustworthy sellers and buyers, and the rating system helps identify reliable traders. </p>
                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                <h5 className='text-lg font-medium'>Nancy</h5>
                <p className='text-base'>Student at PKO</p>
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            {/* text */}
            <div className='mt-7'>
                <p className='mb-5'>This website has revolutionized trading at our campus. Whether I’m looking for study materials, room essentials, or simply browsing what’s available, the website is the first place I check. It’s become an integral part of our campus life.</p>
                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                <h5 className='text-lg font-medium'>Spider</h5>
                <p className='text-base'>Student at WEB</p>
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border '>
            <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            {/* text */}
            <div className='mt-7'>
                <p className='mb-5'>The website is extremely well-designed and easy to navigate. Posting an item for sale takes just a few minutes, and the communication with buyers is seamless. I’m impressed with how well everything works together.</p>
                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                <h5 className='text-lg font-medium'>Batman</h5>
                <p className='text-base'>Student at Gotham</p>
            </div>
            </div>
            </SwiperSlide>
      
       
      </Swiper>
        </div>
    </div>
  )
}
