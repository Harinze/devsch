
import Header from '../components/Header';

const About = () => (
  <div>
    <Header />
    <main className="bg-white text-black py-12 px-4">
      <h2 className="text-3xl text-center font-bold mb-8">About Us</h2>
      <p className="max-w-3xl mx-auto text-lg">
        DevSch is a platform offering mentoring, consultancy, and software development services
        to help individuals and businesses grow in the tech world.
      </p>
    </main>
  </div>
);

export default About;
