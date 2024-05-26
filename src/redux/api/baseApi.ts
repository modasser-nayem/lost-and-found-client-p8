import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
   reducerPath: "api",
   baseQuery: fetchBaseQuery({
      baseUrl: apiUrl,
      prepareHeaders: (headers, { getState }) => {
         // get token in state
         const token = (getState() as RootState).auth.token;
         console.log(token);
         if (token) {
            headers.set("authorization", token);
         }
      },
   }),
   endpoints: () => ({}),
   tagTypes: ["auth", "users", "lost-items", "found-items", "claim-items"],
});

interface TErrorData {
   message?: string;
   errorDetails?: any;
}

interface TReduxRtqError {
   status: number;
   data: TErrorData;
}

export const isReduxRTQError = (error: any): error is TReduxRtqError => {
   return (
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      "data" in error
   );
};
