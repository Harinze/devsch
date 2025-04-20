import Header from '../components/Header';

const About = () => (
  <div className="bg-white text-black min-h-screen">
    <Header />
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Intro */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">About DevSch</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          DevSch is an online tech training, software development, and consultancy platform. Powered by nearly a decade of experience, we help individuals and businesses grow and thrive in today's digital landscape.
        </p>
      </section>

      {/* Who We Are */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Who We Are</h3>
          <p className="text-gray-700 text-base">
            We are self-taught and formally trained software engineers, certified by a world-class training institute in Lagos, Nigeria. DevSch is operated under our registered business name, <strong>Sharpy Online</strong>. We bring close to 10 years of experience building web and mobile applications for individuals and organizations.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <img
            src="/devsch.png"
            alt="Remote training"
            className="w-full h-auto object-cover rounded-xl shadow"
          />
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="bg-gray-50 p-6 md:p-12 rounded-2xl shadow-md">
        <h3 className="text-3xl font-bold text-center mb-6">Our Training Philosophy</h3>
        <ul className="space-y-4 text-gray-700 text-base max-w-4xl mx-auto list-disc pl-5">
          <li>Weekly remote sessions: 2–3 hours on weekends for 3 months</li>
          <li>Assignments after every session with thorough feedback</li>
          <li>3 live projects to build real-world experience</li>
          <li>Algorithm sessions to strengthen problem-solving</li>
          <li>Personalized learning paths based on your career goals</li>
        </ul>
        <p className="mt-6 text-center text-gray-700">
          Whether you're just starting or looking to enhance your skills, our curriculum prepares you for the tech industry with confidence.
        </p>
      </section>

      {/* What You’ll Learn */}
      <section>
        <h3 className="text-3xl font-bold text-center mb-6">Technologies We Cover</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-800">
          <div className="bg-gray-100 p-4 rounded-xl shadow">HTML & CSS</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">JavaScript & TypeScript</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">React & Vite</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">Tailwind CSS</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">Node.js & Express.js</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">Python</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">Redux</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">Next.js</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">MongoDB</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">React Testing Library</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">Git, GitHub & GitBucket</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">Agile Methodology</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">Project Management</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">Technical Writing</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">Technical Documentation</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">CPanel Deployment</div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">Wordpress</div>
        </div>
      </section>

      {/* Consultancy and Development Services */}
      <section className="bg-black text-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-center mb-6">Technology Consultancy & Custom Software Solutions</h3>
        <p className="text-gray-300 text-base max-w-4xl mx-auto text-center mb-6">
          Beyond training, we provide expert-level technology consultancy services to both small and large businesses. Our consultancy focuses on helping organizations make informed technical decisions, adopt scalable technologies, and streamline operations through smart digital solutions.
        </p>
        <p className="text-gray-300 text-base max-w-4xl mx-auto text-center">
          We also design and build powerful web and mobile applications tailored to your business needs. Whether you're a startup or an enterprise, we offer the expertise to turn your idea into reality.
        </p>
      </section>

      {/* Final CTA */}
      <div className="text-center mt-16">
        <h4 className="text-2xl font-semibold mb-2">Let’s Build Your Tech Future Together</h4>
        <p className="text-gray-700 mb-4 max-w-xl mx-auto">
          From beginner-friendly tech training to complex software development and consultancy, DevSch is here to support your growth. Reach out today to learn how we can help.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-600 transition"
        >
          Contact Us
        </a>
      </div>
    </main>
  </div>
);

export default About;
