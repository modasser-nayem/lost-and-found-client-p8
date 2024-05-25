import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type TDecodeUser = {
   id: string;
   role: string;
   iat: number;
   exp: number;
};

type TAuthState = {
   user: null | TDecodeUser;
   token: null | string;
};

const initialState: TAuthState = {
   user: null,
   token: null,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setUser: (state, action: PayloadAction<TAuthState>) => {
         state.token = action.payload.token;
         state.user = action.payload.user;
      },
      logOutUser: (state) => {
         state.token = null;
         state.user = null;
      },
   },
});

export const authReducer = authSlice.reducer;
export const { setUser, logOutUser } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;
