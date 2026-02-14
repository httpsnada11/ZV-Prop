import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            {/* Mission Section */}
            <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-purple-600/20 blur-[100px] rounded-t-full pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent drop-shadow-sm">
                        Our Mission
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-3xl font-medium text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Turn Your Digital Dream Into Reality!
                    </p>

                    {/* Body Text */}
                    <div className="prose prose-lg prose-invert mx-auto mb-16">
                        <p className="text-gray-400 leading-8 text-lg md:text-xl font-light">
                            Our team of web wizards will hold your hand (metaphorically, of course) every step of the way,
                            ensuring that the process is as easy as pie and as fun as a roller coaster. And guess what? Our
                            support doesn't end once your website is up and running. We're like your personal online
                            cheerleaders, cheering you on to even greater heights of success. So buckle up, partner up with us,
                            and get ready for a wild adventure of website building like you've never experienced before!
                        </p>
                    </div>

                    {/* Footer / CEO Signature */}
                    <div className="inline-flex items-center gap-4 text-sm tracking-widest uppercase text-gray-500 font-bold border-t border-white/10 pt-8 px-12">
                        <span>CEO NAME</span>
                        <span className="text-purple-500">|</span>
                        <span>CEO</span>
                    </div>
                </div>
            </section>

            {/* About Section - ZV-Prop Intro */}
            <section className="w-full px-6 py-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Content */}
                    <div className="pt-8">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] mb-12 tracking-tight">
                            ZV-Prop is a <span className="text-gray-400">prop firm</span> backed by globally recognized broker <span className="text-white">ZV Markets.</span>
                        </h2>

                        <div className="flex items-center gap-3 text-xl md:text-2xl font-bold">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <ChevronRight className="w-8 h-8 text-[#712CF9]" strokeWidth={4} />
                            </div>
                            <span>2M Users</span>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                        {/* Top: Logo Area */}
                        <div className="h-80 bg-black flex flex-col items-center justify-center relative p-8">
                            {/* Subtle Grid or texture could go here */}
                            <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mb-6 shadow-xl relative z-10">
                                <span className="text-4xl font-black text-black">ZV</span>
                            </div>
                            <span className="text-3xl font-bold text-white relative z-10">ZV-Prop</span>
                        </div>

                        {/* Bottom: Purple Description */}
                        <div className="bg-[#712CF9] p-10 md:p-14 text-white">
                            <p className="text-lg md:text-xl leading-relaxed font-medium opacity-95">
                                At ZV-Prop we aim to take on the prop trading space by providing sustainable trading challenges that empowers traders with top tier customer service, industry leading technology, and efficient payouts. We bring over 20 years of combined brokerage and prop firm experience between our team to ensure that we deliver the best experience and trading conditions to our clients and help create a long term environment for traders to participate in prop trading.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Outreach & Video Section */}
            <section className="relative w-full px-6 py-24 overflow-hidden">
                {/* Purple Ambient Background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[#712CF9]/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Stats Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                        <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-2xl text-white">
                            Our global outreach <br /> and impact
                        </h2>
                        <div className="px-5 py-2 rounded-full bg-[#712CF9]/10 border border-[#712CF9]/30 backdrop-blur-md flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#712CF9] animate-pulse"></div>
                            <span className="text-sm font-bold text-[#712CF9] uppercase tracking-wider">Unmatched Prop Trading</span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8 mb-32">
                        {[
                            { number: "9+", label: "Years of Brand History" },
                            { number: "3+", label: "Global Office Locations" },
                            { number: "50K+", label: "Traders" }
                        ].map((stat, idx) => (
                            <div key={idx} className="group relative">
                                <div className="text-7xl md:text-8xl font-black mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#712CF9] group-hover:to-[#FF1B6B] transition-all duration-300">
                                    {stat.number}
                                </div>
                                <div className="h-0.5 w-full bg-white/10 mb-4 group-hover:bg-[#712CF9] transition-colors duration-500 origin-left"></div>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Who We Are Video */}
                    <div className="text-center space-y-12">
                        <h2 className="text-4xl md:text-5xl font-black text-white">Who we are?</h2>

                        <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 group cursor-pointer bg-black">
                            {/* Video Thumbnail Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] to-black opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#712CF9] to-[#FF1B6B] flex items-center justify-center shadow-lg shadow-[#712CF9]/50">
                                        <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Caption Overlay */}
                            <div className="absolute bottom-12 left-0 right-0 text-center px-4">
                                <div className="inline-block bg-black/40 backdrop-blur-md px-8 py-4 rounded-full border border-white/5">
                                    <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                        "Why Traders Love ZV-Prop"
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
