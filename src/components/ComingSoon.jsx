import React from 'react';

const ComingSoon = ({ pageName }) => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-700">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1B6B] via-[#D63384] to-[#712CF9]">
                    {pageName}
                </span>
            </h1>
            <div className="flex flex-col items-center space-y-4">
                <p className="text-2xl md:text-3xl font-medium text-gray-400 tracking-widest uppercase">
                    Coming Soon
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-[#FF1B6B] via-[#D63384] to-[#712CF9] rounded-full animate-pulse" />
            </div>
            <p className="text-gray-500 text-lg max-w-md text-center">
                We're working hard to bring you something amazing. Stay tuned for updates!
            </p>
            <button
                onClick={() => window.location.href = '/'}
                className="px-8 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all active:scale-95 font-medium"
            >
                Back to Home
            </button>
        </div>
    );
};

export default ComingSoon;
