import React, { useEffect, useState } from 'react'
import { ItemsCards } from '../components/ItemsCards';

export const FavoriteItems = () => {
    const [items, setItems]=useState([]);
    useEffect(()=>{
        fetch('https://campus-render.onrender.com/all-items').then(res=>res.json()).then(data=>setItems(data.slice(0, 8)))
    },[])
  return (
    <div className='mostpopular'><ItemsCards items={items} headline="Most Popular" /></div>
  )
}
