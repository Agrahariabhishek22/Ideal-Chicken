import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_API_RESPONSE = [
    { id: 1, label: 'ABOUT', href: '/about', hasDropdown: false },
    {
        id: 2,
        label: 'VERTICALS',
        href: '/verticals',
        hasDropdown: true,
        subItems: [
            { id: 21, label: 'Poultry', href: '/verticals/poultry' },
            { id: 22, label: 'Farming', href: '/verticals/farming' }
        ]
    },
    { id: 3, label: 'PRODUCTS', href: '/products', hasDropdown: false },
    { id: 4, label: 'STORE LOCATIONS', href: '/locations', hasDropdown: false },
    {
        id: 5,
        label: 'RESOURCES',
        href: '/resources',
        hasDropdown: true,
        subItems: [
            { id: 51, label: 'Blog', href: '/resources/blog' },
            { id: 52, label: 'Recipes', href: '/resources/recipes' }
        ]
    },
];

const Navbar = () => {
    const [navItems, setNavItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

    useEffect(() => {
        setNavItems(MOCK_API_RESPONSE);
        setIsLoading(false);
    }, []);

    const toggleMobileSubmenu = (id) => {
        setActiveMobileSubmenu(activeMobileSubmenu === id ? null : id);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-white border-t border-gray-200 py-4 px-4 md:px-12 top-0 z-50 "
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* LOGO */}
                <a href="/" className="flex-shrink-0 cursor-pointer z-50">
                    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                        <img
                            src="/src/assets/Ideal Chicken Logo.png"
                            alt="Ideal Chicken Logo"
                            className="h-10 md:h-14 w-auto object-contain"
                        />
                    </motion.div>
                </a>

                {/* DESKTOP NAV */}
                <ul className="hidden lg:flex items-center space-x-8">
                    {!isLoading && navItems.map((item) => (
                        <li key={item.id} className="relative group">
                            <a
                                href={item.href}
                                className="flex items-center text-sm font-bold text-gray-800 group-hover:text-[#D21E4B] tracking-wide transition"
                            >
                                {item.label}
                                {item.hasDropdown && (
                                    <ChevronDown
                                        className="ml-1 w-4 h-4 text-[#D21E4B] transition-transform duration-300 group-hover:-rotate-180"
                                    />
                                )}
                            </a>

                            {/* === FIXED DROPDOWN === */}
                            {item.hasDropdown && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="absolute left-0 top-full pt-4 hidden group-hover:block"
                                >
                                    <div className="w-48 bg-white shadow-xl rounded-lg border border-gray-100 overflow-hidden">
                                        {item.subItems.map(sub => (
                                            <a
                                                key={sub.id}
                                                href={sub.href}
                                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#D21E4B] transition"
                                            >
                                                {sub.label}
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA + MOBILE TOGGLE */}
                <div className="flex items-center gap-4">

                    {/* CTA */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden sm:flex group items-center gap-3 bg-[#222222] text-white px-5 py-2.5 rounded-full shadow-md"
                    >
                        <span className="font-bold text-sm tracking-wide">Get in Touch</span>
                        <div className="bg-white rounded-full p-1 group-hover:rotate-45 transition">
                            <ArrowUpRight className="w-4 h-4 text-black" strokeWidth={2.5} />
                        </div>
                    </motion.button>

                    {/* Styled Hamburger */}
                    <button
                        className="lg:hidden p-3 rounded-xl bg-gray-100 shadow hover:bg-gray-200 transition"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white border-t border-gray-100 mt-4 overflow-hidden"
                    >
                        <ul className="flex flex-col p-4 space-y-4">
                            {navItems.map(item => (
                                <li key={item.id} className="flex flex-col border-b pb-2">
                                    <div className="flex justify-between items-center">
                                        <a
                                            href={item.href}
                                            className="text-base font-bold text-gray-800 hover:text-[#D21E4B]"
                                            onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </a>

                                        {item.hasDropdown && (
                                            <button
                                                onClick={() => toggleMobileSubmenu(item.id)}
                                                className="p-2 bg-gray-100 rounded-full"
                                            >
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform ${activeMobileSubmenu === item.id ? "rotate-180" : ""}`}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {/* MOBILE SUBMENU */}
                                    <AnimatePresence>
                                        {item.hasDropdown && activeMobileSubmenu === item.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden pl-4 pt-2 space-y-2 bg-gray-50 rounded-md mt-2"
                                            >
                                                {item.subItems.map(sub => (
                                                    <a
                                                        key={sub.id}
                                                        href={sub.href}
                                                        className="block py-2 text-sm text-gray-600 hover:text-[#D21E4B]"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {sub.label}
                                                    </a>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;