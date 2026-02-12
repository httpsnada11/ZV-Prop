import React, { useState } from 'react';
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
    const [activeStep, setActiveStep] = useState('2 step');
    const [activeBranding, setActiveBranding] = useState('ZV-Prop');
    const [activeSize, setActiveSize] = useState('50K');

    const pricingData = {
        'Zero': {
            '5K': { price: '12', target: '$250 (5%)', dailyLoss: '4%', maxLoss: '8%', days: '3 days' },
            '10K': { price: '24', target: '$500 (5%)', dailyLoss: '4%', maxLoss: '8%', days: '3 days' },
            '25K': { price: '60', target: '$1,250 (5%)', dailyLoss: '4%', maxLoss: '8%', days: '3 days' },
            '50K': { price: '120', target: '$2,500 (5%)', dailyLoss: '4%', maxLoss: '8%', days: '3 days' },
            '100K': { price: '220', target: '$5,000 (5%)', dailyLoss: '4%', maxLoss: '8%', days: '3 days' },
        },
        '1 step': {
            '5K': { price: '28', target: '$500 (10%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
            '10K': { price: '56', target: '$1,000 (10%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
            '25K': { price: '115', target: '$2,500 (10%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
            '50K': { price: '240', target: '$5,000 (10%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
            '100K': { price: '450', target: '$10,000 (10%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
        },
        '2 step': {
            '5K': { price: '32', target: '$400 (8%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
            '10K': { price: '64', target: '$800 (8%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
            '25K': { price: '139', target: '$2,000 (8%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
            '50K': { price: '289', target: '$4,000 (8%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
            '100K': { price: '549', target: '$8,000 (8%)', dailyLoss: '5%', maxLoss: '10%', days: '3 days' },
        }
    };

    const currentData = pricingData[activeStep][activeSize];

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

            {/* Section 2: Features/Stats */}
            {/* Section 2: Features/Stats */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 mt-20">
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
            </section >

            {/* Section 3: Pricing Table */}
            {/* Section 3: Pricing Table */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 bg-black/40 backdrop-blur-sm">
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
                                { label: 'Profit Target', s1: currentData.target, s2: '$2,500 (5%)', s3: '-' },
                                { label: 'Maximum Loss', s1: currentData.maxLoss, s2: currentData.maxLoss, s3: currentData.maxLoss },
                                { label: 'Maximum Daily Loss', s1: currentData.dailyLoss, s2: currentData.dailyLoss, s3: currentData.dailyLoss },
                                { label: 'Minimum Trading Days', s1: currentData.days, s2: currentData.days, s3: '-' },
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
                                <span className="text-4xl font-black text-white">${currentData.price}</span>
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
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                        <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Integrations</span>
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
