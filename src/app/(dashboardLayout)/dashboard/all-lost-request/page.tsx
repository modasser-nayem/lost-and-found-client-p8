import Table from "@/components/Shared/Table/Table";
import LostRequestTable from "@/components/UI/Dashboard/LostRequestTable/LostRequestTable";
import React from "react";

const AllLostRequestPage = () => {
   const data = [
      {
         id: "31f3cd72-ec86-41c0-b433-6e700d85ab47",
         title: "Realme phone lost",
         description:
            "My home beside i lost this mobile. mobile name is realme",
         category: "phone",
         brand: "Nokia",
         isFound: false,
         images: [],
         lostDate: "2024-05-22T15:07:23.052Z",
         lostLocation: "Mirsarai",
         createdAt: "2024-05-23T01:42:35.409Z",
      },
      {
         id: "31f3cd72-ec86-41c0-b433-6e700d85ab47",
         title: "Realme phone lost",
         description:
            "My home beside i lost this mobile. mobile name is realme",
         category: "phone",
         brand: "Nokia",
         isFound: false,
         images: [],
         lostDate: "2024-05-22T15:07:23.052Z",
         lostLocation: "Mirsarai",
         createdAt: "2024-05-23T01:42:35.409Z",
      },
      {
         id: "31f3cd72-ec86-41c0-b433-6e700d85ab47",
         title: "Realme phone lost",
         description:
            "My home beside i lost this mobile. mobile name is realme",
         category: "phone",
         brand: "Nokia",
         isFound: false,
         images: [],
         lostDate: "2024-05-22T15:07:23.052Z",
         lostLocation: "Mirsarai",
         createdAt: "2024-05-23T01:42:35.409Z",
      },
      {
         id: "31f3cd72-ec86-41c0-b433-6e700d85ab47",
         title: "Realme phone lost",
         description:
            "My home beside i lost this mobile. mobile name is realme",
         category: "phone",
         brand: "Nokia",
         isFound: false,
         images: [],
         lostDate: "2024-05-22T15:07:23.052Z",
         lostLocation: "Mirsarai",
         createdAt: "2024-05-23T01:42:35.409Z",
      },
      {
         id: "31f3cd72-ec86-41c0-b433-6e700d85ab47",
         title: "Realme phone lost",
         description:
            "My home beside i lost this mobile. mobile name is realme",
         category: "phone",
         brand: "Nokia",
         isFound: false,
         images: [],
         lostDate: "2024-05-22T15:07:23.052Z",
         lostLocation: "Mirsarai",
         createdAt: "2024-05-23T01:42:35.409Z",
      },
      {
         id: "31f3cd72-ec86-41c0-b433-6e700d85ab47",
         title: "Realme phone lost",
         description:
            "My home beside i lost this mobile. mobile name is realme",
         category: "phone",
         brand: "Nokia",
         isFound: false,
         images: [],
         lostDate: "2024-05-22T15:07:23.052Z",
         lostLocation: "Mirsarai",
         createdAt: "2024-05-23T01:42:35.409Z",
      },
      {
         id: "31f3cd72-ec86-41c0-b433-6e700d85ab47",
         title: "Realme phone lost",
         description:
            "My home beside i lost this mobile. mobile name is realme",
         category: "phone",
         brand: "Nokia",
         isFound: false,
         images: [],
         lostDate: "2024-05-22T15:07:23.052Z",
         lostLocation: "Mirsarai",
         createdAt: "2024-05-23T01:42:35.409Z",
      },
   ];

   const items = [
      {
         id: 1,
         title: "Lost Wallet",
         lostDate: "2023-05-01",
         lostLocation: "Park",
         isFound: false,
         category: "wallet",
         createdAt: "",
      },
      {
         id: 2,
         title: "Found Phone",
         lostDate: "2023-04-20",
         lostLocation: "Mall",
         isFound: true,
         category: "phone",
         createdAt: "",
      },
      // Add more items as needed
   ];

   return (
      <div>
         <LostRequestTable items={data} />
      </div>
   );
};

export default AllLostRequestPage;
