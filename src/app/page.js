import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
}

export default HomePage;
