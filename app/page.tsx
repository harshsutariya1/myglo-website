"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Instagram,
  Mail,
  ChevronRight,
  Search,
  Heart,
  User,
  CheckCircle2,
  Calendar,
  Plus,
  Minus,
  Send,
  MapPin,
  MessageCircle,
  ArrowUp,
  Smartphone,
  Sparkles,
  Link as LinkIcon,
  BarChart3,
  ShieldCheck,
  Clock
} from 'lucide-react';

const App = () => {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('client'); // 'client' | 'salon'
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFeatureTab, setActiveFeatureTab] = useState<'client' | 'partner'>('client');

  // Brand Colors
  const colors = {
    primary: '#FFB6A3',
    primaryVariant: '#E06052',
    secondary: '#FC69C3',
    background: '#FFFFFF',
    surface: '#FAFAFA',
    textPrimary: '#140000',
    textSecondary: '#534B4B',
    inputFill: '#F3F3F5',
  };

  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "When is MyGlo launching?",
      answer: "We are launching exclusively in the Gold Coast, Australia in early 2026. Join our waitlist to be the first to know when we go live in your suburb."
    },
    {
      question: "Is MyGlo free for clients?",
      answer: "Yes! MyGlo is 100% free for clients to browse, discover, and book appointments. You only pay for the beauty services you book."
    },
    {
      question: "I'm a salon owner. Can I use my existing booking system?",
      answer: "Absolutely. MyGlo is designed to work with you. You can use our full-featured built-in calendar OR simply link your existing booking software (like Fresha or Timely) to your MyGlo profile."
    },
    {
      question: "How is MyGlo different from Instagram?",
      answer: "Instagram is for everything; MyGlo is specifically for beauty. Our search is built for services (e.g., 'Blonde Specialist' or 'Nail Art'), and every post links directly to a booking option. No more DMing for appointments."
    }
  ];

  return (
    <div className="min-h-screen w-full font-sans text-[#140000] selection:bg-[#FFB6A3] selection:text-[#140000]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      {/* Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
          
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

      {/* Noise Texture Overlay */}
      <div className="bg-noise"></div>

      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#FFB6A3]/30 to-[#FC69C3]/30 blur-[100px] animate-aurora"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[#E06052]/20 to-[#FFB6A3]/20 blur-[100px] animate-aurora" style={{ animationDelay: '-5s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="w-10 h-10 relative">
            <Image
              src="/MyGlo3D_4.png"
              alt="MyGlo Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-bold tracking-tight">MyGlo</span>
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="#features"
            onClick={(e) => handleScroll(e, 'features')}
            className="hidden md:block text-sm font-semibold text-[#534B4B] hover:text-[#140000] mr-2"
          >
            Features
          </a>
          <a
            href="#faq"
            onClick={(e) => handleScroll(e, 'faq')}
            className="hidden md:block text-sm font-semibold text-[#534B4B] hover:text-[#140000] mr-2"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="hidden md:block text-sm font-semibold text-[#534B4B] hover:text-[#140000] mr-4"
          >
            Contact
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-[#F3F3F5] transition-colors">
            <Instagram size={20} color="#140000" />
          </a>
          <a href="mailto:hello@myglo.app" className="p-2 rounded-full hover:bg-[#F3F3F5] transition-colors">
            <Mail size={20} color="#140000" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-12 lg:pt-20 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Column: Copy & Form */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3F0] border border-[#FFB6A3]/30">
            <span className="w-2 h-2 rounded-full bg-[#E06052] animate-pulse"></span>
            <span className="text-xs font-semibold text-[#E06052] uppercase tracking-wider">Coming Soon to Gold Coast</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#140000]">
            Express Yourself.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB6A3] to-[#FC69C3]">
              Keep Track.
            </span><br />
            Stay Connected.
          </h1>

          <p className="text-lg text-[#534B4B] max-w-md leading-relaxed">
            Fresha meets Instagram. The all-in-one beauty platform where you can discover local talent, book appointments instantly, and build your community.
          </p>

          {/* Waitlist Form */}
          <div className="w-full max-w-md glass-card p-6 rounded-2xl shadow-xl shadow-[#FFB6A3]/10 mx-auto lg:mx-0">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-8 text-center space-y-3 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-[#07944F]/10 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 size={32} color="#07944F" />
                </div>
                <h3 className="text-xl font-bold text-[#140000]">You're on the list!</h3>
                <p className="text-[#534B4B]">We'll notify you as soon as we launch in your area.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm font-semibold text-[#FFB6A3] hover:text-[#E06052] mt-4"
                >
                  Register another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* User Type Toggle */}
                <div className="bg-[#F3F3F5] p-1 rounded-xl flex">
                  <button
                    type="button"
                    onClick={() => setUserType('client')}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${userType === 'client'
                      ? 'bg-white text-[#140000] shadow-sm'
                      : 'text-[#534B4B] hover:text-[#140000]'
                      }`}
                  >
                    I'm a Client
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType('salon')}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${userType === 'salon'
                      ? 'bg-white text-[#140000] shadow-sm'
                      : 'text-[#534B4B] hover:text-[#140000]'
                      }`}
                  >
                    I'm a Salon
                  </button>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-[#140000]">
                    {userType === 'client' ? 'Get early access' : 'Join as a Partner'}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder={userType === 'client' ? 'jane@example.com' : 'salon@business.com'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFB6A3] transition-all placeholder:text-[#888080]"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="bg-[#140000] text-white px-6 rounded-xl font-semibold hover:bg-[#333] transition-colors flex items-center justify-center min-w-[100px]"
                    >
                      {status === 'loading' ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <span className="flex items-center gap-1">Join <ChevronRight size={16} /></span>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-[#888080]">
                    {userType === 'client'
                      ? 'Join 2,000+ others waiting for launch.'
                      : 'Exclusive launch rates for the first 50 partners.'}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>



        {/* Right Column: App Mockup */}
        <div className="relative h-[500px] lg:h-[800px] w-full mt-8 lg:mt-0 select-none pointer-events-none flex items-center justify-center lg:block">
          {/* Phone 1: Discovery Feed */}
          <div className="absolute top-0 left-1/2 -translate-x-[60%] lg:translate-x-0 lg:left-auto lg:right-28 w-[280px] sm:w-[300px] h-[580px] sm:h-[600px] bg-white rounded-[40px] border-[8px] border-[#140000] shadow-2xl overflow-hidden animate-float z-20 scale-[0.85] sm:scale-100 origin-top lg:origin-center">
            {/* Status Bar */}
            <div className="h-6 w-full bg-white flex justify-between px-6 items-center pt-2">
              <div className="text-[10px] font-bold">9:41</div>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
              </div>
            </div>

            {/* App Header */}
            <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-end">
              <h2 className="font-bold text-xl">Discover</h2>
              <Search size={20} className="text-gray-400" />
            </div>

            {/* Feed Item */}
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFB6A3] to-[#FC69C3]"></div>
                <div>
                  <div className="font-bold text-xs">Lily Lashes</div>
                  <div className="text-[10px] text-gray-500">Melbourne CBD • 2km</div>
                </div>
                <button className="ml-auto text-[10px] font-bold text-[#FFB6A3] border border-[#FFB6A3] px-2 py-1 rounded-full">+ Follow</button>
              </div>

              {/* Image Placeholder */}
              <div className="w-full aspect-square bg-[#F3F3F5] rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                  <User size={48} />
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">
                  $60
                </div>
              </div>

              <div className="flex gap-4 pt-1">
                <Heart size={20} className="text-[#140000]" />
                <div className="text-xs font-semibold">284 likes</div>
              </div>
              <div className="text-xs text-gray-600">
                <span className="font-bold text-black">Lily Lashes</span> Natural hybrid set for the weekend ✨
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="absolute bottom-0 w-full h-16 bg-white border-t border-gray-100 flex justify-around items-center px-2">
              <div className="flex flex-col items-center gap-1">
                <Search size={20} className="text-[#FFB6A3]" />
                <span className="text-[10px] font-bold text-[#FFB6A3]">Discover</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-40">
                <Calendar size={20} />
                <span className="text-[10px]">Bookings</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-40">
                <User size={20} />
                <span className="text-[10px]">Profile</span>
              </div>
            </div>
          </div>

          {/* Phone 2: Booking Flow */}
          <div className="absolute top-8 left-1/2 translate-x-[-15%] lg:translate-x-0 lg:top-20 lg:right-0 w-[260px] sm:w-[280px] h-[520px] sm:h-[550px] bg-gray-50 rounded-[40px] border-[8px] border-[#E06052]/20 shadow-xl overflow-hidden animate-float-delayed z-10 opacity-90 scale-[0.85] sm:scale-95 lg:scale-95 origin-top lg:origin-bottom-right">
            <div className="h-full w-full bg-white opacity-90 flex flex-col">
              <div className="p-6 pt-12">
                <h3 className="text-lg font-bold mb-4">Select Time</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-3">
                      <div className={`p-3 rounded-xl border flex-1 text-center ${i === 1 ? 'border-[#FFB6A3] bg-[#FFF3F0]' : 'border-gray-100'}`}>
                        <div className="text-xs font-bold text-gray-500">MON</div>
                        <div className="text-sm font-bold">1{i}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-2">
                  <div className="p-3 rounded-lg bg-[#140000] text-white text-sm flex justify-between">
                    <span>10:00 AM</span>
                    <span className="font-bold">$60</span>
                  </div>
                  <div className="p-3 rounded-lg border border-gray-100 text-gray-400 text-sm">
                    11:30 AM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Value Propositions */}
      <section className="py-20 bg-gradient-to-b from-transparent to-slate-50/80 border-t border-[#E5E5E5]/50 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F3F3F5] hover:border-[#FFB6A3] transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF3F0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Search className="text-[#E06052]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Discover</h3>
              <p className="text-[#534B4B] leading-relaxed">
                Browse a visual feed of real work from salons near you. Filter by location, price, and style.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F3F3F5] hover:border-[#FFB6A3] transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF3F0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="text-[#E06052]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Book Instantly</h3>
              <p className="text-[#534B4B] leading-relaxed">
                See real-time availability and book in seconds. No more DMs or waiting for callbacks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F3F3F5] hover:border-[#FFB6A3] transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF3F0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="text-[#E06052]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Connect</h3>
              <p className="text-[#534B4B] leading-relaxed">
                Follow your favorite creators, save styles for inspiration, and join the beauty community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED FEATURES SECTION */}
      <section id="features" className="py-24 bg-gradient-to-br from-white via-rose-50/30 to-orange-50/30 relative overflow-hidden">
        {/* Decorative blob for features */}
        <div className="absolute top-1/2 left-[-200px] w-[600px] h-[600px] bg-[#FFB6A3]/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Future of Beauty Booking</h2>
            <p className="text-[#534B4B] text-lg max-w-2xl mx-auto mb-8">
              Whether you're looking for the perfect lash tech or running a busy salon, MyGlo is built to make your life easier.
            </p>

            {/* Toggle Switch */}
            <div className="inline-flex bg-[#F3F3F5] p-1.5 rounded-2xl relative shadow-inner">
              {/* Sliding Background Pill */}
              <div
                className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.4,0.0,0.2,1)] ${activeFeatureTab === 'partner' ? 'translate-x-full' : 'translate-x-0'
                  }`}
              />

              <button
                onClick={() => setActiveFeatureTab('client')}
                className={`relative z-10 px-8 py-3 rounded-xl text-sm font-bold transition-colors duration-300 min-w-[160px] ${activeFeatureTab === 'client' ? 'text-[#140000]' : 'text-[#534B4B] hover:text-[#140000]'
                  }`}
              >
                I'm a Client
              </button>
              <button
                onClick={() => setActiveFeatureTab('partner')}
                className={`relative z-10 px-8 py-3 rounded-xl text-sm font-bold transition-colors duration-300 min-w-[160px] ${activeFeatureTab === 'partner' ? 'text-[#140000]' : 'text-[#534B4B] hover:text-[#140000]'
                  }`}
              >
                I'm a Partner
              </button>
            </div>
          </div>

          <div className="transition-all duration-500 ease-in-out">
            {activeFeatureTab === 'client' ? (
              <div className="grid md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="glass-card p-8 rounded-3xl border border-[#F3F3F5] shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFB6A3] to-[#FC69C3] flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform">
                    <Smartphone size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Visual Discovery</h3>
                  <p className="text-[#534B4B] leading-relaxed">
                    Don't just read about a salon, see their work. Search for "Blonde Balayage" or "Gel Tips" and browse a visual feed of real results from local artists.
                  </p>
                </div>

                <div className="glass-card p-8 rounded-3xl border border-[#F3F3F5] shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#E5E5E5] flex items-center justify-center mb-6 text-[#140000] shadow-sm group-hover:scale-110 transition-transform">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Verified & Trusted</h3>
                  <p className="text-[#534B4B] leading-relaxed">
                    Book with confidence. Read verified reviews from the community and see portfolio photos that are actually linked to the service you're booking.
                  </p>
                </div>

                <div className="glass-card p-8 rounded-3xl border border-[#F3F3F5] shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#E5E5E5] flex items-center justify-center mb-6 text-[#140000] shadow-sm group-hover:scale-110 transition-transform">
                    <Clock size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Real-Time Availability</h3>
                  <p className="text-[#534B4B] leading-relaxed">
                    Need a last-minute glow up? Filter by "Available Today" to find open slots instantly without calling around.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="glass-card p-8 rounded-3xl border-2 border-[#140000] shadow-xl shadow-gray-200 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 right-0 bg-[#140000] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                    SALON FAVORITE
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#140000] flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform">
                    <LinkIcon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Hybrid Booking Engine</h3>
                  <p className="text-[#534B4B] leading-relaxed">
                    <span className="font-bold text-[#140000]">Love your current software? Keep it.</span> MyGlo lets you link your existing system (Fresha, Timely, etc.) directly to your profile. Or, use our full-featured native calendar for free.
                  </p>
                </div>

                <div className="glass-card p-8 rounded-3xl border border-[#F3F3F5] shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#E5E5E5] flex items-center justify-center mb-6 text-[#140000] shadow-sm group-hover:scale-110 transition-transform">
                    <BarChart3 size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Automated Marketing</h3>
                  <p className="text-[#534B4B] leading-relaxed">
                    Every photo you post is a potential booking. Your work appears in local discovery feeds, turning "likes" into appointments automatically without ad spend.
                  </p>
                </div>

                <div className="glass-card p-8 rounded-3xl border border-[#F3F3F5] shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#E5E5E5] flex items-center justify-center mb-6 text-[#140000] shadow-sm group-hover:scale-110 transition-transform">
                    <MessageCircle size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Community Growth</h3>
                  <p className="text-[#534B4B] leading-relaxed">
                    Build a loyal following. Clients follow your profile, get notified of your availability, and engage with your brand in a dedicated beauty ecosystem.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-b from-slate-50/50 to-white border-t border-[#E5E5E5]/50 relative">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#E5E5E5] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#FFB6A3] bg-white"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-[#FAFAFA] transition-colors"
                >
                  <span className="font-bold text-lg text-[#140000] pr-4">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <Minus className="text-[#FFB6A3] flex-shrink-0" size={24} />
                  ) : (
                    <Plus className="text-[#140000] flex-shrink-0" size={24} />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="p-6 pt-0 text-[#534B4B] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-pink-50/40 to-white border-t border-[#E5E5E5]/50 relative overflow-hidden">
        {/* Decorative Blob for contact section */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#FC69C3]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3F0] border border-[#FFB6A3]/30 mb-6">
                <span className="text-xs font-semibold text-[#E06052] uppercase tracking-wider">Get In Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Have questions? <br />We'd love to hear from you.</h2>
              <p className="text-lg text-[#534B4B] mb-8 leading-relaxed max-w-md">
                Whether you're a salon owner looking to partner or a client with feedback, our team is here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E5E5] flex items-center justify-center shadow-sm">
                    <Mail className="text-[#FFB6A3]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <a href="mailto:hello@myglo.app" className="text-[#534B4B] hover:text-[#E06052] transition-colors">hello@myglo.app</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E5E5] flex items-center justify-center shadow-sm">
                    <MapPin className="text-[#FC69C3]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p className="text-[#534B4B]">Gold Coast, Australia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-3xl shadow-xl shadow-[#FFB6A3]/5 bg-white">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#140000]">First Name</label>
                    <input type="text" className="w-full bg-[#F3F3F5] border-transparent rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFB6A3] transition-all" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#140000]">Last Name</label>
                    <input type="text" className="w-full bg-[#F3F3F5] border-transparent rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFB6A3] transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#140000]">Email</label>
                  <input type="email" className="w-full bg-[#F3F3F5] border-transparent rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFB6A3] transition-all" placeholder="jane@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#140000]">Message</label>
                  <textarea rows={4} className="w-full bg-[#F3F3F5] border-transparent rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FFB6A3] transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-[#140000] text-white py-4 rounded-xl font-bold hover:bg-[#333] transition-colors flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md py-12 border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-[#888080]">
            &copy; 2025 MyGlo Australia. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-semibold text-[#140000]">
            <a href="#" className="hover:text-[#FFB6A3]">Privacy Policy</a>
            <a href="#" className="hover:text-[#FFB6A3]">Terms of Service</a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="hover:text-[#FFB6A3]"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#140000] text-white shadow-xl hover:bg-[#333] transition-all duration-300 transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;