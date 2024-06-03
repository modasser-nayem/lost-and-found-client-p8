import { TTestimonial } from "@/types/testimonial";
import StarRating from "../../StarRating/StarRating";
import Image from "next/image";
import tempImg from "@/assets/profile.png";

type TestimonialCardProps = {
   item: TTestimonial;
};

const TestimonialCard = ({ item }: TestimonialCardProps) => {
   return (
      <div className="bg-white p-6 rounded-lg shadow-md text-left">
         <p className="mb-4">{item.content}</p>
         <StarRating value={item.rating} />
         <div className="flex items-center mt-4">
            <Image
               src={item.photoURL ? item.photoURL : tempImg}
               alt={item.name}
               className="w-12 h-12 rounded-full mr-4"
               width={48}
               height={48}
            />
            <div>
               <h3 className="text-lg font-semibold">{item.name}</h3>
               {item?.title && (
                  <p className="text-sm text-gray-500">{item.title}</p>
               )}
            </div>
         </div>
      </div>
   );
};

export default TestimonialCard;
