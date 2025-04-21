import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const projectSlides = [
  {
    img: "/vtu-devsch.png",
    title: "Project 1",
    description: "Custom web application built to automate VTU services",
  },
  {
    img: "/ecommerce.png",
    title: "Project 2",
    description: "Developed a fully integrated e-commerce platform for a growing retail brand.",
  },
  {
    img: "/cv-analyzer.png",
    title: "Project 3",
    description: "Integrated AI system for CV Analyzer into the web app.",
  },
];

const ProjectsCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projectSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 md:px-8 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">Samples of What We Built</h2>

      <div className="relative max-w-3xl mx-auto h-[500px] sm:h-[550px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gray-100 rounded-xl shadow-xl p-6 flex flex-col justify-center items-center"
          >
            <img
              src={projectSlides[index].img}
              alt={projectSlides[index].title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold mb-2">{projectSlides[index].title}</h3>
            <p className="text-gray-700 max-w-md">{projectSlides[index].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
