import { useState } from 'react';

const PackageModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packageDetails = {
    title: 'HTML + CSS + Computer Fundamentals',
    price: 80000,
    description: '₦80,000 for 5 students',
    details: '3 hours/week for 1 month',
  };

  const handleBuy = () => {

    setIsModalOpen(false); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-yellow-500 text-black rounded-xl font-bold shadow-md transition duration-300 transform hover:scale-105"
      >
        Buy Package
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-full max-w-lg mx-4 sm:mx-auto transition-all duration-300 transform scale-95 sm:scale-100">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
              Confirm Your Purchase
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                <strong className="font-semibold">Package:</strong> {packageDetails.title}
              </p>
              <p className="text-lg text-gray-700">
                <strong className="font-semibold">Description:</strong> {packageDetails.description}
              </p>
              <p className="text-lg text-gray-700">
                <strong className="font-semibold">Details:</strong> {packageDetails.details}
              </p>
              <p className="text-xl font-semibold text-gray-800">
                <strong className="font-semibold">Price:</strong> ₦{packageDetails.price}
              </p>
            </div>

            <div className="mt-6 flex justify-between gap-4 flex-wrap">
              <button
                onClick={handleBuy}
                className="w-full sm:w-auto px-6 py-3 bg-yellow-500 text-black rounded-xl font-bold shadow-md transition duration-300 transform hover:bg-yellow-600 hover:scale-105"
              >
                Buy Now
              </button>
              <button
                onClick={closeModal}
                className="w-full sm:w-auto px-6 py-3 bg-gray-300 text-black rounded-xl font-bold shadow-md transition duration-300 transform hover:bg-gray-400 hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PackageModal;
