function SubscribeButton({ onClick }) {
  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-600 text-white px-10 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
        onClick={onClick}
      >
        Subscribe
      </button>
    </div>
  );
}

export default SubscribeButton;
