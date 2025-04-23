'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AirtimeWhatsApp from '../components/Whasapp';
import toast from 'react-hot-toast';

// Paystack key from env
const VITE_PAYSTACK_KEY = import.meta.env.VITE_PUBLIC_PAYSTACK_KEY;

// Packages
const packages = [
  {
    title: 'Computer Fundamentals/Microsoft Word',
    price: 30000,
    description: '₦30,000 – 3 hours/week for 1 month',
    details: 'Covers basic digital literacy, productivity tools, and web basics.',
  },
  {
    title: 'HTML + CSS Only',
    price: 35000,
    description: '₦35,000 – 3 hours/week for 1 month',
    details: 'Perfect for beginners who want to learn the foundation of web design.',
  },
  {
    title: 'HTML, CSS & JavaScript/TypeScript',
    price: 70000,
    description: '₦70,000 – 3 hours/week for 2 months',
    details: 'Start building interactive websites with JavaScript and TypeScript.',
  },
  {
    title: 'WordPress',
    price: 35000,
    description: '₦35,000 – 3 hours/week for 1 month',
    details: 'Start building wordpress websites.',
  },
  {
    title: 'Frontend with React',
    price: 120000,
    description: '₦120,000 – 3 hours/week for 3 months',
    details: 'Master React, Vite, TailwindCSS, Redux, and frontend testing.',
  },
  {
    title: 'Fullstack Web Development',
    price: 160000,
    description: '₦160,000 – 4 months intensive training',
    details:
      'Learn both frontend and backend: React, Node.js, Express.js, MongoDB, Python, Next.js, Git, Agile, CPanel, Testing, and more.',
  },
];

// Group Packages
const groupPackages = [
    {
        title: 'Learn WordPress',
        price: 140000,
        description: '₦140,000 for 5 students',
        details: '3 hours/week for 1 month',
      },
  {
    title: 'HTML + CSS + Computer Fundamentals',
    price: 120000,
    description: '₦120,000 for 5 students',
    details: '3 hours/week for 1 month',
  },
  {
    title: 'HTML, CSS & JavaScript/TypeScript',
    price: 350000,
    description: '₦350,000 for 5 students',
    details: '3 hours/week for 2 months',
  },
  {
    title: 'Advanced Web Development (React or Fullstack)',
    price: 500000,
    description: '₦500,000 for 5 students',
    details: '3–4 months intensive training',
  },
];

const Pricing = () => {
  const [cart, setCart] = useState<string[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const navigate = useNavigate();

  const userEmail = 'user@example.com';
  const isLoggedIn = true;

  const toggleCart = (title: string) => {
    setCart((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const handleBuy = async (_title: string, price: number) => {
    if (!isLoggedIn) {
      toast.error('Please log in first.');
      navigate('/login');
      return;
    }

    try {
      const paystackModule = await import('@paystack/inline-js');
      const paystack = new paystackModule.default();

      const transaction = paystack.newTransaction({
        key: VITE_PAYSTACK_KEY,
        email: userEmail,
        amount: price * 100,
        onSuccess: (transaction: any) => {
          toast.success(`✅ Payment successful! Ref: ${transaction.reference}`);
        },
      });

      (transaction as any).onClose = () => {
        toast.error('Payment cancelled');
      };
    } catch (error) {
      console.error('Payment Error:', error);
      toast.error('Payment failed. Try again.');
    }
  };

  const renderPackageCard = (pkg: any) => {
    const inCart = cart.includes(pkg.title);

    return (
      <div
        key={pkg.title}
        className="bg-gray-100 p-6 rounded-2xl shadow-md transition-transform hover:scale-[1.02]"
      >
        <h4 className="text-xl font-semibold mb-2">{pkg.title}</h4>
        <p className="text-gray-700 mb-1">{pkg.description}</p>
        <p className="text-sm text-gray-600 mb-4">{pkg.details}</p>
        <div className="flex gap-3">
          <button
            className={`px-4 py-2 rounded-xl font-bold transition-colors ${
              inCart ? 'bg-yellow-500 text-black' : 'bg-black text-white'
            }`}
            onClick={() => toggleCart(pkg.title)}
          >
            {inCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
          <button
            onClick={() => setSelectedPackage(pkg)}
            className="px-4 py-2 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-600 transition"
          >
            Buy
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">Training & Services</h2>

        <section>
          <h3 className="text-2xl font-bold mb-6">One-on-One Mentoring</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map(renderPackageCard)}
          </div>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Group Mentoring (5 Students)</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {groupPackages.map(renderPackageCard)}
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-6">What You Get</h3>
          <ul className="space-y-4 text-gray-700 text-base max-w-3xl mx-auto">
            <li>✅ Remote weekly sessions (2–3 hours on weekends)</li>
            <li>✅ Assignments for every session with comprehensive feedback</li>
            <li>✅ Build 3 real-world live projects during the training</li>
            <li>✅ Flexible duration depending on your learning pace</li>
            <li>✅ Agile Methodolody - Scrum/Kanban</li>
            <li>✅ Algorithm and data structure sessions to boost problem-solving</li>
            <li>✅ Industry-standard training and mentorship to prepare you for real jobs or build your projects</li>
            <li>✅ Lifetime access to our mentorship and review community</li>
            <li>✅ Standard access to our well structured quizes with instance feedbacks</li>
            <li>✅ Certificate of Completion</li>
          </ul>
        </section>

        <section className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-6">
            Technology Consultancy & Software Development
          </h3>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-4">
            We offer expert consultancy services and build modern web & mobile applications tailored for both small businesses and large enterprises.
          </p>
          <p className="text-center text-gray-600 text-sm">
            For consultancy or project development, please{' '}
            <a href="/contact" className="text-blue-600 underline">
              contact us
            </a>{' '}
            directly for custom pricing and engagement.
          </p>
        </section>

        <div className="text-center mt-20">
          <p className="text-lg font-semibold text-gray-700">
            Ready to start your journey or have questions?
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-600 transition"
          >
            Contact Us
          </a>
        </div>

        <AirtimeWhatsApp />
      </main>

      {selectedPackage && (
        <PackageModal
          packageData={selectedPackage}
          handleClose={() => setSelectedPackage(null)}
          handleBuy={() => handleBuy(selectedPackage.title, selectedPackage.price)}
        />
      )}
    </div>
  );
};

export default Pricing;

// Modal Component
const PackageModal = ({
  packageData,
  handleClose,
  handleBuy,
}: {
  packageData: any;
  handleClose: () => void;
  handleBuy: () => void;
}) => {
  const { title, price, description, details } = packageData;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl w-full max-w-lg mx-4 sm:mx-auto transition-all duration-300 transform scale-95 sm:scale-100">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
          Confirm Your Purchase
        </h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Package:</strong> {title}
          </p>
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Description:</strong> {description}
          </p>
          <p className="text-lg text-gray-700">
            <strong className="font-semibold">Details:</strong> {details}
          </p>
          <p className="text-xl font-semibold text-gray-800">
            <strong className="font-semibold">Price:</strong> ₦{price}
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
            onClick={handleClose}
            className="w-full sm:w-auto px-6 py-3 bg-gray-300 text-black rounded-xl font-bold shadow-md transition duration-300 transform hover:bg-gray-400 hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
