"use client";

import moment from "moment";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../Button";
import { TUser, TUserRole, TUserStatus } from "@/types/user";
import Image from "next/image";
import tempProfileURL from "@/assets/profile.png";
import {
   useUpdateUserRoleMutation,
   useUpdateUserStatusMutation,
} from "@/redux/api/userApi";
import { toast } from "sonner";
import { isReduxRTQError } from "@/redux/api/baseApi";

type UsersTableProps = {
   items: TUser[];
};

const UsersTable = ({ items }: UsersTableProps) => {
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [itemsPerPage] = useState<number>(10);
   const [searchTerm, setSearchTerm] = useState<string>("");
   const [userStatus, setUserStatus] = useState<string>("");

   const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
   };

   const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setUserStatus(e.target.value);
   };

   // Filtered items based on search term, role, and status
   const filteredItems = items.filter((item) => {
      const matchesSearch = item.name
         .toLowerCase()
         .includes(searchTerm.toLowerCase());
      const matchesStatus = userStatus ? item.status === userStatus : true;
      return matchesSearch && matchesStatus;
   });

   // Pagination logic
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

   const [
      updateStatus,
      {
         data: updateStatusData,
         error: updateStatusError,
         isLoading: updateStatusIsLoading,
      },
   ] = useUpdateUserStatusMutation();

   const [
      updateRole,
      {
         data: updateRoleData,
         error: updateRoleError,
         isLoading: updateRoleIsLoading,
      },
   ] = useUpdateUserRoleMutation();

   const handleUpdateStatus = ({
      userId,
      status,
   }: {
      userId: string;
      status: TUserStatus;
   }) => {
      try {
         updateStatus({ id: userId, status });
      } catch (error) {
         toast.error("Something went wrong!, try again");
      }
   };

   const handleUpdateRole = ({
      userId,
      role,
   }: {
      userId: string;
      role: TUserRole;
   }) => {
      try {
         updateRole({ id: userId, role });
      } catch (error) {
         toast.error("Something went wrong!, try again");
      }
   };

   useEffect(() => {
      if (updateStatusData) {
         toast.success(updateStatusData.message);
      }
      if (isReduxRTQError(updateStatusError)) {
         toast.error(updateStatusError.data.message);
      }

      if (updateRoleData) {
         toast.success(updateRoleData.message);
      }
      if (isReduxRTQError(updateRoleError)) {
         toast.error(updateRoleError.data.message);
      }
   }, [updateStatusData, updateStatusError, updateRoleData, updateRoleError]);

   return (
      <div className="container mx-auto p-4">
         {/* <div className="flex flex-wrap justify-between mb-4">
            <input
               type="text"
               placeholder="Search by title"
               value={searchTerm}
               onChange={handleSearch}
               className="p-2 border border-gray-300 rounded mb-2 md:mb-0"
            />
            <select
               value={userStatus}
               onChange={handleStatusChange}
               className="p-2 border border-gray-300 rounded mb-2 md:mb-0"
            >
               <option value="">Select Status</option>
               <option value="activate">activate</option>
               <option value="deactivate">deactivate</option>
            </select>
         </div> */}

         <table className="min-w-full">
            <thead>
               <tr className="bg-primary text-white">
                  <th className="py-3 px-4">Serial</th>
                  <th className="py-3 px-4">Information</th>
                  <th className="py-3 px-4">email</th>
                  <th className="py-3 px-4">Create At</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Action</th>
               </tr>
            </thead>
            <tbody>
               {currentItems.map((item, index) => (
                  <tr
                     className=""
                     key={item.id}
                  >
                     <td className="py-4 text-center px-4 border-b">
                        {indexOfFirstItem + index + 1}
                     </td>
                     <td className="py-4 text-center px-4 border-b">
                        <div className="flex items-center gap-4">
                           <Image
                              src={item?.photoURL || tempProfileURL}
                              alt={item?.name || "user"}
                              width={45}
                              height={45}
                           />
                           <div className="text-sm text-start">
                              <p>Name: {item.name}</p>
                              <p>Username: {item.username}</p>
                           </div>
                        </div>
                     </td>
                     <td className="py-4 text-center px-4 border-b">
                        {item.email}
                     </td>
                     <td className="py-4 text-center px-4 border-b">
                        {moment(item.createdAt).format("DD-MM-YYYY")}
                     </td>
                     <td className="py-4 text-center px-4 border-b">
                        <span
                           className={`inline-block min-w-[70px] py-1 px-3 text-sm font-semibold rounded ${
                              item.role === "admin"
                                 ? "bg-green-200 text-green-800"
                                 : "bg-blue-200 text-blue-800"
                           }`}
                        >
                           {item.role}
                        </span>
                     </td>
                     <td className="py-4 text-center px-4 border-b">
                        <div className="flex items-center gap-1">
                           <div
                              className={`w-3 h-3 mt-0.5 rounded-full ${
                                 item.status === "activate"
                                    ? "bg-green-500"
                                    : "bg-red-600"
                              }`}
                           ></div>{" "}
                           {item.status}
                        </div>
                     </td>
                     <td className="py-4 px-4 border-b text-center flex flex-col gap-2">
                        <Button
                           className="text-xs py-1 w-full"
                           variant="outline"
                           loading={updateRoleIsLoading}
                           onClick={() =>
                              handleUpdateRole({
                                 userId: item.id,
                                 role: item.role === "admin" ? "user" : "admin",
                              })
                           }
                        >
                           {item.role === "admin" ? "Make User" : "Make Admin"}
                        </Button>
                        <Button
                           className="text-xs py-1 w-full"
                           variant="outline"
                           loading={updateStatusIsLoading}
                           onClick={() =>
                              handleUpdateStatus({
                                 userId: item.id,
                                 status:
                                    item.status === "activate"
                                       ? "deactivate"
                                       : "activate",
                              })
                           }
                        >
                           {item.status === "activate"
                              ? "deactivate"
                              : "activate"}
                        </Button>
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
                                    ? "bg-primary text-white"
                                    : "bg-white text-primary"
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

export default UsersTable;
