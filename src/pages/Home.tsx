
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';


const Home = () => {

    const testimonials = [
        {
          quote: '“The mentorship I received from DevSch was a game-changer! It helped me level up my skills and grow my career exponentially.”',
          author: '- Sarah T.',
        },
        {
          quote: '“DevSch’s software development team transformed our business. We now have a custom solution that meets all our needs perfectly.”',
          author: '- Michael B.',
        },
        {
          quote: '“Their consultancy helped us choose the right tech stack and streamline our workflow. Highly recommended!”',
          author: '- Chinedu K.',
        },
      ];

    const services = [
        {
          title: 'One-on-One Mentoring',
          description: 'Tailored mentorship sessions to accelerate your growth.',
          icon: '🧑‍🏫',
        },
        {
          title: 'Group Mentoring',
          description: 'Collaborative learning with industry experts and peers.',
          icon: '👥',
        },
        {
          title: 'Technology Consultancy',
          description: 'Expert guidance on choosing and implementing technology solutions.',
          icon: '💻',
        },
        {
          title: 'Software Development',
          description: 'Custom software solutions built for your business needs.',
          icon: '🔧',
        },
      ];

    const [anotherCurrent, setAnotherCurrent] = useState(0);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setAnotherCurrent((prev) => (prev + 1) % testimonials.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % services.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);


    

    return(
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

    <section className="py-24 px-4 md:px-8 text-center bg-white">
      <h2 className="text-4xl font-bold mb-12">What We Do</h2>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden h-60 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col justify-center items-center bg-gray-100 p-6 rounded-2xl shadow-md"
          >
            <div className="text-5xl mb-4">{services[current].icon}</div>
            <h3 className="text-xl font-semibold mb-2">{services[current].title}</h3>
            <p className="text-gray-600 text-sm">{services[current].description}</p>
          </motion.div>
        </AnimatePresence>
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
    <section className="bg-yellow-500 text-white py-24 px-4 md:px-8 text-center">
      <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>

      <div className="relative h-60 max-w-2xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-white text-black p-8 rounded-xl shadow-xl flex flex-col justify-center items-center"
          >
            <p className="italic text-lg"> {testimonials[anotherCurrent].quote} </p>
            <p className="mt-4 font-semibold">{testimonials[anotherCurrent].author}</p>
          </motion.div>
        </AnimatePresence>
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
    )
}

export default Home;
