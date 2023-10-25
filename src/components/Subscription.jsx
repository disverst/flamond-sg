import Image from 'next/image';
import React, { useState } from 'react';
import {
  AddressElement,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const Subscription = () => {
  const [showForm, setShowForm] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Handle Stripe payment logic here
  };

  return (
    <div className="p-8 mx-4 my-8 max-w-xl mx-auto">
      <Image
        src="/rwd-1.jpg"
        width={500}
        height={500}
        alt="Product Image"
        className="w-full h-64 object-cover mb-4"
      />
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-lg md:text-xl font-medium">Flamond Diamond Ring</h2>
        <p className="text-lg md:text-xl font-medium">$99.99</p>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-600 text-white px-10 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
          onClick={() => setShowForm(!showForm)}
        >
          Subscribe
        </button>
      </div>
      {showForm && (
        <div className="px-4 py-6 mt-8 bg-white border-8 border-blue-300 border-opacity-50 rounded-lg">
          <form onSubmit={handleSubmit}>
            <AddressElement options={{ mode: 'shipping' }} />

            <div className="mt-4 mb-8">
              <label className="block text-sm font-medium text-gray-600">
                Payment
              </label>
              <CardElement className="border border-gray-300 p-2 w-full rounded" />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 w-full"
            >
              Confirm Subscription
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Subscription;
