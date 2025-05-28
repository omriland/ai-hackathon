'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to AI stack page immediately
    router.push('/ai_stack');
  }, [router]);

  return (
    <div className="min-h-screen bg-purple-950 relative flex items-center justify-center">
      {/* Background Pattern - Similar to main pages */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/8 rounded-full"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-white/6 rotate-45"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-white/10 rounded-full"></div>
        
        <svg className="absolute inset-0 w-full h-full">
          <path d="M0,80 Q200,40 400,80 T800,80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
          <path d="M100,200 Q300,160 500,200 T900,200" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
          <path d="M0,300 Q250,260 500,300 T1000,300" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="mb-8">
          <span className="text-8xl mb-6 block animate-bounce">🤖</span>
          <h1 className="text-6xl md:text-7xl font-semibold text-purple-100 tracking-tight leading-none mb-6">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl text-purple-200 font-light tracking-tight mb-8">
            Page Not Found
          </h2>
          <p className="text-xl text-purple-300 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Looks like you&apos;ve wandered into uncharted territory. 
            Don&apos;t worry, we&apos;re redirecting you to our AI Stack Library!
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
          
          <p className="text-lg text-purple-400 font-light">
            Redirecting immediately...
          </p>
          
          <div className="mt-8">
            <button 
              onClick={() => router.push('/ai_stack')}
              className="bg-purple-600 hover:bg-purple-500 text-purple-100 px-8 py-3 rounded-2xl font-medium transition-colors duration-200 mr-4"
            >
              Go to AI Stack Now
            </button>
            <button 
              onClick={() => router.push('/')}
              className="bg-purple-800/30 hover:bg-purple-700/40 text-purple-200 px-8 py-3 rounded-2xl font-medium transition-colors duration-200 border border-purple-700/50"
            >
              Back to Hackathon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 