const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-800 to-black text-white py-24 px-8 text-center rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-6 text-yellow-500">Ready to Get Started?</h2>
      <p className="text-lg mb-10 max-w-3xl mx-auto">
        Reach out to us today to discover how our services can help you achieve your business goals and take the next step toward success.
      </p>
      <a
        href="/contact"
        className="bg-yellow-500 text-black py-4 px-10 rounded-full text-xl font-semibold transform transition-all hover:bg-yellow-600 hover:scale-105 shadow-xl hover:shadow-2xl"
      >
        Contact Us
      </a>
    </section>
  );
};

export default CallToAction;
