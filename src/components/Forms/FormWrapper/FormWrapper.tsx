import React from "react";
import {
   FieldValues,
   FormProvider,
   SubmitHandler,
   useForm,
} from "react-hook-form";

type FormConfig = {
   defaultValues?: Record<string, any>;
};

type FormWrapperProps = {
   children: React.ReactNode;
   onSubmit: SubmitHandler<FieldValues>;
   success?: boolean;
} & FormConfig;

const FormWrapper = ({
   children,
   onSubmit,
   success,
   defaultValues,
}: FormWrapperProps) => {
   const formConfig: FormConfig = {};

   if (defaultValues) {
      formConfig.defaultValues = defaultValues;
   }
   const methods = useForm(formConfig);

   const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
      onSubmit(data);
   };

   if (success) {
      methods.reset();
   }

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
