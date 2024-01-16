import React from 'react';
import img1 from '../../assets/selection.svg';
import img2 from '../../assets/taxi.svg';
import img3 from '../../assets/water-sport.svg';
import image from '../../assets/booking-img.jpg';
import icon from '../../assets/icons8-near-me-50.png';

const Guide = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 ">
        <div className="m-11">
          <div>
            <span className="font-bold text-gray-500">Easy and fast</span>
            <h2 className="text-4xl font-bold">
              Book Your Next Trip In 3 <br />
              Easy Steps
            </h2>
          </div>
          <div className="flex mt-8">
            <div className="w-full md:w-1/2   mb-8">
              <div className="flex space-x-6  mb-4">
                <div className="w-12">
                  <img
                    src={img1}
                    className="mx-auto bg-yellow-500 w-full p-1 sm:p-3 rounded-xl"
                    alt="img1"
                  />
                </div>
                <div>
                  <span className="font-bold">Choose Destination</span>
                  <p className="text-sm ">
                    Choose your favourite place. No matter where
                    <br />
                    you travel inside the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            <div className="w-full md:w-1/2   mb-8">
              <div className="flex space-x-6  mb-4">
                <div className="w-12">
                  <img
                    src={img3}
                    className="mx-auto bg-red-500 w-full p-1 sm:p-3 rounded-xl"
                    alt="img1"
                  />
                </div>
                <div>
                  <span className="font-bold">Make Payment</span>
                  <p className="text-sm ">
                    After find your prefect spot,make your
                    <br />
                    payment and get ready to travel.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            <div className="w-full md:w-1/2   mb-8">
              <div className="flex space-x-6  mb-4">
                <div className="w-12">
                  <img
                    src={img2}
                    className="mx-auto bg-blue-800 w-full p-1 sm:p-3 rounded-xl"
                    alt="img1"
                  />
                </div>
                <div>
                  <span className="font-bold">Choose Destination</span>
                  <p className="text-sm ">
                    Lastly,you have to arrive at the airport
                    <br />
                    on time and enjoy the vacation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center h-screen ">
  <div class="bg-white shadow-xl p-8 text-center rounded-xl">
    <img src={image} alt="imagecard" class="w-full max-h-48 object-cover rounded-md mb-4 roun"/>

    <div class="mb-4">
      <span class="font-bold text-lg">Trip To Greece</span>
      <p class="text-gray-500">14-29 June || by Robbin Joseh</p>
    </div>

    <div class="flex space-x-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76" />
      </svg>

      <img src={icon} alt="icon" class="w-6"/>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Guide;
