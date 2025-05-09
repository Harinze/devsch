

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-yellow-100 via-yellow-50 to-white text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Why Choose DevSch?</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg">
          <svg className="w-16 h-16 text-yellow-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l-7 7 7 7z" />
          </svg>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Expert Mentorship</h3>
          <p className="text-gray-600">Receive personalized, one-on-one mentorship from industry experts who are invested in your growth.</p>
        </div>

        <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg">
          <svg className="w-16 h-16 text-yellow-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14l4-4 4 4m0 0l4-4-4-4m0 0L16 2" />
          </svg>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Custom Solutions</h3>
          <p className="text-gray-600">We deliver tailor-made software solutions that meet your business's unique challenges.</p>
        </div>

        <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg">
          <svg className="w-16 h-16 text-yellow-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l-7 7 7 7z" />
          </svg>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cutting-Edge Tech</h3>
          <p className="text-gray-600">Our team uses the latest technologies to build scalable, secure, and efficient solutions for your business.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
