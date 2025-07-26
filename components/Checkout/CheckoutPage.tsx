// components/checkout/CheckoutPage.tsx
"use client";
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Button } from "../UI/Button";
import {
  CreditCard,
  Truck,
  Shield,
  Check,
  MapPin,
  Phone,
  Mail,
  User,
  Lock,
  AlertCircle,
} from "lucide-react";
import Head from "next/head";

interface FormData {
  // Contact Information
  email: string;
  phone: string;

  // Shipping Address
  firstName: string;
  lastName: string;
  company?: string;
  address: string;
  apartment?: string;
  city: string;
  country: string;
  postalCode: string;

  // Billing (same as shipping toggle)
  billingSameAsShipping: boolean;
  billingAddress?: {
    firstName: string;
    lastName: string;
    company?: string;
    address: string;
    apartment?: string;
    city: string;
    country: string;
    postalCode: string;
  };

  // Payment
  paymentMethod: "card" | "paypal" | "cod";
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  nameOnCard?: string;
}

interface FormErrors {
  [key: string]: string;
}

export const CheckoutPage: React.FC = () => {
  const { items, subtotal, tax, shipping, total, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    country: "US",
    postalCode: "",
    billingSameAsShipping: true,
    paymentMethod: "card",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const steps = [
    { id: 1, title: "Contact Information", icon: <Mail size={20} /> },
    { id: 2, title: "Shipping Address", icon: <MapPin size={20} /> },
    { id: 3, title: "Payment Method", icon: <CreditCard size={20} /> },
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    switch (step) {
      case 1:
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
          newErrors.email = "Invalid email format";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        break;

      case 2:
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.city) newErrors.city = "City is required";
        if (!formData.postalCode)
          newErrors.postalCode = "Postal code is required";
        break;

      case 3:
        if (formData.paymentMethod === "card") {
          if (!formData.cardNumber)
            newErrors.cardNumber = "Card number is required";
          if (!formData.expiryDate)
            newErrors.expiryDate = "Expiry date is required";
          if (!formData.cvv) newErrors.cvv = "CVV is required";
          if (!formData.nameOnCard)
            newErrors.nameOnCard = "Name on card is required";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setIsProcessing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase! You will receive a confirmation email
              shortly.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <p className="text-sm text-gray-600 mb-2">Order Number</p>
              <p className="text-2xl font-bold text-[#3d0066]">
                #ZH{Date.now().toString().slice(-6)}
              </p>
            </div>
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-[#fdc500] hover:bg-[#fdc500]/90 text-gray-900 font-bold"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <AlertCircle size={64} className="text-[#fdc500] mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Cart is Empty
            </h1>
            <p className="text-gray-600 mb-6">
              You can't checkout because your shopping cart is empty.
            </p>
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-[#fdc500] hover:bg-[#fdc500]/90 text-gray-900 font-bold"
            >
              Start Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Checkout - Zahir Store Men's Luxury Watches</title>
        <meta
          name="description"
          content="Complete your luxury watch purchase securely at Zahir Store"
        />
        <meta name="robots" content="noindex" />
      </Head>

      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200 ${
                        currentStep >= step.id
                          ? "bg-[#fdc500] text-gray-900"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {currentStep > step.id ? <Check size={16} /> : step.icon}
                    </div>
                    <div className="ml-3 mr-6">
                      <p className="text-sm font-medium text-gray-900">
                        {step.title}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-0.5 mx-4 transition-all duration-200 ${
                        currentStep > step.id ? "bg-[#fdc500]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Mail className="text-[#fdc500]" size={24} />
                      <h2 className="text-2xl font-bold text-gray-900">
                        Contact Information
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#fdc500] focus:border-transparent transition-all ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#fdc500] focus:border-transparent transition-all ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Shipping Address */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <MapPin className="text-[#fdc500]" size={24} />
                      <h2 className="text-2xl font-bold text-gray-900">
                        Shipping Address
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#fdc500] focus:border-transparent transition-all ${
                            errors.firstName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#fdc500] focus:border-transparent transition-all ${
                            errors.lastName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.lastName}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fdc500] focus:border-transparent transition-all"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Address *
                        </label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) =>
                            handleInputChange("address", e.target.value)
                          }
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#fdc500] focus:border-transparent transition-all ${
                            errors.address
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.address}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Apartment, Suite, etc. (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.apartment}
                          onChange={(e) =>
                            handleInputChange("apartment", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fdc500] focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) =>
                            handleInputChange("city", e.target.value)
                          }
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#fdc500] focus:border-transparent transition-all ${
                            errors.city ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.city}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country *
                        </label>
                        <select
                          value={formData.country}
                          onChange={(e) =>
                            handleInputChange("country", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fdc500] focus:border-transparent transition-all"
                        >
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="SA">Saudi Arabia</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Postal Code *
                        </label>
                        <input
                          type="text"
                          value={formData.postalCode}
                          onChange={(e) =>
                            handleInputChange("postalCode", e.target.value)
                          }
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#fdc500] focus:border-transparent transition-all ${
                            errors.postalCode
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.postalCode && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.postalCode}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment Method */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <CreditCard className="text-[#fdc500]" size={24} />
                      <h2 className="text-2xl font-bold text-gray-900">
                        Payment Method
                      </h2>
                    </div>

                    {/* Payment Methods */}
                    <div className="space-y-4">
                      <div
                        className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                          formData.paymentMethod === "card"
                            ? "border-[#fdc500] bg-[#fdc500]/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() =>
                          handleInputChange("paymentMethod", "card")
                        }
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              formData.paymentMethod === "card"
                                ? "border-[#fdc500]"
                                : "border-gray-300"
                            }`}
                          >
                            {formData.paymentMethod === "card" && (
                              <div className="w-2 h-2 bg-[#fdc500] rounded-full"></div>
                            )}
                          </div>
                          <CreditCard size={20} />
                          <span className="font-medium">
                            Credit / Debit Card
                          </span>
                        </div>
                      </div>

                      <div
                        className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                          formData.paymentMethod === "cod"
                            ? "border-[#fdc500] bg-[#fdc500]/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() =>
                          handleInputChange("paymentMethod", "cod")
                        }
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              formData.paymentMethod === "cod"
                                ? "border-[#fdc500]"
                                : "border-gray-300"
                            }`}
                          >
                            {formData.paymentMethod === "cod" && (
                              <div className="w-2 h-2 bg-[#fdc500] rounded-full"></div>
                            )}
                          </div>
                          <Truck size={20} />
                          <span className="font-medium">Cash on Delivery</span>
                        </div>
                      </div>
                    </div>

                    {/* Credit Card Details */}
                    {formData.paymentMethod === "card" && (
                      <div className="mt-6 space-y-4 bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Lock size={16} className="text-[#3d0066]" />
                          <span className="text-sm text-gray-600">
                            Your payment information is secure and encrypted
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Card Number *
                            </label>
                            <input
                              type="text"
                              value={formData.cardNumber}
                              onChange={(e) =>
                                handleInputChange("cardNumber", e.target.value)
                              }
                              placeholder="1234 5678 9012 3456"
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#fdc500] focus:border-transparent transition-all ${
                                errors.cardNumber
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                            />
                            {errors.cardNumber && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.cardNumber}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Expiry Date *
                            </label>
                            <input
                              type="text"
                              value={formData.expiryDate}
                              onChange={(e) =>
                                handleInputChange("expiryDate", e.target.value)
                              }
                              placeholder="MM/YY"
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#fdc500] focus:border-transparent transition-all ${
                                errors.expiryDate
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                            />
                            {errors.expiryDate && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.expiryDate}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              CVV *
                            </label>
                            <input
                              type="text"
                              value={formData.cvv}
                              onChange={(e) =>
                                handleInputChange("cvv", e.target.value)
                              }
                              placeholder="123"
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#fdc500] focus:border-transparent transition-all ${
                                errors.cvv
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                            />
                            {errors.cvv && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.cvv}
                              </p>
                            )}
                          </div>

                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Name on Card *
                            </label>
                            <input
                              type="text"
                              value={formData.nameOnCard}
                              onChange={(e) =>
                                handleInputChange("nameOnCard", e.target.value)
                              }
                              placeholder="As it appears on your card"
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#fdc500] focus:border-transparent transition-all ${
                                errors.nameOnCard
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                            />
                            {errors.nameOnCard && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.nameOnCard}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t">
                  {currentStep > 1 ? (
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}

                  {currentStep < 3 ? (
                    <Button
                      onClick={handleNext}
                      className="bg-[#fdc500] hover:bg-[#fdc500]/90 text-gray-900 font-bold"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={isProcessing}
                      className="bg-[#3d0066] hover:bg-[#3d0066]/90 text-white font-bold min-w-[120px]"
                      isLoading={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Complete Order"}
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h3>

                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.variantId || "default"}`}
                      className="flex gap-4"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <span className="text-xs text-gray-500">IMG</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {item.name}
                        </h4>
                        {item.variant && (
                          <p className="text-xs text-gray-500">
                            {item.variant}
                          </p>
                        )}
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-500">
                            Qty: {item.quantity}
                          </span>
                          <span className="text-sm font-bold text-[#3d0066]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Totals */}
                <div className="space-y-3 border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
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
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax:</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t pt-3">
                    <span>Total:</span>
                    <span className="text-[#3d0066]">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Shield className="text-[#fdc500]" size={16} />
                    <span>Secure & encrypted payment</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Truck className="text-[#fdc500]" size={16} />
                    <span>Fast shipping & tracking</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <User className="text-[#fdc500]" size={16} />
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
