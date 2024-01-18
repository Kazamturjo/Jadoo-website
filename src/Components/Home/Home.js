import React from 'react';
import hero from '../../assets/hero-img.png';

const Home = () => {
  return (
    <div className='sm:ml-32 mx-11 md:flex mt-16 '>
        
      <div className='mt-32 md:w-1/2 md:pr-8 '>
        <span className='text-orange-600 font-bold'>Best Destination around the world</span>
        <h2 className='text-4xl md:text-7xl font-serif font-bold mt-6'>Travel, <span className='relative z-10 inline-block px-1 font-semibold  after:absolute after:-bottom-2 after:right-0 after:-z-10 after:h-2 after:w-full after:-translate-y-2 after:bg-[#c57760] after:content-'>enjoy
            </span><br/>and live a new <br/>and full life</h2>
        <p className=' font-light mt-8 '>
          Built Wicket longer admire do barton vanity itself do in it.<br/> Preferred to sportsmen it engrossed listening. Park gate <br/> sell they west hard for the.
        </p>
      
        <div className='flex items-center mt-4 '>
          <button className='sm:p-3 p-1   bg-yellow-500 rounded-xl text-white hover:bg-yellow-400 sm:text-xl  text-sm'>Find Out More</button>
          <div className='mx-6 flex sm:space-x-5 space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-8 md:w-14 md:h-11 rounded-full bg-orange-500 hover:cursor-pointer text-white hover:bg-orange-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
            <span className=' md:inline sm:mt-2 font-light'>Play Demo</span>
          </div>
        </div>
      </div>
      <div className='sm:w-6/12 mt-4 md:mt-7 mx-7 bg-orange-400 rounded-full '>
        <img src={hero} alt='hero' className='w-full h-auto	' />
      </div>
    </div>
  );
}

export default Home;
