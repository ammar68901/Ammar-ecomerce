"use client";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function CartIcon() {
  const [cartCount] = useState(0);

  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <ShoppingCart size={20} className="text-gray-500" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      )}
    </div>
  );
}
