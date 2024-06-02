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

export type TUpdateProfile = {
   name?: string;
   username?: string;
   email?: string;
   photoURL?: string | null;
   phone?: string | null;
};
