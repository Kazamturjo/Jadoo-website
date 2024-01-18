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
    title: 'mickel,john',
    location: 'Paris, France',
    desc: 'Quisque laoreet, neque a cursus dapibus, felis felis fermentum velit, eu dignissim justo neque at ex. Curabitur et suscipit augue.',
  },
  
];
//this is Testimonial page
const About = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    const newIndex = (currentCard + 1) % sliderData.length;
    setCurrentCard(newIndex);
    updateRadioButton(newIndex);
  };

  const prevCard = () => {
    const newIndex = (currentCard - 1 + sliderData.length) % sliderData.length;
    setCurrentCard(newIndex);
    updateRadioButton(newIndex);
  };

  const handleRadioChange = (index) => {
    setCurrentCard(index);
    updateSlider(index);
  };

  const updateRadioButton = (index) => {
    ;
  };

  const updateSlider = (index) => {
    
  };

  return (
    <div className='sm:ml-32 mx-11 md:flex mt-16' id='testimonial'>

    
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:mt-24 m-8  space-x-32 '>
      <div className=''>
        <span className=' font-light'>Testimonials</span>
        <h1 className='text-4xl font-bold mt-4'>What People Say <br/> About Us. </h1>
      </div>
      <div className="flex justify-center items-center flex-1 ">
        <div className="max-w-xl ">
          <div className="flex space-x-4  relative">
            <div className="flex-shrink-0 transition-transform transform mt-16">
            <div className='relative w-20 right-9 bottom-16 '>
                  <img src={sliderData[currentCard].src} alt={sliderData[currentCard].title} className=" absolute w-full object-cover mb-7 rounded z-50 -top-4" />
                </div>
              <div className="bg-gray-200 p-4 relative rounded-2xl shadow-md border drop-shadow-2xl mt-16 sm:mt-0 h-40 w-[500px]">
                
                
                <div className='p-4 w-[500px] h-40 bg-white absolute right-4 bottom-5 rounded-2xl'>
                  <h2 className="text-lg font-semibold mb-2">{sliderData[currentCard].title}</h2>
                  <p className="text-gray-500 mb-2">{sliderData[currentCard].location}</p>
                  <p className="text-gray-700">{sliderData[currentCard].desc}</p>
                </div>
                
              </div>
            </div>
            <div className='relative items-center space-y-16 top-20  '>
              <FaArrowAltCircleUp className='left-arrow' onClick={prevCard} />
              <div className=' relative'>
                <FaArrowAltCircleDown className='right-arrow' onClick={nextCard} />
              </div>
              <div className='relative'>
              <div className='radio-buttons  sm:absolute sm:right-[1200px] sm:flex space-x-6 top-0'>
                {sliderData.map((_, index) => (
                  <input
                    type="radio"
                    key={index}
                    id={`radioButton${index}`}
                    name="sliderRadio"
                    checked={index === currentCard}
                    onChange={() => handleRadioChange(index)}
                  />
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
