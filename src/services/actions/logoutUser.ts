import { authKey } from "@/constants/auth";
import { deleteCookies } from "./deleteCookies";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const logoutUser = (router: AppRouterInstance) => {
   localStorage.removeItem(authKey);
   deleteCookies([authKey, "refresh_token"]);
   router.push("/");
   router.refresh();
};
