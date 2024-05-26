import React from "react";

type ButtonProps = {
   children: React.ReactNode;
   variant?: "fill" | "outline";
   className?: string;
   type?: "button" | "reset" | "submit";
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
   disabled?: boolean;
};

const Button = ({
   children,
   variant = "fill",
   className,
   type,
   onClick,
   disabled,
}: ButtonProps) => {
   return (
      <button
         type={type}
         onClick={onClick}
         disabled={disabled}
         className={`${className} ${
            variant === "fill"
               ? "bg-primary text-white border-[2px] border-primary"
               : "text-primary border-primary border-[2px]"
         } px-5 py-2 font-medium rounded-md`}
      >
         {children}
      </button>
   );
};

export default Button;
