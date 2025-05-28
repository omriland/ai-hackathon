'use client';

import React from 'react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showMobileModal, setShowMobileModal] = useState(false);
  const [isUpsideDown, setIsUpsideDown] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [matrixMode, setMatrixMode] = useState(false);
  const [rocketLaunched, setRocketLaunched] = useState(false);
  const [omriClickCount, setOmriClickCount] = useState(0);
  const [screenShake, setScreenShake] = useState(false);
  const [dragError, setDragError] = useState(false);
  const [teams, setTeams] = useState([
    { name: "⚡ Volt", members: ["Zvia", "Doron", "Eliya", "Moshe", "Omri", "Alfred"] },
    { name: "🔋 Flux", members: ["Dror", "Fadi", "Guy", "Ido", "Gal", "Inbar"] },
    { name: "⭐ Spark", members: ["Ariel", "Hila", "Natalia", "Meir", "Ori"] }
  ]);

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const hasOptedOut = localStorage.getItem('hideHackathonMobileModal') === 'true';
      
      if (isMobile && !hasOptedOut) {
        setShowMobileModal(true);
      }
    };

    const checkOrientation = () => {
      if (screen.orientation) {
        // Check if the screen is rotated 90 degrees to either side (landscape)
        const angle = screen.orientation.angle;
        setIsUpsideDown(angle === 90 || angle === 270 || angle === -90);
      } else if (window.orientation !== undefined) {
        // Fallback for older browsers
        setIsUpsideDown(window.orientation === 90 || window.orientation === -90);
      }
    };

    checkMobile();
    checkOrientation();
    
    // Only check orientation changes, not mobile detection on resize
    window.addEventListener('orientationchange', checkOrientation);
    
    if (screen.orientation) {
      screen.orientation.addEventListener('change', checkOrientation);
    }

    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
      if (screen.orientation) {
        screen.orientation.removeEventListener('change', checkOrientation);
      }
    };
  }, []);

  const handleOmriClick = () => {
    const newCount = omriClickCount + 1;
    setOmriClickCount(newCount);
    
    if (newCount === 2) {
      setMatrixMode(true);
      setTimeout(() => setMatrixMode(false), 10000); // Matrix mode for 10 seconds
      setOmriClickCount(0);
    }
    
    // Reset counter after 3 seconds if not completed
    setTimeout(() => {
      if (omriClickCount < 1) setOmriClickCount(0);
    }, 3000);
  };

  const handleRocketClick = () => {
    setRocketLaunched(true);
    setScreenShake(true);
    
    // Stop screen shake after 1 second
    setTimeout(() => setScreenShake(false), 1000);
    
    // Reset rocket after 6 seconds
    setTimeout(() => setRocketLaunched(false), 6000);
  };

  const handleDragStart = (e: React.DragEvent, member: string, groupIndex: number, memberIndex: number) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ member, groupIndex, memberIndex }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetGroupIndex: number, targetMemberIndex: number) => {
    e.preventDefault();
    const dragData = JSON.parse(e.dataTransfer.getData('text/plain'));
    const { member, groupIndex: sourceGroupIndex, memberIndex: sourceMemberIndex } = dragData;

    // Check if trying to move between different groups
    if (sourceGroupIndex !== targetGroupIndex) {
      setDragError(true);
      setTimeout(() => setDragError(false), 4000);
      return;
    }

    // Reorder within the same group
    const newTeams = [...teams];
    const sourceGroup = newTeams[sourceGroupIndex];
    
    // Remove from source position
    sourceGroup.members.splice(sourceMemberIndex, 1);
    
    // Insert at target position
    sourceGroup.members.splice(targetMemberIndex, 0, member);
    
    setTeams(newTeams);
  };

  const showDragError = () => {
    setDragError(true);
    setTimeout(() => setDragError(false), 4000);
  };

  return (
    <div className={`min-h-screen transition-all duration-1000 ${matrixMode ? 'bg-black' : 'bg-purple-950'} ${screenShake ? 'animate-pulse' : ''} relative`}>
      
      {/* Cool Asymmetric Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Geometric shapes - slightly more visible */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/12 rounded-full"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-white/10 rotate-45"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-white/8 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-white/14 rounded-full"></div>
        
        {/* Additional scattered elements */}
        <div className="absolute top-32 left-1/3 w-6 h-6 border border-white/12 rounded-full"></div>
        <div className="absolute bottom-32 right-1/4 w-10 h-10 border border-white/10 rotate-12"></div>
        <div className="absolute top-2/3 left-16 w-4 h-4 bg-white/11 rounded-full"></div>
        <div className="absolute top-80 right-1/3 w-14 h-14 border border-white/8 rounded-full"></div>
        <div className="absolute bottom-80 left-1/5 w-8 h-8 bg-white/9 rotate-45"></div>
        
        {/* More elements for full page coverage */}
        <div className="absolute top-1/4 left-3/4 w-12 h-12 border border-white/7 rotate-30"></div>
        <div className="absolute top-3/4 right-1/5 w-6 h-6 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-1/4 left-2/3 w-16 h-16 border border-white/6 rounded-full"></div>
        
        {/* New enhanced shapes */}
        <div className="absolute top-40 left-1/6 w-10 h-10 bg-white/8 rotate-60"></div>
        <div className="absolute top-1/3 right-1/3 w-18 h-18 border border-white/9 rounded-full"></div>
        <div className="absolute bottom-40 right-1/6 w-7 h-7 bg-white/11 rotate-75"></div>
        <div className="absolute top-3/5 left-1/8 w-5 h-5 border border-white/10 rotate-45"></div>
        <div className="absolute bottom-1/3 left-3/5 w-13 h-13 bg-white/7 rounded-full"></div>
        <div className="absolute top-1/6 right-2/5 w-9 h-9 border border-white/8 rotate-15"></div>
        
        {/* Triangular shapes */}
        <div className="absolute top-24 left-2/5 w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-white/9"></div>
        <div className="absolute bottom-24 right-2/5 w-0 h-0 border-l-5 border-r-5 border-b-8 border-transparent border-b-white/7 rotate-180"></div>
        <div className="absolute top-1/2 left-4/5 w-0 h-0 border-l-3 border-r-3 border-b-5 border-transparent border-b-white/10 rotate-45"></div>
        
        {/* Enhanced curved lines across the page */}
        <svg className="absolute inset-0 w-full h-full">
          <path d="M0,80 Q200,40 400,80 T800,80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
          <path d="M100,200 Q300,160 500,200 T900,200" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
          <path d="M0,300 Q250,260 500,300 T1000,300" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
          <path d="M200,500 Q400,460 600,500 T1000,500" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
          <path d="M0,700 Q300,660 600,700 T1200,700" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
          
          {/* New flowing lines */}
          <path d="M50,150 Q350,110 650,150 T1150,150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
          <path d="M150,400 Q450,360 750,400 T1250,400" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
          <path d="M0,600 Q200,570 400,600 T800,600" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
          
          {/* Diagonal flowing lines */}
          <path d="M0,0 Q300,200 600,100 T1200,300" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
          <path d="M200,0 Q500,150 800,50 T1400,250" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
        </svg>
        
        {/* Enhanced small dots scattered across the page */}
        <div className="absolute top-16 left-2/3 w-1 h-1 bg-white/15 rounded-full"></div>
        <div className="absolute top-48 left-1/5 w-2 h-2 bg-white/12 rounded-full"></div>
        <div className="absolute bottom-24 right-1/3 w-1 h-1 bg-white/14 rounded-full"></div>
        <div className="absolute top-60 right-2/3 w-2 h-2 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-60 left-1/6 w-1 h-1 bg-white/13 rounded-full"></div>
        <div className="absolute top-1/3 left-4/5 w-2 h-2 bg-white/11 rounded-full"></div>
        
        {/* Additional accent dots */}
        <div className="absolute top-36 right-1/8 w-1 h-1 bg-white/16 rounded-full"></div>
        <div className="absolute bottom-36 left-1/7 w-2 h-2 bg-white/9 rounded-full"></div>
        <div className="absolute top-2/5 right-3/4 w-1 h-1 bg-white/12 rounded-full"></div>
        <div className="absolute bottom-2/5 right-1/7 w-2 h-2 bg-white/14 rounded-full"></div>
        <div className="absolute top-5/6 left-1/3 w-1 h-1 bg-white/11 rounded-full"></div>
        <div className="absolute top-1/8 left-3/4 w-2 h-2 bg-white/13 rounded-full"></div>
      </div>

      {screenShake && (
        <style jsx>{`
          @keyframes earthquake {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
            10% { transform: translate(-2px, -1px) rotate(-0.5deg); }
            20% { transform: translate(-1px, 0px) rotate(0.5deg); }
            30% { transform: translate(1px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(0.5deg); }
            50% { transform: translate(-1px, 2px) rotate(-0.5deg); }
            60% { transform: translate(-1px, 1px) rotate(0deg); }
            70% { transform: translate(2px, 1px) rotate(-0.5deg); }
            80% { transform: translate(-2px, -1px) rotate(0.5deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
          }
          .earthquake {
            animation: earthquake 0.1s infinite;
          }
        `}</style>
      )}
      {/* Drag Error Effect */}
      {dragError && (
        <div className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center">
          <div className="bg-red-500 text-white px-8 py-4 rounded-3xl shadow-2xl animate-pulse text-center">
            <div className="text-4xl mb-2">🚫</div>
            <h3 className="text-2xl font-bold mb-2">Nice try!</h3>
            <p className="text-lg">Teams are locked! You can only reorder within groups.</p>
          </div>
        </div>
      )}

      {/* Matrix Mode Easter Egg */}
      {matrixMode && (
        <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden">
          {/* Matrix falling code effect */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 font-mono text-sm opacity-80"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              <div className="matrix-code">
                {Array.from({length: 20}, () => String.fromCharCode(33 + Math.random() * 94)).join('')}
              </div>
            </div>
          ))}
          
          {/* Welcome message */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-green-400 font-mono">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
                WELCOME TO THE HACKATHON, NEO
              </h2>
              <p className="text-xl md:text-2xl">
                The Matrix has you... but so does Panoramic 🕶️
              </p>
            </div>
          </div>
          
          <style jsx>{`
            @keyframes matrix-fall {
              0% {
                transform: translateY(-100vh);
                opacity: 1;
              }
              100% {
                transform: translateY(100vh);
                opacity: 0;
              }
            }
            .matrix-code {
              animation: matrix-fall linear infinite;
              writing-mode: vertical-rl;
              text-orientation: upright;
            }
          `}</style>
        </div>
      )}

      {/* Heavy Snow Effect when upside down */}
      {isUpsideDown && (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
          {[...Array(150)].map((_, i) => (
            <div
              key={i}
              className="absolute snow-flake"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                fontSize: `${10 + Math.random() * 12}px`,
              }}
            >
              ❄️
            </div>
          ))}
          <style jsx>{`
            @keyframes snowfall {
              0% {
                transform: translateY(-100px) translateX(0px) rotate(0deg);
                opacity: 1;
              }
              100% {
                transform: translateY(calc(100vh + 100px)) translateX(50px) rotate(360deg);
                opacity: 0.3;
              }
            }
            .snow-flake {
              animation: snowfall linear infinite;
            }
          `}</style>
        </div>
      )}

      {/* Mobile Modal */}
      {showMobileModal && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => {
            if (dontShowAgain) {
              localStorage.setItem('hideHackathonMobileModal', 'true');
            }
            setShowMobileModal(false);
          }}
        >
          <div 
            className="bg-purple-900 rounded-3xl p-8 max-w-sm mx-auto text-center shadow-2xl animate-fade-in border border-purple-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-4xl mb-6">📱</div>
            <div className="text-right mb-6" dir="rtl">
              <p className="text-xl font-semibold text-purple-100 mb-3 leading-relaxed">
                מה חשבתם, שלא השקעתי כדי לתמוך גם במובייל?
              </p>
              <p className="text-lg text-purple-200 leading-relaxed">
                מוזמנים אפילו לסובב את המסך ולראות מה קורה
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-sm text-purple-200">
              <input
                type="checkbox"
                id="dontShowAgain"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="w-4 h-4 text-purple-600 bg-purple-800 border-purple-600 rounded focus:ring-purple-500 focus:ring-2"
              />
              <label htmlFor="dontShowAgain" className="cursor-pointer">
                 תשחררו אותי מהפופאפ הזה
              </label>
            </div>
          </div>
        </div>
      )}

      <div className={`relative z-10 ${screenShake ? 'earthquake' : ''}`}>
        {/* Hero Section */}
        <div className="">
          <div className="max-w-5xl mx-auto px-6 py-20 text-center animate-fade-in">
            <div className="mb-8">
              <span 
                className={`text-6xl mb-6 block cursor-pointer transition-all ${
                  rocketLaunched 
                    ? 'duration-[2000ms] transform -translate-y-[200vh] scale-75 rotate-12' 
                    : 'duration-300 hover:scale-110'
                }`}
                onClick={handleRocketClick}
                style={{
                  transformOrigin: 'center bottom'
                }}
              >
                🚀
              </span>
              {rocketLaunched && (
                <div className="text-center animate-fade-in">
                  <p className="text-2xl font-bold text-purple-300 mb-2 animate-pulse">🚀 BLAST OFF! 🚀</p>
                  <p className="text-lg text-purple-200">Houston, we have a hackathon!</p>
                  <div className="mt-4 text-4xl animate-bounce">
                    ✨ 💫 ⭐ 💫 ✨
                  </div>
                </div>
              )}
              <h1 className="text-6xl md:text-7xl font-semibold text-purple-100 tracking-tight leading-none mb-6">
                Panoramic AI Hackathon
              </h1>
              <p className="text-2xl md:text-3xl text-purple-200 font-light tracking-tight mb-4">
                June 15–16 | 09:00–21:00
              </p>
              <button 
                onClick={() => {
                  const startDate = new Date('2024-06-15T09:00:00');
                  const endDate = new Date('2024-06-16T21:00:00');
                  
                  const formatDate = (date: Date) => {
                    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
                  };
                  
                  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Panoramic AI Hackathon')}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent('Two Days. One Mission. Infinite Creativity. Build a working, scalable, and integratable POC that pushes Panoramic\'s platform forward.')}&location=${encodeURIComponent('Panoramic Office')}`;
                  
                  window.open(calendarUrl, '_blank');
                }}
                className="inline-flex items-center gap-2 bg-purple-800 hover:bg-purple-700 text-purple-100 px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 mb-6 border border-purple-600"
              >
                📅 Add to Calendar
              </button>
              <p className="text-xl text-purple-300 font-light max-w-2xl mx-auto leading-relaxed">
                Two Days. One Mission. Infinite Creativity (and good food 🍕)
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto mt-16">
              <p className="text-2xl text-purple-200 font-light leading-relaxed">
                We&apos;re bringing our best minds together for 2 intense days of AI innovation. 
                Your mission: build a working, scalable, and integratable POC that pushes 
                Panoramic&apos;s platform forward.
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory Participation Notice */}
        <div className="bg-purple-800/20">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl"></span>
                <h3 className="text-2xl font-semibold text-purple-100 tracking-tight">Mandatory Participation</h3>
              </div>
              <p className="text-purple-200 text-lg font-light">
                We&apos;re expecting everyone to participate in the hackathon together. No exceptions.
              </p>
            </div>
          </div>
        </div>

        {/* Teams Section */}
        <div className="bg-purple-900/10">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-semibold text-purple-100 tracking-tight mb-4">Teams</h2>
              <p className="text-xl text-purple-200 font-light">Three groups. One shared vision.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teams.map((group, groupIndex) => (
                <div 
                  key={groupIndex} 
                  className="bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 rounded-3xl p-8 shadow-2xl shadow-purple-500/20 border border-purple-700"
                  onDragOver={handleDragOver}
                  onDrop={(e) => {
                    // If dropping on group but not on specific member, show error
                    if (e.target === e.currentTarget) {
                      showDragError();
                    }
                  }}
                >
                  <h3 className="text-2xl font-semibold text-purple-100 mb-6 tracking-tight">{group.name}</h3>
                  <div className="space-y-3">
                    {group.members.map((member, memberIndex) => (
                      <div 
                        key={`${groupIndex}-${memberIndex}`}
                        draggable
                        className={`text-purple-100 py-3 px-4 bg-purple-600/50 rounded-2xl text-lg font-light border border-purple-400 cursor-move transition-all duration-500 hover:shadow-md ${
                          member === 'Omri' ? 'hover:bg-purple-500/70' : ''
                        }`}
                        onDragStart={(e) => handleDragStart(e, member, groupIndex, memberIndex)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, groupIndex, memberIndex)}
                        onClick={member === 'Omri' ? handleOmriClick : undefined}
                      >
                        <div className="flex items-center justify-between">
                          <span>{member}</span>
                          <span className="text-purple-300 text-sm">⋮⋮</span>
                        </div>
                        {member === 'Omri' && omriClickCount > 0 && (
                          <span className="ml-2 text-xs text-green-400">
                            {omriClickCount === 1 ? '•' : ''}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges Section */}
        <div className="bg-purple-800/10">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-semibold text-purple-100 tracking-tight mb-4">Pick Your Challenge</h2>
              <p className="text-xl text-purple-200 font-light">Choose the path that inspires you most.</p>
            </div>
            <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 rounded-3xl p-8 mb-12 text-center border border-purple-600">
              <p className="text-purple-100 text-xl font-medium text-center">
                Each group should choose one of the following ideas and inform Omri Landman not later than June 8th
              </p>

            </div>
            {/* Challenges List */}
            <div className="bg-purple-800/30 rounded-3xl p-12 border border-purple-700/50">
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-300 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-100 mb-2 tracking-tight">AI Agent with database access</h3>
                    <p className="text-purple-200 font-light text-lg leading-relaxed">Build an intelligent agent that can query and interact with databases, providing natural language interfaces for data exploration and analysis at the site level.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-300 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-100 mb-2 tracking-tight">Timeview Anomaly Detection</h3>
                    <p className="text-purple-200 font-light text-lg leading-relaxed">Develop anomaly detection algorithms for time-series data with a user-friendly interface that integrates seamlessly with existing Timeview components. The solution should be able to detect anomalies in the data and alert the user.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-300 rounded-full mt-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold text-purple-100 tracking-tight">HW Edge Device to transmit analog inputs over RF</h3>
                      <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-purple-100 text-sm font-medium px-3 py-1 rounded-full border border-purple-500 shadow-lg">
                        HW/FW Only
                      </span>
                    </div>
                    <p className="text-purple-200 font-light text-lg leading-relaxed">Create a hardware solution that can capture analog signals and transmit them wirelessly using RF technology to the bridge.</p>
                  </div>
                </li>
                
                
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-300 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-100 mb-2 tracking-tight">Compare external info with energy data</h3>
                    <p className="text-purple-200 font-light text-lg leading-relaxed">Create a solution that allows users to import external data sources (PDFs, Excel sheets, etc.) and compare them with energy data for a chosen timeframe. For example: compare production line data with its energy consumption, OR, compare dining room occupancy with its energy consumption, etc.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-300 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-100 mb-2 tracking-tight">Auto Device Creation via doc upload</h3>
                    <p className="text-purple-200 font-light text-lg leading-relaxed">Create an intelligent system that can automatically configure and create devices on the deployment tool by analyzing uploaded documentation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-300 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-100 mb-2 tracking-tight">Got a different idea? No problem. Just run it by Product first</h3>
                  </div>
                </li>
              </ul>
            </div>

            {/* Deadline Notice */}



          </div>
        </div>

        {/* Rules Section */}
        <div className="bg-purple-900/10">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-semibold text-purple-100 tracking-tight mb-4">Hackathon Rules</h2>
              <p className="text-xl text-purple-200 font-light">Simple guidelines for maximum impact.</p>
            </div>
            
            <div className="space-y-6">
              {[
                "Build a working POC – something has to work by demo time",
                "Your solution must be scalable and integratable with our platform",
                "You have 2 full days – make them count"
              ].map((rule, index) => (
                <div key={index} className="flex items-start gap-8 p-8 bg-purple-800/40 rounded-3xl hover:bg-purple-700/50 transition-colors duration-300 border border-purple-700/50">
                  <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-purple-100 font-semibold text-lg flex-shrink-0 border border-purple-500">
                    {index + 1}
                  </div>
                  <p className="text-xl text-purple-100 font-light leading-relaxed pt-2">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Showdown */}
        <div className="bg-purple-800/10">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-semibold text-purple-100 tracking-tight mb-4">Final Showdown</h2>
              <p className="text-xl text-purple-200 font-light">Where innovation meets recognition.</p>
            </div>
            
            <div className="bg-purple-800/30 rounded-3xl p-12 border border-purple-700/50">
              <h3 className="text-3xl font-semibold text-purple-100 mb-8 tracking-tight">End of Day 2</h3>
              <div className="space-y-6">
                {[
                  "Live demo of your solution",
                  "Short deck explaining your process, tech stack & decisions",
                  "Judged by a surprise panel",
                  "Winners → Panoramic Hall of Fame 🏆"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    <p className="text-xl text-purple-200 font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-purple-950/50">
          <div className="max-w-5xl mx-auto px-6 py-20 text-center text-purple-100">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Let&apos;s build. Let&apos;s break stuff. Let&apos;s ship something epic.
            </h2>
            <p className="text-xl font-light text-purple-200">
              Need support? Ask. Want to win? Push the limits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
