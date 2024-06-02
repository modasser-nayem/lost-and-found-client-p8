export type TMyLostItem = {
   id: string;
   title: string;
   category: string;
   brand: string;
   lostDate: string;
   lostLocation: string;
   isFound: boolean;
   foundAt?: null | string;
   createdAt: string;
   updatedAt?: string;
};

export type TSingleLostItem = {
   id: string;
   title: string;
   description: string;
   category: string;
   brand: string;
   images: string[];
   lostDate: string;
   lostLocation: string;
   foundAt: string;
   isFound: boolean;
   username: string;
   email: string;
   phone: string;
   createdAt: string;
   updatedAt: string;
};

export type TLostItem = {
   id: string;
   title: string;
   description: string;
   category: string;
   brand: string;
   lostDate: string;
   lostLocation: string;
   createdAt: string;
};

export type TUpdateLostReport = {
   title?: string;
   description?: string;
   category?: string;
   brand?: string;
   lostDate?: string;
   lostLocation?: string;
   images?: string[];
   username?: string;
   email?: string;
   phone?: string;
};
