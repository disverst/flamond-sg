import Image from 'next/image';
function ProductInfo() {
  return (
    <>
      <Image
        src="/rwd-1.jpg"
        width={500}
        height={500}
        priority={true}
        alt="Diamond Ring"
        className="w-full h-64 object-cover mb-4"
      />
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-lg md:text-xl font-medium">Flamond Diamond Ring</h2>
        <p className="text-lg md:text-xl font-medium">$99.99</p>
      </div>
    </>
  );
}

export default ProductInfo;
