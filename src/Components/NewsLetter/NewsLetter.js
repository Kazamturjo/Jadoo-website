import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import imgsnd from '../../assets/send.png';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement your logic to handle the subscription, for example, sending a request to your server.
    console.log(`Subscribed with email: ${email}`);
    // Clear the input field after submission
    setEmail('');
  };

  return (
    <div className="bg-[#F9F6FD] rounded-tl-[150px] h-72 rounded-2xl relative sm:ml-32">
      <div className="flex mt-32">
        <div className="max-w-md w-full p-4 m-auto rounded  mt-11">
          <img
            src={imgsnd}
            alt="send"
            className="w-16 absolute -top-4 -right-5"
          />
          <h2 className="text-2xl font-semibold mb-4  text-gray-500">
            Subscribe to get information,latest news and other
            <br />
            interesting offers about Coboham
          </h2>
          <form onSubmit={handleSubmit} className="flex  m-auto gap-2 ">
            <div className=" ">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="pl-10  p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 sm:w-[500px]"
                  placeholder="Enter email "
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue font-light text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
