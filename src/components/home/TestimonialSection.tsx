import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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


const TestimonialSection = () => {
    const [anotherCurrent, setAnotherCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnotherCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-yellow-500 text-white py-24 px-4 md:px-8 text-center">
    <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>

    <div className="relative h-60 max-w-2xl mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={anotherCurrent}
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
  );
};

export default TestimonialSection;
