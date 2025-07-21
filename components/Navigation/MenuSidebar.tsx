// components/navigation/MenuSidebar.tsx
import React from "react";
import Link from "next/link";
import { Modal } from "../UI/Modal";
import { Home, Package, Info, Mail } from "lucide-react";

interface MenuSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: <Home size={20} /> },
  { href: "/collections", label: "Collections", icon: <Package size={20} /> },
  { href: "/about", label: "About", icon: <Info size={20} /> },
  { href: "/contact", label: "Contact", icon: <Mail size={20} /> },
];

export const MenuSidebar: React.FC<MenuSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} position="right" width="w-80">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Menu</h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-6">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#54318c] transition-colors duration-200"
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2025 Zahir Store</p>
            <p>Premium Men's Watches</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
