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

export type TChangePassword = {
   currentPassword: string;
   newPassword: string;
   confirmPassword: string;
};
