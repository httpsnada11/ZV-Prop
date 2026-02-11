import React from 'react';

const HomeHero = () => {
    return (
        <div className="w-full flex flex-col items-center">
            {/* Section 1: Hero */}
            <section className="min-h-[80vh] flex flex-col items-center justify-center space-y-12 px-6 py-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-5xl">
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

                <div className="flex items-center justify-center pt-8">
                    <div className="p-[1px] rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#D63384] to-[#712CF9]">
                        <button className="px-10 py-4 rounded-full bg-black/80 backdrop-blur-sm text-white text-base font-bold tracking-wider uppercase whitespace-nowrap hover:bg-black transition-colors">
                            Start Challenges
                        </button>
                    </div>
                </div>

                <div className="pt-12 flex flex-col items-center gap-2 text-gray-500 cursor-pointer animate-bounce">
                    <span className="text-sm font-medium uppercase tracking-[0.2em]">Discover More</span>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Section 2: Features/Stats */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-[2px] border-t border-white/10 px-6 py-24 mt-20">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-white/5 bg-white/5 hover:border-white/10 transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF1B6B] to-[#D63384] flex items-center justify-center mb-6">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v20M2 12h20" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Elite Capital</h3>
                        <p className="text-gray-400">Access up to $500k in funding with industry-leading profit splits.</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-white/5 bg-white/5 hover:border-white/10 transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D63384] to-[#712CF9] flex items-center justify-center mb-6">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Instant Payouts</h3>
                        <p className="text-gray-400">Get your profit sharing processed within 24 hours of request.</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-white/5 bg-white/5 hover:border-white/10 transition-all">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#712CF9] to-[#FF1B6B] flex items-center justify-center mb-6">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Advanced Tools</h3>
                        <p className="text-gray-400">Trade with institutional-grade platforms and lightning fast execution.</p>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Level Up?</h2>
                    <button className="px-12 py-5 rounded-full bg-white text-black font-extrabold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                        Join the Program
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomeHero;
