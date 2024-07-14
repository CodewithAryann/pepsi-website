import React from 'react';

function Cherrypage() {
  return (
    <div
      style={{
        backgroundImage: `url('https://www.pepsi.com/en-us/refresh082123/images/wild-cherry/wc-tvc-bg-tablet-vert@2x.png')`,
        backgroundSize: 'cover',
      }}
      className='w-full h-[75vw] cherry-section'
    >
      <img
        className='mt-10 cherry-img'
        src='https://www.pepsi.com/en-us/refresh082123/images/wild-cherry/get-wild-with-pepsi-wild-cherry-tab-vert@2x.png'
        alt=''
      />
      <div className='cards flex p-10 gap-6'>
        <div className='text-center'>
          <div className='relative'>
            <img
              className='cherry-img'
              src='https://www.pepsi.com/en-us/refresh082123/images/wild-cherry/231214-07-pepsi-1094-v-4-16-x-9-tab-horz@2x.png'
              alt=''
            />
            <button className='cherry-btn mt-10 bg-white w-[31vw] h-[5.3vw] text-3xl text-black font-[ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji] uppercase font-black'>
              <a href=''>#1 Fan</a>
            </button>
          </div>
        </div>
        <div className='text-center'>
          <div className='relative'>
            <img
              className='cherry-img'
              src='https://www.pepsi.com/en-us/refresh082123/images/wild-cherry/15-20-52-13-v-4-16-x-9-tab-horz@2x.png'
              alt=''
            />
            <button className='cherry-btn mt-10 bg-white w-[31vw] h-[5.3vw] text-3xl text-black font-[ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji] uppercase font-black'>
              <a href=''>Nursery Rhymez</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cherrypage;
