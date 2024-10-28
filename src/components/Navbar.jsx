import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBlog, FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { AuthContext } from '../contects/AuthProvider';

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // Correct destructuring
  const [isSticky, setSticky] = useState(false); // Correct destructuring
const {user}=useContext(AuthContext);
console.log(user);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up correctly
    };
  }, []);

  // NavItems here
  const navItems = [
    { link: 'Home', path: '/' },
    { link: 'About', path: '/about' },
    { link: 'Shop', path: '/shop' },
    { link: 'Sell Your Item', path: '/admin/dashboard' },
    { link: 'Blog', path: '/blog' },
  ];

  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transitio-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky?"sticky top-0 left-0 right-0 bg-blue-300":""} `}>
        <div className='flex justify-between items-center text-base gap-8'>
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2">
            <FaBlog className="inline-block" /> Items
          </Link>

          {/* Nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link key={path} to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">
                {link}
              </Link>
            ))}
          </ul>

          {/* Button for large devices */}
          <div className="space-x-12 hidden lg:flex item-center">
            <button>
              <FaBars className="w-5 hover:text-blue-700" />
            </button>
            {
              user?user.email:""
            }
          </div>

          {/* Menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBars className="h-5 w-5 text-black" />}
            </button>
          </div>
        </div>


{/* nav for small device */}

<div className={`space-y-4 px-4 mt-16 py-7 bg-blue-600 ${isMenuOpen ?" block fixed top-0 right-0 left-0" :'hidden'}`}>
  
    {navItems.map(({ link, path }) => (
      <Link key={path} to={path} className="block text-base text-white uppercase cursor-pointer ">
        {link}
      </Link>
    ))
  }
</div>

      </nav>
    </header>
  );
};
