export type TRegisterUser = {
   username: string;
   email: string;
   password: string;
   confirmPassword: string;
};

export type TLoginUser = {
   emailOrUsername: string;
   password: string;
};
