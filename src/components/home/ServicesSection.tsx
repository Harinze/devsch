import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ServicesSection = () => {
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


    const [current, setCurrent] = useState(0);
   

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % services.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);


  return (
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
  );
};

export default ServicesSection;
