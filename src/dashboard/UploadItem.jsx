import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
export const UploadItem = () => {
  const itemCategorys=[
    "Laptops",
   
    "Tablets",
    "Printers",
    "Smartphones",
    "Digital Cameras",
    "Headphones",
    "Projects",
    "Projectors",
    "Calculators",
    "Musical Instruments",
    "Art Supplies",
    "Textbooks",
    "Reference Books",
    "Books",
    "Stationery Supplies",
    "Notebooks",
    "Desk Organizers",
    "Ergonomic Chairs",
    "Study Guides",
    "Flashcards",
    "Backpacks",
    "Educational Games"
    




  ]
  const [selectCategory, setCategory]=useState(itemCategorys[0]);
  const handleCategory=(event)=>{
    // console.log(event.target.value);
    setCategory(event.target.value)
  }

  //handle item submition
  const handleItemSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const itemName=form.itemName.value;
    const brand=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.categoryName.value;
    const itemDescription=form.itemDescription.value;
    const itemObj={
      itemName, brand, imageURL, category, itemDescription
    }
    fetch("https://campus-render.onrender.com/upload-item",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(itemObj)
    }).then(res=>res.json()).then(data=>{
      alert("Item Uploaded Successfully!!!");
      form.reset();
    })
   
    
    

  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload The Item</h2>

      <form onSubmit={handleItemSubmit} className="flex lg:w-[1188px] flex-col flex-wrap gap-4 ">
        {/* first row */}
     <div className='flex gap-8'>
     <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="itemName" value="Item Name" />
        </div>
        <TextInput id="itemName" type="text" placeholder="Item Name" required />
      </div>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Brand Name" />
        </div>
        <TextInput id="authorName" type="text" placeholder="Brand Name" required />
      </div>


</div>


{/* second row */}

<div className='flex gap-8'>
     <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Image" />
        </div>
        <TextInput id="imageURL" type="text" placeholder="Item Image" required />
      </div>


{/* category */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Item Category" />
        </div>
      <Select id='inputState' name='categoryName' className='w-full rounded' value={selectCategory}
      onChange={handleCategory}>
        {
          itemCategorys.map((option)=><option key={option} value={option}>{option}</option>)
        }

      </Select>

       </div>


</div>




{/* itemDescription */}
<div>
        <div className="mb-2 block">
          <Label htmlFor="itemDescription" value="Item Description" />
        </div>
        <Textarea id="itemDescription" className='w-full' placeholder="Write Item Description" required rows={5} />
       
      </div>
      
      <Button type='submit' className='mt-5'>Upload Item</Button>
    </form>
    </div>
  )
}
