'use client';

import React from 'react';
import { useState } from 'react';

export default function AIStack() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiTools = [
    // AI-driven IDEs
    {
      name: 'Cursor',
      description: 'AI-first code editor built for pair programming with AI. Get intelligent code suggestions, explanations, and refactoring assistance.',
      category: ['ides'],
      url: 'https://cursor.sh',
      pricing: 'Free/Pro'
    },
    {
      name: 'Windsurf',
      description: 'AI-powered IDE by Codeium with deep codebase understanding. Features agentic AI that can edit multiple files and understand your entire project.',
      category: ['ides'],
      url: 'https://codeium.com/windsurf',
      pricing: 'Free/Pro'
    },
    {
      name: 'Zed',
      description: 'High-performance, multiplayer code editor with built-in AI assistance. Lightning-fast with real-time collaboration and AI-powered features.',
      category: ['ides'],
      url: 'https://zed.dev',
      pricing: 'Free'
    },

    // General Purpose
    {
      name: 'OpenAI API',
      description: 'Complete AI platform with GPT-4 for intelligent agents and data analysis, DALL-E for visual generation, and Whisper for speech-to-text - everything you need for energy data processing',
      category: ['general', 'data'],
      url: 'https://platform.openai.com/docs',
      pricing: 'API-based'
    },
    {
      name: 'Anthropic API (Claude)',
      description: 'Embed powerful document processing capabilities - analyze large energy reports, extract insights from PDFs, and provide detailed explanations of data relationships',
      category: ['general', 'data'],
      url: 'https://docs.anthropic.com',
      pricing: 'API-based'
    },
    {
      name: 'Google Gemini API',
      description: 'Integrate multimodal AI to process charts, images, and documents together - perfect for analyzing mixed energy data formats in a single API call',
      category: ['general', 'data'],
      url: 'https://ai.google.dev/docs',
      pricing: 'API-based'
    },
    {
      name: 'Mistral AI API',
      description: 'European open-source LLM API for building custom data analysis pipelines with full control over your AI models for energy data processing',
      category: ['general', 'data'],
      url: 'https://docs.mistral.ai',
      pricing: 'API-based'
    },

    // Computer Vision & Image Processing
    {
      name: 'Stability AI API',
      description: 'Integrate image generation capabilities into your energy platform - create custom charts, diagrams, and visual representations programmatically',
      category: ['general', 'data'],
      url: 'https://platform.stability.ai/docs',
      pricing: 'API-based'
    },
    {
      name: 'Roboflow API',
      description: 'Embed computer vision models to analyze energy meter readings, detect equipment anomalies, and process visual data from monitoring devices',
      category: ['data'],
      url: 'https://docs.roboflow.com',
      pricing: 'API-based'
    },
    {
      name: 'Google Vision API',
      description: 'Extract text from energy bills, analyze equipment images, and process visual data from energy monitoring systems with enterprise-grade OCR',
      category: ['data'],
      url: 'https://cloud.google.com/vision/docs',
      pricing: 'API-based'
    },

    // Audio & Speech
    {
      name: 'ElevenLabs API',
      description: 'Build voice-enabled interfaces for your energy platform - allow users to ask questions about consumption patterns and receive spoken insights',
      category: ['general'],
      url: 'https://docs.elevenlabs.io',
      pricing: 'API-based'
    },
    {
      name: 'Google Text-to-Speech API',
      description: 'Add voice capabilities to your energy monitoring system - create audio alerts, notifications, and spoken reports for consumption anomalies',
      category: ['general', 'automation'],
      url: 'https://cloud.google.com/text-to-speech/docs',
      pricing: 'API-based'
    },

    // Code & Development
    {
      name: 'GitHub Copilot',
      description: 'AI pair programmer that suggests code and entire functions in real-time. Works with VS Code, JetBrains IDEs, and more.',
      category: ['code'],
      url: 'https://github.com/features/copilot',
      pricing: 'Subscription'
    },
    {
      name: 'Tabnine',
      description: 'AI code completion that learns from your codebase. Supports 30+ languages and integrates with popular IDEs.',
      category: ['code'],
      url: 'https://www.tabnine.com',
      pricing: 'Free/Pro'
    },
    {
      name: 'Codeium',
      description: 'Free AI-powered code acceleration toolkit. Offers autocomplete, chat, and search across 70+ programming languages.',
      category: ['code'],
      url: 'https://codeium.com',
      pricing: 'Free'
    },
    {
      name: 'Replit',
      description: 'Browser-based development environment with AI assistance. Code, collaborate, and deploy applications with built-in AI pair programming.',
      category: ['code'],
      url: 'https://replit.com',
      pricing: 'Free/Pro'
    },
    {
      name: 'Hugging Face API',
      description: 'Access thousands of pre-trained models via API - implement time-series analysis, anomaly detection, and NLP for document processing in your energy platform',
      category: ['data', 'code'],
      url: 'https://huggingface.co/docs/api-inference',
      pricing: 'API-based'
    },

    // Data & Analytics
    {
      name: 'Weights & Biases API',
      description: 'Integrate experiment tracking and model monitoring into your energy prediction models - track performance of anomaly detection algorithms programmatically',
      category: ['data', 'code'],
      url: 'https://docs.wandb.ai',
      pricing: 'API-based'
    },
    {
      name: 'Kaggle API',
      description: 'Programmatically access energy-related datasets, download models, and integrate community solutions into your hackathon project',
      category: ['data'],
      url: 'https://github.com/Kaggle/kaggle-api',
      pricing: 'Free'
    },
    {
      name: 'Pandas AI',
      description: 'Add natural language querying capabilities to your energy datasets - let users ask questions about consumption data in plain English',
      category: ['data', 'code'],
      url: 'https://docs.pandas-ai.com',
      pricing: 'Open Source'
    },

    // Automation
    {
      name: 'Zapier API',
      description: 'Integrate workflow automation into your energy platform - trigger actions based on consumption patterns and connect multiple data sources programmatically',
      category: ['automation', 'data'],
      url: 'https://platform.zapier.com/docs',
      pricing: 'API-based'
    },
    {
      name: 'Make API (Integromat)',
      description: 'Build complex data processing workflows programmatically - automate energy data ingestion, transformation, and report generation',
      category: ['automation', 'data'],
      url: 'https://www.make.com/en/api-documentation',
      pricing: 'API-based'
    },
    {
      name: 'n8n API',
      description: 'Self-hosted workflow automation with full API control - build custom energy data pipelines without external dependencies',
      category: ['automation', 'data'],
      url: 'https://docs.n8n.io',
      pricing: 'Open Source'
    },

    // Deployment & Hosting
    {
      name: 'Vercel',
      description: 'Deploy your energy data platform instantly with zero configuration - perfect for Next.js applications with built-in CI/CD and global edge network',
      category: ['deployment'],
      url: 'https://vercel.com/docs',
      pricing: 'Free/Pro'
    },
    {
      name: 'Netlify',
      description: 'Deploy static sites and serverless functions for your energy monitoring dashboard with automatic builds from Git repositories',
      category: ['deployment'],
      url: 'https://docs.netlify.com',
      pricing: 'Free/Pro'
    },
    {
      name: 'Railway',
      description: 'Deploy full-stack applications with databases - ideal for energy data processing backends with PostgreSQL, Redis, and automatic scaling',
      category: ['deployment'],
      url: 'https://docs.railway.app',
      pricing: 'Free/Pro'
    },
    {
      name: 'Render',
      description: 'Deploy web services, databases, and static sites with automatic SSL and custom domains for your energy analytics platform',
      category: ['deployment'],
      url: 'https://render.com/docs',
      pricing: 'Free/Pro'
    },
    {
      name: 'Supabase',
      description: 'Backend-as-a-service with PostgreSQL database, real-time subscriptions, and authentication - perfect for energy data storage and user management',
      category: ['deployment', 'data'],
      url: 'https://supabase.com/docs',
      pricing: 'Free/Pro'
    },
    {
      name: 'PlanetScale',
      description: 'Serverless MySQL database with branching and schema changes - ideal for storing and querying large amounts of energy consumption data',
      category: ['deployment', 'data'],
      url: 'https://docs.planetscale.com',
      pricing: 'Free/Pro'
    },
    {
      name: 'Fly.io',
      description: 'Deploy applications close to users globally with edge computing - perfect for real-time energy monitoring applications with low latency requirements',
      category: ['deployment'],
      url: 'https://fly.io/docs',
      pricing: 'Pay-as-you-go'
    },

    // Open Source Energy Models
    {
      name: 'OSeMOSYS',
      description: 'Plan and optimize entire energy systems - from power plants to renewable sources. Helps governments and companies design efficient energy strategies.',
      category: ['energy'],
      url: 'https://github.com/OSeMOSYS/OSeMOSYS',
      pricing: 'Open Source'
    },
    {
      name: 'openMASTER',
      description: 'Analyze sustainable energy roadmaps with Python. Build models to study how energy systems can become cleaner and more efficient over time.',
      category: ['energy'],
      url: 'https://github.com/IIT-EnergySystemModels/openMASTER',
      pricing: 'Open Source'
    },
    {
      name: 'PyPSA-Eur',
      description: 'Model European energy systems including electricity, heating, and transport. Optimize renewable energy integration across countries.',
      category: ['energy'],
      url: 'https://github.com/PyPSA/pypsa-eur',
      pricing: 'Open Source'
    },
    {
      name: 'PyPSA-Earth',
      description: 'Study energy systems anywhere in the world. Plan renewable energy investments and grid infrastructure for any country or region.',
      category: ['energy'],
      url: 'https://github.com/pypsa-meets-earth/pypsa-earth',
      pricing: 'Open Source'
    },
    {
      name: 'TIMES Model',
      description: 'Bottom-up energy system modeling tool. Analyze energy technologies, costs, and environmental impacts for long-term planning.',
      category: ['energy'],
      url: 'https://github.com/etsap-TIMES/TIMES_model',
      pricing: 'Open Source'
    },
    {
      name: 'ManufacturingNet',
      description: 'AI toolkit for manufacturing problems. Includes machine learning models for energy optimization and equipment maintenance prediction.',
      category: ['energy'],
      url: 'https://github.com/BaratiLab/ManufacturingNet',
      pricing: 'Open Source'
    },
    {
      name: 'Manufacturing Line Optimization',
      description: 'Use AI to optimize factory production lines. Reduce energy consumption while maintaining or increasing output efficiency.',
      category: ['energy'],
      url: 'https://github.com/microsoft/bonsai-ManufacturingLineOptimization',
      pricing: 'Open Source'
    },
    {
      name: 'Iron and Steel Model',
      description: 'Calculate energy use and emissions in steel production. Compare different manufacturing processes and optimize for efficiency.',
      category: ['energy'],
      url: 'https://github.com/ottohebeda/Iron-and-steel-model',
      pricing: 'Open Source'
    },
    {
      name: 'FJSP Energy Optimization',
      description: 'Schedule manufacturing jobs to save energy. Automatically turn machines on/off to reduce power consumption by up to 20%.',
      category: ['energy'],
      url: 'https://github.com/hamcruise/FJSP-Shutdown',
      pricing: 'Open Source'
    },
    {
      name: 'Predictive Maintenance',
      description: 'Predict when factory equipment will break down. Use sensors and AI to schedule maintenance before failures happen.',
      category: ['energy'],
      url: 'https://github.com/odh-labs/predictive-maint',
      pricing: 'Open Source'
    }
  ];

  const filteredTools = selectedCategory === 'all' 
    ? aiTools 
    : aiTools.filter(tool => tool.category.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-purple-950 relative">
      {/* Background Pattern - Similar to main page */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/8 rounded-full"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-white/6 rotate-45"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-white/10 rounded-full"></div>
        <div className="absolute top-32 left-1/3 w-6 h-6 border border-white/8 rounded-full"></div>
        <div className="absolute bottom-32 right-1/4 w-10 h-10 border border-white/6 rotate-12"></div>
        
        <svg className="absolute inset-0 w-full h-full">
          <path d="M0,80 Q200,40 400,80 T800,80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
          <path d="M100,200 Q300,160 500,200 T900,200" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
          <path d="M0,300 Q250,260 500,300 T1000,300" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Mobile Not Supported Message */}
      <div className="lg:hidden relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <span className="text-6xl mb-6 block">📱</span>
          <h1 className="text-3xl font-semibold text-purple-100 tracking-tight leading-none mb-4">
            Desktop Only
          </h1>
          <p className="text-lg text-purple-200 font-light mb-6 leading-relaxed">
            This AI Stack Library is optimized for desktop viewing and isn&apos;t supported on mobile devices.
          </p>
          <p className="text-base text-purple-300 font-light leading-relaxed">
            Please visit this page on a desktop or laptop computer for the best experience.
          </p>
        </div>
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:block relative z-10">
        <div className="relative z-10">
          {/* Header */}
          <div className="bg-purple-900/20">
            <div className="max-w-7xl mx-auto px-6 py-12 text-center">
              <div className="mb-6">
                <span className="text-4xl mb-4 block">🤖</span>
                <h1 className="text-4xl md:text-5xl font-semibold text-purple-100 tracking-tight leading-none mb-4">
                  There&apos;s an AI for that
                </h1>
                <p className="text-xl md:text-2xl text-purple-200 font-light tracking-tight mb-3">
                  AI stack library
                </p>
                <p className="text-lg text-purple-300 font-light max-w-2xl mx-auto leading-relaxed">
                  Discover the best AI tools for development, creativity, automation, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content with Sidebar */}
          <div className="bg-purple-900/10">
            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="flex gap-8">
                {/* Left Sidebar - Filters */}
                <div className="w-68 flex-shrink-0">
                  <div className="sticky top-8">
                    {/* All Tools Button */}
                    <div className="mb-6">
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className={`w-full px-4 py-2 rounded-xl font-medium transition-all duration-300 text-base ${
                          selectedCategory === 'all'
                            ? 'bg-purple-600 text-purple-100 shadow-lg shadow-purple-500/20'
                            : 'bg-purple-800/30 text-purple-200 hover:bg-purple-700/40 border border-purple-700/50'
                        }`}
                      >
                        All Tools
                      </button>
                    </div>

                    {/* Filter Groups */}
                    <div className="space-y-6">
                      {/* IDEs Group */}
                      <div>
                        <h3 className="text-lg font-medium text-purple-200 mb-3">Build your app</h3>
                        <div className="space-y-2">
                          <button
                            onClick={() => setSelectedCategory('ides')}
                            className={`w-full px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm text-left ${
                              selectedCategory === 'ides'
                                ? 'bg-purple-600 text-purple-100 shadow-lg shadow-purple-500/20'
                                : 'bg-purple-800/30 text-purple-200 hover:bg-purple-700/40 border border-purple-700/50'
                            }`}
                          >
                            AI-driven IDEs
                          </button>
                          <button
                            onClick={() => setSelectedCategory('code')}
                            className={`w-full px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm text-left ${
                              selectedCategory === 'code'
                                ? 'bg-purple-600 text-purple-100 shadow-lg shadow-purple-500/20'
                                : 'bg-purple-800/30 text-purple-200 hover:bg-purple-700/40 border border-purple-700/50'
                            }`}
                          >
                            Code & Dev
                          </button>
                        </div>
                      </div>

                      {/* Build Your App Group */}
                      <div>
                        <h3 className="text-lg font-medium text-purple-200 mb-3">AI Models & Tools</h3>
                        <div className="space-y-2">
                          <button
                            onClick={() => setSelectedCategory('general')}
                            className={`w-full px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm text-left ${
                              selectedCategory === 'general'
                                ? 'bg-purple-600 text-purple-100 shadow-lg shadow-purple-500/20'
                                : 'bg-purple-800/30 text-purple-200 hover:bg-purple-700/40 border border-purple-700/50'
                            }`}
                          >
                            General Purpose
                          </button>
                          <button
                            onClick={() => setSelectedCategory('data')}
                            className={`w-full px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm text-left ${
                              selectedCategory === 'data'
                                ? 'bg-purple-600 text-purple-100 shadow-lg shadow-purple-500/20'
                                : 'bg-purple-800/30 text-purple-200 hover:bg-purple-700/40 border border-purple-700/50'
                            }`}
                          >
                            Data Processing & Analytics
                          </button>
                          <button
                            onClick={() => setSelectedCategory('automation')}
                            className={`w-full px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm text-left ${
                              selectedCategory === 'automation'
                                ? 'bg-purple-600 text-purple-100 shadow-lg shadow-purple-500/20'
                                : 'bg-purple-800/30 text-purple-200 hover:bg-purple-700/40 border border-purple-700/50'
                            }`}
                          >
                            Automation
                          </button>
                          <button
                            onClick={() => setSelectedCategory('energy')}
                            className={`w-full px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm text-left ${
                              selectedCategory === 'energy'
                                ? 'bg-purple-600 text-purple-100 shadow-lg shadow-purple-500/20'
                                : 'bg-purple-800/30 text-purple-200 hover:bg-purple-700/40 border border-purple-700/50'
                            }`}
                          >
                            Open Source Energy Models
                          </button>
                        </div>
                      </div>

                      {/* Deploy Your App Group */}
                      <div>
                        <h3 className="text-lg font-medium text-purple-200 mb-3">Deploy your app</h3>
                        <div className="space-y-2">
                          <button
                            onClick={() => setSelectedCategory('deployment')}
                            className={`w-full px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm text-left ${
                              selectedCategory === 'deployment'
                                ? 'bg-purple-600 text-purple-100 shadow-lg shadow-purple-500/20'
                                : 'bg-purple-800/30 text-purple-200 hover:bg-purple-700/40 border border-purple-700/50'
                            }`}
                          >
                            Deployment & Hosting
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content - AI Disclaimer and Tools */}
                <div className="flex-1">
                  {/* AI Disclaimer for Energy Models */}
                  {selectedCategory === 'energy' && (
                    <div className="mb-8">
                      <div className="bg-purple-700/30 border border-purple-600/40 rounded-2xl p-6 text-center">
                        <p className="text-purple-200 text-sm md:text-base font-light leading-relaxed">
                          <span className="font-medium text-purple-100">AI-Generated Content:</span> This section was built by AI and its data is a result of AI research. 
                          We suggest teams validate the credibility and accuracy of these tools before using them in your projects.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Tools Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTools.map((tool, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-purple-800/40 via-purple-700/30 to-purple-600/20 rounded-3xl p-6 border border-purple-600/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group"
                      >
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold text-purple-100 mb-3 tracking-tight group-hover:text-white transition-colors">
                            {tool.name}
                          </h3>
                          <p className="text-purple-200 font-light leading-relaxed mb-4 text-sm">
                            {tool.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="bg-purple-600/50 text-purple-100 text-xs font-medium px-3 py-1 rounded-full">
                              {tool.pricing}
                            </span>
                            <a
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-300 hover:text-purple-100 transition-colors text-sm font-medium"
                            >
                              Visit →
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 