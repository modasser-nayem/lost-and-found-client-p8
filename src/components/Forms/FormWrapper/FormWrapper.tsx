import React, { useEffect } from "react";
import {
   FieldValues,
   FormProvider,
   SubmitHandler,
   useForm,
} from "react-hook-form";

type FormConfig = {
   defaultValues?: Record<string, any>;
};

type TErrors = {
   field: string;
   message: string;
};

type FormWrapperProps = {
   children: React.ReactNode;
   onSubmit: SubmitHandler<FieldValues>;
   success?: boolean;
   errors?: TErrors[];
} & FormConfig;

const FormWrapper = ({
   children,
   onSubmit,
   success,
   defaultValues,
   errors,
}: FormWrapperProps) => {
   const formConfig: FormConfig = {};

   if (defaultValues) {
      formConfig.defaultValues = defaultValues;
   }
   const methods = useForm(formConfig);

   const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
      onSubmit(data);
   };

   useEffect(() => {
      if (success) {
         methods.reset();
      }
   }, [success, methods]);

   useEffect(() => {
      if (errors && errors.length) {
         errors.forEach((error) =>
            methods.setError(error.field, {
               type: "manual",
               message: error.message,
            })
         );
      }
   }, [errors, methods]);

   return (
      <>
         <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
               {children}
            </form>
         </FormProvider>
      </>
   );
};

export default FormWrapper;
