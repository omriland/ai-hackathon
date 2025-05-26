import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Panoramic AI Hackathon
            </h1>
          </div>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
            June 15–16 | 09:00–21:00
          </div>
          <div className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Two Days. One Mission. Infinite Creativity.
          </div>
          
          <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <p className="text-gray-300 text-lg leading-relaxed">
              We&apos;re bringing our best minds together for 2 intense days of AI innovation. 
              Your mission: build a working, scalable, and integratable POC that pushes 
              Panoramic&apos;s platform forward.
            </p>
          </div>
        </div>

        {/* Teams Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-2xl">👥</span>
            Teams
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Group 1", members: ["Zvia", "Doron", "Eliya", "Moshe", "Inbar"] },
              { name: "Group 2", members: ["Dror", "Fadi", "Guy", "Ido", "Chen", "Gal"] },
              { name: "Group 3", members: ["Ariel", "Hila", "Natalia", "Meir", "Ori", "Omri"] }
            ].map((group, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">{group.name}</h3>
                <div className="space-y-2">
                  {group.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="text-gray-300 py-1 px-3 bg-white/5 rounded-lg text-sm">
                      {member}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-2xl">🧠</span>
            Pick Your Challenge
          </h2>
          
          <div className="mb-6 p-4 bg-blue-500/10 border border-blue-400/20 rounded-xl">
            <p className="text-blue-300 text-sm">
              Before the hackathon, each group must choose one of the following:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { icon: "🔍", title: "AI Agent with database access" },
              { icon: "⚡", title: "Timeview Anomaly Detection (UI integration)" },
              { icon: "📡", title: "HW Edge Device to transmit analog inputs over RF", subtitle: "(talk to Alfred – Omri&apos;s the contact)" },
              { icon: "📊", title: "Timeview Summary Generator" },
              { icon: "🔗", title: "External Data Sheet Comparison to energy usage" },
              { icon: "⚙️", title: "Auto Device Creation via doc upload" }
            ].map((challenge, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-start gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{challenge.icon}</span>
                  <div>
                    <h3 className="text-white font-medium">{challenge.title}</h3>
                    {challenge.subtitle && (
                      <p className="text-gray-400 text-sm mt-1">{challenge.subtitle}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-500/10 border border-green-400/20 rounded-xl p-4">
              <div className="flex items-center gap-2 text-green-400">
                <span>✅</span>
                <span className="font-medium">Multiple groups can pick the same idea</span>
              </div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-xl p-4">
              <div className="flex items-center gap-2 text-yellow-400">
                <span>💡</span>
                <span className="font-medium">Got a different idea? Run it by Product for approval first</span>
              </div>
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-2xl">⚙️</span>
            Hackathon Rules
          </h2>
          
          <div className="space-y-4">
            {[
              "Build a working POC – something must function by demo time",
              "Your solution must be scalable and integratable with our platform",
              "You have 2 full days – make them count"
            ].map((rule, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-300">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Showdown */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-2xl">🎤</span>
            Final Showdown
          </h2>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">End of Day 2:</h3>
            <div className="space-y-3">
              {[
                "Live demo of your solution",
                "Short deck explaining your process, tech stack & decisions",
                "Judged by a surprise panel",
                "Winners → Panoramic Hall of Fame 🏆"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              🎯 Let&apos;s build. Let&apos;s break stuff. Let&apos;s ship something epic.
            </h2>
            <p className="text-gray-300 text-lg">
              Need support? Ask. Want to win? Push the limits.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
