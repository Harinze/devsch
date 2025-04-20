
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';

const Home = () => (
  <div className="bg-white text-black">
    <Header />
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white py-24 px-8 text-center rounded-b-3xl">
      <h1 className="text-5xl font-extrabold leading-tight mb-4">Welcome to DevSch</h1>
      <p className="text-lg md:text-xl mb-6">Empowering your career and business with expert mentorship, technology consultancy, and custom software solutions.</p>
      <a href="/contact" className="bg-black text-white py-3 px-8 rounded-full text-xl font-semibold hover:bg-yellow-500 transition-all duration-300">
        Get Started
      </a>
    </section>

    {/* What We Do Section */}
    <section className="py-24 px-8 text-center">
      <h2 className="text-4xl font-bold mb-12">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <ServiceCard title="One-on-One Mentoring" description="Tailored mentorship sessions to accelerate your growth." icon="🧑‍🏫" />
        <ServiceCard title="Group Mentoring" description="Collaborative learning with industry experts and peers." icon="👥" />
        <ServiceCard title="Technology Consultancy" description="Expert guidance on choosing and implementing technology solutions." icon="💻" />
        <ServiceCard title="Software Development" description="Custom software solutions built for your business needs." icon="🔧" />
      </div>
    </section>

    {/* Mentoring Section */}
    <section className="bg-gray-100 py-24 px-8 text-center">
      <h2 className="text-4xl font-bold mb-6">Mentoring</h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto">
        Our mentoring services are designed to help you grow personally and professionally. Whether you're looking for one-on-one guidance or want to learn from a group, we have the right program for you.
      </p>
    </section>

    {/* Software Development Section */}
    <section className="py-24 px-8 text-center">
      <h2 className="text-4xl font-bold mb-6">Software Development</h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto">
        We build high-quality, scalable, and secure software tailored to meet your specific business requirements. Let us bring your ideas to life!
      </p>
    </section>

    {/* Technology Consultancy Section */}
    <section className="bg-gray-100 py-24 px-8 text-center">
      <h2 className="text-4xl font-bold mb-6">Technology Consultancy</h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto">
        Navigating the rapidly changing tech landscape can be challenging. Our consultancy services provide the insight and expertise to help your business stay ahead.
      </p>
    </section>

    {/* Testimonial Section */}
    <section className="bg-yellow-500 text-white py-24 px-8 text-center">
      <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
      <div className="space-y-8 max-w-2xl mx-auto">
        <div className="bg-white text-black p-8 rounded-lg shadow-xl">
          <p className="italic text-lg">“The mentorship I received from DevSch was a game-changer! It helped me level up my skills and grow my career exponentially.”</p>
          <p className="mt-4 font-semibold">- Sarah T.</p>
        </div>
        <div className="bg-white text-black p-8 rounded-lg shadow-xl">
          <p className="italic text-lg">“DevSch’s software development team transformed our business. We now have a custom solution that meets all our needs perfectly.”</p>
          <p className="mt-4 font-semibold">- Michael B.</p>
        </div>
      </div>
    </section>

    {/* Samples of What We Built Section */}
    <section className="py-24 px-8 text-center">
      <h2 className="text-4xl font-bold mb-12">Samples of What We Built</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <img src="https://via.placeholder.com/400x250" alt="Project 1" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p>Custom web application built to automate workflows for a local business.</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <img src="https://via.placeholder.com/400x250" alt="Project 2" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p>Mobile app designed to streamline communication within organizations.</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <img src="https://via.placeholder.com/400x250" alt="Project 3" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold">Project 3</h3>
          <p>Developed a fully integrated e-commerce platform for a growing retail brand.</p>
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="bg-black text-white py-24 px-8 text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-lg mb-8">Reach out to us today to see how we can help you achieve your goals.</p>
      <a href="/contact" className="bg-yellow-500 text-black py-3 px-8 rounded-full text-xl font-semibold hover:bg-yellow-600 transition-all">
        Contact Us
      </a>
    </section>
  </div>
);

export default Home;
