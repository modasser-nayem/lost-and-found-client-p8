import { TMyFoundItem } from "./foundItem";
import { TMyLostItem } from "./lostItem";

export type TMyProfile = {
   id: string;
   name: string;
   username: string;
   email: string;
   role: string;
   phone?: string;
   photoURL?: string;
   passwordChangeAt?: string;
   createdAt: string;
   updatedAt?: string;
   status: "activate" | "deactivate";
   _count: {
      lostItems: number;
      foundItems: number;
      claimItems: number;
   };
   lostItems: TMyLostItem[];
   foundItems: TMyFoundItem[];
   claimItems: TClaimItem[];
};

type TClaimItem = {
   id: string;
   createdAt: string;
   status: "pending" | "approved" | "rejected";
   statusUpdateAt: boolean;
   item: {
      id: string;
      title: string;
      foundDate: string;
      foundLocation: string;
   };
};
