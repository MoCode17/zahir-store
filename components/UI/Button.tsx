// components/ui/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "2xs" | "xs" | "sm" | "md" | "lg";
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  isLoading = false,
  className = "",
  disabled,
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-[#54318c] hover:bg-[#432269] text-white border-transparent";
      case "secondary":
        return "bg-gray-200 hover:bg-gray-300 text-gray-900 border-transparent";
      case "outline":
        return "bg-transparent hover:bg-[#fdc500] text-[#fdc500] hover:text-white border-[#fdc500]";
      default:
        return "bg-[#54318c] hover:bg-[#432269] text-white border-transparent";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "2xs":
        return "px-2 py-1 text-xs";
      case "xs":
        return "px-3 py-1 text-2xs";
      case "sm":
        return "px-3 py-1.5 text-sm";
      case "md":
        return "px-4 py-2 text-base";
      case "lg":
        return "px-6 py-3 text-lg";
      default:
        return "px-4 py-2 text-base";
    }
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center
        border font-medium
        transition-colors duration-200 hover:cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : null}
      {children}
    </button>
  );
};
