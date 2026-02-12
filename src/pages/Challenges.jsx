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

export default Challenges;
