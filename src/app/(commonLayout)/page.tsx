import AboutSection from "@/components/UI/HomePage/AboutSection";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import ResentLostItem from "@/components/UI/HomePage/ResentLostItem";
import Image from "next/image";

const HomePage = () => {
   return (
      <>
         <HeroSection />
         <AboutSection />
         <ResentLostItem />
      </>
   );
};

export default HomePage;
