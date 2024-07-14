import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

function nav() {
  return (
    <div>
    <nav className='flex justify-between p-[12px] pr-7 pl-7 bg-[#0025ff] items-center font-Poppins font-black uppercase text-sm'>
      <ul className='flex items-center space-x-20'>
        <li><img className='nav-img w-16' src="https://www.pepsi.com/en-us/refresh082123/images/PepsiLogo@3x.png" alt="" /></li>
        <li className='products flex gap-2 items-center'><a  href="">View Products</a> <span className='font-bolder text-[15px]'><IoIosArrowDown /></span></li>
        <li><a href="">Contact Us</a></li>
      </ul>
      <ul className='flex ml-auto'>
        <li><button><span className='uppercase font-black'>Buy Pepsi Products</span></button></li>
      </ul>
    </nav>
  </div>
  
  )
}

export default nav
