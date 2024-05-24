import { authKey } from "@/constants/auth";
import { decodedToken } from "@/utils/jwt";
import {
   getFromLocalStorage,
   removeFromLocalStorage,
   setToLocalStorage,
} from "@/utils/localStorage";

export const storeUserInfo = ({ access_token }: { access_token: string }) => {
   setToLocalStorage(authKey, access_token);
};

export const getUserInfo = () => {
   const authToken = getFromLocalStorage(authKey);

   if (authToken) {
      const decodedData: any = decodedToken(authToken);
      return {
         ...decodedData,
         role: decodedData?.role?.toLowerCase(),
      };
   } else {
      return "";
   }
};

export const isLoggedIn = () => {
   const authToken = getFromLocalStorage(authKey);
   if (authToken) {
      return !!authToken;
   }
};

export const removeUser = () => {
   return removeFromLocalStorage(authKey);
};
