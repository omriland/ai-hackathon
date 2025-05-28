'use client';

import React from 'react';
import { useState } from 'react';

export default function AIStack() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tools', icon: '🤖' },
    { id: 'general', name: 'General Purpose', icon: '🧠' },
    { id: 'data', name: 'Data Processing & Analytics', icon: '📊' },
    { id: 'automation', name: 'Automation', icon: '⚡' },
    { id: 'code', name: 'Code & Dev', icon: '💻' },
    { id: 'deployment', name: 'Deployment & Hosting', icon: '🚀' }
  ];

  const aiTools = [
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
      name: 'GitHub Copilot API',
      description: 'Integrate AI code assistance directly into your development workflow - accelerate building of data processing pipelines and energy analysis algorithms',
      category: ['code'],
      url: 'https://docs.github.com/en/copilot',
      pricing: 'API-based'
    },
    {
      name: 'Tabnine API',
      description: 'Embed intelligent code completion into your IDE setup - speed up development of data analysis scripts and energy monitoring applications',
      category: ['code'],
      url: 'https://www.tabnine.com/code-review',
      pricing: 'API-based'
    },
    {
      name: 'Replit API',
      description: 'Programmatically create and deploy energy data processing applications with built-in AI assistance for rapid prototyping',
      category: ['code'],
      url: 'https://docs.replit.com',
      pricing: 'API-based'
    },

    // Data & Analytics
    {
      name: 'Hugging Face API',
      description: 'Access thousands of pre-trained models via API - implement time-series analysis, anomaly detection, and NLP for document processing in your energy platform',
      category: ['data', 'code'],
      url: 'https://huggingface.co/docs/api-inference',
      pricing: 'API-based'
    },
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

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-purple-900/20">
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">
            <div className="mb-8">
              <span className="text-6xl mb-6 block">🤖</span>
              <h1 className="text-6xl md:text-7xl font-semibold text-purple-100 tracking-tight leading-none mb-6">
                AI Stack Library
              </h1>
              <p className="text-2xl md:text-3xl text-purple-200 font-light tracking-tight mb-4">
                Curated collection of AI tools & platforms
              </p>
              <p className="text-xl text-purple-300 font-light max-w-3xl mx-auto leading-relaxed">
                Discover the best AI tools for development, creativity, automation, and more. 
                From LLMs to computer vision, find the right tool for your next project.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-purple-800/10">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-purple-100 shadow-lg shadow-purple-500/20'
                      : 'bg-purple-800/30 text-purple-200 hover:bg-purple-700/40 border border-purple-700/50'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="bg-purple-900/10">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-800/40 via-purple-700/30 to-purple-600/20 rounded-3xl p-8 border border-purple-600/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-purple-100 mb-3 tracking-tight group-hover:text-white transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-purple-200 font-light leading-relaxed mb-4">
                      {tool.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-purple-600/50 text-purple-100 text-sm font-medium px-3 py-1 rounded-full">
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
  );
} 