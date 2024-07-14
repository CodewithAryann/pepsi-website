import React from 'react'

function nav() {
  return (
    <div>
    <nav className='flex justify-between p-[20px] bg-blue-700 items-center'>
      <ul className='flex items-center space-x-20'>
        <li><img className='w-16' src="https://www.pepsi.com/en-us/refresh082123/images/PepsiLogo@3x.png" alt="" /></li>
        <li><a href="">View Product</a></li>
        <li><a href="">Contact Us</a></li>
      </ul>
      <ul className='flex ml-auto'>
        <li><button><span>Buy Pepsi Products</span></button></li>
      </ul>
    </nav>
  </div>
  
  )
}

export default nav
