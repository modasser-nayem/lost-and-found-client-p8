"use client";

import { TTestimonial } from "@/types/testimonial";
import TestimonialCard from "./TestimonialCard";
import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Testimonials = () => {
   const testimonials: TTestimonial[] = [
      {
         id: "1",
         name: "Emily Thompson",
         title: "Teacher",
         content:
            "I lost my wallet during a school trip and was devastated. Thanks to this amazing platform, someone found it and contacted me within hours. Truly a lifesaver!",
         photoURL: "",
         rating: 5,
         createdAt: "2024-01-15T10:30:00Z",
      },
      {
         id: "2",
         name: "Michael Brown",
         title: "College Student",
         content:
            "I found a smartphone in the park and didn't know how to return it to the owner. This site made it so easy to connect with them and return it safely. Great service!",
         photoURL: "",
         rating: 4.7,
         createdAt: "2024-01-16T08:20:00Z",
      },
      {
         id: "3",
         name: "Sarah Johnson",
         title: "Office Worker",
         content:
            "Lost my keys at a busy market and thought they were gone forever. Within a day, I got a notification that someone found them. Highly recommend this platform!",
         photoURL: "",
         rating: 5,
         createdAt: "2024-01-17T14:45:00Z",
      },
      {
         id: "4",
         name: "David Wilson",
         content:
            "I can't thank this service enough! My dog went missing and was found by a kind person who used this site to reach out to me. We're happily reunited.",
         photoURL: "",
         rating: 5,
         createdAt: "2024-01-18T11:55:00Z",
      },
      {
         id: "5",
         name: "Laura White",
         title: "Freelancer",
         content:
            "Left my laptop bag at a coffee shop and was in panic mode. Thankfully, someone used this website to find me and return it. What a relief!",
         photoURL: "",
         rating: 4.9,
         createdAt: "2024-01-19T13:40:00Z",
      },
      {
         id: "6",
         name: "James Lee",
         title: "Traveler",
         content:
            "I found a lost passport while traveling and didn't know what to do. This site helped me get it back to the owner quickly and easily. Fantastic!",
         photoURL: "",
         rating: 4.8,
         createdAt: "2024-01-20T09:30:00Z",
      },
   ];

   const [currentIndex, setCurrentIndex] = useState(0);

   const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
   };

   const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
   };

   return (
      <div className="container mt-[100px] text-center my-40">
         <h1 className="text-4xl font-bold">Testimonials</h1>
         <p className="max-w-[600px] mx-auto mt-5">
            User review and they are think about our service. Placeat, quod!
            Praesentium possimus labore quod hic.
         </p>
         <div className="relative mt-16 max-w-[600px] mx-auto">
            <button
               onClick={handlePrev}
               className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
            >
               <MdArrowBackIos className="text-primary text-4xl" />
            </button>
            <div className="inline-block w-full max-w-md">
               <TestimonialCard item={testimonials[currentIndex]} />
            </div>
            <button
               onClick={handleNext}
               className="absolute right-0 top-1/2 transform -translate-y-1/2 text-primary p-2 rounded-full"
            >
               <MdArrowForwardIos className="text-primary text-4xl" />
            </button>
         </div>
      </div>
   );
};

export default Testimonials;
