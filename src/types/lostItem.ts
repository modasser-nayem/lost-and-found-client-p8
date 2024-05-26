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
