import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

type StarRatingProps = {
   value: number;
};

const StarRating = ({ value }: StarRatingProps) => {
   const fullStars = Math.floor(value);
   const halfStar = value - fullStars >= 0.5;
   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

   return (
      <div className="flex items-center">
         {Array.from({ length: fullStars }, (_, index) => (
            <FaStar
               key={`full-${index}`}
               className="text-yellow-500"
            />
         ))}
         {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
         {Array.from({ length: emptyStars }, (_, index) => (
            <FaRegStar
               key={`empty-${index}`}
               className="text-gray-300"
            />
         ))}
      </div>
   );
};

export default StarRating;
