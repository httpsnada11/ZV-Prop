import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logoImage from '../assets/images/zv-removebg.avif';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 border-b ${isScrolled
                    ? 'bg-black/80 backdrop-blur-md border-white/10 shadow-lg'
                    : 'bg-transparent border-transparent'
                }`}
        >
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2">
                <img
                    src={logoImage}
                    alt="ZV Logo"
                    className="h-16 w-auto"
                />
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
                <Link to="/challenges" className="group relative flex items-center gap-1 cursor-pointer">
                    <span className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                        Challenges
                    </span>
                    <ChevronDown size={14} className="text-gray-500 group-hover:text-white transition-colors mt-0.5" />
                </Link>
                <Link to="/affiliate" className="group relative flex items-center gap-1 cursor-pointer">
                    <span className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                        Affiliate
                    </span>
                    <ChevronDown size={14} className="text-gray-500 group-hover:text-white transition-colors mt-0.5" />
                </Link>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                    About Us
                </Link>

            </nav>

            {/* Right Actions Section */}
            <div className="flex items-center gap-6">
                {/* Login Link */}
                <a href="#" className="hidden sm:block text-blue-500 text-sm font-bold tracking-wider hover:text-blue-400 transition-colors uppercase">
                    Login
                </a>

                {/* Start Trading Button with Gradient Border */}
                <div className="p-[1px] rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#D63384] to-[#712CF9] active:scale-95 transition-transform duration-300">
                    <button className="px-5 py-2 rounded-full bg-black/80 backdrop-blur-sm text-white text-[12px] font-bold tracking-wider uppercase hover:bg-white/5 transition-all whitespace-nowrap">
                        Start Trading
                    </button>
                </div>

                {/* Language Selector */}
                <div className="flex items-center gap-1 group cursor-pointer border-l border-white/10 pl-6 ml-2">
                    <span className="text-white text-sm font-bold tracking-wider">EN</span>
                    <ChevronDown size={14} className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
            </div>
        </header>
    );
};

export default Header;
