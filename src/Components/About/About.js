import React, { useState } from 'react';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';

import img1 from '../../assets/author.png';
import img2 from '../../assets/author2.png';
import img3 from '../../assets/author3.png';

const sliderData = [
  {
    src: img1,
    title: 'Alice Johnson',
    location: 'Paris, France',
    desc: 'Quisque laoreet, neque a cursus dapibus, felis felis fermentum velit, eu dignissim justo neque at ex. Curabitur et suscipit augue.',
  },
  {
    src: img2,
    title: 'John Doe',
    location: 'New York, USA',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vitae odio eu arcu vestibulum pretium.',
  },
  {
    src: img3,
    title: 'Alice Johnson',
    location: 'Paris, France',
    desc: 'Quisque laoreet, neque a cursus dapibus, felis felis fermentum velit, eu dignissim justo neque at ex. Curabitur et suscipit augue.',
  },
];

const About = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % sliderData.length);
  };

  const prevCard = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + sliderData.length) % sliderData.length);
  };

  // const slickSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (

    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:mt-24 m-8 sm:mx-11'>
      
    <div className=''>
      <span className=' font-light'>Testimonials</span>
      <h1 className='text-4xl font-bold mt-4'>What People Say <br/>
      About Us. </h1>

    </div>
    
    <div className="flex justify-center items-center flex-1 ">
    <div className="max-w-xl ">
      <div className="flex space-x-4  relative">
        <div className="flex-shrink-0 transition-transform transform">
          <div className="bg-white p-4 rounded-lg shadow-md border drop-shadow-2xl mt-16 sm:mt-0 ">
            <div className='relative w-20 right-9 bottom-16 '>

            <img src={sliderData[currentCard].src} alt={sliderData[currentCard].title} className=" absolute w-full object-cover mb-4 rounded" />
            </div>
            <div className=' p-4 w-[500px] border'>
            
            <h2 className="text-lg font-semibold mb-2">{sliderData[currentCard].title}</h2>
            <p className="text-gray-500 mb-2">{sliderData[currentCard].location}</p>
            <p className="text-gray-700">{sliderData[currentCard].desc}</p>
            </div>
          </div>
        </div>
        <div className='relative items-center space-y-28 '>

        
        <FaArrowAltCircleUp className='left-arrow' onClick={prevCard} />

        <div className=' relative'>

        
        <FaArrowAltCircleDown className='right-arrow' onClick={nextCard} />

        </div>
        </div>
      </div>
    </div>
  </div>
  </div>
);
};


export default About;
