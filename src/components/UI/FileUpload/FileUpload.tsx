import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

type FileUploadProps = {
   onFilesChange: (files: File[]) => void;
};

const FileUpload = ({ onFilesChange }: FileUploadProps) => {
   const [files, setFiles] = useState<File[]>([]);

   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newFiles = Array.from(event.target.files || []);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
   };

   const handleRemoveFile = (index: number) => {
      setFiles((prevFiles) => {
         const updatedFiles = prevFiles.filter((_, i) => i !== index);
         onFilesChange(updatedFiles);
         return updatedFiles;
      });
   };

   return (
      <div className="container mx-auto">
         <label className="block mb-2 font-semibold text-gray-700">
            Upload Files
         </label>
         <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="px-3 py-1.5 border-2 border-gray-500 focus:border-primary outline-none rounded-md"
         />
         <div className="mt-4 grid grid-cols-3 gap-4">
            {files.map((file, index) => (
               <div
                  key={index}
                  className="flex justify-center"
               >
                  <div className="relative">
                     <Image
                        src={URL.createObjectURL(file)}
                        alt={`file-preview-${index}`}
                        className="object-cover border border-gray-300 rounded-lg"
                        width={96}
                        height={96}
                     />
                     <button
                        onClick={() => handleRemoveFile(index)}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                     >
                        x
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default FileUpload;
