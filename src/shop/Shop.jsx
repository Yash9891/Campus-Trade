import  { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
export const Shop = () => {
  const [items, setItems]=useState([]);
  useEffect(()=>{
    fetch('https://campus-render.onrender.com/all-items').then(res=>res.json()).then(data=>setItems(data))
  },[])
  return (
    <>
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>All Items are Here</h2>
      <div className='grid gap-8 mty-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          items.map(item=> <Card
            className="max-w-sm" >
              <img src={item.imageURL} alt="" className='h-96' />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              
              <p>
                {item.itemName}
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <button className='bg-blue-500  font-semibold text-white py-2 rounded'>Rent Now</button>
          </Card>)
        }
      </div>
    </div>
    </>
  )
}
