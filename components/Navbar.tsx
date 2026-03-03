"use client";

import { useState, useEffect, useRef } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { ShoppingCart, ShoppingBag, Heart, User, LogIn, UserPlus, ChevronDown, Sun, Moon, Utensils, BookOpen, MessageSquare, Search, Star, Hash, Feather, ChevronRight, Menu } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/lib/products";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { cartCount, lastAddedId } = useCart();
  const { user, isLoggedIn, logout } = useAuth();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(PRODUCTS.slice(0, 4));

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults(PRODUCTS.slice(0, 4));
    } else {
      const filtered = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.cue.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered.slice(0, 6));
    }
  }, [searchQuery]);

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
    <>
      <nav
        style={{ backgroundColor: theme === 'dark' ? '#0B0D10' : '#FFFFFF' }}
        className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 pointer-events-auto border-b border-black/[0.03] ${isHomePage ? "hidden lg:flex" : "flex"
          } ${isScrolled || isMobileMenuOpen
            ? "shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
            : "shadow-sm"
          }`}
      >
        <div
          className={`w-full max-w-[1440px] flex justify-between items-center whitespace-nowrap transition-all duration-700 ${isScrolled || isMobileMenuOpen
            ? "py-3 px-6 md:px-12"
            : "py-4 md:py-6 px-6 md:px-16"
            }`}
        >


          {/* Brand - Always Left */}
          <div className="flex justify-start items-center order-2 lg:order-1">
            <Link href="/" className="text-xl md:text-2xl font-serif font-black text-[var(--foreground)] tracking-tight flex items-center gap-2 group uppercase">
              <div className="w-8 h-8 rounded-full border border-[var(--primary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-4 h-4 rounded-full bg-[var(--primary)]/40" />
              </div>
              <span className="hidden sm:block">Mithila Essence</span>
              <span className="sm:hidden">Mithila</span>
            </Link>
          </div>

          {/* Desktop Nav - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-2 order-2">
            {[
              { name: "Shop", href: "/shop" },
              { name: "About", href: "/our-story" },
              { name: "Track Order", href: "/account/orders" },
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 font-serif font-bold transition-all text-sm group/nav ${item.name === "🔥 New Drop"
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Underline Hover Effect */}
                  <motion.span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 bg-current origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
                      }`}
                    initial={false}
                  />
                </Link>
              );
            })}
          </div>

          {/* Action Buttons - Left/Right on Mobile */}
          <div className="flex items-center gap-2 md:gap-4 order-3">
            {/* Search Icon */}
            <button
              className="p-2 text-[#3E434B] dark:text-stone-400 hover:text-[#111318] dark:hover:text-white transition-all rounded-full hover:bg-stone-900/5 dark:hover:bg-white/5"
              title="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} />
            </button>

            {/* Account Dropdown - Desktop */}
            <div
              className="hidden md:block relative group/account"
              ref={accountRef}
              onMouseEnter={() => setIsAccountOpen(true)}
              onMouseLeave={() => setIsAccountOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all hover:bg-[var(--foreground)]/5 ${isAccountOpen
                  ? "bg-[var(--foreground)]/5 text-[var(--foreground)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  }`}
              >
                <User size={18} className="transition-colors group-hover/account:text-[var(--foreground)]" />
                <span className="font-serif font-bold text-[13px] uppercase tracking-wider">{isLoggedIn ? user?.name.split(' ')[0] : "Account"}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isAccountOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute right-0 top-full pt-2 w-64 transition-all duration-300 pointer-events-none group-hover/account:pointer-events-auto ${isAccountOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
                <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-100 dark:border-stone-800 overflow-hidden">
                  <div className="p-4 bg-stone-50 dark:bg-stone-800/50 border-b border-stone-100 dark:border-stone-800">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-stone-500 text-xs font-bold uppercase tracking-tight">Your Account</p>
                      {isLoggedIn && (
                        <Link href="/account" className="text-lava-orange text-[10px] font-black hover:underline uppercase">View Profile</Link>
                      )}
                    </div>
                    <p className="font-brand font-bold text-stone-900 dark:text-white truncate text-sm">
                      {isLoggedIn ? user?.email : "Sign in to access your orders"}
                    </p>
                  </div>

                  <div className="p-2 space-y-1">
                    {!isLoggedIn ? (
                      <div className="p-2 space-y-2">
                        <Link
                          href="/login"
                          className="flex items-center justify-center gap-2 w-full py-2.5 bg-[var(--primary)] text-[var(--espresso)] font-serif font-black rounded-xl text-sm shadow-lg shadow-[var(--primary)]/20 hover:scale-[1.02] transition-transform"
                        >
                          <LogIn size={16} />
                          Login
                        </Link>
                        <div className="text-center">
                          <span className="text-[10px] text-stone-400 font-medium">New customer? </span>
                          <Link href="/signup" className="text-[10px] text-lava-orange font-bold hover:underline">Sign Up</Link>
                        </div>
                      </div>
                    ) : null}

                    <div className="py-1">
                      {[
                        { name: "View Profile", icon: <User size={18} />, href: "/account" },
                        { name: "My Orders", icon: <ShoppingCart size={18} />, href: "/account/orders" },
                        { name: "Wishlist", icon: <Heart size={18} />, href: "/wishlist" },
                        { name: "Rewards", icon: <Sun size={18} />, href: "/account/rewards" },
                        { name: "Gift Cards", icon: <BookOpen size={18} />, href: "/gift-cards" },
                      ].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors text-sm font-medium"
                        >
                          <span className="text-stone-400 group-hover:text-lava-orange">{item.icon}</span>
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    {isLoggedIn && (
                      <div className="pt-1 border-t border-stone-100 dark:border-stone-800">
                        <button
                          onClick={logout}
                          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 text-stone-500 hover:text-red-500 transition-colors text-left text-sm font-medium"
                        >
                          <LogIn size={18} className="rotate-180" />
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>

                  {!isLoggedIn && (
                    <div className="p-3 bg-mint-teal/5 text-center border-t border-stone-50 dark:border-stone-800">
                      <p className="text-[10px] text-stone-500 font-medium">Experience the #MithilaWay</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-[#3E434B] dark:text-stone-400 hover:text-[#111318] dark:hover:text-white transition-all rounded-full hover:bg-stone-900/5 dark:hover:bg-white/5"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Wishlist Icon - Hidden on Mobile (prioritize in app menu or bottom nav if added later) */}
            <Link
              href="/wishlist"
              className="hidden md:flex relative p-2 text-[#3E434B] dark:text-stone-400 hover:text-[#111318] dark:hover:text-white transition-all rounded-full hover:bg-stone-900/5 dark:hover:bg-white/5"
              title="Wishlist"
            >
              <Heart size={20} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#F6B24A] text-[#111318] text-[11px] flex items-center justify-center rounded-full font-bold">
                3
              </span>
            </Link>

            {/* Cart Icon - Hidden on Mobile (now in bottom nav) */}
            <Link
              href="/cart"
              className="hidden md:flex relative p-2 text-[#3E434B] dark:text-stone-400 hover:text-[#111318] dark:hover:text-white transition-all rounded-full hover:bg-stone-900/5 dark:hover:bg-white/5"
              title="Cart"
            >
              <motion.div
                animate={lastAddedId ? { scale: [1, 1.4, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                <ShoppingCart size={20} />
              </motion.div>
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-1 right-1 w-4 h-4 bg-[var(--primary)] text-[var(--espresso)] text-[11px] flex items-center justify-center rounded-full font-bold"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Mobile Toggle - order-1 to place on left */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden p-2 text-[#3E434B] dark:text-white rounded-full hover:bg-stone-900/5 dark:hover:bg-white/5 transition-all order-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-[#111318] dark:bg-white rounded transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`h-0.5 w-full bg-[#111318] dark:bg-white rounded transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-full bg-[#111318] dark:bg-white rounded transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Slider - Professional E-commerce Drawer */}
      <div
        id="mobile-sidebar"
        className={`lg:hidden fixed inset-0 z-[100] transition-all duration-500 ${isMobileMenuOpen ? "visible" : "invisible"}`}
      >
        {/* Backdrop overlay */}
        <div
          className={`absolute inset-0 bg-stone-950/40 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar content */}
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-stone-900 shadow-2xl transition-transform duration-500 flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Drawer Header */}
          <div className="p-6 flex justify-between items-center border-b border-stone-100 dark:border-stone-800">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-6 h-6 rounded-full border border-sun-yellow flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-sun-yellow/40" />
              </div>
              <span className="font-brand font-black text-xl text-stone-900 dark:text-white uppercase tracking-tighter">Mithila Essence</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-stone-400 hover:text-lava-orange transition-colors"
            >
              <div className="w-6 h-6 relative">
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current rotate-45" />
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current -rotate-45" />
              </div>
            </button>
          </div>

          <div id="mobile-sidebar-scroll-area" className="flex-grow overflow-y-auto">
            {/* Account Section - Mobile */}
            <div id="mobile-account-section" className="p-4 bg-stone-50 dark:bg-stone-800/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-lava-orange/10 flex items-center justify-center text-lava-orange">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-stone-900 dark:text-white font-brand font-bold text-sm leading-tight">
                    {isLoggedIn ? `Hi, ${user?.name}` : "Welcome Guest"}
                  </p>
                  <p className="text-stone-400 text-[11px]">
                    {isLoggedIn ? user?.email : "Mithila's Premium Snacks"}
                  </p>
                </div>
              </div>

              {!isLoggedIn ? (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/login"
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-brand font-bold rounded-xl text-xs"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogIn size={14} />
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-[#F6B24A] text-[#111318] font-brand font-bold rounded-xl text-xs"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <UserPlus size={14} />
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/account"
                    className="flex items-center justify-center gap-1.5 py-2 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-white font-brand font-bold rounded-lg text-xs"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User size={14} />
                    Profile
                  </Link>
                  <button
                    onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                    className="flex items-center justify-center gap-1.5 py-2 bg-red-50 dark:bg-red-900/10 text-red-500 font-brand font-bold rounded-lg text-xs"
                  >
                    <LogIn size={14} className="rotate-180" />
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Navigation Sections */}
            <div className="p-4 space-y-5">
              {/* Account Section */}
              <div>
                <h3 className="text-[9px] font-black text-stone-400 uppercase tracking-[0.15em] mb-2">My Account</h3>
                <div className="space-y-1">
                  {[
                    { name: "My Orders", icon: <ShoppingCart size={16} />, href: "/account/orders" },
                    { name: "Order Status", icon: <BookOpen size={16} />, href: "/account/orders" },
                    { name: "Wishlist", icon: <Heart size={16} />, href: "/wishlist" },
                    { name: "Gift Cards", icon: <Sun size={16} />, href: "/gift-cards" },
                    { name: "Rewards", icon: <Utensils size={16} />, href: "/account/rewards" }
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 py-2 px-2 rounded-lg text-stone-600 dark:text-stone-300 font-medium text-sm hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-stone-400">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main Links */}
              <div>
                <h3 className="text-[9px] font-black text-stone-400 uppercase tracking-[0.15em] mb-2">Explore</h3>
                <div className="space-y-1">
                  {[
                    { name: "Shop", icon: <ShoppingBag size={16} />, href: "/shop" },
                    { name: "About", icon: <BookOpen size={16} />, href: "/our-story" },
                    { name: "Track Order", icon: <Hash size={16} />, href: "/account/orders" }
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 py-2 px-2 rounded-lg font-medium text-sm transition-colors ${item.name === "🔥 New Drop"
                        ? "text-lava-orange bg-lava-orange/5"
                        : "text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800"
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className={item.name === "🔥 New Drop" ? "text-lava-orange" : "text-stone-400"}>{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-stone-100 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/10">
            <Link
              href="/shop"
              className="w-full text-center py-3.5 bg-[#F6B24A] text-[#111318] font-brand font-bold text-sm rounded-xl shadow-lg shadow-amber-500/10 block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>

      {/* Search Modal Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center pt-20 px-6 backdrop-blur-md bg-stone-950/40"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              className="w-full max-w-2xl bg-white dark:bg-stone-900 rounded-[2.5rem] shadow-2xl border border-white/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (searchQuery.trim()) {
                      setIsSearchOpen(false);
                      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
                    }
                  }}
                  className="relative flex items-center mb-8"
                >
                  <Search className="absolute left-6 text-stone-400" size={24} />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search for cravings (e.g. peri peri, honey butter)..."
                    className="w-full text-xl md:text-2xl font-brand font-bold bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800 rounded-2xl pl-16 pr-6 py-5 focus:outline-none focus:border-lava-orange transition-all text-stone-900 dark:text-white"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-6 p-2 text-stone-400 hover:text-lava-orange transition-colors"
                  >
                    Esc
                  </button>
                </form>

                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">
                      {searchQuery ? "Search Results" : "Popular Flavors"}
                    </h3>
                    {searchQuery && (
                      <Link
                        href={`/search?q=${encodeURIComponent(searchQuery)}`}
                        onClick={() => setIsSearchOpen(false)}
                        className="text-[10px] font-black text-lava-orange uppercase tracking-[0.1em] hover:underline"
                      >
                        View All
                      </Link>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={() => setIsSearchOpen(false)}
                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors group"
                      >
                        <div className="relative w-16 h-16 bg-white rounded-xl border border-stone-100 dark:border-stone-800 p-2 overflow-hidden flex-shrink-0">
                          <NextImage
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform"
                          />
                        </div>
                        <div>
                          <p className="font-brand font-bold text-stone-900 dark:text-white group-hover:text-lava-orange transition-colors">{product.name}</p>
                          <p className="text-xs text-stone-400 font-medium">₹{product.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {!searchQuery && (
                    <div className="pt-4 border-t border-stone-100 dark:border-stone-800">
                      <p className="text-xs text-stone-500 font-medium mb-3">Trending Tags:</p>
                      <div className="flex flex-wrap gap-2">
                        {["#Spicy", "#HighProtein", "#NoPalmOil", "#Sweet"].map(tag => (
                          <button
                            key={tag}
                            className="px-3 py-1.5 bg-stone-100 dark:bg-stone-800 rounded-full text-[10px] font-bold text-stone-500 hover:bg-lava-orange/10 hover:text-lava-orange transition-colors"
                            onClick={() => setSearchQuery(tag.replace('#', ''))}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
