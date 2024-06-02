"use client";

import Dashboard from "@/components/UI/Dashboard/Dashboard";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
   const router = useRouter();

   const user = useAppSelector((state) => state.auth.user);

   if (!user) {
      return router.push("/login");
   }

   if (user.role !== "admin") {
      return router.push("/");
   }

   return <Dashboard>{children}</Dashboard>;
};

export default DashboardLayout;
