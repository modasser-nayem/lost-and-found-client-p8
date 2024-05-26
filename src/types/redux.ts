type ResponseData<T> = {
   success?: boolean;
   message?: string;
   data?: T;
   error?: {
      success: boolean;
      message: string;
      errorDetails: any;
   };
};

export type TRtqQueryResponse<T> = ResponseData<T>;
