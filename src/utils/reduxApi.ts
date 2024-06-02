import { TQueryParams } from "@/types/redux";

export const makeQueryParams = (queryParams?: TQueryParams[]) => {
   const params = new URLSearchParams();
   if (queryParams && queryParams.length) {
      queryParams.forEach((item: TQueryParams) =>
         params.append(item.name, item.value as string)
      );
   }
   return params;
};
