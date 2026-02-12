import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Send, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import logoImage from '../assets/images/zv-removebg.avif';

const Footer = () => {
    return (
        <footer className="w-full bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Branding Column */}
                    <div className="flex flex-col space-y-6">
                        <Link to="/" className="inline-block">
                            <img src={logoImage} alt="ZV Logo" className="h-14 w-auto" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Empowering elite traders with institutional capital, advanced technology, and a transparency-first culture. Join the future of prop trading.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Instagram, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Send, href: "#" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-[#FF1B6B] hover:to-[#712CF9] transition-all duration-300 border border-white/10 hover:border-transparent"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Platform</h4>
                        <ul className="space-y-4">
                            {['Challenges', 'Trading Rules', 'Leaderboard', 'Payouts', 'Affiliate Program'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Support</h4>
                        <ul className="space-y-4">
                            {['Help Center', 'FAQ', 'Contact Support', 'Risk Disclosure', 'Status'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / Contact */}
                    <div className="flex flex-col space-y-6">
                        <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Stay Updated</h4>
                        <p className="text-gray-400 text-sm">Subscribe to our newsletter for insights and rewards.</p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all"
                            />
                            <button className="absolute right-2 top-1.5 p-1.5 rounded-full bg-gradient-to-r from-[#FF1B6B] to-[#712CF9] text-white hover:scale-105 active:scale-95 transition-transform">
                                <Send size={16} />
                            </button>
                        </div>
                        <div className="flex flex-col space-y-3 pt-4">
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail size={16} className="text-blue-500" />
                                <span>support@zvprop.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <MapPin size={16} className="text-pink-500" />
                                <span>Global HQ - Dubai, UAE</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Risk Warning & Legal */}
                <div className="border-t border-white/5 pt-10 flex flex-col items-center">
                    <div className="max-w-4xl text-center mb-8 px-4">
                        <p className="text-gray-500 text-[11px] leading-relaxed uppercase tracking-tighter">
                            Risk Warning: Trading financial instruments involves significant risk of loss and is not suitable for all investors.
                            ZV-Prop provides simulated accounts in a controlled environment. All funding is virtual and does not constitute
                            financial advice or investment services. Past performance is not indicative of future results.
                        </p>
                    </div>

                    <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 gap-6">
                        <p className="text-gray-500 text-xs">
                            © {new Date().getFullYear()} ZV-Prop. All rights reserved.
                        </p>
                        <div className="flex items-center gap-8">
                            {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map(item => (
                                <Link key={item} to="#" className="text-gray-500 hover:text-white transition-colors text-xs font-medium underline underline-offset-4 decoration-white/10">
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
