'use client';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  'pk_test_51O4oKeDPGUWchb306mLoTry6eLKYEv6hdXZdCdGtIfp3ZEAFBV0Vra4qrSdJXGqjXwfBHhFYH8wOUn1nQzyjNwCG00ffjlT6pg'
);
const options = {
  mode: 'payment',
  currency: 'usd',
  amount: 1099,
};

function HomePage() {
  return (
    <Elements
      stripe={stripePromise}
      options={options}
    >
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Main />
        </div>
        <Footer />
      </div>
    </Elements>
  );
}

export default HomePage;
