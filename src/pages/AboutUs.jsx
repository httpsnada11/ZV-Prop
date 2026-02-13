import React from 'react';

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
        </div>
    );
};

export default AboutUs;
