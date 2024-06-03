import AboutSection from "@/components/UI/HomePage/AboutSection";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import ResentLostReport from "@/components/UI/HomePage/ResentLostReport";
import ServiceReport from "@/components/UI/HomePage/ServiceReport/ServiceReport";
import Testimonials from "@/components/UI/HomePage/Testimonials/Testimonials";

const HomePage = () => {
   return (
      <>
         <HeroSection />
         <AboutSection />
         <ResentLostReport />
         <Testimonials />
         <ServiceReport />
      </>
   );
};

export default HomePage;
