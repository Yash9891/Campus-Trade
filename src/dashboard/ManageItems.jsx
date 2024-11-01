import  { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { Table } from "flowbite-react";
export const ManageItems = () => {
  const [allItems, setallItems]=useState([]);
  useEffect(()=>{
    fetch("https://campus-render.onrender.com/all-items").then(res=>res.json()).then(data=>setallItems(data))
  },[])

  const handleDelete=(id)=>{
  
    fetch(`https://campus-render.onrender.com/item/${id}`,{
      method:"DELETE",
    }).then(
      res=>res.json().then(data=>{alert("Item Deleted Successfully")
        // setallItems(data)
      })
    )
  }
  return (
    <div className='px-4 my-12'>
       <h2 className='mb-8 text-3xl font-bold'>Manage Your <span className='uploadH'>Products</span> </h2>
       <Table className='lg:w-[1188px]'>
        <Table.Head>
          <Table.HeadCell className='homeH2'>No.</Table.HeadCell>
          <Table.HeadCell className='homeH2'>Product name</Table.HeadCell>
          <Table.HeadCell className='homeH2'>Brand</Table.HeadCell>
          <Table.HeadCell className='homeH2'>Category</Table.HeadCell>
          <Table.HeadCell className='homeH2'>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className='homeH2'>Manage</span>
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
              <Link to={`/admin/dashboard/edit-items/${item._id}`} className="font-medium text-purple-600 hover:underline dark:text-cyan-500 mr-5 ">
                Edit
              </Link>
              <button onClick={()=>handleDelete(item._id)} className='bg-red-500 px-4 py-1 font-semibold text-white rounded-sm hover:by-sky-600 deletebtn'>Delete</button>
            </Table.Cell>
          </Table.Row>
            
            </Table.Body>)
        }
       
      </Table>
       
    </div>
  )
}
