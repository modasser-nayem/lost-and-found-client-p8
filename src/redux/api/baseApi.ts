import {
   BaseQueryApi,
   BaseQueryFn,
   DefinitionType,
   FetchArgs,
   createApi,
   fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logOutUser } from "../features/auth";
import { jwtDecode } from "jwt-decode";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

const baseQuery = fetchBaseQuery({
   baseUrl: apiUrl,
   prepareHeaders: (headers, { getState }) => {
      // get token in state
      const token = (getState() as RootState).auth.token;
      console.log(token);
      if (token) {
         headers.set("authorization", token);
      }
   },
});

const baseQueryTokenChecking: BaseQueryFn<
   FetchArgs,
   BaseQueryApi,
   DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
   let result = await baseQuery(args, api, extraOptions);

   const currentToken = (api.getState() as RootState).auth.token;

   if (currentToken) {
      const decodeToken = jwtDecode(currentToken);

      const currentDate: number = Math.floor(Date.now() / 1000);
      const expireDate = decodeToken?.exp as number;

      if (expireDate < currentDate) {
         api.dispatch(logOutUser());
         result = await baseQuery(args, api, extraOptions);
      }
   }

   return result;
};

export const baseApi = createApi({
   reducerPath: "api",
   baseQuery: baseQueryTokenChecking,
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
