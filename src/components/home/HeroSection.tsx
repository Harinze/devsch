const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight">
            Building Software.  
            <span className="text-yellow-500 block">Empowering Careers.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At DevSch, we craft top-tier software solutions, deliver cutting-edge technology consultancy, and mentor the next generation of tech leaders — with hands-on projects and personalized learning.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="/contact"
              className="rounded-full bg-yellow-500 px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-yellow-600 transition-all"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="text-lg font-semibold text-gray-900 hover:text-yellow-500 transition-all"
            >
              Learn More →
            </a>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 lg:ml-12">
          <img
            src="/hero-illustration.svg" 
            alt="DevSch Software Solutions"
            className="w-full max-w-md mx-auto lg:max-w-lg"
          />
        </div>
      </div>

      {/* Decorative gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 bg-yellow-300 opacity-30 rounded-full w-[60rem] h-[60rem] blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
