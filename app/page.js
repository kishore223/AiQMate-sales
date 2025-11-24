'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, Cpu, Eye, Activity, Database, BarChart3, Shield, Zap, Menu, X, 
  ArrowRight, CheckCircle, Sparkles, Globe, Layers, Target, Gauge, Brain, 
  CloudUpload, Settings, Users, Headphones, Play, BookOpen, Award, TrendingUp, 
  Clock, DollarSign, AlertTriangle, Wrench, FileText, Phone, Mail, MapPin, 
  Linkedin, Twitter, Youtube, Camera, Tablet, Watch, HardDrive, Wifi, Cloud, 
  Server, Lock, Key, UserCheck, Building2, Factory, Cog, MonitorPlay, 
  GraduationCap, LifeBuoy, Lightbulb, Microscope, Package, PieChart, Workflow, 
  GitBranch, Box, Layers3, ScanLine, CircuitBoard, Star, Tornado
} from 'lucide-react';

// Custom Logo Component to replace the image
const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Abstract Swirl Logo Recreation */}
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-cyan-400" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" className="opacity-20" />
        <path d="M2 12c0-4.418 4.03-8 9-8s9 3.582 9 8" className="text-cyan-500" />
        <path d="M7 12c0 2.761 2.239 5 5 5s5-2.239 5-5" className="text-cyan-300" />
        <path d="M12 7v5l3 3" />
      </svg>
      <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"></div>
    </div>
    <div className="flex flex-col">
      <span className="text-2xl font-bold tracking-wider text-cyan-400 font-sans">AiQMate</span>
      <span className="text-[0.5rem] uppercase tracking-[0.2em] text-cyan-600 font-bold">AI Meets Your IQ</span>
    </div>
  </div>
);

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSolutionTab, setActiveSolutionTab] = useState('manufacturing');
  const [activeResourceTab, setActiveResourceTab] = useState('guides');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeProcess, setActiveProcess] = useState(0);

  // Images for different sections
  const images = {
    hero: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=2070",
    manufacturing: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    aerospace: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1200",
    energy: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
    automotive: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200",
    about: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    demo: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200"
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'solutions', 'features', 'how-it-works', 'technology', 'benefits', 'industries', 'resources', 'pricing', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Features', id: 'features' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' }
  ];

  const solutions = {
    manufacturing: {
      title: "Manufacturing",
      icon: <Factory className="w-8 h-8" />,
      description: "Transform assembly lines with AR-guided procedures",
      features: ["Assembly guidance", "Quality control", "Equipment maintenance", "Training programs"],
      stats: { efficiency: "+45%", errors: "-92%", training: "-70%" },
      image: images.manufacturing
    },
    aerospace: {
      title: "Aerospace",
      icon: <Package className="w-8 h-8" />,
      description: "Ensure compliance and safety in aircraft maintenance",
      features: ["Component inspection", "Regulatory compliance", "Safety protocols", "Documentation"],
      stats: { efficiency: "+55%", errors: "-95%", training: "-65%" },
      image: images.aerospace
    },
    energy: {
      title: "Energy & Utilities",
      icon: <Zap className="w-8 h-8" />,
      description: "Maintain critical infrastructure with precision",
      features: ["Grid maintenance", "Safety procedures", "Emergency response", "Predictive analytics"],
      stats: { efficiency: "+40%", errors: "-88%", training: "-60%" },
      image: images.energy
    },
    automotive: {
      title: "Automotive",
      icon: <Cog className="w-8 h-8" />,
      description: "Accelerate vehicle servicing and repairs",
      features: ["Diagnostic assistance", "Repair procedures", "Parts identification", "Service documentation"],
      stats: { efficiency: "+50%", errors: "-90%", training: "-75%" },
      image: images.automotive
    }
  };

  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-Time AR Guidance",
      description: "Step-by-step visual instructions overlaid directly on equipment through smart glasses, tablets, or smartphones.",
      details: ["3D animations", "Contextual hints", "Multi-language support"],
      color: "blue"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Diagnostics",
      description: "Machine learning algorithms that identify issues instantly and suggest optimal repair procedures.",
      details: ["Pattern recognition", "Predictive analytics", "Root cause analysis"],
      color: "purple"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data-Driven Insights",
      description: "Comprehensive analytics to fine-tune maintenance schedules and enhance productivity.",
      details: ["Performance metrics", "Failure predictions", "Cost analysis"],
      color: "orange"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Remote Expert",
      description: "Connect field technicians with remote experts for real-time collaboration and problem-solving.",
      details: ["Video conferencing", "AR annotations", "Session recording"],
      color: "green"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety & Compliance",
      description: "Ensure adherence to safety protocols and regulatory requirements with guided procedures.",
      details: ["Safety checklists", "Audit trails", "Certification tracking"],
      color: "red"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Seamless Integration",
      description: "Connect seamlessly with your existing CMMS, ERP, and IoT ecosystems.",
      details: ["API connectivity", "Data synchronization", "Custom workflows"],
      color: "indigo"
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Scan & Recognize",
      description: "Point your device at any equipment. AI identifies the model.",
      icon: <ScanLine className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200"
    },
    {
      step: "02",
      title: "Diagnose Issues",
      description: "Computer vision detects anomalies and heat signatures.",
      icon: <Microscope className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200"
    },
    {
      step: "03",
      title: "AR Overlay",
      description: "Digital twins appear precisely over the physical machinery.",
      icon: <Layers3 className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
    },
    {
      step: "04",
      title: "Guided Repair",
      description: "Follow interactive steps to resolve issues safely.",
      icon: <Workflow className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=1200"
    },
    {
      step: "05",
      title: "Auto-Document",
      description: "System logs every action for instant compliance.",
      icon: <FileText className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const benefits = [
    { metric: "90%", label: "Reduction in Errors", description: "Near-elimination of human error through guided procedures", icon: <CheckCircle /> },
    { metric: "50%", label: "Faster Maintenance", description: "Cut repair time in half with instant access to information", icon: <Clock /> },
    { metric: "75%", label: "Training Time Saved", description: "Accelerate technician onboarding and skill development", icon: <GraduationCap /> },
    { metric: "3x", label: "ROI in Year One", description: "Rapid return on investment through multiple efficiency gains", icon: <TrendingUp /> }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/mo",
      description: "For small teams starting with AR.",
      features: ["Up to 10 users", "Basic AR guidance", "50 procedures/mo", "Email support"],
      cta: "Start Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,499",
      period: "/mo",
      description: "For growing maintenance ops.",
      features: ["Up to 50 users", "Advanced AR + AI", "Unlimited procedures", "Priority support", "API Access"],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For global organizations.",
      features: ["Unlimited users", "Full Customization", "Dedicated Success Mgr", "24/7 Phone support", "On-premise option"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const faqs = [
    { question: "What hardware do I need?", answer: "AIQmate works with standard iOS/Android tablets and smartphones, as well as HoloLens 2 and RealWear devices." },
    { question: "Can it work offline?", answer: "Yes, critical procedures are cached locally on the device and sync when connection is restored." },
    { question: "How long is implementation?", answer: "Most clients are live within 2-4 weeks, depending on the complexity of your existing procedure documentation." },
    { question: "Is my data secure?", answer: "Absolutely. We are SOC 2 Type II certified and offer on-premise deployment for highly sensitive industries." }
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans selection:bg-blue-500/30">
      
      {/* Global Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            {/* REPLACED IMG WITH CUSTOM LOGO COMPONENT */}
            <Logo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${activeSection === item.id ? 'text-blue-400' : 'text-gray-300'}`}
              >
                {item.label}
              </button>
            ))}
            <button className="px-6 py-2.5 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Get Demo
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-black/95 border-b border-white/10 backdrop-blur-xl p-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-lg font-medium text-gray-300 py-2 border-b border-white/5"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full py-3 bg-blue-600 rounded-lg font-bold mt-4">Get Demo</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">AI-Powered Maintenance V2.0</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                See Beyond <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  The Physical
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                Empower your workforce with industrial-grade AR instructions. Reduce downtime by <span className="text-white font-semibold">40%</span> and training time by <span className="text-white font-semibold">70%</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2">
                  <Play className="w-5 h-5 fill-current" />
                  Watch Demo
                </button>
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center gap-6 text-sm text-gray-500 font-medium">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center overflow-hidden">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i*13}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-xs text-white">
                    +2k
                  </div>
                </div>
                <p>Trusted by 500+ Industrial Leaders</p>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl transform rotate-3"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-gray-900 h-[600px]">
                
                {/* Background Image Layer */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${images.hero})` }}
                  aria-label="AR Interface Background"
                />
                
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30"></div>

                {/* Animated Scanning Grid Effect */}
                <div className="absolute inset-0 z-10 opacity-30 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-scan-line"></div>

                {/* Center HUD Element */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="w-[80%] h-[60%] border border-white/10 rounded-xl relative">
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-blue-400 -ml-1 -mt-1"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-blue-400 -mr-1 -mt-1"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-blue-400 -ml-1 -mb-1"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-blue-400 -mr-1 -mb-1"></div>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Target className="w-12 h-12 text-blue-400/50 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Tech Status Indicators */}
                <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-2 font-mono text-xs text-blue-300">
                   <div className="bg-black/50 px-2 py-1 rounded border border-white/10 backdrop-blur-md">SYS.OP: NORMAL</div>
                   <div className="bg-black/50 px-2 py-1 rounded border border-white/10 backdrop-blur-md">NET: 5G/UW</div>
                   <div className="bg-black/50 px-2 py-1 rounded border border-white/10 backdrop-blur-md">LAT: 12ms</div>
                </div>
                
                {/* Floating AR UI Elements */}
                <div className="absolute top-20 left-10 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl max-w-xs animate-float shadow-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="text-yellow-500 w-5 h-5" />
                    <span className="font-bold text-sm">Anomaly Detected</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 w-[78%]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Heat Signature</span>
                    <span>78% Critical</span>
                  </div>
                </div>

                <div className="absolute bottom-20 right-10 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl max-w-xs animate-float-delayed shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Calibration Complete</div>
                      <div className="text-xs text-gray-400">System efficient</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Procedures", value: "100K+", icon: <FileText className="text-blue-500" /> },
            { label: "Global Users", value: "50K+", icon: <Users className="text-purple-500" /> },
            { label: "Uptime SLA", value: "99.9%", icon: <Server className="text-green-500" /> },
            { label: "Countries Served", value: "50+", icon: <Globe className="text-indigo-500" /> },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-2 group hover:scale-105 transition-transform">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-colors mb-2">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Tailored for <span className="text-blue-500">Industry Leaders</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Specialized AR modules designed to meet the rigorous demands of your sector.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs */}
            <div className="lg:w-1/3 space-y-4">
              {Object.keys(solutions).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSolutionTab(key)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${
                    activeSolutionTab === key
                      ? 'bg-white/10 border-blue-500/50 shadow-lg shadow-blue-500/10'
                      : 'bg-transparent border-white/10 hover:bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-bold text-lg ${activeSolutionTab === key ? 'text-white' : 'text-gray-400'}`}>
                      {solutions[key].title}
                    </span>
                    {activeSolutionTab === key && <ChevronRight className="w-5 h-5 text-blue-400" />}
                  </div>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                    {solutions[key].description}
                  </p>
                </button>
              ))}
            </div>

            {/* Content Display */}
            <div className="lg:w-2/3 relative min-h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-black/40">
               <img 
                 src={solutions[activeSolutionTab].image} 
                 alt={solutions[activeSolutionTab].title}
                 className="absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent p-8 md:p-12 flex flex-col justify-center">
                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                   {solutions[activeSolutionTab].icon}
                 </div>
                 <h3 className="text-3xl md:text-4xl font-bold mb-4">{solutions[activeSolutionTab].title} Solutions</h3>
                 <p className="text-gray-300 text-lg mb-8 max-w-md">{solutions[activeSolutionTab].description}. Enhanced with real-time telemetry.</p>
                 
                 <div className="grid grid-cols-3 gap-6 mb-8 max-w-lg">
                    {Object.entries(solutions[activeSolutionTab].stats).map(([label, value], i) => (
                      <div key={i}>
                        <div className={`text-2xl font-bold ${i===0?'text-blue-400':i===1?'text-green-400':'text-purple-400'}`}>{value}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{label}</div>
                      </div>
                    ))}
                 </div>

                 <div className="space-y-3">
                   {solutions[activeSolutionTab].features.map((feat, i) => (
                     <div key={i} className="flex items-center gap-3 text-gray-300">
                       <CheckCircle className="w-5 h-5 text-blue-500" />
                       <span>{feat}</span>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-black/40 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Complete <span className="text-purple-500">Operational Awareness</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A unified platform integrating Computer Vision, IoT, and Mixed Reality.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${feature.color}-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-${feature.color}-500/20 transition-colors`}></div>
                
                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-500/10 flex items-center justify-center mb-6 text-${feature.color}-400 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{feature.description}</p>
                
                <ul className="space-y-2 border-t border-white/5 pt-4">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${feature.color}-500 mr-2`}></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works / Process */}
      <section id="how-it-works" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <div className="max-w-2xl">
               <h2 className="text-3xl md:text-5xl font-bold mb-4">Workflow <span className="text-green-400">Automation</span></h2>
               <p className="text-gray-400">From problem detection to resolution in 5 streamlined steps.</p>
            </div>
            <button className="mt-6 md:mt-0 px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors text-sm font-medium">
              View Documentation
            </button>
          </div>

          {/* New Image Stage */}
          <div className="w-full h-96 rounded-3xl overflow-hidden mb-12 relative border border-white/10 group">
             {processes.map((process, index) => (
               <div 
                 key={index} 
                 className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeProcess === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
               >
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60 z-10"></div>
                 <img 
                   src={process.image} 
                   alt={process.title} 
                   className="w-full h-full object-cover transform transition-transform duration-[10s] ease-linear scale-100 group-hover:scale-105" 
                 />
                 <div className="absolute bottom-8 left-8 z-20">
                   <div className="inline-block px-3 py-1 mb-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-bold uppercase tracking-wider">
                     Step {process.step}
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-2">{process.title}</h3>
                   <p className="text-gray-300 max-w-lg">{process.description}</p>
                 </div>
               </div>
             ))}
          </div>

          <div className="relative pt-10">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[68px] left-0 w-full h-[2px] bg-white/10">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0 transition-all duration-500"
                style={{ width: '20%', left: `${activeProcess * 20}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {processes.map((step, i) => (
                <div 
                  key={i} 
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setActiveProcess(i)}
                >
                  {/* Icon Node */}
                  <div className="flex justify-start lg:justify-center mb-8 relative z-10">
                    <div className={`w-14 h-14 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] ${activeProcess === i ? 'bg-[#050508] border-green-500 scale-110' : 'bg-[#050508] border-white/10'}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${activeProcess === i ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-gray-400'}`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className={`p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden h-full ${activeProcess === i ? 'bg-white/10 border-green-500/50 shadow-lg shadow-green-900/20' : 'bg-white/5 border-white/10'}`}>
                    <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-4xl">{step.step}</div>
                    <h4 className={`font-bold text-lg mb-2 transition-colors ${activeProcess === i ? 'text-green-400' : 'text-white'}`}>{step.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / ROI */}
      <section id="benefits" className="py-32 bg-gradient-to-b from-blue-900/10 to-transparent border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-6">
                 {benefits.map((benefit, i) => (
                   <div key={i} className="p-8 rounded-3xl bg-black/40 border border-white/10 text-center hover:border-blue-500/30 transition-colors">
                     <div className="text-4xl md:text-5xl font-bold text-white mb-2">{benefit.metric}</div>
                     <div className="text-blue-400 font-medium mb-3">{benefit.label}</div>
                     <p className="text-xs text-gray-500">{benefit.description}</p>
                   </div>
                 ))}
               </div>
             </div>
             
             <div className="order-1 lg:order-2 space-y-8">
               <h2 className="text-4xl md:text-5xl font-bold">Tangible Results <br/><span className="text-gray-500">from Day One</span></h2>
               <p className="text-gray-300 text-lg leading-relaxed">
                 Traditional maintenance is reactive and slow. AIQmate transforms your workforce into a proactive, data-driven unit. We don't just offer software; we offer a fundamental shift in operational efficiency.
               </p>
               <ul className="space-y-4">
                 {["Instant Knowledge Transfer", "Reduced Equipment Downtime", "Perfect Compliance Record"].map((item, i) => (
                   <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                     <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                       <CheckCircle className="w-5 h-5" />
                     </div>
                     <span className="font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </div>
        </div>
      </section>

      {/* Resources & Demo Video */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-3xl font-bold mb-12">See AIQmate in Action</h2>
           
           <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/20 group cursor-pointer aspect-video bg-black" onClick={() => setIsVideoPlaying(!isVideoPlaying)}>
             {!isVideoPlaying ? (
               <>
                 <img src={images.demo} alt="Demo" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                     <Play className="w-10 h-10 text-white fill-white ml-2" />
                   </div>
                 </div>
                 <div className="absolute bottom-8 left-8 text-left">
                   <div className="text-sm font-bold text-blue-400 mb-1">PLATFORM DEMO</div>
                   <div className="text-2xl font-bold">Diagnosing a Turbine Failure</div>
                 </div>
               </>
             ) : (
               <div className="w-full h-full flex items-center justify-center bg-gray-900">
                 <p className="text-gray-500">Video Player Placeholder (Click to pause)</p>
               </div>
             )}
           </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Transparent <span className="text-blue-500">Pricing</span></h2>
            <p className="text-gray-400">Scale your operations without hidden costs.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`relative p-8 rounded-3xl border transition-all duration-300 ${plan.popular ? 'bg-gradient-to-b from-blue-900/20 to-black border-blue-500/50 shadow-2xl shadow-blue-900/20 scale-105 z-10' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{plan.description}</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-white text-black hover:bg-gray-200'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Engineered for the <span className="text-indigo-400">Frontline</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Founded in 2019 by aerospace engineers and computer vision experts, AIQmate was built to solve a single problem: the knowledge gap in industrial maintenance. 
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We believe that when you give technicians superpowers—instant information, x-ray vision, and expert guidance—you don't just fix machines; you empower people.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8">
               <div>
                 <h4 className="text-white font-bold mb-2">Headquarters</h4>
                 <p className="text-gray-500 text-sm">San Francisco, CA<br/>Innovation District</p>
               </div>
               <div>
                 <h4 className="text-white font-bold mb-2">Contact</h4>
                 <p className="text-gray-500 text-sm">hello@aiqmate.com<br/>+1 (888) 555-0123</p>
               </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl"></div>
             <img src={images.about} alt="Team" className="relative rounded-3xl border border-white/10 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-black/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${expandedFAQ === i ? 'rotate-90' : ''}`} />
                </button>
                {expandedFAQ === i && (
                  <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                {/* REPLACED IMG WITH CUSTOM LOGO COMPONENT */}
                <Logo />
              </div>
              <p className="text-gray-500 max-w-sm mb-8">
                Pioneering the future of industrial maintenance through Augmented Reality and Artificial Intelligence.
              </p>
              <div className="flex space-x-4">
                {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-gray-400">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                {['Features', 'Integrations', 'Pricing', 'Security', 'Changelog'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-blue-400 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                {['About Us', 'Careers', 'Blog', 'Contact', 'Legal'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-blue-400 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2025 AIQmate Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 rounded-full shadow-2xl shadow-blue-600/40 flex items-center justify-center hover:scale-110 transition-transform z-40 group">
        <Headphones className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Talk to Sales
        </span>
      </button>

      {/* Global CSS for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes scan-line {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-scan-line {
          animation: scan-line 3s linear infinite;
        }
      `}} />
    </div>
  );
}