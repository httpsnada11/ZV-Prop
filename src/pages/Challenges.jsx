import React, { useState } from 'react';
import { Check, Info, ChevronRight, X } from 'lucide-react';

const CHALLENGE_DATA = {
    'zero': {
        name: 'Zero',
        modes: {
            'standard': {
                name: 'Standard',
                phases: [
                    { name: 'Master', type: 'Funded' }
                ],
                targets: ['-'],
                maxLoss: ['5%'],
                dailyLoss: ['3%'],
                minDays: ['7 days'],
                consistency: ['15%'],
                leverage: ['1:50'],
                rewardCycles: [
                    { text: 'Bi-weekly 95%' }
                ],
                prices: {
                    '5k': 69, '10k': 129, '25k': 199, '50k': 299, '100k': 499, '200k': 899
                }
            }
        }
    },
    '1-step': {
        name: '1 Step',
        modes: {
            'standard': {
                name: 'Standard',
                phases: [
                    { name: 'Student', type: 'Evaluation' },
                    { name: 'Master', type: 'Funded' }
                ],
                targets: ['10%', '-'],
                maxLoss: ['6%', '6%'],
                dailyLoss: ['3%', '3%'],
                minDays: ['3 days', '-'],
                leverage: ['1:30', '1:30'],
                rewardCycles: [
                    { text: 'Bi-weekly 95%' }
                ],
                prices: {
                    '5k': 32, '10k': 60, '25k': 139, '50k': 319, '100k': 500, '200k': 950
                }
            }
        }
    },
    '2-step': {
        name: '2 Step',
        modes: {
            'zv-prop': {
                name: 'ZV Prop',
                phases: [
                    { name: 'Student', type: 'Evaluation' },
                    { name: 'Practitioner', type: 'Evaluation' },
                    { name: 'Master', type: 'Funded' }
                ],
                targets: ['8%', '5%', '-'],
                maxLoss: ['10%', '10%', '10%'],
                dailyLoss: ['5%', '5%', '5%'],
                minDays: ['3 days', '3 days', '-'],
                leverage: ['1:100', '1:100', '1:100'],
                rewardCycles: [
                    { text: 'Tuesday 60%' },
                    { text: 'Bi-weekly 80%' },
                    { text: 'On Demand 90%' },
                    { text: 'Monthly 100%' }
                ],
                prices: {
                    '5k': 32, '10k': 60, '25k': 139, '50k': 289, '100k': 499, '200k': 950
                }
            },
            'zv-prop-pro': {
                name: 'ZV Prop Pro',
                phases: [
                    { name: 'Student', type: 'Evaluation' },
                    { name: 'Practitioner', type: 'Evaluation' },
                    { name: 'Master', type: 'Funded' }
                ],
                targets: ['6%', '6%', '-'],
                maxLoss: ['6%', '6%', '6%'],
                dailyLoss: ['3%', '3%', '3%'],
                minDays: ['1 day', '1 day', '-'],
                leverage: ['1:100', '1:100', '1:100'],
                rewardCycles: [
                    { text: 'Weekly 80%' },
                    { text: 'Daily 80%', badge: 'Beta' }
                ],
                prices: {
                    '5k': 29, '10k': 55, '25k': 129, '50k': 269, '100k': 479, '200k': 899
                }
            }
        }
    }
};

const ACCOUNT_SIZES = ['5k', '10k', '25k', '50k', '100k', '200k'];

const Challenges = () => {
    const [tier, setTier] = useState('2-step');
    const [mode, setMode] = useState('zv-prop');
    const [size, setSize] = useState('50k');

    const currentTierData = CHALLENGE_DATA[tier];
    const currentModeKey = (tier === '1-step' || tier === 'zero') ? 'standard' : mode;
    const currentData = currentTierData.modes[currentModeKey];

    const price = currentData.prices[size] || '-';
    const columns = currentData.phases;

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 pb-20 pt-10">

            <div className="text-center py-16 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
                    Buckle Up, Your Journey Starts Here!
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                    We evaluate according to objectives that best fit your style. From beginners to experts, traders from 195+ countries trust our platform.
                </p>
            </div>

            {/* Growth Calculator Section (Commented out) 
            <div className="max-w-5xl mx-auto px-4 mb-20">
                <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-6 md:p-10 backdrop-blur-sm relative overflow-hidden">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
                            Discover how much you can grow your account!
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Every trader's journey is unique. Use our growth calculator to see how much your account could
                            grow and discover the potential of trading with ZV Prop.
                        </p>
                    </div>

                    <GrowthCalculator />
                </div>
            </div>
            */}

            <div className="max-w-6xl mx-auto px-4 md:px-8">

                <div className="flex flex-col items-center gap-8 mb-12">

                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-gray-900/80 p-1.5 rounded-full border border-gray-800 flex items-center shadow-lg backdrop-blur-md">
                            <button
                                onClick={() => setTier('zero')}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${tier === 'zero' ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'text-gray-400 hover:text-white'}`}
                            >
                                Zero
                            </button>
                            <button
                                onClick={() => setTier('1-step')}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${tier === '1-step' ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'text-gray-400 hover:text-white'}`}
                            >
                                1 step
                            </button>
                            <button
                                onClick={() => setTier('2-step')}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${tier === '2-step' ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'text-gray-400 hover:text-white'}`}
                            >
                                2 step
                            </button>
                        </div>

                        {tier === '2-step' && (
                            <div className="bg-gray-900/80 p-1.5 rounded-full border border-gray-800 flex items-center animate-in fade-in zoom-in duration-300 shadow-lg backdrop-blur-md">
                                <button
                                    onClick={() => setMode('zv-prop')}
                                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${mode === 'zv-prop' ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'text-gray-400 hover:text-white'}`}
                                >
                                    ZV Prop
                                </button>
                                <button
                                    onClick={() => setMode('zv-prop-pro')}
                                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${mode === 'zv-prop-pro' ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'text-gray-400 hover:text-white'}`}
                                >
                                    ZV Prop Pro
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                        {ACCOUNT_SIZES.map((s) => (
                            <button
                                key={s}
                                onClick={() => setSize(s)}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-300 ${size === s
                                    ? 'bg-blue-600/20 border-blue-500 text-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.2)]'
                                    : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300'
                                    }`}
                            >
                                ${s.toUpperCase()}
                            </button>
                        ))}
                    </div>

                </div>

                <div className="bg-gradient-to-b from-blue-900/40 to-blue-950/20 rounded-3xl p-8 border border-blue-500/30 backdrop-blur-sm relative overflow-visible mb-12 shadow-2xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/10 blur-[100px] pointer-events-none" />

                    <div className="relative z-10 mb-8">
                        <div className="flex justify-center flex-wrap gap-8 md:gap-16 items-center mb-8">
                            {tier === '2-step' ? (
                                <>
                                    <div className="text-center w-full md:w-auto">
                                        <div className="text-2xl font-bold text-white mb-1">
                                            Evaluation Stage
                                        </div>
                                        <div className="text-sm text-blue-300 font-medium">(Student & Practitioner)</div>
                                    </div>
                                    <div className="text-center w-full md:w-auto">
                                        <div className="text-2xl font-bold text-white mb-1">
                                            Master Stage
                                        </div>
                                        <div className="text-sm text-blue-300 font-medium">(Master)</div>
                                    </div>
                                </>
                            ) : (
                                currentData.phases.map((phase, idx) => (
                                    <div key={idx} className="text-center w-full md:w-auto">
                                        <div className="text-2xl font-bold text-white mb-1">
                                            {phase.name === 'Master' ? 'Master Stage' : 'Evaluation Stage'}
                                        </div>
                                        <div className="text-sm text-blue-300 font-medium">({phase.name})</div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-2 mb-4">
                        <span className="text-gray-400 text-sm uppercase tracking-wider">Reward Cycles</span>
                        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-white">
                            {currentData.rewardCycles?.map((cycle, idx) => (
                                <div key={idx} className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                                    <Check size={14} className="text-black bg-white rounded-full p-0.5" />
                                    {cycle.text}
                                    {cycle.badge && <span className="bg-white text-black text-[10px] px-1 py-0.5 rounded font-bold">{cycle.badge}</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                            <thead>
                                <tr>
                                    <th className="p-6 text-gray-500 font-medium w-1/3 text-lg"></th>
                                    {columns.map((col, idx) => (
                                        <th key={idx} className="p-6 text-center text-white font-semibold text-lg border-b border-gray-800/50 pb-8">
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-sm text-gray-400 font-mono shadow-inner">
                                                    {idx + 1}
                                                </div>
                                                <span>{col.name}</span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800/50">
                                <Row label="Profit Target" tooltip="The target profit to reach the next stage" values={currentData.targets} />
                                <Row label="Maximum Loss" tooltip="Overall maximum drawdown allowed" values={currentData.maxLoss} />
                                <Row label="Maximum Daily Loss" tooltip="Daily maximum drawdown allowed" values={currentData.dailyLoss} />
                                <Row label="Minimum Trading Days" tooltip="Minimum days required to trade" values={currentData.minDays} />
                                {currentData.consistency && (
                                    <Row label="Consistency on Rewards" tooltip="Required consistency for payouts" values={currentData.consistency} />
                                )}
                                <Row label="Leverage" tooltip="Leverage applied to the account" values={currentData.leverage} />
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8 animate-in slide-in-from-bottom-5 duration-700">
                    <div className="flex items-baseline gap-3">
                        <span className="text-gray-400 text-xl">Account size:</span>
                        <span className="text-white text-5xl font-bold font-mono tracking-tight">${size.replace('k', ',000')}</span>
                    </div>

                    <div className="flex flex-col items-end gap-2 text-right">
                        <div className="flex items-baseline gap-4 justify-end">
                            <span className="text-gray-400 text-xl">Price:</span>
                            <span className="text-white text-6xl font-bold tracking-tighter">${price}</span>
                        </div>
                        <div className="text-blue-400 text-sm font-medium flex items-center gap-1 justify-end">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                            Add-on available: Swap Free (+10%)
                        </div>

                        <button className="mt-6 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white px-12 py-4 rounded-xl text-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1 flex items-center gap-3 group">
                            Buy Challenge <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

const Row = ({ label, values, tooltip }) => (
    <tr className="group hover:bg-white/5 transition-colors">
        <td className="p-6 text-gray-400 font-medium flex items-center gap-2 cursor-help group-hover:text-gray-200 text-lg">
            <div className="p-1.5 rounded-full bg-gray-800/50 text-gray-500 group-hover:text-blue-400 transition-colors">
                <Info size={16} />
            </div>
            {label}
        </td>
        {values.map((val, idx) => (
            <td key={idx} className="p-6 text-center text-white text-xl font-semibold font-mono tracking-wide">
                {val}
            </td>
        ))}
    </tr>
);

const GrowthCalculator = () => {
    const [calcSize, setCalcSize] = useState(50000);
    const [timeIndex, setTimeIndex] = useState(2); // Default to 1 Year (index 2)
    const [profitIndex, setProfitIndex] = useState(2); // Default to 10% (index 2)

    const timeOptions = [
        { label: '0', months: 0 },
        { label: '4 Months', months: 4 },
        { label: '8 Months', months: 8 },
        { label: '1 Year', months: 12 },
        { label: '2 Years', months: 24 },
    ];

    const profitOptions = [1, 5, 10, 20];

    // Calculation Logic
    const calculateGrowth = () => {
        const months = timeOptions[timeIndex].months;
        const monthlyProfit = profitOptions[profitIndex] / 100;

        let balance = calcSize;
        let totalPayout = 0;
        const profitSplit = 0.95; // 95% split

        // Scaling points: 4, 8, 12, 16, 20, 24...
        // Scaling %: 25% (1st), 40% (2nd), 50% (3rd+)

        for (let m = 1; m <= months; m++) {
            // Calculate Profit & Payout
            const profit = balance * monthlyProfit;
            totalPayout += profit * profitSplit;

            // Apply Scaling AFTER profit calculation (at end of month 4, 8, etc.)
            if (m % 4 === 0) {
                let scalePercent = 0;
                const scaleCount = m / 4;

                if (scaleCount === 1) scalePercent = 0.25;
                else if (scaleCount === 2) scalePercent = 0.40;
                else scalePercent = 0.50;

                balance += balance * scalePercent;
            }
        }

        return { balance, totalPayout };
    };

    const { balance, totalPayout } = calculateGrowth();

    return (
        <div className="w-full">
            {/* Account Size Selector */}
            <div className="flex flex-col items-center mb-12">
                <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4">Account Size</div>
                <div className="flex flex-wrap justify-center gap-2">
                    {[5000, 10000, 25000, 50000, 100000, 200000].map(s => (
                        <button
                            key={s}
                            onClick={() => setCalcSize(s)}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${calcSize === s
                                ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] scale-105'
                                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white'
                                }`}
                        >
                            ${(s >= 1000 ? s / 1000 + 'k' : s)}
                        </button>
                    ))}
                </div>
                <div className="mt-6 text-gray-300 font-bold bg-gray-800/50 px-4 py-1.5 rounded-full border border-gray-700">
                    Reward Split <span className="text-blue-400 ml-2">95 : 5</span>
                </div>
            </div>

            {/* Sliders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
                {/* Time Period Slider */}
                <div className="bg-gray-800/30 p-6 md:p-8 rounded-2xl border border-white/5 relative">
                    <div className="flex justify-between mb-8 items-center">
                        <span className="text-white font-bold text-lg">Time Period</span>
                    </div>

                    <div className="relative px-2 mb-8">
                        <input
                            type="range"
                            min="0"
                            max="4"
                            step="1"
                            value={timeIndex}
                            onChange={(e) => setTimeIndex(parseInt(e.target.value))}
                            className="w-full h-3 bg-gray-700 rounded-full appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
                        />
                        {/* Markers */}
                        <div className="flex justify-between w-full px-1 absolute top-1/2 -translate-y-1/2 pointer-events-none">
                            {[0, 1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-3 h-3 rounded-full ${i <= timeIndex ? 'bg-blue-500' : 'bg-gray-600'}`}></div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between text-xs md:text-sm text-gray-500 font-medium px-1">
                        {timeOptions.map((opt, i) => (
                            <div key={i} className={`flex flex-col items-center gap-1 ${i === timeIndex ? 'text-blue-400 font-bold' : ''}`}>
                                <span>{opt.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Profit Target Slider */}
                <div className="bg-gray-800/30 p-6 md:p-8 rounded-2xl border border-white/5 relative">
                    <div className="flex justify-between mb-8 items-center">
                        <span className="text-white font-bold text-lg">Profit Target</span>
                        <span className="text-blue-400 font-mono bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">{profitOptions[profitIndex]}% / month</span>
                    </div>

                    <div className="relative px-2 mb-8">
                        <input
                            type="range"
                            min="0"
                            max="3"
                            step="1"
                            value={profitIndex}
                            onChange={(e) => setProfitIndex(parseInt(e.target.value))}
                            className="w-full h-3 bg-gray-700 rounded-full appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
                        />
                        {/* Markers */}
                        <div className="flex justify-between w-full px-1 absolute top-1/2 -translate-y-1/2 pointer-events-none">
                            {[0, 1, 2, 3].map(i => (
                                <div key={i} className={`w-3 h-3 rounded-full ${i <= profitIndex ? 'bg-blue-500' : 'bg-gray-600'}`}></div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between text-xs md:text-sm text-gray-500 font-medium px-1">
                        {profitOptions.map((opt, i) => (
                            <div key={i} className={`flex flex-col items-center gap-1 ${i === profitIndex ? 'text-blue-400 font-bold' : ''}`}>
                                <span>{opt}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Growth Box */}
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border border-white/5 flex flex-col justify-center relative overflow-hidden group hover:border-blue-500/30 transition-all">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="white"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" /></svg>
                    </div>

                    <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest text-center mb-8">Proj. Growth</h4>

                    <div className="flex justify-between items-end border-b border-white/5 pb-6 mb-6">
                        <span className="text-gray-400 text-sm font-medium">New Scaled Balance</span>
                        <span className="text-2xl md:text-3xl font-black text-blue-400 font-mono tracking-tight">
                            ${Math.round(balance).toLocaleString()}
                        </span>
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="text-gray-400 text-sm font-medium">Total Payout</span>
                        <span className="text-xl md:text-2xl font-bold text-green-400 font-mono tracking-tight">
                            ${Math.round(totalPayout).toLocaleString()}
                        </span>
                    </div>
                </div>

                {/* Scaling Percentage Box */}
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border border-white/5 flex flex-col justify-center">
                    <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest text-center mb-8">Scaling Logic</h4>
                    <div className="grid grid-cols-3 gap-4 text-center divide-x divide-white/5">
                        <div className="flex flex-col items-center gap-2 group">
                            <span className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors">25%</span>
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">1st Scaling</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group">
                            <span className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors">40%</span>
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">2nd Scaling</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group">
                            <span className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors">50%</span>
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">3rd+ Scaling</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Challenges;
