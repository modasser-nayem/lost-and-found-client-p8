export type TClaimStatus = "pending" | "rejected" | "approved";

export type TClaimRequest = {
   id: string;
   description: string;
   status: TClaimStatus;
   statusUpdateAt: null | string;
   createdAt: string;
   user: {
      id: string;
      name: string;
      email: string;
      photoURL: null | string;
      phone: null | string;
   };
};

export type TSingleClaimRequest = {
   id: string;
   description: string;
   productInvoice: string;
   images: string[];
   status: TClaimStatus;
   statusUpdateAt: null | string;
   createdAt: string;
   updatedAt: null | string;
   user: {
      id: string;
      name: string;
      email: string;
      phone: null | string;
      photoURL: null | string;
   };
   item: {
      id: string;
      title: string;
   };
};

export type TMyClaimItem = {
   id: string;
   description: string;
   createdAt: string;
   status: TClaimStatus;
   statusUpdateAt?: string;
   item: {
      id: string;
      title: string;
      foundDate: string;
      foundLocation: string;
   };
};

export type TUpdateClaimRequest = {
   description?: string;
   productInvoice?: string;
   images?: string[];
};
