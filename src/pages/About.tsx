import Header from '../components/Header';

const About = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        {/* Intro */}
        <section className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">About DevSch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            DevSch is a premier online platform providing tech training, software development, and consultancy services. 
            With nearly a decade of experience, we empower individuals and businesses to thrive in today’s digital world.
          </p>
        </section>

        {/* Who We Are */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              We are a dynamic team of self-taught and formally trained software engineers with certifications from leading tech institutes. Operating under the registered name <strong>Sharpy Online</strong>, we bring over 10 years of experience in developing web and mobile applications across various industries.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="/devsch.png"
              alt="Remote training"
              className="w-full h-auto object-cover rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
        </section>

        {/* Consultancy and Development Services */}
        <section className="bg-black text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-6">Technology Consultancy & Custom Software Solutions</h3>
          <p className="text-gray-300 text-base max-w-4xl mx-auto text-center mb-6">
            In addition to our training programs, we provide expert-level technology consultancy services to businesses of all sizes. We guide organizations in making informed technical decisions, implementing scalable solutions, and optimizing operations with innovative digital strategies.
          </p>
          <p className="text-gray-300 text-base max-w-4xl mx-auto text-center">
            We also specialize in creating custom web and mobile applications tailored to meet your business needs. Whether you're a startup or an established enterprise, we have the expertise to turn your vision into reality.
          </p>
        </section>

        {/* Training Philosophy */}
        <section className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-6">Our Training Philosophy</h3>
          <ul className="space-y-4 text-gray-700 text-base max-w-4xl mx-auto list-disc pl-6">
            <li>Weekly remote sessions: 2–3 hours on weekends for 3 months</li>
            <li>Hands-on assignments after each session with comprehensive feedback</li>
            <li>3 live projects to gain real-world experience</li>
            <li>Algorithm-focused sessions to strengthen problem-solving skills</li>
            <li>Personalized learning paths based on individual career goals</li>
          </ul>
          <p className="mt-6 text-center text-gray-700">
            Whether you're a beginner or an experienced professional looking to upskill, our tailored curriculum prepares you for success in the tech industry.
          </p>
        </section>

        {/* What You’ll Learn */}
        <section>
          <h3 className="text-3xl font-bold text-center mb-6">Technologies We Cover</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm text-gray-800">
            {[
              'HTML & CSS', 'JavaScript & TypeScript', 'React & Vite', 'Tailwind CSS',
              'Node.js & Express.js', 'Python', 'Redux', 'Next.js', 'MongoDB',
              'React Testing Library', 'Git, GitHub & GitBucket', 'Agile Methodology','Amazon web services',
              'Project Management', 'Technical Writing', 'Technical Documentation', 
              'CPanel Deployment', 'WordPress'
            ].map((tech, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-lg hover:bg-gray-200 transition ease-in-out duration-300 transform hover:scale-105">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h4 className="text-2xl font-semibold mb-2">Let’s Build Your Tech Future Together</h4>
          <p className="text-gray-700 mb-4 max-w-xl mx-auto">
            Whether you're looking for beginner-friendly training, advanced software development, or expert consultancy services, DevSch is here to support your growth. Reach out today to discover how we can help you succeed.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-600 transition ease-in-out duration-300"
          >
            Contact Us
          </a>
        </div>
      </main>
    </div>
  );
};

export default About;
