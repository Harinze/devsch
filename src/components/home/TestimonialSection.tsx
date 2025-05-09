import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'The mentorship I received from DevSch was a game-changer! It helped me level up my skills and grow my career exponentially.',
    author: 'Sarah T.',
    role: 'Software Engineer at TechNova',
    avatar: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Sarah',
  },
  {
    quote: 'DevSch’s development team transformed our business. We now have a custom solution that meets all our needs perfectly.',
    author: 'Michael B.',
    role: 'CEO at BrightSolutions',
    avatar: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Michael',
  },
  {
    quote: 'Their consultancy helped us choose the right tech stack and streamline our workflow. Highly recommended!',
    author: 'Chinedu K.',
    role: 'Product Manager at NexaCorp',
    avatar: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Chinedu',
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-yellow-100 via-yellow-50 to-white">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16">What Our Clients Say</h2>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-10 md:p-16 flex flex-col items-center text-center space-y-6"
          >
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].author}
              className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
            />
            <p className="text-lg italic text-gray-700">❝ {testimonials[current].quote} ❞</p>
            <div>
              <p className="text-xl font-bold text-gray-900 mt-4">{testimonials[current].author}</p>
              <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialSection;
