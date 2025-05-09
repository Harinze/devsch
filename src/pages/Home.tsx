
import Header from '../components/Header';
import ProjectsCarousel from '../components/ProjectsCarousel';
import TestimonialSection from '../components/home/TestimonialSection';
import ServicesSection from '../components/home/ServicesSection';
import Coreservices from '../components/home/CoreServices';
import HeroSection from '../components/home/HeroSection';
import CallToAction from '../components/home/CallToAction';
import WhyChooseUs from '../components/home/WhyChooseUs';


const Home = () => {

  

    return(
    <div className="bg-white text-black">
    <Header />
    <HeroSection/>
    <WhyChooseUs/>
   <ServicesSection/>
   <Coreservices/>
   <TestimonialSection/>
    <ProjectsCarousel/>
    <CallToAction/>
  </div>
    )
}

export default Home;
