import React from 'react';
import heroImage from '../assets/images/3d1.avif';
import ctabgImage from '../assets/images/ctabg.avif';
import { Users } from 'lucide-react';
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
        <div className="relative w-5 h-5">
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    className="absolute top-0 left-1/2 w-[2px] h-[5px] rounded-full -translate-x-1/2 origin-[50%_10px]"
                    style={{
                        backgroundColor: colors[i], // Smooth gradient
                        transform: `rotate(${i * 30}deg) translateY(0px)`,
                        animation: `spinner-fade 1s linear infinite`,
                        animationDelay: `-${(12 - i) * 0.0833}s`
                    }}
                />
            ))}
            <style>{`
                @keyframes spinner-fade {
                    0% { opacity: 1; }
                    100% { opacity: 0.15; }
                }
            `}</style>
        </div>
    );
};

const HomeHero = () => {

    return (
        <div className="w-full flex flex-col items-center">
            {/* Section 1: Hero */}
            {/* Section 1: Hero */}
            <section className="min-h-screen w-full flex items-center px-6 py-20 relative bg-black">
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
                    @keyframes bounce-slight {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                    }
                    .animate-bounce-slight {
                        animation: bounce-slight 2s infinite ease-in-out;
                    }
                `}</style>
            </section >

            {/* Section 2: Why We're Different */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden bg-black/40 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>

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



            {/* Section 4: Integrations Section */}
            <section className="w-full py-32 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0B1A] to-black -z-10"></div>

                {/* 2 Rings Visual - Absolute Centered Background */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                    <div className="relative w-[800px] h-[800px] flex items-center justify-center">
                        <div className="absolute w-full h-full rounded-full animate-[spin_60s_linear_infinite]">
                            {[...Array(18)].map((_, i) => {
                                // Even distribution around the full circle
                                const angle = (i * 360) / 18;

                                const icons = [platform1, platform2, platform3];
                                const icon = icons[i % 3];

                                return (
                                    <div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 flex items-center justify-center p-3 bg-black border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform"
                                        style={{
                                            transform: `rotate(${angle}deg) translateX(400px) rotate(-${angle}deg)`,
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
                        <div className="absolute w-[600px] h-[600px] rounded-full animate-[spin_80s_linear_infinite_reverse]">
                            {[...Array(12)].map((_, i) => {
                                // Inner circle distribution
                                const angle = (i * 360) / 12;

                                const icons = [platform1, platform2, platform3];
                                const icon = icons[(i + 1) % 3];

                                return (
                                    <div
                                        key={`inner-${i}`}
                                        className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 flex items-center justify-center p-2.5 bg-black border border-white/5 rounded-xl shadow-lg opacity-70"
                                        style={{
                                            transform: `rotate(${angle}deg) translateX(300px) rotate(-${angle}deg)`,
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
                        Connects to <br className="hidden md:block" /> Verification Services
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Direct integration with Jumio, Onfido, and Socure for identity. Screening via World-Check, Dow Jones, and LexisNexis. Core system connections to Salesforce, banking platforms, and custom CRM systems.
                    </p>
                </div>
            </section>

            {/* Section 5: Community Section */}
            <section
                className="w-full relative py-32 overflow-hidden"
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
