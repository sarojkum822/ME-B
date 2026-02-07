"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, User, LogIn, UserPlus, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { cartCount } = useCart();
  const { user, isLoggedIn, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
        setIsAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-white dark:bg-stone-900 shadow-md py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center whitespace-nowrap">
        {/* Brand */}
        <Link href="/" className="text-2xl md:text-3xl font-brand font-bold text-lava-orange tracking-tight flex items-center gap-2">
          <span className="bg-sun-yellow p-1 rounded-lg">🍿</span>
          <span className="hidden sm:inline">Mithila Essence</span>
          <span className="sm:hidden">ME</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {["Why Makhana", "Flavor Guide", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Shop All" ? "/shop" : `/${item.toLowerCase().replace(" ", "-")}`}
              className="font-brand font-medium text-stone-700 dark:text-stone-300 hover:text-berry-pink transition-colors text-lg"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Account Dropdown - Desktop */}
          <div className="hidden md:block relative" ref={accountRef}>
            <button
              onClick={() => setIsAccountOpen(!isAccountOpen)}
              className={`flex items-center gap-1 px-3 py-2 rounded-full transition-all ${isAccountOpen
                ? "bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white"
                : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-50 dark:hover:bg-stone-800"
                }`}
            >
              <User size={20} />
              <span className="font-brand font-medium text-sm">{isLoggedIn ? `Hi, ${user?.name.split(' ')[0]}` : "Account"}</span>
              <ChevronDown size={16} className={`transition-transform ${isAccountOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isAccountOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-stone-900 rounded-2xl shadow-xl border border-stone-100 dark:border-stone-800 overflow-hidden animate-reveal">
                <div className="p-4 border-b border-stone-100 dark:border-stone-800">
                  <p className="text-stone-500 text-sm">Welcome!</p>
                  <p className="font-brand font-bold text-stone-900 dark:text-white truncate">
                    {isLoggedIn ? user?.email : "Sign in to your account"}
                  </p>
                </div>
                <div className="p-2">
                  {!isLoggedIn ? (
                    <>
                      <Link
                        href="/login"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-mint-teal/10 text-stone-700 dark:text-stone-300 hover:text-mint-teal transition-colors"
                        onClick={() => setIsAccountOpen(false)}
                      >
                        <LogIn size={18} />
                        <span className="font-medium">Login</span>
                      </Link>
                      <Link
                        href="/signup"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-lava-orange/10 text-stone-700 dark:text-stone-300 hover:text-lava-orange transition-colors"
                        onClick={() => setIsAccountOpen(false)}
                      >
                        <UserPlus size={18} />
                        <span className="font-medium">Sign Up</span>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/account"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition-colors"
                        onClick={() => setIsAccountOpen(false)}
                      >
                        <User size={18} />
                        <span className="font-medium">My Account</span>
                      </Link>
                      <button
                        onClick={() => { logout(); setIsAccountOpen(false); }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 text-stone-700 dark:text-stone-300 hover:text-red-500 transition-colors text-left"
                      >
                        <LogIn size={18} className="rotate-180" />
                        <span className="font-medium">Sign Out</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-stone-700 dark:text-stone-300 hover:text-lava-orange transition-colors rounded-full hover:bg-stone-100 dark:hover:bg-stone-800"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
          </button>

          {/* Wishlist Icon */}
          <Link
            href="/wishlist"
            className="relative p-2 text-stone-700 dark:text-stone-300 hover:text-berry-pink transition-colors"
            title="Wishlist"
          >
            <Heart size={22} />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-berry-pink text-white text-[10px] flex items-center justify-center rounded-full font-bold">
              3
            </span>
          </Link>

          {/* Cart Icon */}
          <Link
            href="/cart"
            className="relative p-2 text-stone-700 dark:text-stone-300 hover:text-lava-orange transition-colors"
            title="Cart"
          >
            <ShoppingCart size={22} />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-lava-orange text-white text-[10px] flex items-center justify-center rounded-full font-bold">
              {cartCount}
            </span>
          </Link>

          {/* Shop Now Button - Desktop */}
          <Link
            href="/shop"
            className="hidden md:block px-6 py-2 bg-mint-teal text-stone-900 font-brand font-bold rounded-full hover:scale-105 transition-transform ml-2"
          >
            Shop Now
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-stone-900 dark:text-white ml-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-1 w-full bg-lava-orange rounded transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-1 w-full bg-lava-orange rounded transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-1 w-full bg-lava-orange rounded transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-screen py-8 opacity-100" : "max-h-0 py-0 opacity-0"}`}>
        <div className="flex flex-col items-center space-y-6 px-6">
          {/* Account Section - Mobile */}
          <div className="w-full bg-stone-50 dark:bg-stone-800 rounded-2xl p-4 mb-2">
            <p className="text-center text-stone-500 text-sm mb-3">
              {isLoggedIn ? `Welcome, ${user?.name}!` : "Welcome to Mithila Essence"}
            </p>
            <div className="flex gap-3">
              {!isLoggedIn ? (
                <>
                  <Link
                    href="/login"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-mint-teal text-stone-900 font-brand font-bold rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogIn size={18} />
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-lava-orange text-white font-brand font-bold rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <UserPlus size={18} />
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/account"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white dark:bg-stone-700 text-stone-900 dark:text-white font-brand font-bold rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User size={18} />
                    Account
                  </Link>
                  <button
                    onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-50 text-red-500 font-brand font-bold rounded-xl"
                  >
                    <LogIn size={18} className="rotate-180" />
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Nav Links */}
          {["Why Makhana", "Flavor Guide", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Shop All" ? "/shop" : `/${item.toLowerCase().replace(" ", "-")}`}
              className="font-brand font-bold text-2xl text-stone-800 dark:text-white hover:text-lava-orange dark:hover:text-lava-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          {/* Quick Links */}
          <div className="w-full flex gap-4 pt-4 border-t border-stone-200 dark:border-stone-800">
            <Link
              href="/wishlist"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-berry-pink/10 text-berry-pink font-brand font-bold rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Heart size={20} />
              Wishlist
            </Link>
            <Link
              href="/cart"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-lava-orange/10 text-lava-orange font-brand font-bold rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ShoppingCart size={20} />
              Cart
            </Link>
          </div>

          <Link
            href="/shop"
            className="w-full text-center px-8 py-4 bg-lava-orange text-white font-brand font-bold text-xl rounded-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Snacking!
          </Link>
        </div>
      </div>
    </nav>
  );
}

