import { TInputType } from "@/types/global.types";
import React, { ChangeEvent } from "react";
import { Controller } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";

type InputItemProps = {
   type: TInputType;
   label: string;
   name: string;
   onChange?: ChangeEvent<HTMLInputElement>;
   placeholder?: string;
   className?: string;
   required?: boolean;
   readonly?: boolean;
};

const InputItem = ({
   type,
   label,
   name,
   placeholder,
   className,
   readonly,
   required,
}: InputItemProps) => {
   return (
      <div className="flex flex-col w-full mb-5">
         <label
            className="mb-1 font-medium"
            htmlFor={name}
         >
            <span>{label}</span>
            {required && <span className="text-red-700">*</span>}
         </label>
         <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
               <>
                  <input
                     {...field}
                     id={name}
                     className={`${className} px-3 py-2.5 border-2 ${
                        error?.message ? "border-red-700" : "border-gray-500"
                     } focus:border-primary outline-none rounded-md`}
                     type={type}
                     placeholder={placeholder}
                     readOnly={readonly}
                  />
                  {error?.message && (
                     <p className="text-sm text-red-700 flex items-center gap-1">
                        <RiErrorWarningFill /> {error?.message}
                     </p>
                  )}
               </>
            )}
         />
      </div>
   );
};

export default InputItem;
