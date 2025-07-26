// components/navigation/CartSidebar.tsx
"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { Modal } from "../UI/Modal";
import { Button } from "../UI/Button";
import { Minus, Plus, Trash2, ShoppingBag, Truck } from "lucide-react";

export const CartSidebar: React.FC = () => {
  const {
    isOpen,
    closeCart,
    items,
    itemCount,
    subtotal,
    tax,
    shipping,
    total,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const EmptyCart = () => (
    <div className="flex flex-col items-center justify-center flex-1 px-6">
      <div className="text-gray-400 mb-6">
        <ShoppingBag size={64} strokeWidth={1} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Your cart is empty
      </h3>
      <p className="text-gray-500 text-center mb-6 leading-relaxed">
        Start shopping to add items to your cart
      </p>
      <Button
        onClick={closeCart}
        className="bg-[#fdc500] hover:bg-[#fdc500]/90 text-gray-900 font-bold"
      >
        Continue Shopping
      </Button>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={closeCart} position="right" width="w-96">
      <div className="flex flex-col h-full bg-white">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-[#fdc500]/10 to-[#3d0066]/10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
            <div className="bg-[#fdc500] text-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              {itemCount}
            </div>
          </div>
        </div>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variantId || "default"}`}
                  className="bg-gray-50 rounded-xl p-4 transition-all duration-200 hover:shadow-md"
                >
                  {/* Product Image */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-500">IMG</span>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-gray-900 truncate mb-1">
                        {item.name}
                      </h4>
                      {item.variant && (
                        <p className="text-xs text-[#3d0066] font-medium">
                          {item.variant}
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex flex-col">
                          <span className="text-lg font-bold text-[#3d0066]">
                            ${item.price.toFixed(2)}
                          </span>
                          {item.originalPrice &&
                            item.originalPrice > item.price && (
                              <span className="text-xs text-gray-500 line-through">
                                ${item.originalPrice.toFixed(2)}
                              </span>
                            )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center bg-white rounded-lg border">
                          <button
                            onClick={() =>
                              updateQuantity(
                                `${item.id}-${item.variantId || "default"}`,
                                item.quantity - 1
                              )
                            }
                            className="p-1.5 hover:bg-gray-100 rounded-l-lg transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-bold w-10 text-center py-1.5 border-x">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                `${item.id}-${item.variantId || "default"}`,
                                item.quantity + 1
                              )
                            }
                            className="p-1.5 hover:bg-gray-100 rounded-r-lg transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() =>
                          removeItem(
                            `${item.id}-${item.variantId || "default"}`
                          )
                        }
                        className="mt-2 flex items-center gap-1 text-red-600 hover:text-red-800 text-xs font-medium transition-colors"
                      >
                        <Trash2 size={12} />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="border-t border-gray-200 bg-white">
              {/* Free Shipping Progress */}
              {subtotal < 500 && (
                <div className="p-4 bg-gradient-to-r from-[#fdc500]/10 to-[#3d0066]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Truck size={16} className="text-[#3d0066]" />
                    <span className="text-sm font-medium text-gray-900">
                      Add ${(500 - subtotal).toFixed(2)} for free shipping
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#fdc500] to-[#3d0066] h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.min((subtotal / 500) * 100, 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax:</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-green-600 font-bold">Free!</span>
                      ) : (
                        `${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t pt-3">
                    <span>Total:</span>
                    <span className="text-[#3d0066]">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/checkout" onClick={closeCart}>
                    <Button className="w-full bg-[#fdc500] hover:bg-[#fdc500]/90 text-gray-900 font-bold py-3 text-lg">
                      Checkout
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={closeCart}
                    className="w-full border-[#3d0066] text-[#3d0066] hover:bg-[#3d0066] hover:text-white font-medium"
                  >
                    Continue Shopping
                  </Button>
                </div>

                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="w-full text-center text-sm text-red-600 hover:text-red-800 transition-colors mt-4 py-2"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
