"use client";

import { useGetMyClaimItemsQuery } from "@/redux/api/claimApi";
import Link from "next/link";
import Button from "../../Button";
import MyClaimItemCard from "../../MyClaimItemCard/MyClaimItemCard";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";

const ProfileClaimItems = () => {
   const queryArguments = {
      query: [
         {
            name: "limit",
            value: 4,
         },
      ],
   };

   const { data, isLoading, isError } = useGetMyClaimItemsQuery(queryArguments);

   const claimItems = data?.data;

   return (
      <div className="pt-8 pb-10">
         <h2 className="text-2xl text-center font-semibold border-primary px-6 py-1">
            <span className="border-b-4 border-primary p-2">
               My Claim Items
            </span>
         </h2>
         {isLoading ? (
            <LoadingSkeleton />
         ) : isError ? (
            <NetworkError />
         ) : (
            claimItems && (
               <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10">
                     {claimItems.map((item) => (
                        <MyClaimItemCard
                           key={item.id}
                           item={item}
                        />
                     ))}
                  </div>

                  {claimItems.length > 3 && (
                     <div className="text-center">
                        <Link href="my-claim-reports">
                           <Button>View All</Button>
                        </Link>
                     </div>
                  )}
               </>
            )
         )}
      </div>
   );
};

export default ProfileClaimItems;
