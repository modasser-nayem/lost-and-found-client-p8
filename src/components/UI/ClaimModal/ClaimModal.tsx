"use client";

import Button from "../Button";
import FormWrapper from "@/components/Forms/FormWrapper/FormWrapper";
import InputItem from "@/components/Forms/InputItem/InputItem";
import InputTextArea from "@/components/Forms/InputTextArea/InputTextArea";
import MultipleInputSelect from "@/components/Forms/MultipleInputSelect/MultipleInputSelect";
import { FieldValues } from "react-hook-form";

type ClaimModalProps = {
   isOpen: boolean;
   onSubmit: (values: FieldValues) => void;
   onClose: () => void;
   item: {
      id: string;
      title: string;
   };
   errors?: any;
   imgValues: string[];
   setImgValues: any;
};

const ClaimModal = ({
   isOpen,
   onClose,
   item,
   onSubmit,
   errors,
   imgValues,
   setImgValues,
}: ClaimModalProps) => {
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
         <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-2xl font-semibold mb-4">Claim Found Item</h2>
            <p className="mb-4">You are claiming the: {item.title}</p>
            <FormWrapper
               onSubmit={onSubmit}
               errors={errors}
            >
               <div className="flex justify-between gap-10">
                  <div className="flex-1">
                     <InputTextArea
                        label="Description"
                        name="description"
                        placeholder="Enter item description"
                        required={true}
                     />
                     <InputItem
                        type="text"
                        label="Product Invoice"
                        name="productInvoice"
                        placeholder="Enter your product invoice url"
                        required={true}
                     />
                     <MultipleInputSelect
                        label="Image URL"
                        values={imgValues}
                        onChange={setImgValues}
                        placeholder="Add a img url and press Enter"
                     />
                  </div>
               </div>
               <div className="flex justify-end">
                  <button
                     type="button"
                     onClick={onClose}
                     className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                  >
                     Cancel
                  </button>
                  <Button
                     type="submit"
                     className=""
                  >
                     Submit Claim
                  </Button>
               </div>
            </FormWrapper>
         </div>
      </div>
   );
};

export default ClaimModal;
