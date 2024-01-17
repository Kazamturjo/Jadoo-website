import React from 'react';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';

const Sponser = () => {
  return (
    <div className='mt-20 '>
      <div className='flex flex-wrap justify-center gap-4 md:space-x-8 lg:space-x-16 '>
        <img src={img1} alt='img1'  />
        <img src={img2} alt='img2'  />
        <img src={img3} alt='img3'  />
        <img src={img4} alt='img4'  />
        <img src={img5} alt='img5'  />
      </div>
    </div>
  );
};

export default Sponser;
