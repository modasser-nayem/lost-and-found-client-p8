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

export type TUpdateFoundReport = {
   title?: string;
   description?: string;
   category?: string;
   brand?: string;
   foundDate?: string;
   foundLocation?: string;
   images?: string[];
   username?: string;
   email?: string;
   phone?: string;
};
