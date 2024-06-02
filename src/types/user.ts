import { TMyClaimItem } from "./claim";
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
   claimItems: TMyClaimItem[];
};

export type TUserRole = "user" | "admin";
export type TUserStatus = "activate" | "deactivate";

export type TUser = {
   id: string;
   name: string;
   username: string;
   email: string;
   role: TUserRole;
   phone: null | string;
   photoURL: null | string;
   createdAt: string;
   status: TUserStatus;
};
