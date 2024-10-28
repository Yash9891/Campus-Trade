import { useLoaderData, useParams } from 'react-router-dom'
import React, { useState } from 'react'
import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";

export const EditItems = () => {
  const { id } = useParams();
  const { itemName, brand, authorName, imageURL, category, itemDescription } = useLoaderData();
  
  // Predefined categories
  const itemCategories = [
    "Laptops",
    "Electronic",
    "Books",
    "Science",
    "Calculator",
    "Keyboard",
    "Mouse",
    "Bags",
    "Tablet",
    "Printer",
    "Pens",
    "Projects"
  ];

  // State for selected category
  const [selectCategory, setCategory] = useState(itemCategories[0]);

  // Handle category change
  const handleCategory = (event) => {
    setCategory(event.target.value);
  }

  // Handle form submission
  const handleItemSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    
    const itemName = form.itemName.value;
    const brand = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const itemDescription = form.itemDescription.value;

    const updateditemObj = {
      itemName, brand, imageURL, category, itemDescription
    };

    // Make POST request to upload item
    fetch(`https://campus-backend3.vercel.app//item/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateditemObj)
    })
    .then(res => res.json())
    .then(data => {
      alert("Item Updated Successfully!!!");
      // form.reset();
    });
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update The Product</h2>

      <form onSubmit={handleItemSubmit} className="flex lg:w-[1188px] flex-col flex-wrap gap-4">
        {/* First Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="itemName" value="Item Name" />
            </div>
            <TextInput id="itemName" type="text" placeholder="Item Name" required defaultValue={itemName} />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Brand Name" />
            </div>
            <TextInput id="authorName" type="text" placeholder="Brand Name" required defaultValue={brand} />
          </div>
        </div>

        {/* Second Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput id="imageURL" type="text" placeholder="Image URL" required defaultValue={imageURL} />
          </div>

          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Item Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectCategory}
              onChange={handleCategory}
            >
              {itemCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* Item Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="itemDescription" value="Item Description" />
          </div>
          <Textarea
            id="itemDescription"
            className="w-full"
            placeholder="Write Item Description"
            required
            rows={5}
            defaultValue={itemDescription}
          />
        </div>

        <Button type="submit" className="mt-5">
          Update Item
        </Button>
      </form>
    </div>
  );
}
