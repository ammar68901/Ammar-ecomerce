"use client";
import { useEffect, useState } from "react";
import Button from "@/components/button";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import CartIcon from "@/components/ad-to-card-logo";

declare global {
  interface Window {
    Snipcart: any;
  }
}

export default function ProDetail() {
  const [snipcartLoaded, setSnipcartLoaded] = useState(false);
  const searchParams = useSearchParams();

  // Data ko receive karein
  const name = searchParams.get("Cardname") ? decodeURIComponent(searchParams.get("Cardname")!) : "Unknown Product";
  const price = searchParams.get("price") || "N/A";
  const image = searchParams.get("Cardimage") ? decodeURIComponent(searchParams.get("Cardimage")!) : "/placeholder.jpg";

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.Snipcart && window.Snipcart.api) {
        console.log("✅ Snipcart is fully initialized!");
        setSnipcartLoaded(true);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handlerAddtocard = () => {
    if (!snipcartLoaded || !window.Snipcart || !window.Snipcart.api) {
      alert("⏳ Snipcart is still initializing, please wait...");
      return;
    }

    alert("✅ Add to Cart Button Clicked!");

    window.Snipcart.api.cart.items.add({
      id: name,
      name: name,
      price: price,
      image: image,
      url: window.location.origin,
    })
    .then(() => {
      console.log("✅ Product added to cart successfully!");
    })
    .catch((err: any) => {
      console.error("❌ Error adding to cart:", err);
    });
  };

  return (
    <div className="w-[100%] p-5 flex gap-7 max-800:flex-wrap max-800:justify-center">
      {/* Product Image */}
      <div className="w-[40%] h-[300px] border border-gray-800 max-800:w-[90%] flex justify-center items-center overflow-hidden">
        <div className="w-[80%] relative h-[300px]">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      </div>

      {/* Product Details */}
      <div className="leading-10 max-800:leading-7 max-800:flex max-800:flex-col max-800:items-center">
        <div className="flex justify-between items-center">
          <h1 className="text-blue-800 font-bold">{name}</h1>
          <CartIcon />
        </div>
        <p className="text-gray-500">${price}</p>

        <div className="flex gap-3">
          <p className="text-blue-800 font-bold">Color</p>
          <p className="text-[#00ffff] group-hover:text-white font-bold text-[25px]">
            -<span className="text-[#e62e84]">-</span><span className="text-yellow-400">-</span>
          </p>
        </div>

        <p className="text-gray-500 text-[1.9vw] mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil reprehenderit repellendus. Corp.
        </p>

        {/* Button with onClick event */}
        <Button name="Add to cart" onClick={handlerAddtocard} />

        <div className="flex gap-7 mt-7">
          <p className="text-blue-800 font-bold underline">Categories</p>
          <p className="text-blue-800 font-bold underline">Tag</p>
          <p className="text-blue-800 font-bold underline">Share</p>
        </div>
      </div>
    </div>
  );
}
