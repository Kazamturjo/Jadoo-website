import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

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
    <div className="flex justify-center items-center mt-32">
      <div className="max-w-md w-full p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="example@example.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
export default Newsletter;