import  { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { Table } from "flowbite-react";
export const ManageItems = () => {
  const [allItems, setallItems]=useState([]);
  useEffect(()=>{
    fetch("https://campus-backend3.vercel.app/all-items").then(res=>res.json()).then(data=>setallItems(data))
  },[])

  const handleDelete=(id)=>{
  
    fetch(`https://campus-backend3.vercel.app/item/${id}`,{
      method:"DELETE",
    }).then(
      res=>res.json().then(data=>{alert("Item Deleted Successfully")
        // setallItems(data)
      })
    )
  }
  return (
    <div className='px-4 my-12'>
       <h2 className='mb-8 text-3xl font-bold'>Manage Your Product</h2>
       <Table className='lg:w-[1188px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Brand</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span >Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allItems.map((item, index)=> <Table.Body className="divide-y" key={item._id}>
             <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index+1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {item.itemName}
            </Table.Cell>
            
            <Table.Cell>{item.brand}</Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell>₹250</Table.Cell>
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-items/${item._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                Edit
              </Link>
              <button onClick={()=>handleDelete(item._id)} className='bg-red-500 px-4 py-1 font-semibold text-white rounded-sm hover:by-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
            
            </Table.Body>)
        }
       
      </Table>
       
    </div>
  )
}
