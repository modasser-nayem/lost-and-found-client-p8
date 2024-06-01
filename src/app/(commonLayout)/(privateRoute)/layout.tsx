"use client";

import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
   const router = useRouter();

   const user = useAppSelector((state) => state.auth.user);

   if (!user) {
      return router.push("/login");
   }

   return <>{children}</>;
};

export default PrivateLayout;
