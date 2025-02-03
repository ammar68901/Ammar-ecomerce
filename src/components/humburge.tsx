"use client";
import Link from "next/link";
import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Button */}
      <div className="hidden max-800:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col space-y-1.5 w-8 h-8 justify-center items-center"
        >
          <span className="block w-full h-1 bg-gray-800 rounded"></span>
          <span className="block w-full h-1 bg-gray-800 rounded"></span>
          <span className="block w-full h-1 bg-gray-800 rounded"></span>
        </button>
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="p-4 space-y-4">
          <Link href="/" className="block text-gray-800 font-semibold">Home</Link>
          <Link href="/Login" className="block text-gray-800 font-semibold">Login</Link>
          <Link href="/Products" className="block text-gray-800 font-semibold">All Product</Link>
          <Link href="/Blog" className="block text-gray-800 font-semibold">Blog</Link>
          <Link href="/About" className="block text-gray-800 font-semibold">About</Link>
          <Link href="/Contact" className="block text-gray-800 font-semibold">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
