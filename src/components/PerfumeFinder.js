import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X } from "lucide-react";

const animal = ["dog", "cat", "cow"];

const perfumeData = [
  {
    id: 1,
    name: "Makiko Midnight Blossom",
    type: "Floral Amber",
    description:
      "A sophisticated fragrance capturing the essence of Kyoto's cherry blossoms under the moonlight, blended with warm amber and a hint of white musk.",
    season: "Spring",
    image: "/makiko-midnight-blossom.jpg",
    price: 120,
    notes: [
      "Cherry Blossom",
      "Bergamot",
      "Jasmine",
      "Amber",
      "White Musk",
      "Sandalwood",
    ],
    intensity: "Medium",
    trending: true,
  },
  {
    id: 2,
    name: "Makiko Sakura Twilight",
    type: "Woody Floral",
    description:
      "A delicate yet bold blend of blooming sakura petals and rich sandalwood, evoking the warmth of an evening breeze in Kyoto's gardens.",
    season: "Autumn",
    image: "/makiko-sakura-twilight.jpg",
    price: 130,
    notes: [
      "Sakura Petals",
      "Pink Pepper",
      "Sandalwood",
      "Tonka Bean",
      "Vanilla",
    ],
    intensity: "Strong",
    trending: true,
  },
  {
    id: 3,
    name: "Makiko Dew Petals",
    type: "Fresh Floral",
    description:
      "A refreshing scent inspired by morning dewdrops on cherry blossoms, featuring a bright citrus opening and a soft floral heart.",
    season: "Summer",
    image: "/makiko-dew-petals.jpg",
    price: 110,
    notes: [
      "Lemon Zest",
      "Cherry Blossom",
      "Lily of the Valley",
      "Green Tea",
      "White Musk",
    ],
    intensity: "Light",
    trending: false,
  },
  {
    id: 4,
    name: "Makiko Imperial Essence",
    type: "Oriental Woody",
    description:
      "A luxurious blend of rare oud wood, golden amber, and Japanese incense, embodying the timeless elegance of Kyoto's imperial heritage.",
    season: "Winter",
    image: "/makiko-imperial-essence.jpg",
    price: 150,
    notes: [
      "Oud Wood",
      "Amber",
      "Japanese Incense",
      "Patchouli",
      "Vanilla",
      "Black Pepper",
    ],
    intensity: "Very Strong",
    trending: true,
  },
];

const navLinks = [
  { name: "Collections", href: "/collections" },
  { name: "Fragrances", href: "/fragrances" },
  { name: "Gifts", href: "/gifts" },
  { name: "About", href: "/about" },
];

const MakikoStore = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-[#f8f6f3] text-center py-2 text-sm">
        Complimentary Shipping on All Orders
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <button onClick={() => setIsMenuOpen(true)} className="lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <div className="hidden lg:flex space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm hover:text-gray-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <Link href="/" className="text-center flex-1">
              <h1 className="text-2xl tracking-widest">MAKIKO</h1>
            </Link>

            <div className="flex items-center space-x-6">
              <button className="hover:text-gray-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="relative hover:text-gray-600 transition-colors">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ type: "tween" }}
              className="fixed inset-0 bg-white z-50 lg:hidden"
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="space-y-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-lg hover:text-gray-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#f8f6f3] mb-16">
        <img
          src="/banner.png"
          alt="Makiko Fragrance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              The Essence of Kyoto
            </h2>
            <button className="bg-white text-black px-8 py-3 mt-4 hover:bg-gray-100 transition-colors">
              Discover the Collection
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-center text-2xl mb-12 font-light">
          Featured Fragrances
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {perfumeData.map((perfume) => (
            <motion.div
              key={perfume.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(perfume)}
            >
              <div className="relative aspect-[3/4] mb-4 bg-[#f8f6f3] overflow-hidden">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
              <div className="text-center px-2">
                <h3 className="text-sm font-medium mb-1">{perfume.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{perfume.type}</p>
                <p className="text-sm mb-3">${perfume.price}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCartCount((prev) => prev + 1);
                  }}
                  className="w-full bg-black text-white py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Collection Categories */}
      <div className="bg-[#f8f6f3] py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl mb-12 font-light">
            Discover by Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {["Floral", "Woody", "Fresh"].map((category) => (
              <div
                key={category}
                className="relative aspect-[4/3] group cursor-pointer overflow-hidden"
              >
                <img
                  src="/api/placeholder/400/300"
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="text-white text-2xl font-light">
                    {category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-[3/4] bg-[#f8f6f3]">
                  <img
                    src="/api/placeholder/300/400"
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {selectedProduct.type}
                  </p>
                  <p className="text-lg mb-4">${selectedProduct.price}</p>
                  <p className="text-sm text-gray-600 mb-6">
                    {selectedProduct.description}
                  </p>
                  <h4 className="text-sm font-medium mb-2">Notes:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProduct.notes.map((note) => (
                      <span
                        key={note}
                        className="text-xs px-3 py-1 bg-[#f8f6f3] rounded-full"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setCartCount((prev) => prev + 1);
                      setSelectedProduct(null);
                    }}
                    className="w-full bg-black text-white py-3 hover:bg-gray-900 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-medium mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">
                  Email: contact@makiko.com
                </li>
                <li className="text-sm text-gray-600">Tel: +1 234 567 890</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4">Customer Care</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">Shipping</li>
                <li className="text-sm text-gray-600">Returns</li>
                <li className="text-sm text-gray-600">FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4">About</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">Our Story</li>
                <li className="text-sm text-gray-600">Sustainability</li>
                <li className="text-sm text-gray-600">Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4">Newsletter</h4>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to receive updates and exclusive offers.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-200 focus:border-gray-400 outline-none transition-colors mb-2"
              />
              <button className="w-full bg-black text-white py-2 hover:bg-gray-900 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 mb-4 md:mb-0">
                © 2024 Makiko. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MakikoStore;
