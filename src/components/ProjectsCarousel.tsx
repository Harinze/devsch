import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const projectSlides = [
  {
    img: "/vtu-devsch.png",
    title: "VTU Automation Web App",
    description: "A custom web application built to automate VTU services for businesses and users.",
  },
  {
    img: "/ecommerce.png",
    title: "E-commerce Platform",
    description: "A fully integrated e-commerce platform designed for a fast-growing retail brand.",
  },
  {
    img: "/cv-analyzer.png",
    title: "AI CV Analyzer",
    description: "An intelligent AI-based CV analyzer integrated seamlessly into a user-friendly web app.",
  },
];

const ProjectsCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projectSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16">
        Projects We've Built
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
          <div className="aspect-w-16 aspect-h-9 bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={projectSlides[index].img}
                src={projectSlides[index].img}
                alt={projectSlides[index].title}
                initial={{ opacity: 0.6, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="object-cover w-full h-full rounded-3xl"
              />
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col justify-end p-8 rounded-3xl">
            <motion.div
              key={projectSlides[index].title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{projectSlides[index].title}</h3>
              <p className="text-sm md:text-base text-gray-200">{projectSlides[index].description}</p>
            </motion.div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center space-x-3 mt-6">
          {projectSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-yellow-500' : 'bg-gray-300'} transition-all duration-300`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
