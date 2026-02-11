import React, { useState } from 'react';
import heroImage from '../assets/images/ctabgr2.png';

const HomeHero = () => {
    const [activeStep, setActiveStep] = useState('2 step');
    const [activeBranding, setActiveBranding] = useState('ZV-Prop');
    const [activeSize, setActiveSize] = useState('50K');

    const pricingData = {
        '5K': { price: '32', target: '$400 (8%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
        '10K': { price: '64', target: '$800 (8%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
        '25K': { price: '139', target: '$2,000 (8%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
        '50K': { price: '289', target: '$4,000 (8%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
        '100K': { price: '549', target: '$8,000 (8%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
    };

    return (
        <div className="w-full flex flex-col items-center">
            {/* Section 1: Hero */}
            <section
                className="min-h-[80vh] w-full flex flex-col items-center justify-center space-y-12 px-6 py-20 animate-in fade-in slide-in-from-bottom-8 duration-1000"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.15] max-w-4xl text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712CF9] via-[#D63384] to-[#FF1B6B]">
                        STOP TRADING SMALL.
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712CF9]/90 via-[#D63384]/90 to-[#FF1B6B]/90">
                        SCALE WITH OUR CAPITAL.
                    </span>
                </h1>

                <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto text-center leading-relaxed font-normal tracking-tight">
                    Transform your trading journey with our exclusive prop firm program,
                    featuring rare opportunities and unique strategies for elite traders.
                </p>

                <div className="flex items-center justify-center pt-6">
                    <div className="p-[1px] rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#D63384] to-[#712CF9]">
                        <button className="px-8 py-3 rounded-full bg-black/80 backdrop-blur-sm text-white text-sm font-bold tracking-wider uppercase whitespace-nowrap hover:bg-black transition-colors">
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
            <section className="min-h-screen w-full flex flex-col items-center justify-center border-t border-white/10 px-6 py-24 mt-20">
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

                <div className="mt-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Level Up?</h2>

                    <div className="p-[1px] rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#D63384] to-[#712CF9] inline-block">
                        <button className="px-10 py-4 rounded-full bg-black/80 backdrop-blur-sm text-white font-extrabold uppercase tracking-widest hover:bg-black transition-colors">
                            Join the Program
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 3: Pricing Table */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 bg-black/40 backdrop-blur-sm border-t border-white/10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                        Buckle Up, Your Journey Starts Here!
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                        We evaluate according to objectives that best fit your style. From beginners to
                        experts, traders from 195+ countries trust our platform.
                    </p>
                </div>

                {/* Selection Tabs */}
                <div className="flex flex-col items-center gap-6 mb-12">
                    <div className="flex p-1 bg-white/5 rounded-full border border-white/10">
                        {['Zero', '1 step', '2 step'].map(step => (
                            <button
                                key={step}
                                onClick={() => setActiveStep(step)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeStep === step ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                            >
                                {step}
                            </button>
                        ))}
                    </div>

                    <div className="flex p-1 bg-white/5 rounded-full border border-white/10">
                        {['ZV-Prop', 'ZV-Prop Pro'].map(brand => (
                            <button
                                key={brand}
                                onClick={() => setActiveBranding(brand)}
                                className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${activeBranding === brand ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                            >
                                {brand}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 p-1 bg-white/5 rounded-full border border-white/10">
                        {['$5K', '$10K', '$25K', '$50K', '$100K'].map(size => (
                            <button
                                key={size}
                                onClick={() => setActiveSize(size.replace('$', ''))}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeSize === size.replace('$', '') ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Pricing Card */}
                <div className="w-full max-w-5xl rounded-[2.5rem] bg-[#0A0B1A] border border-white/10 overflow-hidden relative shadow-2xl">
                    {/* Header Row */}
                    <div className="grid grid-cols-2 bg-gradient-to-r from-[#4A4AF4]/20 to-[#8050E0]/20 p-8 pt-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>
                        <div className="space-y-1">
                            <h4 className="text-2xl font-bold">Evaluation Stage</h4>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">(Student & Practitioner)</p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-2xl font-bold">Master Stage</h4>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">(Master)</p>
                        </div>

                        {/* Reward Cycles banner overlay effect */}
                        <div className="col-span-2 mt-8 py-4 bg-[#0F1025] rounded-2xl border border-white/5 flex flex-wrap justify-center items-center gap-6 px-4">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-2">Reward Cycles</span>
                            {[
                                { label: 'Tuesday', val: '60%' },
                                { label: 'Bi-weekly', val: '80%' },
                                { label: 'On Demand', val: '90%' },
                                { label: 'Monthly', val: '100%' }
                            ].map(item => (
                                <div key={item.label} className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><path d="M20 6L9 17L4 12" /></svg>
                                    </div>
                                    <span className="text-xs font-medium text-white">{item.label} {item.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="p-8 pt-12">
                        {/* Step Numbers & Labels */}
                        <div className="grid grid-cols-3 mb-16 relative">
                            {/* Connector Line */}
                            <div className="absolute top-3 left-[15%] right-[15%] h-0.5 bg-white/10 -z-10"></div>

                            {[
                                { num: 1, label: 'Student' },
                                { num: 2, label: 'Practitioner' },
                                { num: 3, label: 'Master' }
                            ].map(step => (
                                <div key={step.num} className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-[#1A1B3A] border border-white/10 flex items-center justify-center text-sm font-bold mb-4 shadow-xl">
                                        {step.num}
                                    </div>
                                    <span className="text-xl font-bold tracking-tight">{step.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Metrics Rows */}
                        <div className="space-y-6">
                            {[
                                { label: 'Profit Target', s1: pricingData[activeSize].target, s2: '$2,500 (5%)', s3: '-' },
                                { label: 'Maximum Loss', s1: '10%', s2: '10%', s3: '10%' },
                                { label: 'Maximum Daily Loss', s1: '5%', s2: '5%', s3: '5%' },
                                { label: 'Minimum Trading Days', s1: '3 days', s2: '3 days', s3: '-' },
                                { label: 'Leverage', s1: '1:100', s2: '1:100', s3: '1:100' }
                            ].map(row => (
                                <div key={row.label} className="grid grid-cols-3 items-center py-2 relative">
                                    <div className="absolute left-0 text-left text-gray-500 text-sm font-medium pr-4 w-[25%]- md:w-auto">
                                        {row.label}
                                    </div>
                                    <div className="text-center font-bold text-lg">{row.s1}</div>
                                    <div className="text-center font-bold text-lg text-gray-400">{row.s2}</div>
                                    <div className="text-center font-bold text-lg text-gray-500">{row.s3}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer / Buy Row */}
                    <div className="p-8 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-8 bg-[#0F1025]/50">
                        <div className="flex items-baseline gap-4">
                            <span className="text-gray-500 text-sm font-medium uppercase tracking-widest">Account size:</span>
                            <span className="text-5xl font-black text-white">{activeSize.toLowerCase()}</span>
                        </div>

                        <div className="flex items-center gap-12">
                            <div className="text-right">
                                <span className="text-gray-500 text-xs font-bold uppercase block mb-1">Price:</span>
                                <span className="text-4xl font-black text-white">${pricingData[activeSize].price}</span>
                                <p className="text-[10px] text-blue-400 mt-1">Add-on available: Swap Free (+10%)</p>
                            </div>

                            <div className="p-[1px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                                <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                    Buy Challenge
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeHero;
