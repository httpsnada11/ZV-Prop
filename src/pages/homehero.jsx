import React from 'react';

const HomeHero = () => {
    return (
        <div className="space-y-6 max-w-4xl flex flex-col items-center mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1B6B] via-[#D63384] to-[#712CF9]">
                    STOP TRADING SMALL.
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1B6B]/80 via-[#D63384]/80 to-[#712CF9]/80">
                    SCALE WITH OUR CAPITAL.
                </span>
            </h1>

            <p className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
                Transform your trading journey with our exclusive prop firm program,
                featuring rare opportunities and unique strategies for elite traders.
            </p>

            <div className="flex items-center justify-center pt-2">
                <div className="p-[1px] rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#D63384] to-[#712CF9]">
                    <button className="px-8 py-3 rounded-full bg-black/80 backdrop-blur-sm text-white text-sm font-bold tracking-wider uppercase whitespace-nowrap">
                        Start Challenges
                    </button>
                </div>
            </div>

            <div className="pt-6 flex flex-col items-center gap-2 text-gray-500 cursor-pointer">
                <span className="text-sm font-medium uppercase tracking-[0.2em]">Discover More</span>
                <div className="animate-bounce">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
