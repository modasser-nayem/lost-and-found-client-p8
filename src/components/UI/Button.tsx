import React from "react";

type ButtonProps = {
   children: React.ReactNode;
   variant?: "fill" | "outline";
   className?: string;
   type?: "button" | "reset" | "submit";
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
   disabled?: boolean;
   loading?: boolean;
};

const Button = ({
   children,
   variant = "fill",
   className,
   type,
   onClick,
   disabled,
   loading,
}: ButtonProps) => {
   return (
      <button
         type={type}
         onClick={onClick}
         disabled={disabled || loading}
         className={`${className} ${
            variant === "fill"
               ? "bg-primary hover:scale-105 text-white border-[2px] border-primary"
               : "text-primary hover:bg-primary hover:text-white border-primary border-[2px]"
         } px-5 py-2 font-medium rounded-md transition-all cursor-pointer`}
      >
         {children}
      </button>
   );
};

export default Button;
