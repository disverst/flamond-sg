'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Subscription from '@/components/Subscription';
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripe = loadStripe(
  'pk_test_51O4oKeDPGUWchb306mLoTry6eLKYEv6hdXZdCdGtIfp3ZEAFBV0Vra4qrSdJXGqjXwfBHhFYH8wOUn1nQzyjNwCG00ffjlT6pg'
);

function HomePage() {
  const options = {
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };
  return (
    <Elements
      stripe={stripe}
      options={options}
    >
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Subscription />
        </div>
        <Footer />
      </div>
    </Elements>
  );
}

export default HomePage;
