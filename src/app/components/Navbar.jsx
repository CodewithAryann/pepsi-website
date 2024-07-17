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
        className={`top-0 left-0 w-full bg-[#0025ff] text-white flex flex-col justify-center items-center z-50 ${showProducts ? 'flex' : 'hidden'}`}
        style={{ position: 'fixed', overflowY: 'auto', top: '0', bottom: '0', left: '0', right: '0', scrollbarWidth: 'none', paddingRight: '15px'}}
      >
        <button onClick={toggleProducts} className='absolute top-4 right-4 text-white font-bold'>Close</button>
        <h1 className="absolute top-8 text-white text-4xl font-bold uppercase text-center">Pepsi Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 w-full mt-[60vw] uppercase">
          <div className="item hover:bg-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[19vw]">
            <p className="mt-2 text-center font-bold">Pepsi</p>
            <div className="relative overflow-hidden h-[23vw] top-[11%] left-[24%]">
              <img
                src="https://www.pepsi.com/en-us/refresh082123/images/cans/44341_Titan_Pep_Can_12oz_FR.png"
                alt="Pepsi"
                className="absolute inset-0 h-full object-cover w-[50%]"
              />
              
            </div>
          </div>
          <div className="item hover:bg-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[19vw]">
            <p className="mt-2 text-center font-bold">Pepsi Zero Sugar</p>
            <div className="relative overflow-hidden h-[23vw] top-[11%] left-[24%]">
              <img
                src="https://www.pepsi.com/en-us/refresh082123/images/cans/44343_Titan_PZ_Can_12oz_FR.png"
                alt="Pepsi Zero Sugar"
                className="absolute inset-0 h-full object-cover w-[50%]"
              />
            </div>
          </div>
          <div className="item hover:bg-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[19vw]">
            <p className="mt-2 text-center font-bold">Diet Pepsi</p>
            <div className="relative overflow-hidden h-[23vw] top-[11%] left-[24%]">
              <img
                src="https://www.pepsi.com/en-us/refresh082123/images/cans/44344_EC_Front.png"
                alt="Diet Pepsi"
                className="absolute inset-0 h-full object-cover w-[50%]"
              />
            </div>
          </div>
          <div className="item hover:bg-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[19vw]">
            <p className="mt-2 text-center font-bold">Nitro Pepsi Vanilla</p>
            <div className="relative overflow-hidden h-[23vw] top-[11%] left-[24%]">
              <img
                src="https://www.pepsi.com/en-us/refresh082123/images/cans/Nitro_Can_for_4pk_Cart_FD_Vanilla.png"
                alt="Nitro Pepsi Vanilla"
                className="absolute inset-0 h-full object-cover w-[50%]"
              />
            </div>
          </div>
          <div className="item hover:bg-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[19vw]">
            <p className="mt-2 text-center font-bold">Nitro Pepsi</p>
            <div className="relative overflow-hidden h-[23vw] top-[11%] left-[27%]">
              <img
                src="https://www.pepsi.com/en-us/refresh082123/images/cans/Nitro_Can_for_4pk_Cart_FD.png"
                alt="Nitro Pepsi"
                className="absolute inset-0 h-full object-cover w-[44%]"
              />
            </div>
          </div>
          <div className="item hover:bg-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[19vw]">
            <p className="mt-2 text-center font-bold">Pepsi Mango</p>
            <div className="relative overflow-hidden h-[23vw] top-[11%] left-[24%]">
              <img
                src="https://www.pepsi.com/en-us/refresh082123/images/cans/44342_Titan_PMG_Can_12oz_FR.png"
                alt="Pepsi Mango"
                className="absolute inset-0 h-full object-cover w-[50%]"
              />
            </div>
          </div>
          <div className="item hover:bg-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[19vw]">
            <p className="mt-2 text-center font-bold">Pepsi Zero Sugar Mango</p>
            <div className="relative overflow-hidden h-[23vw] top-[11%] left-[24%]">
              <img
                src="https://www.pepsi.com/en-us/refresh082123/images/cans/44344_EC_Front_2.png"
                alt="Pepsi Zero Sugar Mango"
                className="absolute inset-0 h-full object-cover w-[50%]"
              />
            </div>
          </div>
          <div className="item hover:bg-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[19vw]">
            <p className="mt-2 text-center font-bold">Pepsi Wild Cherry</p>
            <div className="relative overflow-hidden h-[23vw] top-[11%] left-[24%]">
              <img
                src="https://www.pepsi.com/en-us/refresh082123/images/cans/44347_Titan_PWC_Can_12oz_FR.png"
                alt="Pepsi Wild Cherry"
                className="absolute inset-0 h-full object-cover w-[50%]"
              />
            </div>
          </div>
          <div className="item hover:bg-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[19vw]">
            <p className="mt-2 text-center font-bold">Diet Pepsi Wild Cherry</p>
            <div className="relative overflow-hidden h-[23vw] top-[11%] left-[24%]">
              <img
                src="https://www.pepsi.com/en-us/refresh082123/images/cans/44340_EC_Front.png"
                alt="Diet Pepsi Wild Cherry"
                className="absolute inset-0 h-full object-cover w-[50%]"
              />
            </div>
          </div>
          <div className="item hover:bg-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[19vw]">
            <p className="mt-2 text-center font-bold">Pepsi Zero Sugar Wild Cherry</p>
            <div className="relative overflow-hidden h-[23vw] top-[11%] left-[24%]">
              <img
                src="https://www.pepsi.com/en-us/refresh082123/images/cans/44346_Titan_PZWC_Can_12oz_FR.png"
                alt="Pepsi Zero Sugar Wild Cherry"
                className="absolute inset-0 h-full object-cover w-[50%]"
              />
            </div>
          </div>
          <div className="item hover:bg-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[19vw]">
            <p className="mt-2 text-center font-bold">Pepsi Caffeine Free</p>
            <div className="relative overflow-hidden h-[23vw] top-[11%] left-[24%]">
              <img
                src="https://www.pepsi.com/en-us/refresh082123/images/cans/44337_Titan_CFP_Can_12oz_FR.png"
                alt="Pepsi Zero Sugar Wild Cherry"
                className="absolute inset-0 h-full object-cover w-[50%]"
              />
            </div>
          </div>
          <div className="item hover:bg-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[19vw]">
            <p className="mt-2 text-center font-bold">Diet Pepsi Caffeine Free</p>
            <div className="relative overflow-hidden h-[23vw] top-[11%] left-[24%]">
              <img
                src="https://www.pepsi.com/en-us/refresh082123/images/cans/44336_Titan_CFDP_Can_12oz_FR.png"
                alt="Pepsi Zero Sugar Wild Cherry"
                className="absolute inset-0 h-full object-cover w-[50%]"
              />
            </div>
          </div>
          <div className="item hover:bg-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[19vw]">
            <p className="mt-2 text-center font-bold">Pepsi Real Sugar</p>
            <div className="relative overflow-hidden h-[23vw] top-[11%] left-[24%]">
              <img
                src="https://www.pepsi.com/en-us/refresh082123/images/cans/46948-titan-prs-can-12-oz-d-1-fr.png"
                alt="Pepsi Zero Sugar Wild Cherry"
                className="absolute inset-0 h-full object-cover w-[50%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
