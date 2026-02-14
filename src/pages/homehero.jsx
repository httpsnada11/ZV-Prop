import React from 'react';
import heroImage from '../assets/images/3d1.avif';
import ctabgImage from '../assets/images/ctabg.avif';
import gridBg from '../assets/images/Grid 2.png';
import bgImage3 from '../assets/images/3d3.avif';
import { Users, Check } from 'lucide-react';
import platform1 from '../assets/platforms/platform1.avif';
import platform2 from '../assets/platforms/platform2.avif';
import platform3 from '../assets/platforms/platform3.avif';

const AdvancedLoader = () => {
    // Exact gradient colors from #712CF9 -> #D63384 -> #FF1B6B
    const colors = [
        '#712CF9', '#822DE6', '#932DD3', '#A42EC0', '#B52EAD', '#C62F9A',
        '#D63384', '#DD2F80', '#E52B7C', '#EC2778', '#F42374', '#FF1B6B'
    ];

    return (
        <div className="relative w-5 h-5 animate-spin">
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-[2px] h-[5px] rounded-full"
                    style={{
                        backgroundColor: colors[i],
                        transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-7px)`,
                    }}
                />
            ))}
        </div>
    );
};

const HomeHero = () => {

    return (
        <div className="w-full flex flex-col items-center">
            {/* Fixed Background Image (Visible in Middle Sections) */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] md:w-[120%] md:h-[120%] z-0 pointer-events-none">
                <img
                    src={bgImage3}
                    alt="3D Background"
                    className="w-full h-full object-contain animate-pulse-slow opacity-80"
                />
            </div>

            {/* Section 1: Hero (Opaque Background) */}
            <section className="min-h-screen w-full flex items-center px-6 py-20 relative bg-black z-20">
                {/* Background Blobs/Effects */}
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#712CF9]/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#FF1B6B]/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 transition-all duration-1000 ease-out animate-in fade-in slide-in-from-bottom-8">

                    {/* Left Content */}
                    <div className="flex flex-col items-start space-y-8 relative z-50">
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white uppercase text-left">
                            <span className="block">STOP</span>
                            <span className="block">TRADING</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#712CF9] via-[#D63384] to-[#FF1B6B]">SMALL.</span>
                        </h1>

                        <h2 className="text-lg md:text-2xl font-bold text-gray-400 uppercase tracking-widest text-left">
                            SCALE WITH OUR CAPITAL
                        </h2>

                        {/* Pill/badge moved here */}
                        <div className="flex bg-white/5 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 box-content w-auto max-w-none mt-4">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                <AdvancedLoader />
                            </div>
                            <span className="text-white font-medium tracking-wide text-xs md:text-sm leading-tight text-left whitespace-nowrap">Transform your trading journey with our exclusive prop firm program, featuring rare opportunities and unique strategies for elite traders.</span>
                        </div>

                        <div className="flex items-center gap-6 mt-4">
                            <div className="p-[1px] rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#D63384] to-[#712CF9]">
                                <button className="px-10 py-4 rounded-full bg-black text-white text-sm md:text-base font-bold tracking-widest uppercase hover:bg-white/10 transition-all">
                                    Start Challenges
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Right Image (3D Object) */}
                    <div className="relative h-full flex items-center justify-center lg:justify-end z-0">
                        <img
                            src={heroImage}
                            alt="3D Abstract Shape"
                            className="w-[180%] max-w-none object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-1000 delay-300 translate-x-24 -translate-y-32 scale-110"
                        />
                    </div>
                </div>


                {/* Discover More - Center Bottom */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 cursor-pointer hover:text-white transition-colors group z-20 animate-bounce-slight">
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">Discover More</span>
                    <div className="group-hover:translate-y-1 transition-transform">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>
                </div>
                <style>{`
@keyframes bounce - slight {
    0 %, 100 % { transform: translateY(0); }
    50 % { transform: translateY(-10px); }
}
                    .animate - bounce - slight {
    animation: bounce - slight 2s infinite ease -in -out;
}
`}</style>
            </section >

            {/* Section 2: Why We're Different (Transparent Background) */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden bg-transparent z-10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none opacity-50"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex bg-white/5 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 box-content w-auto max-w-none mb-8 mx-auto">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                            <AdvancedLoader />
                        </div>
                        <span className="text-white font-medium tracking-wide text-xs md:text-sm leading-tight text-left whitespace-nowrap">WHY WE'RE DIFFERENT</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        Why We're Different
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        We're traders, marketers, and designers who got sick of shady prop firms — so we built one that's transparent, fast, and actually wants you to win. While other firms trap you in repetitive challenges, we're developing adaptive evaluations and trust-based scaling — prove your discipline once, unlock progressive capital growth. Real-time rule tracker shows your drawdown % as you trade—no surprise violation. Built for long-term trader success, not short-term challenge revenue.
                    </p>

                    <div className="p-[1px] rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#D63384] to-[#712CF9] inline-block hover:scale-105 transition-transform duration-300 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                        <button className="px-10 py-4 rounded-full bg-black/80 backdrop-blur-sm text-white font-extrabold uppercase tracking-widest hover:bg-black transition-colors flex items-center gap-2">
                            Experience the Difference
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 3: Trade at Your Own Pace & Funding Path Poll (Transparent Background) */}
            <section className="w-full py-24 flex items-center justify-center relative bg-transparent overflow-hidden z-10">
                {/* Background Glows */}
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#712CF9]/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-[#FF1B6B]/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full relative z-10">
                    {/* ... (rest of the section content remains same, handled by diff but context provided for replacement) */}


                    {/* Left Side: Trade at Your Own Pace Card */}
                    <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-[2.5rem] overflow-hidden group shadow-[0_0_50px_rgba(255,27,107,0.15)] hover:shadow-[0_0_80px_rgba(255,27,107,0.3)] transition-shadow duration-500">
                        {/* Card Background & Border */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b14] to-[#000000] z-0"></div>
                        <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 z-20 pointer-events-none"></div>

                        {/* Glow Effects */}
                        <div className="absolute top-[-10%] right-[-20%] w-[300px] h-[300px] bg-[#712CF9]/20 rounded-full blur-[80px] z-10"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#FF1B6B]/10 rounded-full blur-[80px] z-10"></div>

                        {/* Bottom Arc Glow */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[100px] bg-[#FF1B6B]/20 blur-[50px] rounded-[100%] z-10"></div>
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[4px] bg-[#FF1B6B] blur-[2px] rounded-full z-20"></div>

                        {/* Content */}
                        <div className="relative z-30 h-full flex flex-col p-8 md:p-10 text-center items-center">
                            {/* Top Right Orb/Logo */}
                            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1B6B] to-[#712CF9] shadow-[0_0_20px_rgba(255,27,107,0.5)] flex items-center justify-center border border-white/20">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" fill="white" fillOpacity="0.8" />
                                </svg>
                            </div>

                            {/* Main Title */}
                            <div className="mt-12 flex flex-col items-center">
                                <h3 className="text-5xl md:text-6xl font-bold tracking-tighter text-white leading-[0.9]">
                                    Trade
                                </h3>
                                <h3 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9]">
                                    <span className="text-white">at </span>
                                    <span className="text-[#FF1B6B]">Your</span>
                                </h3>
                                <h3 className="text-5xl md:text-6xl font-bold tracking-tighter text-white leading-[0.9]">
                                    Own
                                </h3>
                                <h3 className="text-5xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#712CF9] via-[#D63384] to-[#FF1B6B] leading-[0.9]">
                                    Pace
                                </h3>
                            </div>

                            {/* Subtitle */}
                            <div className="mt-auto mb-8">
                                <p className="text-lg text-gray-300 font-medium">No deadlines.</p>
                                <p className="text-lg text-gray-300 font-medium">No pressure.</p>
                            </div>

                            {/* Footer Text */}
                            <div className="text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase">
                                FOCUS ON YOUR EDGE.
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Which Funding Path Poll */}
                    <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-10 pl-0 lg:pl-12">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tight leading-[0.9] uppercase">
                            <span className="text-white block mb-1">WHICH FUNDING</span>
                            <span className="block mb-1">
                                <span className="text-white">PATH </span>
                                <span className="text-[#FF1B6B]">WOULD YOU</span>
                            </span>
                            <span className="text-[#FF1B6B] block">CHOOSE?</span>
                        </h2>

                        {/* Poll Options Grid */}
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {[
                                { id: 'A', label: 'Instant Funding' },
                                { id: 'B', label: '1-Step' },
                                { id: 'C', label: '2-Step' },
                                { id: 'D', label: '3-Step' }
                            ].map((option) => (
                                <button
                                    key={option.id}
                                    className="group relative flex items-center justify-start gap-4 p-1 rounded-full bg-gradient-to-r from-[#712CF9]/30 to-[#FF1B6B]/10 border border-[#FF1B6B]/20 hover:border-[#FF1B6B]/50 transition-all duration-300 overflow-hidden w-full backdrop-blur-sm"
                                >
                                    <div className="absolute inset-0 bg-[#FF1B6B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Circle Badge (Transparent) */}
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                                        <div className="scale-75 md:scale-100">
                                            <AdvancedLoader />
                                        </div>
                                    </div>

                                    {/* Label */}
                                    <span className="text-gray-200 font-medium text-lg tracking-wide group-hover:text-white transition-colors pr-6">
                                        {option.label}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Comment Your Choice Button */}
                        <div className="w-full flex justify-center lg:justify-start pt-4">
                            <button className="group relative px-8 py-3 rounded-full bg-[#FF1B6B]/10 border border-[#FF1B6B]/30 hover:bg-[#FF1B6B]/20 hover:border-[#FF1B6B]/50 transition-all duration-300 flex items-center gap-3 overflow-hidden backdrop-blur-md">
                                <span className="relative z-10 text-gray-300 font-bold tracking-widest text-sm uppercase group-hover:text-white transition-colors">
                                    Comment Your Choice
                                </span>
                                <svg
                                    className="relative z-10 w-4 h-4 text-[#FF1B6B] group-hover:text-white group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="7" y1="7" x2="17" y2="17"></line>
                                    <polyline points="17 7 17 17 7 17"></polyline>
                                </svg>
                                <div className="absolute inset-0 bg-[#FF1B6B]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Section 3.5: Trading Assets / Industries Vertical Scroll Section */}
            <section className="w-full relative bg-transparent pt-24 pb-48 overflow-hidden z-10">
                {/* Background 3D Image removed - using fixed background */}

                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                        {/* Left Side: Sticky Content */}
                        <div className="lg:w-1/3 lg:sticky lg:top-32 self-start h-auto">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                                We Offer Industry-Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Trading Assets</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                ZV Prop provides access to refined trading environments for every strategy. From Forex to Crypto, trade on professional-grade infrastructure designed for scaling.
                            </p>
                            <div className="hidden lg:block">
                                <div className="p-[1px] rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#D63384] to-[#712CF9] inline-block hover:scale-105 transition-transform duration-300">
                                    <button className="px-8 py-3 rounded-full bg-black/80 backdrop-blur-sm text-white font-bold uppercase tracking-wider hover:bg-black transition-colors">
                                        View All Assets
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Vertical Stacked Cards */}
                        <div className="lg:w-2/3 w-full flex flex-col gap-24 pb-24">
                            {/* Card 1: Forex */}
                            <div className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] -mr-32 -mt-32 transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>

                                <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 drop-shadow-sm">Forex</h3>
                                <p className="text-gray-400 mb-10 leading-relaxed text-xl max-w-2xl">
                                    Trade major, minor, and exotic currency pairs with raw STP spreads and ultra-low latency execution.
                                </p>

                                <div className="space-y-6 mt-auto">
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-blue-500/30 transition-colors">
                                            <Check className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <span className="text-gray-200 text-lg group-hover/item:text-white transition-colors">EUR/USD from 0.0 pips</span>
                                    </div>
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-blue-500/30 transition-colors">
                                            <Check className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <span className="text-gray-200 text-lg group-hover/item:text-white transition-colors">No commission structure</span>
                                    </div>
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-blue-500/30 transition-colors">
                                            <Check className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <span className="text-gray-200 text-lg group-hover/item:text-white transition-colors">1:100 Leverage</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Indices */}
                            <div className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -mr-32 -mt-32 transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>

                                <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-6 drop-shadow-sm">Indices</h3>
                                <p className="text-gray-400 mb-10 leading-relaxed text-xl max-w-2xl">
                                    Access global markets. Trade US30, NAS100, and DAX40 with zero commission and high liquidity.
                                </p>

                                <div className="space-y-6 mt-auto">
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-purple-500/30 transition-colors">
                                            <Check className="w-4 h-4 text-purple-400" />
                                        </div>
                                        <span className="text-gray-200 text-lg group-hover/item:text-white transition-colors">Real-time market data</span>
                                    </div>
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-purple-500/30 transition-colors">
                                            <Check className="w-4 h-4 text-purple-400" />
                                        </div>
                                        <span className="text-gray-200 text-lg group-hover/item:text-white transition-colors">No slippage during volatility</span>
                                    </div>
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-purple-500/30 transition-colors">
                                            <Check className="w-4 h-4 text-purple-400" />
                                        </div>
                                        <span className="text-gray-200 text-lg group-hover/item:text-white transition-colors">Fixed spreads available</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Crypto */}
                            <div className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-[100px] -mr-32 -mt-32 transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>

                                <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300 mb-6 drop-shadow-sm">Crypto</h3>
                                <p className="text-gray-400 mb-10 leading-relaxed text-xl max-w-2xl">
                                    Trade the future. Bitcoin, Ethereum, and major altcoins available 24/7/365 with deep liquidity.
                                </p>

                                <div className="space-y-6 mt-auto">
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-yellow-500/30 transition-colors">
                                            <Check className="w-4 h-4 text-yellow-400" />
                                        </div>
                                        <span className="text-gray-200 text-lg group-hover/item:text-white transition-colors">Weekend Trading Enabled</span>
                                    </div>
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-yellow-500/30 transition-colors">
                                            <Check className="w-4 h-4 text-yellow-400" />
                                        </div>
                                        <span className="text-gray-200 text-lg group-hover/item:text-white transition-colors">1:50 Leverage on Crypto</span>
                                    </div>
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-yellow-500/30 transition-colors">
                                            <Check className="w-4 h-4 text-yellow-400" />
                                        </div>
                                        <span className="text-gray-200 text-lg group-hover/item:text-white transition-colors">Instant execution</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4: Commodities */}
                            <div className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] -mr-32 -mt-32 transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>

                                <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 mb-6 drop-shadow-sm">Commodities</h3>
                                <p className="text-gray-400 mb-10 leading-relaxed text-xl max-w-2xl">
                                    Diversify with Gold (XAU), Silver (XAG), and Oil. Hedge your portfolio against market volatility.
                                </p>

                                <div className="space-y-6 mt-auto">
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-emerald-500/30 transition-colors">
                                            <Check className="w-4 h-4 text-emerald-400" />
                                        </div>
                                        <span className="text-gray-200 text-lg group-hover/item:text-white transition-colors">Tight spreads on Gold</span>
                                    </div>
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-emerald-500/30 transition-colors">
                                            <Check className="w-4 h-4 text-emerald-400" />
                                        </div>
                                        <span className="text-gray-200 text-lg group-hover/item:text-white transition-colors">No swap fees on majors</span>
                                    </div>
                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-emerald-500/30 transition-colors">
                                            <Check className="w-4 h-4 text-emerald-400" />
                                        </div>
                                        <span className="text-gray-200 text-lg group-hover/item:text-white transition-colors">Institutional Grade pricing</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            {/* Section 4: Integrations Section */}
            <section className="w-full py-32 flex flex-col items-center justify-center relative overflow-hidden bg-black z-20">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0B1A] to-black -z-10"></div>

                {/* 2 Rings Visual - Absolute Centered Background with Mask */}
                <div
                    className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 0%, transparent 35%, transparent 65%, black 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 35%, transparent 65%, black 100%)'
                    }}
                >
                    <div className="relative w-[1200px] h-[1200px] flex items-center justify-center">
                        {/* Outer Ring */}
                        <div className="absolute w-full h-full rounded-full animate-[spin_60s_linear_infinite]">
                            {[...Array(18)].map((_, i) => {
                                // Even distribution around the full circle
                                const angle = (i * 360) / 18;

                                const icons = [platform1, platform2, platform3];
                                const icon = icons[i % 3];

                                return (
                                    <div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10 flex items-center justify-center p-4 bg-black border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform"
                                        style={{
                                            transform: `rotate(${angle}deg) translateX(600px) rotate(-${angle}deg)`,
                                        }}
                                    >
                                        <img
                                            src={icon}
                                            alt="Integration"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Inner Ring for Depth */}
                        <div className="absolute w-[900px] h-[900px] rounded-full animate-[spin_80s_linear_infinite_reverse]">
                            {[...Array(12)].map((_, i) => {
                                // Inner circle distribution
                                const angle = (i * 360) / 12;

                                const icons = [platform1, platform2, platform3];
                                const icon = icons[(i + 1) % 3];

                                return (
                                    <div
                                        key={`inner-${i}`}
                                        className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 flex items-center justify-center p-3 bg-black border border-white/5 rounded-xl shadow-lg opacity-70"
                                        style={{
                                            transform: `rotate(${angle}deg) translateX(450px) rotate(-${angle}deg)`,
                                        }}
                                    >
                                        <img
                                            src={icon}
                                            alt="Integration"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="text-center relative z-10 px-6 max-w-4xl mx-auto">
                    <div className="inline-flex bg-white/5 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 box-content w-auto max-w-none mb-8 mx-auto">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                            <AdvancedLoader />
                        </div>
                        <span className="text-white font-medium tracking-wide text-xs md:text-sm leading-tight text-left whitespace-nowrap">INTEGRATIONS</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
                        Trade on Your Favorite <br className="hidden md:block" /> Platforms
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Experience lightning-fast execution on the industry's leading platforms. Whether you prefer MetaTrader 4, MetaTrader 5, cTrader, or Match-Trader, ZV Prop provides the deep liquidity and raw spreads you need to succeed.
                    </p>
                </div>
            </section>

            {/* Section 5: Community Section */}
            <section
                className="w-full relative py-32 overflow-hidden bg-black z-20"
                style={{
                    backgroundImage: `url(${ctabgImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
                    {/* Central Content */}
                    <div className="relative mb-12 group">
                        <div className="absolute -inset-4 bg-[#0384CC]/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-20 h-20 bg-gradient-to-br from-[#0384CC] to-[#D63384] rounded-[1.5rem] flex items-center justify-center shadow-[0_0_30px_rgba(3,132,204,0.3)] relative transform transition-transform group-hover:scale-105">
                            <Users size={40} className="text-white" />
                        </div>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center tracking-tight">
                        Join our <br className="md:hidden" /> community
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-xl text-center mb-12">
                        Join the ZV-Prop community to connect with elite traders, access exclusive insights, and stay updated on our latest prop trading challenges and offers.
                    </p>

                    <button className="px-10 py-4 bg-gradient-to-r from-[#0384CC] to-[#D63384] hover:opacity-90 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(3,132,204,0.4)] mb-20 transform hover:-translate-y-1">
                        Get Funded Now
                    </button>

                    {/* Floating Cards Container */}
                    <div className="w-full relative h-[400px] md:h-[300px]">
                        {/* Card 1: Blueberry Bot */}
                        <div className="absolute top-0 left-0 md:left-[10%] lg:left-[15%] w-[280px] p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-left-8 duration-700">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0384CC] to-[#D63384] flex items-center justify-center shrink-0">
                                <span className="text-white font-black text-xl">B</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Blueberry Bot <span className="text-gray-500 text-[10px] ml-1">Today at 10:24 AM</span></h4>
                                <p className="text-gray-400 text-[11px] leading-tight mt-1">
                                    Get 25% off all challenges this week with code: <span className="text-white font-mono">FEBRUARY26</span>
                                </p>
                            </div>
                        </div>

                        {/* Card 2: TradingPro */}
                        <div className="absolute top-[30%] right-0 md:right-[10%] lg:right-[15%] w-[280px] p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0">
                                <span className="text-white font-black text-xl">B</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">TradingPro <span className="text-gray-500 text-[10px] ml-1">Today at 10:24 AM</span></h4>
                                <p className="text-gray-400 text-[11px] leading-tight mt-1">
                                    Just passed my evaluation! Proceed into $50,000 real trading account! 🚀
                                </p>
                            </div>
                        </div>

                        {/* Card 3: MarketMaster */}
                        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[280px] p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shrink-0">
                                <span className="text-white font-black text-xl">B</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">MarketMaster <span className="text-gray-500 text-[10px] ml-1">Today at 10:24 AM</span></h4>
                                <p className="text-gray-400 text-[11px] leading-tight mt-1">
                                    Anyone attending the webinar tonight? I want to know more about the benefits!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default HomeHero;
