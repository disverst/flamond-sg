import React, { useState } from 'react';
import ProductInfo from './ProductInfo';
import SubscribeButton from './SubscribeButton';
import SubscriptionForm from './SubscriptionForm';

const Main = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribeClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="p-8 mx-4 my-8 max-w-xl mx-auto">
      <ProductInfo />
      <SubscribeButton onClick={handleSubscribeClick} />
      {showForm && (
        <SubscriptionForm
          onSubmit={handleFormSubmit}
          email={email}
          setEmail={setEmail}
        />
      )}
    </div>
  );
};

export default Main;
