import { Link } from "react-router-dom"
import itemPic from "../assets/banner-items/ko.gif"
export const About = () => {
  return (
    <>
    <div className="mainAbout">

      <div className="about1">
        <img src={itemPic} alt="" />
      </div>
      <div className="about2">
   
        <h2>Connecting Students, <span>Sharing Resources</span>, Building Community</h2>
        <p>Campus Trade connects students to buy, sell, and trade essentials within their college community. Find books, gadgets, and more—all in one place. Join us and discover a student-driven marketplace made for you!</p>
        <div className="buttons">
        <Link to="/shop" className='block button1'> <button>Shop</button></Link>
        <Link to="/admin/dashboard" className='block button1'> <button>Dashboard</button></Link>
        </div>
      </div>
    </div>
    </>
  )
}
