export type TMyFoundItem = {
   id: string;
   title: string;
   category: string;
   brand: string;
   foundDate: string;
   foundLocation: string;
   createdAt: string;
   updatedAt?: string;
   giveToOwner: boolean;
   _count: {
      claimItems: number;
   };
};

export type TMySingleFoundItem = {
   id: string;
   title: string;
   description: string;
   category: string;
   brand: string;
   images: string[];
   foundDate: string;
   foundLocation: string;
   giveToOwner: boolean;
   createdAt: string;
   updatedAt?: string;
   _count: {
      claimItems: true;
   };
   claimItems: {
      id: string;
      description: string;
      productInvoice: string;
      status: "pending" | "rejected" | "approved";
      statusUpdateAt: null | string;
      createdAt: string;
      user: {
         id: string;
         name: string;
         email: string;
         photoURL: null | string;
         phone: null | string;
      };
   }[];
};

export type TFoundItem = {
   id: string;
   title: string;
   category: string;
   brand: string;
   foundDate: string;
   foundLocation: string;
   createdAt: string;
   user: {
      id: string;
      name: string;
      photoURL?: string;
   };
   _count: {
      claimItems: number;
   };
};

export type TSingleFoundReport = {
   id: string;
   title: string;
   description: string;
   category: string;
   brand: string;
   images: string[];
   foundDate: string;
   foundLocation: string;
   username: null | string;
   email: string;
   phone: null | string;
   createdAt: string;
   _count: {
      claimItems: number;
   };
};
