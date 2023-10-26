import { AddressElement, PaymentElement } from '@stripe/react-stripe-js';

function SubscriptionForm({ onSubmit, email, setEmail }) {
  return (
    <div className="px-4 py-6 mt-8 bg-white border-8 border-blue-300 border-opacity-50 rounded-lg">
      <form onSubmit={onSubmit}>
        <div className="mt-4 mb-4">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2.5 bg-white rounded border border-gray-300 shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-base text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <AddressElement options={{ mode: 'shipping' }} />
        <PaymentElement />
        <button
          type="submit"
          className="bg-blue-600 text-white mt-8 px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 w-full"
        >
          Confirm Subscription
        </button>
      </form>
    </div>
  );
}

export default SubscriptionForm;
