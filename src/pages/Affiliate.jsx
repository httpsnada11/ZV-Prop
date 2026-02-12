import React, { useState } from 'react';
import { ChevronDown, TrendingUp, Users, DollarSign, Gift, Zap, Award, Target, BarChart3, Shield, Rocket, CheckCircle2, UserPlus, Share2, Activity, Wallet } from 'lucide-react';
import heroImage from '../assets/images/ctabgr2.png';
import globeImage from '../assets/images/globev1.png';

const Affiliate = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const approachSteps = [
        {
            number: 1,
            title: 'Join Our Program',
            description: 'Apply to become an affiliate partner and get access to your unique referral links.',
            icon: UserPlus,
            position: 'left'
        },
        {
            number: 2,
            title: 'Share Your Link',
            description: 'Promote ZV-Prop to your audience using your custom affiliate link or discount code.',
            icon: Share2,
            position: 'right'
        },
        {
            number: 3,
            title: 'Track Performance',
            description: 'Monitor your referrals, conversions, and earnings through our comprehensive dashboard.',
            icon: Activity,
            position: 'left'
        },
        {
            number: 4,
            title: 'Get Paid',
            description: 'Receive weekly payouts via your preferred payment method when you reach the minimum threshold.',
            icon: Wallet,
            position: 'right'
        }
    ];

    const commissionTiers = [
        {
            percentage: '10%',
            title: 'Starter Tier',
            subtitle: 'Perfect for getting started',
            requirements: [
                '1-10 referrals per month',
                'Earn on all challenge purchases',
                'Monthly payouts',
                'Basic affiliate dashboard'
            ],
            gradient: 'from-[#712CF9]/20 to-[#D63384]/20',
            borderGradient: 'from-[#712CF9] to-[#D63384]'
        },
        {
            percentage: '15%',
            title: 'Pro Tier',
            subtitle: 'For serious affiliates',
            requirements: [
                '11-50 referrals per month',
                'Priority support',
                'Bi-weekly payouts',
                'Advanced analytics & tools'
            ],
            gradient: 'from-[#D63384]/20 to-[#FF1B6B]/20',
            borderGradient: 'from-[#D63384] to-[#FF1B6B]',
            featured: true
        },
        {
            percentage: '20%',
            title: 'Elite Tier',
            subtitle: 'Maximum earning potential',
            requirements: [
                '50+ referrals per month',
                'Dedicated account manager',
                'Weekly payouts',
                'Custom marketing materials'
            ],
            gradient: 'from-[#FF1B6B]/20 to-[#712CF9]/20',
            borderGradient: 'from-[#FF1B6B] to-[#712CF9]'
        }
    ];

    const benefits = [
        {
            icon: DollarSign,
            title: 'Passive Income',
            description: 'Earn recurring commissions on every challenge your referrals purchase'
        },
        {
            icon: TrendingUp,
            title: 'High Conversion',
            description: 'Industry-leading conversion rates with our proven trading challenges'
        },
        {
            icon: Users,
            title: 'Lifetime Cookies',
            description: 'Your referrals are tracked forever - earn on all their future purchases'
        },
        {
            icon: BarChart3,
            title: 'Real-Time Analytics',
            description: 'Track clicks, conversions, and earnings with our advanced dashboard'
        },
        {
            icon: Zap,
            title: 'Fast Payouts',
            description: 'Get paid quickly with multiple payout options and low minimums'
        },
        {
            icon: Gift,
            title: 'Exclusive Bonuses',
            description: 'Access special promotions and bonus structures for top performers'
        }
    ];

    const infoCards = [
        {
            icon: Rocket,
            title: 'How It Works',
            description: 'Sign up for free, get your unique referral link, share it with traders, and earn commissions on every challenge purchase. It\'s that simple!',
            gradient: 'from-[#712CF9]/10 to-[#D63384]/10'
        },
        {
            icon: Target,
            title: 'Earning Potential',
            description: 'With our competitive commission rates and high-value challenges, top affiliates earn $5,000+ per month. The sky\'s the limit!',
            gradient: 'from-[#D63384]/10 to-[#FF1B6B]/10'
        },
        {
            icon: Shield,
            title: 'Full Support',
            description: 'Get access to marketing materials, dedicated support, and proven strategies to maximize your affiliate success.',
            gradient: 'from-[#FF1B6B]/10 to-[#712CF9]/10'
        }
    ];

    const faqs = [
        {
            question: 'How do I become an affiliate?',
            answer: 'Simply click the "Join Now" button, fill out the registration form, and you\'ll get instant access to your affiliate dashboard with your unique referral link.'
        },
        {
            question: 'When and how do I get paid?',
            answer: 'Payouts are processed based on your tier level (monthly, bi-weekly, or weekly). We support multiple payment methods including bank transfer, PayPal, and cryptocurrency. Minimum payout is $100.'
        },
        {
            question: 'What marketing materials do you provide?',
            answer: 'We provide banners, landing pages, email templates, social media content, and video assets. Elite tier members get custom materials tailored to their audience.'
        },
        {
            question: 'Is there a limit to how much I can earn?',
            answer: 'No! There\'s no cap on your earnings. The more qualified traders you refer, the more you earn. Our top affiliates consistently earn $10,000+ per month.'
        },
        {
            question: 'Do I need to be a trader to join?',
            answer: 'No trading experience required! However, understanding prop trading helps you better promote our challenges. We provide educational resources to help you succeed.'
        }
    ];

    return (
        <div
            className="w-full flex flex-col items-center relative"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Global overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            {/* Hero Section */}
            <section className="min-h-[85vh] w-full flex flex-col items-center justify-center space-y-8 px-6 py-20 relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>

                <div className="relative z-10 flex flex-col items-center space-y-8 max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                        <Award className="w-4 h-4 text-[#FF1B6B]" />
                        <span className="text-sm font-semibold text-gray-300">Earn Up To 20% Commission</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712CF9] via-[#D63384] to-[#FF1B6B]">
                            Become a ZV-Prop
                        </span>
                        <br />
                        <span className="text-white">
                            Affiliate Partner
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
                        Join the most rewarding prop trading affiliate program. Earn generous commissions by referring traders to our industry-leading challenges and funding opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                        <div className="p-[1px] rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#D63384] to-[#712CF9]">
                            <button className="px-8 py-4 rounded-full bg-black/80 backdrop-blur-sm text-white text-sm font-bold tracking-wider uppercase whitespace-nowrap hover:bg-black transition-colors">
                                Join Now - It's Free
                            </button>
                        </div>
                        <button className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm font-bold tracking-wider uppercase hover:bg-white/10 transition-colors">
                            View Commission Structure
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 w-full max-w-3xl">
                        {[
                            { label: 'Lifetime Cookies', value: '∞' },
                            { label: 'Avg. Commission', value: '$150' },
                            { label: 'Payout Threshold', value: '$100' }
                        ].map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF1B6B] to-[#712CF9]">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach Section - Zigzag Timeline */}
            <section className="w-full px-6 py-20 md:py-32 relative z-10 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
                            Our Approach
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                            Four simple steps to start earning with our affiliate program
                        </p>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative max-w-5xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#712CF9] via-[#D63384] to-[#FF1B6B] hidden md:block"></div>

                        {/* Steps */}
                        <div className="space-y-16 md:space-y-24">
                            {approachSteps.map((step, idx) => (
                                <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${step.position === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Card */}
                                    <div className={`w-full md:w-[calc(50%-3rem)] ${step.position === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#3D1F47]/80 to-[#1a0a1f]/80 backdrop-blur-sm border border-white/10 hover:border-[#D63384]/50 transition-all duration-300 group">
                                            <div className={`flex items-start gap-4 ${step.position === 'left' ? 'md:flex-row-reverse md:text-right' : ''}`}>
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#712CF9] to-[#FF1B6B] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                    <step.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{step.title}</h3>
                                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">{step.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Circle Number */}
                                    <div className="relative z-10 flex items-center justify-center shrink-0">
                                        <div className="w-16 h-16 rounded-full border-4 border-[#D63384] bg-black flex items-center justify-center">
                                            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#712CF9] to-[#FF1B6B]">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Spacer for opposite side */}
                                    <div className="hidden md:block w-[calc(50%-3rem)]"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Commission Tiers Section */}
            <section className="w-full px-6 py-20 md:py-32 relative z-10 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712CF9] via-[#D63384] to-[#FF1B6B]">
                                Commission
                            </span>
                            <span className="text-white"> Structure</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                            Scale your earnings as you grow. The more you refer, the more you earn.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {commissionTiers.map((tier, idx) => (
                            <div
                                key={idx}
                                className={`relative rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${tier.featured
                                    ? 'border-[#D63384] bg-gradient-to-br from-[#D63384]/10 to-[#FF1B6B]/10 shadow-[0_0_40px_rgba(214,51,132,0.3)]'
                                    : 'border-white/10 bg-white/5 hover:border-white/20'
                                    }`}
                            >
                                {tier.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D63384] to-[#FF1B6B] text-white text-xs font-bold uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <div className={`text-6xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r ${tier.borderGradient}`}>
                                        {tier.percentage}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
                                    <p className="text-gray-400 text-sm">{tier.subtitle}</p>
                                </div>

                                <ul className="space-y-4">
                                    {tier.requirements.map((req, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-gray-300 text-sm">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why It's a Win-Win Section */}
            <section className="w-full px-6 py-20 md:py-32 relative z-10 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
                            Why Partner With Us?
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                            We've built the most rewarding affiliate program in prop trading
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {benefits.map((benefit, idx) => (
                            <div
                                key={idx}
                                className="p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.07] group backdrop-blur-sm"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#712CF9] to-[#FF1B6B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <benefit.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Affiliate Info Cards */}
            <section className="w-full px-6 py-20 md:py-32 relative z-10 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {infoCards.map((card, idx) => (
                            <div
                                key={idx}
                                className={`relative p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-br ${card.gradient} overflow-hidden group hover:border-white/20 transition-all backdrop-blur-sm`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#712CF9] to-[#FF1B6B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <card.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full px-6 py-20 md:py-32 relative overflow-hidden z-10 border-t border-white/10">
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                        <span className="text-white">Ready to Start </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712CF9] via-[#D63384] to-[#FF1B6B]">
                            Earning?
                        </span>
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        Join hundreds of successful affiliates earning passive income with ZV-Prop
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <div className="p-[1px] rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#D63384] to-[#712CF9]">
                            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#FF1B6B] to-[#712CF9] text-white font-bold text-base uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_30px_rgba(255,27,107,0.4)]">
                                Get Started Now
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
                        {[
                            { icon: Users, label: '1000+ Active Affiliates' },
                            { icon: DollarSign, label: '$2M+ Paid Out' },
                            { icon: TrendingUp, label: '95% Satisfaction' },
                            { icon: Zap, label: '24/7 Support' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <item.icon className="w-8 h-8 text-[#FF1B6B]" />
                                <span className="text-xs text-gray-400 text-center font-medium">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full px-6 py-20 md:py-32 relative z-10 border-t border-white/10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Everything you need to know about our affiliate program
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="group border-b border-transparent">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full py-6 flex items-center justify-between text-left group-hover:opacity-80 transition-all"
                                >
                                    <span className="text-white font-semibold text-base md:text-lg pr-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#712CF9] group-hover:to-[#FF1B6B] transition-all">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#D63384]' : 'group-hover:text-white'}`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        {faq.answer}
                                    </p>
                                </div>

                                {/* Gradient Divider */}
                                <div className="h-[1px] w-full bg-gradient-to-r from-[#712CF9] via-[#D63384] to-[#FF1B6B] opacity-20"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Network Section */}
            {/* Global Network Section */}
            <section className="w-full px-6 py-20 md:py-32 relative z-10 border-t border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>

                <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
                    <div className="relative w-full max-w-2xl aspect-square md:aspect-video flex items-center justify-center">
                        {/* Globe Image */}
                        <img
                            src={globeImage}
                            alt="Global Network"
                            className="w-full h-full object-contain opacity-80 animate-in fade-in zoom-in duration-1000"
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 pt-20">
                            <h3 className="text-3xl md:text-5xl font-black text-white drop-shadow-xl">
                                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712CF9] to-[#FF1B6B]">Global Network</span>
                            </h3>
                            <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto drop-shadow-md bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full border border-white/5">
                                Affiliates from over 100 countries trust ZV-Prop to deliver results
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Affiliate;
