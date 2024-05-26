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
