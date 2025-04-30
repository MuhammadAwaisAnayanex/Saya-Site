'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import "@/app/styles/Header.css"
import { usePathname } from 'next/navigation';
export default function Header() {
  const pathname = usePathname(); // ✅ Get current path
  const isHomePage = pathname === '/'; // ✅ Check if it's home

  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null); 
  const [isSummerSaleOpen, setIsSummerSaleOpen] = useState(false);
  const [isSummerOpen, setIsSummerOpen] = useState(false);
  const [isSummerCollectionOpen, setIsSummerCollectionOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 px-4 py-3 flex justify-between items-center transition-colors duration-300 ${
      isHomePage ? 'bg-transparent text-white' : 'bg-white text-black'
    }`}>
      {/* Left: Logo & Hamburger */}
      <div className="flex items-center space-x-4">
        <button onClick={() => setIsLeftMenuOpen(!isLeftMenuOpen)} className='cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="currentColor"><rect width="30" height="1.5"></rect><rect y="7" width="20" height="1.5"></rect><rect y="14" width="30" height="1.5"></rect></svg>
        </button>
        <span className="text-xl font-bold">
            <Link href={"/"} className='site-logo'>SAYA</Link>
        </span>
      </div>

      {/* Right: Search Button */}
      <div className="flex items-center space-x-4 right-side-menu">
        <button onClick={() => setIsSearchOpen(!isSearchOpen)} className='cursor-pointer'>
          search
        </button>
        <li><a href="#">accounts</a></li>
        <li><a href="#">wishlist</a></li>
        <li><a href="#">cart</a></li>
      </div>

      {/* Left Side Menu Drawer */}
      <div
        className={`fixed left-side-menu-drawer top-0 left-0 h-full w-64 bg-white text-black shadow-lg transition-transform duration-300 z-50 ${
          isLeftMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-gray-300 flex justify-between items-center">
        <button onClick={() => setIsLeftMenuOpen(false)} className='cursor-pointer'>X</button>
        </div>

        {/* Top Links */}
        <nav className="p-4">
          <ul className="space-y-3 ">
            <li><a href="#" className="hover:underline">Login</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Stores</a></li>
          </ul>
        </nav>

{/* Tabs */}
<div className="p-4 border-t border-gray-300 tabs">
  <h3 className="text-lg font-semibold mb-2">Categories</h3>
  <div className="flex tabs-btn">
    <button
      className={` ${activeCategory === 'Women' ? 'active' : null}`}
      onClick={() => setActiveCategory('Women')}
    >
      Women
    </button>
    <button
      className={` ${activeCategory === 'Men' ? 'active' : null}`}
      onClick={() => setActiveCategory('Men')}
    >
      Men
    </button>
    <button
      className={` ${activeCategory === 'Children' ? 'active' : null}`}
      onClick={() => setActiveCategory('Children')}
    >
      Children
    </button>
  </div>

  {/* Conditional Content */}

  <div className="mt-4">
  {activeCategory === 'Women' && (
    <div className="space-y-2">
      {/* Summer Sale Accordion */}
      <div className='accordion'>
        <button
          className="w-full text-left flex  justify-between"
          onClick={() => setIsSummerSaleOpen(!isSummerSaleOpen)}
        >
         <span>Summer Sale</span> <span>{isSummerSaleOpen ? '-' : '+'}</span> 
        </button>
        
        {isSummerSaleOpen && (
          <div className="ml-4 mt-2">
            {/* Summer Accordion */}
            <button
              className="w-full text-left  flex justify-between"
              onClick={() => setIsSummerOpen(!isSummerOpen)}
            >
              <span>Summer</span> <span>{isSummerOpen ? '-' : '+'}</span>
            </button>
            {isSummerOpen && (
              <div className=" mt-2">
                {/* Summer Collection Accordion */}
                <button
                  className="w-full text-left  flex justify-between"
                  onClick={() => setIsSummerCollectionOpen(!isSummerCollectionOpen)}
                >
                 <span>Summer Collection</span> <span>{isSummerCollectionOpen ? '-' : '+'}</span>
                </button>
                {isSummerCollectionOpen && (
                  <ul className="block" style={{display:"block"}}>
                    <li>Kurti Collection</li>
                    <li>Two Piece</li>
                    <li>Unstitched Lawn</li>
                  </ul>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )}

  {activeCategory === 'Men' && <p>Showing Men’s Collection...</p>}
  {activeCategory === 'Children' && <p>Showing Children’s Collection...</p>}
</div>


</div>

      </div>

{/* Right Side Search Drawer */}
<div
  className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg transition-transform duration-300 z-50 ${
    isSearchOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  <div className="p-4 border-b border-gray-300 flex justify-between items-center">
    <span className="font-semibold">Search</span>
    <button onClick={() => setIsSearchOpen(false)} className="cursor-pointer">X</button>
  </div>
  <div className="p-4">
    <input
      type="text"
      placeholder="Search..."
      className="w-full px-3 py-2 border border-gray-300 rounded"
    />
  </div>
</div>

    </header>
  );
}
