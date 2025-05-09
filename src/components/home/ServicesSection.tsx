import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'We create powerful websites, VTU apps, ecommerce platforms, booking systems, and business tools — crafted to drive growth.',
      illustration: '/custom-dev.svg',
    },
    {
      title: 'Technology Consulting',
      description: 'Expert advice on choosing and implementing smart tech solutions, including AI automation and digital transformation.',
      illustration: '/tech-consulting.svg',
    },
    {
      title: 'Mentorship & Training',
      description: 'Hands-on, project-based learning with live sessions, practical assignments, career quizzes, and certification.',
      illustration: '/mentorship.svg',
    },
    {
      title: 'Third-party Integrations',
      description: 'Seamless integration of payments, AI, APIs, cloud services and third-party tools into your existing systems.',
      illustration: '/integrations.svg',
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
    <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">What We Offer</h2>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
          >
            <img
              src={service.illustration}
              alt={service.title}
              className="w-28 h-28 object-contain mb-6"
            />
            <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 text-base">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Slider View */}
      <div className="md:hidden h-80 relative overflow-hidden mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex flex-col justify-center items-center bg-white rounded-3xl p-8 shadow-lg"
          >
            <img
              src={services[current].illustration}
              alt={services[current].title}
              className="w-24 h-24 object-contain mb-6"
            />
            <h3 className="text-xl font-bold mb-3 text-gray-800">{services[current].title}</h3>
            <p className="text-gray-600 text-sm">{services[current].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
