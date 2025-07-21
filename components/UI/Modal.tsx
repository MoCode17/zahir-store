// components/ui/Modal.tsx
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: "left" | "right" | "center";
  width?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  position = "center",
  width = "w-96",
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Trigger animation after DOM update
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      // Remove from DOM after animation completes
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const getPositionClasses = () => {
    switch (position) {
      case "left":
        return "justify-start";
      case "right":
        return "justify-end";
      case "center":
      default:
        return "justify-center items-center";
    }
  };

  const getSlideClasses = () => {
    switch (position) {
      case "left":
        return isAnimating ? "translate-x-0" : "-translate-x-full";
      case "right":
        return isAnimating ? "translate-x-0" : "translate-x-full";
      case "center":
      default:
        return isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0";
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex ${getPositionClasses()}`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isAnimating ? "opacity-75" : "opacity-0"
        }`}
      />

      {/* Modal Content */}
      <div
        className={`relative bg-white h-full ${width} transform transition-all duration-300 ease-in-out ${getSlideClasses()}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 z-10"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {children}
      </div>
    </div>
  );
};
