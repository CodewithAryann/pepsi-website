'use client';

import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { gsap } from "gsap";

function Nav() {
  const [showProducts, setShowProducts] = useState(false);
  const productsRef = useRef(null);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  useEffect(() => {
    if (showProducts) {
      gsap.to(productsRef.current, { y: 0, opacity: 1, duration: 1, display: 'flex' });
    } else {
      gsap.to(productsRef.current, { y: -50, opacity: 0, duration: 1, display: 'none' });
    }
  }, [showProducts]);

  return (
    <div>
      <nav className='flex justify-between p-[12px] pr-7 pl-7 bg-[#0025ff] items-center font-Poppins font-black uppercase text-sm'>
        <ul className='flex items-center space-x-20'>
          <li><img className='nav-img w-16' src="https://www.pepsi.com/en-us/refresh082123/images/PepsiLogo@3x.png" alt="Pepsi Logo" /></li>
          <li className='products flex gap-2 items-center'>
            <a href="#" onClick={toggleProducts}>View Products</a> 
            <span className='font-bolder text-[15px]'><IoIosArrowDown /></span>
          </li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <ul className='flex ml-auto'>
          <li><button className='nav-button'><span className='uppercase font-black'>Buy Pepsi Products</span></button></li>
        </ul>
      </nav>
      <div 
        ref={productsRef} 
        className={` top-0 left-0 w-full h-full bg-[#0025ff] text-white flex flex-col justify-center items-center z-50 ${showProducts ? 'flex' : 'hidden'}`}
      >
        <button onClick={toggleProducts} className='absolute top-4 right-4 text-white font-bold'>Close</button>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
          <div className="text-center">
            <img src="https://www.pepsi.com/en-us/refresh082123/images/cans/44341_Titan_Pep_Can_12oz_FR.png" alt="Pepsi" />
            <p className="mt-2 font-bold">Pepsi</p>
          </div>
          <div className="text-center">
            <img src="https://www.pepsi.com/en-us/refresh082123/images/cans/44343_Titan_PZ_Can_12oz_FR.png" alt="Pepsi Zero Sugar" />
            <p className="mt-2 font-bold">Pepsi Zero Sugar</p>
          </div>
          <div className="text-center">
            <img src="https://www.pepsi.com/en-us/refresh082123/images/cans/44344_EC_Front.png" alt="Diet Pepsi" />
            <p className="mt-2 font-bold">Diet Pepsi</p>
          </div>
          <div className="text-center">
            <img src="https://www.pepsi.com/en-us/refresh082123/images/cans/Nitro_Can_for_4pk_Cart_FD_Vanilla.png" alt="Nitro Pepsi Vanilla" />
            <p className="mt-2 font-bold">Nitro Pepsi Vanilla</p>
          </div>
          <div className="text-center">
            <img src="https://www.pepsi.com/en-us/refresh082123/images/cans/Nitro_Can_for_4pk_Cart_FD.png" alt="Nitro Pepsi" />
            <p className="mt-2 font-bold">Nitro Pepsi</p>
          </div>
          <div className="text-center">
            <img src="https://www.pepsi.com/en-us/refresh082123/images/cans/44342_Titan_PMG_Can_12oz_FR.png" alt="Pepsi Mango" />
            <p className="mt-2 font-bold">Pepsi Mango</p>
          </div>
          <div className="text-center">
            <img src="https://www.pepsi.com/en-us/refresh082123/images/cans/44344_EC_Front_2.png" alt="Pepsi Zero Sugar Mango" />
            <p className="mt-2 font-bold">Pepsi Zero Sugar Mango</p>
          </div>
          <div className="text-center">
            <img src="https://www.pepsi.com/en-us/refresh082123/images/cans/44347_Titan_PWC_Can_12oz_FR.png" alt="Pepsi Wild Cherry" />
            <p className="mt-2 font-bold">Pepsi Wild Cherry</p>
          </div>
          <div className="text-center">
            <img src="https://www.pepsi.com/en-us/refresh082123/images/cans/44340_EC_Front.png" alt="Diet Pepsi Wild Cherry" />
            <p className="mt-2 font-bold">Diet Pepsi Wild Cherry</p>
          </div>
          <div className="text-center">
            <img src="https://www.pepsi.com/en-us/refresh082123/images/cans/44346_Titan_PZWC_Can_12oz_FR.png" alt="Pepsi Zero Sugar Wild Cherry" />
            <p className="mt-2 font-bold">Pepsi Zero Sugar Wild Cherry</p>
          </div>
          <div className="text-center">
            <img src="https://www.pepsi.com/en-us/refresh082123/images/cans/44337_Titan_CFP_Can_12oz_FR.png" alt="Pepsi Caffeine Free" />
            <p className="mt-2 font-bold">Pepsi Caffeine Free</p>
          </div>
          <div className="text-center">
            <img src="https://www.pepsi.com/en-us/refresh082123/images/cans/44336_Titan_CFDP_Can_12oz_FR.png" alt="Diet Pepsi Caffeine Free" />
            <p className="mt-2 font-bold">Diet Pepsi Caffeine Free</p>
          </div>
          <div className="text-center">
            <img src="https://www.pepsi.com/en-us/refresh082123/images/cans/46948-titan-prs-can-12-oz-d-1-fr.png" alt="Pepsi Real Sugar" />
            <p className="mt-2 font-bold">Pepsi Real Sugar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
