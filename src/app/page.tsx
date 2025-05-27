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
    { name: "Group 1", members: ["Zvia", "Doron", "Eliya", "Moshe", "Inbar"] },
    { name: "Group 2", members: ["Dror", "Fadi", "Guy", "Ido", "Chen", "Gal"] },
    { name: "Group 3", members: ["Ariel", "Hila", "Natalia", "Meir", "Ori", "Omri"] }
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
    <div className={`min-h-screen transition-all duration-1000 ${matrixMode ? 'bg-black' : 'bg-white'} ${screenShake ? 'animate-pulse' : ''}`}>
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
          <div className="bg-red-500 text-white px-8 py-4 rounded-3xl shadow-2xl animate-bounce text-center">
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
            className="bg-white rounded-3xl p-8 max-w-sm mx-auto text-center shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-4xl mb-6">📱</div>
            <div className="text-right mb-6" dir="rtl">
              <p className="text-xl font-semibold text-gray-900 mb-3 leading-relaxed">
                מה חשבתם, שלא השקעתי כדי לתמוך גם במובייל?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                מוזמנים אפילו לסובב את המסך ולראות מה קורה
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                id="dontShowAgain"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 focus:ring-2"
              />
              <label htmlFor="dontShowAgain" className="cursor-pointer">
                 תשחררו אותי מהפופאפ הזה
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white"></div>
      
      <div className={`relative z-10 ${screenShake ? 'earthquake' : ''}`}>
        {/* Hero Section */}
        <div className="bg-white">
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
                  <p className="text-2xl font-bold text-purple-600 mb-2 animate-pulse">🚀 BLAST OFF! 🚀</p>
                  <p className="text-lg text-gray-600">Houston, we have a hackathon!</p>
                  <div className="mt-4 text-4xl animate-bounce">
                    ✨ 💫 ⭐ 💫 ✨
                  </div>
                </div>
              )}
              <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 tracking-tight leading-none mb-6">
                Panoramic AI Hackathon
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 font-light tracking-tight mb-4">
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
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 mb-6"
              >
                📅 Add to Calendar
              </button>
              <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                Two Days. One Mission. Infinite Creativity (and good food 🍕)
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto mt-16">
              <p className="text-2xl text-gray-700 font-light leading-relaxed">
                We&apos;re bringing our best minds together for 2 intense days of AI innovation. 
                Your mission: build a working, scalable, and integratable POC that pushes 
                Panoramic&apos;s platform forward.
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory Participation Notice */}
        <div className="bg-gray-900 hover:bg-blue-50/50 transition-all duration-500 group">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl invert group-hover:invert-0 transition-all duration-500"></span>
                <h3 className="text-2xl font-semibold text-white group-hover:text-gray-900 tracking-tight transition-all duration-500">Mandatory Participation</h3>
              </div>
              <p className="text-gray-300 group-hover:text-gray-700 text-lg font-light transition-all duration-500">
                We&apos;re expecting everyone to participate in the hackathon together. No exceptions.
              </p>
            </div>
          </div>
        </div>

        {/* Teams Section */}
        <div className="bg-gray-50/50">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-semibold text-gray-900 tracking-tight mb-4">Teams</h2>
              <p className="text-xl text-gray-600 font-light">Three groups. One shared vision.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teams.map((group, groupIndex) => (
                <div 
                  key={groupIndex} 
                  className="bg-gray-100 rounded-3xl p-8 hover:bg-gray-150 transition-colors duration-300"
                  onDragOver={handleDragOver}
                  onDrop={(e) => {
                    // If dropping on group but not on specific member, show error
                    if (e.target === e.currentTarget) {
                      showDragError();
                    }
                  }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">{group.name}</h3>
                  <div className="space-y-3">
                    {group.members.map((member, memberIndex) => (
                      <div 
                        key={`${groupIndex}-${memberIndex}`}
                        draggable
                        className={`text-gray-700 py-3 px-4 bg-white rounded-2xl text-lg font-light border border-gray-200/50 cursor-move hover:bg-gray-50 transition-colors duration-200 hover:shadow-md ${
                          member === 'Omri' ? 'hover:bg-blue-50' : ''
                        }`}
                        onDragStart={(e) => handleDragStart(e, member, groupIndex, memberIndex)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, groupIndex, memberIndex)}
                        onClick={member === 'Omri' ? handleOmriClick : undefined}
                      >
                        <div className="flex items-center justify-between">
                          <span>{member}</span>
                          <span className="text-gray-400 text-sm">⋮⋮</span>
                        </div>
                        {member === 'Omri' && omriClickCount > 0 && (
                          <span className="ml-2 text-xs text-green-600">
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
        <div className="bg-blue-50/30">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-semibold text-gray-900 tracking-tight mb-4">Pick Your Challenge</h2>
              <p className="text-xl text-gray-600 font-light">Choose the path that inspires you most.</p>
            </div>

            {/* Challenges List */}
            <div className="bg-gray-100 rounded-3xl p-12 mb-12">
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">AI Agent with database access</h3>
                    <p className="text-gray-700 font-light text-lg leading-relaxed">Build an intelligent agent that can query and interact with databases, providing natural language interfaces for data exploration and analysis at the site level.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">Timeview Anomaly Detection</h3>
                    <p className="text-gray-600 font-medium mb-2 text-lg">Preferably with a UI</p>
                    <p className="text-gray-700 font-light text-lg leading-relaxed">Develop anomaly detection algorithms for time-series data with a user-friendly interface that integrates seamlessly with existing Timeview components. The solution should be able to detect anomalies in the data and alert the user.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">HW Edge Device to transmit analog inputs over RF</h3>
                      <span className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-purple-100 text-sm font-medium px-3 py-1 rounded-full border border-purple-900 shadow-lg">
                        HW/FW Only
                      </span>
                    </div>
                    <p className="text-gray-700 font-light text-lg leading-relaxed">Create a hardware solution that can capture analog signals and transmit them wirelessly using RF technology to the bridge.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">Timeview Summary Generator</h3>
                    <p className="text-gray-700 font-light text-lg leading-relaxed">Build an AI-powered system that automatically generates intelligent summaries and insights from time-series data, helping users quickly understand trends and patterns for their current Timeview view.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">Compare external info with energy data</h3>
                    <p className="text-gray-700 font-light text-lg leading-relaxed">Create a solution that allows users to import external data sources (PDFs, Excel sheets, etc.) and compare them with energy data for a chosen timeframe. For example: compare production line data with its energy consumption, OR, compare dining room occupancy with its energy consumption, etc.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">Auto Device Creation via doc upload</h3>
                    <p className="text-gray-700 font-light text-lg leading-relaxed">Create an intelligent system that can automatically configure and create devices on the deployment tool by analyzing uploaded documentation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">Got a different idea? No problem. Just run it by Product first</h3>
                  </div>
                </li>
              </ul>
            </div>

            {/* Deadline Notice */}
            <div className="bg-blue-50/50 rounded-3xl p-8 mb-12 text-center">
              <p className="text-blue-800 text-xl font-bold mb-2">
                Each group should choose one of the following ideas and inform Omri Landman not later than June 10
              </p>

            </div>


          </div>
        </div>

        {/* Rules Section */}
        <div className="bg-gray-50/50">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-semibold text-gray-900 tracking-tight mb-4">Hackathon Rules</h2>
              <p className="text-xl text-gray-600 font-light">Simple guidelines for maximum impact.</p>
            </div>
            
            <div className="space-y-6">
              {[
                "Build a working POC – something has to work by demo time",
                "Your solution must be scalable and integratable with our platform",
                "You have 2 full days – make them count"
              ].map((rule, index) => (
                <div key={index} className="flex items-start gap-8 p-8 bg-gray-100 rounded-3xl hover:bg-gray-150 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-xl text-gray-700 font-light leading-relaxed pt-2">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Showdown */}
        <div className="bg-purple-50/30">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-semibold text-gray-900 tracking-tight mb-4">Final Showdown</h2>
              <p className="text-xl text-gray-600 font-light">Where innovation meets recognition.</p>
            </div>
            
            <div className="bg-purple-50/50 rounded-3xl p-12">
              <h3 className="text-3xl font-semibold text-purple-900 mb-8 tracking-tight">End of Day 2</h3>
              <div className="space-y-6">
                {[
                  "Live demo of your solution",
                  "Short deck explaining your process, tech stack & decisions",
                  "Judged by a surprise panel",
                  "Winners → Panoramic Hall of Fame 🏆"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <p className="text-xl text-gray-700 font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-900">
          <div className="max-w-5xl mx-auto px-6 py-20 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Let&apos;s build. Let&apos;s break stuff. Let&apos;s ship something epic.
            </h2>
            <p className="text-xl font-light text-gray-300">
              Need support? Ask. Want to win? Push the limits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
