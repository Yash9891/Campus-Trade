
import { useLoaderData } from 'react-router-dom'

export const SinlgeItem = () => {
    const {itemName, imageURL}=useLoaderData()
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <img src={imageURL} className='h-96' alt="" />
        <h2>{itemName}</h2>


    </div>
  )
}
