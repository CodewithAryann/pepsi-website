import React from 'react'

function Cherrypage() {
  return (
       <div  style={{
        backgroundImage: `url('https://www.pepsi.com/en-us/refresh082123/images/wild-cherry/wc-tvc-bg-tablet-vert@2x.png')`,
        backgroundSize: 'cover',
      }} className='w-full h-[75vw]' >
        <img className='mt-10' src="https://www.pepsi.com/en-us/refresh082123/images/wild-cherry/get-wild-with-pepsi-wild-cherry-tab-vert@2x.png" alt="" />
        <div className='cards flex p-10 gap-6'>
            <div className='grid justify-items-center'>
                <img src="https://www.pepsi.com/en-us/refresh082123/images/wild-cherry/231214-07-pepsi-1094-v-4-16-x-9-tab-horz@2x.png" alt="" />
                <button className='mt-10 bg-white w-[31vw] h-[5.3vw] font-[2.8vw] text-black'><a href="">#1 Fan</a></button>
            </div>
            <div className='grid justify-items-center'>
                <img src="https://www.pepsi.com/en-us/refresh082123/images/wild-cherry/15-20-52-13-v-4-16-x-9-tab-horz@2x.png" alt="" />
                <button className='mt-10 bg-white w-[31vw] h-[5.3vw] font-[2.8vw] text-black'><a href="">Nursery Rhymez</a></button>
            </div>
        </div>
      </div>

  )
}

export default Cherrypage
