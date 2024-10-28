import React, { useEffect, useState } from 'react'
import { ItemsCards } from '../components/ItemsCards';

export const OtherItems = () => {
    const [items, setItems]=useState([]);
    useEffect(()=>{
        fetch('https://campus-backend3.vercel.app/all-items').then(res=>res.json()).then(data=>setItems(data.slice(0, 8)))
    },[])
  return (
    <div><ItemsCards items={items} headline="Other Items"/></div>
  )
}
