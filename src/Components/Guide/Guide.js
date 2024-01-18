import React from 'react';
import img1 from '../../assets/selection.svg';
import img2 from '../../assets/taxi.svg';
import img3 from '../../assets/water-sport.svg';
import image from '../../assets/booking-img.jpg';
import icon from '../../assets/icons8-near-me-50.png';

const Guide = () => {
  return (
    <div className="sm:ml-28 mx-11  mt-16" id='booking'>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 space-x-11 ">
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

        <div className="flex justify-center items-center">
          <div className="bg-white drop-shadow-2xl p-8 text-center rounded-xl">
            <img
              src={image}
              alt="imagecard"
              className="w-full object-cover rounded-md mb-6 roun"
            />

            <div className="mb-4">
              <span className="font-bold text-lg">Trip To Greece</span>
              <p className="text-gray-500">14-29 June || by Robbin Joseh</p>
            </div>

            <div className="flex space-x-8 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76"
                />
              </svg>

              <img src={icon} alt="icon" className="w-6" />
            </div>

            <div className="flex justify-between mt-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>

              <p className=" font-light text-sm mr-24">24 people going</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
