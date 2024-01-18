import React from 'react';
import dest1 from '../../assets/dest1.jpg';
import dest2 from '../../assets/dest2.jpg';
import dest3 from '../../assets/dest3.jpg';
import send from '../../assets/send.png';

const Destination = () => {
  return (
    <div id='destination' className='text-center py-8'>
      <span className='text-gray-500'>Top selling</span>
      <h1 className='text-4xl font-bold'>Top Destination</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 space-y-11 sm:space-y-1 sm:m-11">
        {[
          {src: dest1, alt:'img1', title:"Rome, Italy", price:"$5.42", src2: send, p:"10 days trip" },
          {src: dest2, alt:'img2', title:"London, UK", price:"$4.42", src2: send, p:"12 days trip" },
          {src: dest3, alt:'img3', title:"Paris, France", price:"$6.42", src2: send, p:"14 days trip"}
        ].map((image, index) => (
          <div key={index} className="group overflow-hidden rounded-xl transition-transform transform hover:scale-105 drop-shadow-2xl w-8/12 m-auto ">
            <img className="w-full object-cover rounded-t-xl drop-shadow-2xl " src={image.src} alt={image.alt} />
            <div className="p-4">
              <p className="text-xl font-semibold">{image.title}</p>
              <p className="text-gray-500">{image.price}</p>
              <div className="flex items-center space-x-2">
                <img src={image.src2} alt="location" className="w-6" />
                <p>{image.p}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
