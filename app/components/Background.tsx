"use client";

import React from 'react';

const Background = () => {
  return (
    <>
      <style>
        {`
              
              .glass-card {
                background: rgba(255, 255, 255, 0.7);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.5);
              }
              
              .blob {
                position: absolute;
                filter: blur(80px);
                z-index: -1;
                opacity: 0.6;
              }
              
              @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
                100% { transform: translateY(0px); }
              }
              
              .animate-float {
                animation: float 6s ease-in-out infinite;
              }
    
              .animate-float-delayed {
                animation: float 8s ease-in-out infinite;
                animation-delay: 2s;
              }
              
              html {
                scroll-behavior: smooth;
              }
            `}
      </style>
      <div className="bg-noise"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#FFB6A3]/30 to-[#FC69C3]/30 blur-[100px] animate-aurora"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[#E06052]/20 to-[#FFB6A3]/20 blur-[100px] animate-aurora" style={{ animationDelay: '-5s' }}></div>
      </div>
    </>
  );
};

export default Background;
