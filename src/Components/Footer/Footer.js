import React from 'react';
import img1 from '../../assets/play-store.png'
import img2 from '../../assets/apple-store.png'

const Footer = () => {
  return (
    <footer className="bg-[#FFFEFE] text-black p-4 mt-20 sm:ml-72  mx-20 h-80" >
      <div className="flex space-x-48">
        <div>
          <h2 className='text-4xl font-bold'>Jadoo.</h2>
          <p className='font-light mt-7'>Book your in minute,get full control<br/>
          for much longer.</p>
        </div>

        <div className=' space-y-3'>
          <h2 className='text-2xl font-bold'>Company</h2>
          <p className='font-light'>About</p>
          <p className='font-light'>Careers</p>
          <p className='font-light'>Mobile</p>
        </div>

        <div className=' space-y-3'>
          <h2 className='text-2xl font-bold'>Contact</h2>
          <p className='font-light'>Press</p>
          <p className='font-light'>Help/FAQ</p>
          <p className='font-light'>Affiliate</p>
        </div>

        <div className=' space-y-3'>
          <h2 className='text-2xl font-bold'>More</h2>
          <p className='font-light'>Lowfare tips</p>
          <p className='font-light'>Airline</p>
          <p className='font-light'>Low fare tips</p>
        </div>
        
        <div>
          <div className='flex space-x-6 cursor-pointer '>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png' alt='fb' className='w-5'/>
            <img src='https://cdn-icons-png.flaticon.com/512/3621/3621435.png'alt='insta' className='w-5'/>
            <img src='https://cdn-icons-png.flaticon.com/512/124/124021.png' alt='tiw' className='w-5  rounded-full'/>

          </div>
          <div className=' mt-5'>
            
          <span className='text-lg font-light  '>Discover our app</span>
          </div>
          <span className='flex mt-4 space-x-2 '>
            <img src={img1} alt='img1'/>
            <img src={img2} alt='img2'/>
          </span>
        </div>
      </div>
      <div className=' flex justify-center mt-11'>

        <span className='font-light'>@2024 All rights reserved@Jadoo.co</span>
      </div>
    </footer>
  );
};

export default Footer;
