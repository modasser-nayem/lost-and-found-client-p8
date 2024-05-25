"use client";

import { ChangeEvent, useState } from "react";

const Table = () => {
   const items = [
      {
         id: 1,
         title: "Lost Wallet",
         lostDate: "2023-05-01",
         lostLocation: "Park",
         status: "Lost",
         category: "wallet",
      },
      {
         id: 2,
         title: "Found Phone",
         lostDate: "2023-04-20",
         lostLocation: "Mall",
         status: "Found",
         category: "phone",
      },
      // Add more items as needed
   ];

   const [currentPage, setCurrentPage] = useState<number>(1);
   const [itemsPerPage] = useState<number>(10);
   const [searchTerm, setSearchTerm] = useState<string>("");
   const [category, setCategory] = useState<string>("");
   const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
      start: "",
      end: "",
   });

   const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
   };

   const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setCategory(e.target.value);
   };

   const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
      setDateRange({
         ...dateRange,
         [e.target.name]: e.target.value,
      });
   };

   // Filtered items based on search term, category, and date range
   const filteredItems = items.filter((item) => {
      const matchesSearch = item.title
         .toLowerCase()
         .includes(searchTerm.toLowerCase());
      const matchesCategory = category ? item.category === category : true;
      const matchesDateRange =
         (dateRange.start
            ? new Date(item.lostDate) >= new Date(dateRange.start)
            : true) &&
         (dateRange.end
            ? new Date(item.lostDate) <= new Date(dateRange.end)
            : true);
      return matchesSearch && matchesCategory && matchesDateRange;
   });

   // Pagination logic
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

   return (
      <div className="container mx-auto p-4">
         <div className="flex flex-wrap justify-between mb-4">
            <input
               type="text"
               placeholder="Search by title"
               value={searchTerm}
               onChange={handleSearch}
               className="p-2 border border-gray-300 rounded mb-2 md:mb-0"
            />
            <select
               value={category}
               onChange={handleCategoryChange}
               className="p-2 border border-gray-300 rounded mb-2 md:mb-0"
            >
               <option value="">All Categories</option>
               <option value="wallet">Wallet</option>
               <option value="phone">Phone</option>
               <option value="keys">Keys</option>
            </select>
            <div className="flex flex-wrap gap-2">
               <input
                  type="date"
                  name="start"
                  value={dateRange.start}
                  onChange={handleDateChange}
                  className="p-2 border border-gray-300 rounded"
               />
               <input
                  type="date"
                  name="end"
                  value={dateRange.end}
                  onChange={handleDateChange}
                  className="p-2 border border-gray-300 rounded"
               />
            </div>
         </div>

         <table className="min-w-full bg-white border border-gray-300">
            <thead>
               <tr>
                  <th className="py-2 px-4 border-b">Serial</th>
                  <th className="py-2 px-4 border-b">Title</th>
                  <th className="py-2 px-4 border-b">Lost Date</th>
                  <th className="py-2 px-4 border-b">Lost Location</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Action</th>
               </tr>
            </thead>
            <tbody>
               {currentItems.map((item, index) => (
                  <tr key={item.id}>
                     <td className="py-2 px-4 border-b text-center">
                        {indexOfFirstItem + index + 1}
                     </td>
                     <td className="py-2 px-4 border-b">{item.title}</td>
                     <td className="py-2 px-4 border-b">{item.lostDate}</td>
                     <td className="py-2 px-4 border-b">{item.lostLocation}</td>
                     <td className="py-2 px-4 border-b">{item.status}</td>
                     <td className="py-2 px-4 border-b text-center">
                        <a
                           href={`/view/${item.id}`}
                           className="text-blue-500 hover:underline"
                        >
                           View
                        </a>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

         <div className="flex justify-center mt-4">
            <nav>
               <ul className="flex space-x-2">
                  {Array.from(
                     { length: Math.ceil(filteredItems.length / itemsPerPage) },
                     (_, i) => (
                        <li key={i}>
                           <button
                              onClick={() => paginate(i + 1)}
                              className={`px-4 py-2 border rounded ${
                                 currentPage === i + 1
                                    ? "bg-blue-500 text-white"
                                    : "bg-white text-blue-500"
                              }`}
                           >
                              {i + 1}
                           </button>
                        </li>
                     )
                  )}
               </ul>
            </nav>
         </div>
      </div>
   );
};

export default Table;
