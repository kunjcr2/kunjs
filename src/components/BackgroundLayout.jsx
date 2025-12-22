import React from 'react';

const BackgroundLayout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-[#0a0a0b] text-neutral-100">
            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default BackgroundLayout;
