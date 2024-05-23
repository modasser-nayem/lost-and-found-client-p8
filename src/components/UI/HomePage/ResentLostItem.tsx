import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import Button from "../Button";
import moment from "moment";

const ResentLostItem = () => {
   const lostItems = [
      {
         id: "31f3cd72-ec86-41c0-b433-6e700d85ab47",
         title: "Realme phone lost",
         category: "phone",
         brand: "realme",
         images: [],
         lostDate: "2024-05-22T15:07:23.052Z",
         lostLocation: "Mirsarai",
         username: null,
         email: "user1@gmail.com",
         createdAt: "2024-05-23T01:42:35.409Z",
         description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, totam deserunt. Reiciendis quisquam facere possimus.",
      },
      {
         id: "31f3cd72-ec86-41c0-b433-6e700d85ab47",
         title: "Realme phone lost",
         category: "phone",
         brand: "realme",
         images: [],
         lostDate: "2024-05-22T15:07:23.052Z",
         lostLocation: "Mirsarai",
         username: null,
         email: "user1@gmail.com",
         createdAt: "2024-05-23T01:42:35.409Z",
         description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, totam deserunt. Reiciendis quisquam facere possimus.",
      },
      {
         id: "31f3cd72-ec86-41c0-b433-6e700d85ab47",
         title: "Realme phone lost",
         category: "phone",
         brand: "realme",
         images: [],
         lostDate: "2024-05-22T15:07:23.052Z",
         lostLocation: "Mirsarai",
         username: null,
         email: "user1@gmail.com",
         createdAt: "2024-05-23T01:42:35.409Z",
         description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, totam deserunt. Reiciendis quisquam facere possimus.",
      },
      {
         id: "31f3cd72-ec86-41c0-b433-6e700d85ab47",
         title: "Realme phone lost",
         category: "phone",
         brand: "realme",
         images: [],
         lostDate: "2024-05-22T15:07:23.052Z",
         lostLocation: "Mirsarai",
         username: null,
         email: "user1@gmail.com",
         createdAt: "2024-05-23T01:42:35.409Z",
         description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, totam deserunt. Reiciendis quisquam facere possimus.",
      },
      {
         id: "31f3cd72-ec86-41c0-b433-6e700d85ab47",
         title: "Realme phone lost",
         category: "phone",
         brand: "realme",
         images: [],
         lostDate: "2024-05-22T15:07:23.052Z",
         lostLocation: "Mirsarai",
         username: null,
         email: "user1@gmail.com",
         createdAt: "2024-05-23T01:42:35.409Z",
         description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, totam deserunt. Reiciendis quisquam facere possimus.",
      },
   ];

   return (
      <div className="container mt-[100px]">
         <div className="text-center">
            <h1 className="text-4xl font-bold">Recent Lost Item Reports</h1>
            <p className="max-w-[600px] mx-auto mt-5">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Placeat, quod! Praesentium possimus labore quod hic.
            </p>
         </div>
         <div className="mt-20 grid grid-cols-5 gap-10">
            {lostItems.map((item, i) => (
               <div
                  key={i}
                  className="border-2 p-5 rounded-md"
               >
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p>{item.description}</p>
                  <p>
                     Post At:{" "}
                     {moment().startOf("d").from(item.lostDate).slice(3)} ago
                  </p>
                  <div className="my-5">
                     <div className="flex items-center gap-2">
                        <MdDateRange />
                        {moment(item.lostDate).format("ll")}
                     </div>
                     <div className="flex items-center gap-2 mt-2">
                        <FaLocationDot />
                        {item.lostLocation}
                     </div>
                  </div>
                  <Button
                     variant="outline"
                     className="py-1.5 w-full text-base font-normal"
                  >
                     See Details
                  </Button>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ResentLostItem;
