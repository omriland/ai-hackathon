import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-20 text-center animate-fade-in">
            <div className="mb-8">
              <span className="text-6xl mb-6 block">🚀</span>
              <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 tracking-tight leading-none mb-6">
                Panoramic AI Hackathon
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 font-light tracking-tight mb-4">
                June 15–16 | 09:00–21:00
              </p>
              <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                Two Days. One Mission. Infinite Creativity.
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
        <div className="bg-blue-50/50">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="bg-blue-100 rounded-3xl p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl"></span>
                <h3 className="text-2xl font-semibold text-blue-900 tracking-tight">Mandatory Participation</h3>
              </div>
              <p className="text-blue-800 text-lg font-light">
                We're expecting everyone to participate in the hackathon together. No exceptions.
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
              {[
                { name: "Group 1", members: ["Zvia", "Doron", "Eliya", "Moshe", "Inbar"] },
                { name: "Group 2", members: ["Dror", "Fadi", "Guy", "Ido", "Chen", "Gal"] },
                { name: "Group 3", members: ["Ariel", "Hila", "Natalia", "Meir", "Ori", "Omri"] }
              ].map((group, index) => (
                <div key={index} className="bg-gray-100 rounded-3xl p-8 hover:bg-gray-150 transition-colors duration-300">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">{group.name}</h3>
                  <div className="space-y-3">
                    {group.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="text-gray-700 py-3 px-4 bg-white rounded-2xl text-lg font-light border border-gray-200/50">
                        {member}
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
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">HW Edge Device to transmit analog inputs over RF</h3>
                    <p className="text-gray-600 font-medium mb-2 text-lg">*HW/FW Task</p>
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
                    <p className="text-gray-700 font-light text-lg leading-relaxed">Create a solution that allows users to import external data sources (PDFs, Excel sheets, etc.) and compare them with energy data for a chosen timeframe.</p>
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
              <p className="text-blue-800 text-lg font-light mb-2">
                Each group should choose one of the following ideas and inform Omri Landman not later than June 10
              </p>

            </div>


          </div>
        </div>

        {/* Rules Section */}
        <div className="bg-gray-50/30">
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
                <div key={index} className="flex items-start gap-8 p-8 bg-gray-50/50 rounded-3xl hover:bg-gray-50 transition-colors duration-300">
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
