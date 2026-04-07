import React from 'react';

const BackgroundLayout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-parchment text-near-black">
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default BackgroundLayout;
