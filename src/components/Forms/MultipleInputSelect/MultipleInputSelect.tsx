import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

type MultipleInputSelectProps = {
   label: string;
   values: string[];
   onChange: (values: string[]) => void;
   required?: boolean;
   placeholder?: string;
};

const MultipleInputSelect: React.FC<MultipleInputSelectProps> = ({
   label,
   values,
   onChange,
   required,
   placeholder,
}) => {
   const [inputValue, setInputValue] = useState("");

   const handleAddValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Tab" && inputValue.trim()) {
         onChange([...values, inputValue.trim()]);
         setInputValue("");
      }
   };

   const handleRemoveValue = (index: number) => {
      const newValues = values.filter((_, i) => i !== index);
      onChange(newValues);
   };

   return (
      <div className="mb-2">
         <label className="mb-1 block font-medium">
            <span>{label}</span>
            {required && <span className="text-red-700">*</span>}
         </label>
         <div className="flex flex-wrap items-center gap-2 p-2 border-2 border-gray-500 rounded-md hover:border-primary">
            {values.map((value, index) => (
               <div
                  key={index}
                  className="max-w-[400px] text-wrap flex items-center gap-1 px-2 py-1 bg-gray-200 text-gray-800 rounded-full"
               >
                  <span className="text-wrap">{value}</span>
                  <button
                     type="button"
                     onClick={() => handleRemoveValue(index)}
                     className="text-gray-600 hover:text-gray-900"
                  >
                     <FaTimes size={12} />
                  </button>
               </div>
            ))}
            <input
               type="text"
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               onKeyDown={handleAddValue}
               className="flex-grow p-2 border-none focus:outline-none"
               placeholder={placeholder || "Add a img url and press tab"}
            />
         </div>
      </div>
   );
};

export default MultipleInputSelect;
