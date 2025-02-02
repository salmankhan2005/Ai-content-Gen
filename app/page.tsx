import React from 'react';
import { Bot, Code, Sparkles, Zap, Brain, Lock, ChevronRight, Github } from 'lucide-react';

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-white">AI Content Gen</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
            <a href="https://github.com" className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Next-Gen AI Content
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Generation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Harness the power of artificial intelligence to create engaging content in seconds. Built with Web3 technology for the future of content creation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center space-x-2 transition-colors">
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center space-x-2 transition-colors">
              <span>Live Demo</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-blur-lg">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI-Powered Content</h3>
              <p className="text-gray-300">Advanced algorithms generate high-quality, unique content tailored to your needs.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-blur-lg">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">Generate content in seconds, not hours. Speed up your content creation workflow.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl backdrop-blur-lg">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Web3 Security</h3>
              <p className="text-gray-300">Built on blockchain technology ensuring your content remains secure and verifiable.</p>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-white text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-3xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1676299081847-c3c9b2d93ae3?auto=format&fit=crop&q=80"
                alt="AI Visualization"
                className="relative rounded-2xl w-full object-cover shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-8 h-8 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Connect Your Wallet</h3>
                  <p className="text-gray-300">Securely connect your Web3 wallet to access the platform.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-8 h-8 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Choose Your Content Type</h3>
                  <p className="text-gray-300">Select from multiple content types and customize your requirements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-8 h-8 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Generate & Verify</h3>
                  <p className="text-gray-300">Get your AI-generated content with blockchain verification.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Content Creation?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the future of content generation with our Web3-powered AI platform.
            </p>
            <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Start Creating Now
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="w-6 h-6 text-purple-400" />
              <span className="text-white font-bold">AI Content Gen</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;