import React, { useState, useEffect } from 'react';
import { TopBanner } from './TopBanner';
import { TopBar } from './TopBar';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Square, Gem, Edit3, Shield, Star, Tag, MessageSquare, Trophy, Users, UserCheck, Globe, SlidersHorizontal, Search, ChevronDown, LayoutGrid, Plus, Crosshair, Eye, Calendar, ShieldCheck, ShieldAlert, Filter, ArrowLeft, Infinity, Network, Flame, ChevronLeft, Bot, Sparkles, Cpu, Target, Command, X, Send } from 'lucide-react';
import { ItemAIFloatingWidget } from './ItemAIFloatingWidget';
import { ChatWidget } from './ChatWidget';

interface DevirPageProps {
  onNavigateHome: () => void;
}

export const DevirPage: React.FC<DevirPageProps> = ({ onNavigateHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleListingClick = (title: string) => {
    localStorage.setItem('active_listing_title', title);
    window.dispatchEvent(new CustomEvent('openChat', { detail: { title } }));
  };

  const profileBannerUrl = "https://cdn.itemsatis.com/cover/global/Wallpaper1.png";

  return (
    <div className="min-h-screen bg-[#141724] text-gray-100 font-sans selection:bg-[#8b5cf6] selection:text-white flex flex-col justify-between">
      <div>
        <TopBanner />
        <TopBar />
        <Header
          onProfileClick={() => {}}
          onOpenAddListing={() => {}}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onNavigateHome={onNavigateHome}
        />
        <Navigation
          onOpenAddListing={() => {}}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* ================= MOBILE VIEW (< md) ================= */}
      <main className="md:hidden flex-1 flex flex-col bg-[#1e1f29] relative pb-20">
        
        {/* Back Button */}
        <button onClick={onNavigateHome} className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#1a1c24] border border-slate-800 rounded-l-2xl p-2 z-50">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Cover Photo Area */}
        <div className="w-full h-24 bg-white relative">
          <img src={profileBannerUrl} alt="Cover" className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 bg-[#8a8a8a] rounded-md px-3 py-1 flex items-center gap-1">
            <Eye className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-bold">0</span>
          </div>
        </div>

        {/* Profile Centerpiece */}
        <div className="relative flex flex-col items-center mt-[35px] px-4">
          <div className="w-28 h-28 rounded-3xl border-4 border-[#1e1f29] bg-transparent overflow-hidden shadow-md z-10">
            <img 
              src="https://i.ibb.co/QjbzzqBM/hinduuu.png" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex items-center gap-3 mt-3">
            <span className="text-white font-bold text-base tracking-wide">Norex1</span>
            <div className="flex rounded-md overflow-hidden text-xs font-bold shadow-sm">
              <div className="bg-indigo-600 px-2 py-0.5 text-white">LEVEL</div>
              <div className="bg-black px-2 py-0.5 text-white">2</div>
            </div>
            
            <div className="flex items-center">
              <span className="w-2.5 h-2.5 bg-[#00e676] rounded-full mr-1.5 inline-block"></span>
              <span className="text-[#00e676] text-xs font-bold tracking-wider">ÇEVRİMİÇİ</span>
            </div>
          </div>
        </div>

        {/* Main Action Button */}
        <button className="mx-4 my-5 bg-[#2b66f5] hover:bg-blue-700 text-white rounded-xl py-3.5 text-sm font-medium flex items-center justify-center gap-2 transition-colors">
          <Edit3 className="w-4 h-4" />
          Profilini Düzenle
        </button>

        {/* Membership Date Badge */}
        <div className="mx-auto bg-[#1a1c24] border border-slate-800 text-slate-400 rounded-full px-4 py-1.5 text-xs inline-flex items-center gap-1.5 mb-5">
          <Calendar className="w-4 h-4" />
          Üyelik Tarihi: 17 mart 2024
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 bg-[#252836]/50 border border-slate-800 rounded-2xl mx-4 mb-5 p-4">
          <div className="flex flex-col items-center justify-center text-center">
            <ShieldCheck className="w-6 h-6 text-[#00e676] mb-1.5" />
            <span className="text-slate-400 text-[10px] tracking-wider uppercase mb-1">BAŞARILI İŞLEM</span>
            <span className="text-[#00e676] text-2xl font-bold">0</span>
            <span className="text-[#00e676] text-xs font-medium">• Adet</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center border-l border-slate-800">
            <ShieldAlert className="w-6 h-6 text-[#f5a623] mb-1.5" />
            <span className="text-slate-400 text-[10px] tracking-wider uppercase mb-1">DEĞERLENDİRME PUANI</span>
            <span className="text-slate-300 text-2xl font-bold">? <span className="text-lg font-normal text-slate-500">/ 0</span></span>
            <span className="text-[#f5a623] text-xs font-medium">• Değ. yok</span>
          </div>
        </div>

        {/* Tabbed Grid Navigation */}
        <div className="bg-[#15171e] rounded-2xl mx-4 mb-5 p-5 grid grid-cols-3 gap-y-7 gap-x-2 text-center text-xs font-semibold">
          <div className="flex flex-col items-center justify-start pb-2 relative">
            <Tag className="w-6 h-6 text-slate-400 mb-2" />
            <span className="text-slate-400 mb-2">İlanlar</span>
            <div className="border border-[#f5a623] text-[#f5a623] rounded-full w-5 h-5 flex items-center justify-center text-[10px] bg-[#1e1f29]">0</div>
          </div>
          <div className="flex flex-col items-center justify-start pb-2">
            <MessageSquare className="w-6 h-6 text-slate-400 mb-2" />
            <span className="text-slate-400 mb-2">Değerlendirmeler</span>
            <div className="border border-[#f5a623] text-[#f5a623] rounded-full w-5 h-5 flex items-center justify-center text-[10px] bg-[#1e1f29]">0</div>
          </div>
          <div className="flex flex-col items-center justify-start pb-2">
            <Trophy className="w-6 h-6 text-slate-400 mb-2" />
            <span className="text-slate-400 mb-2">Başarılar</span>
            <div className="border border-[#f5a623] text-[#f5a623] rounded-full w-5 h-5 flex items-center justify-center text-[10px] bg-[#1e1f29]">0</div>
          </div>
          <div className="flex flex-col items-center justify-start pb-2">
            <Users className="w-6 h-6 text-slate-400 mb-2" />
            <span className="text-slate-400 mb-2">Takipçiler</span>
            <div className="border border-[#f5a623] text-[#f5a623] rounded-full w-5 h-5 flex items-center justify-center text-[10px] bg-[#1e1f29]">0</div>
          </div>
          <div className="flex flex-col items-center justify-start pb-2">
            <UserCheck className="w-6 h-6 text-slate-400 mb-2" />
            <span className="text-slate-400 mb-2 text-[11px]">Takip Ettikleri</span>
            <div className="border border-[#f5a623] text-[#f5a623] rounded-full w-5 h-5 flex items-center justify-center text-[10px] bg-[#1e1f29]">0</div>
          </div>
          <div className="flex flex-col items-center justify-start pb-2">
            <Globe className="w-6 h-6 text-slate-400 mb-2" />
            <span className="text-slate-400 mb-2">Topluluk</span>
            <div className="border border-[#f5a623] text-[#f5a623] rounded-full w-5 h-5 flex items-center justify-center text-[10px] bg-[#1e1f29]">0</div>
          </div>
        </div>

        {/* Bottom Filter Bar */}
        <div className="bg-[#1c1d24] border border-slate-800 rounded-xl mx-4 py-3 flex items-center justify-center gap-2 cursor-pointer shadow-sm">
          <Filter className="w-4 h-4 text-indigo-400" />
          <span className="text-slate-200 text-sm font-semibold">Filtrele ve Sırala</span>
        </div>

        {/* 1. Product Cards Grid (Two-Columns) */}
        <div className="grid grid-cols-2 gap-3 px-4 py-4 mt-2">
          {/* Card A (Left: Valorant Account) */}
          <div 
            onClick={() => handleListingClick('Dolu Sağlam Hesap Mail Değişimli Pazarlık Olur.')}
            className="bg-[#1b1f32] border border-[#2a2f4a] rounded-2xl overflow-hidden flex flex-col shadow-lg cursor-pointer transition-transform active:scale-95"
          >
            <div className="w-full aspect-[16/10] overflow-hidden bg-[#2a2f4a] relative">
              <img 
                src="https://cdn.itemsatis.com/uploads/post_images/dolu-saglam-hesap-mail-degisimli-dolu-skinli-19076286.png" 
                alt="Valorant Hesap" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-[#ff0000] opacity-5"></div>
              <div className="absolute inset-0 flex items-center justify-center p-2">
                <div className="border-2 border-red-500 text-red-500 text-[10px] leading-tight font-bold px-2 py-1.5 text-center bg-[#1b1f32]/90 shadow-lg">
                  satış işlemi bekleniyor
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="text-[10px] font-bold tracking-wider text-[#79809c] mb-1.5 text-left">VALORANT</div>
              <div className="text-xs font-bold text-white uppercase leading-snug line-clamp-2 h-8 mb-3">
                Dolu Sağlam Hesap Mail Değişimli Pazarlık Olur.
              </div>
              <div className="text-sm font-black text-[#ffb800]">3.450,00 ₺</div>
            </div>
          </div>
        </div>

        {/* 2. "Popüler Linkler" (Popular Links) Header */}
        <div className="flex items-center justify-between px-4 mt-6 mb-4">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-indigo-400" fill="currentColor" />
            <h2 className="text-base font-bold text-white">Popüler Linkler</h2>
          </div>
          <button className="w-11 h-11 rounded-full bg-[#1e2336] hover:bg-[#252b42] flex items-center justify-center border border-[#2d344f] transition-colors">
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* 3. "YAPAY ZEKADA BİZ" (AI Section) Banner */}
        <div className="mx-4 mb-20 relative">
          <div className="bg-[#1c2135] border border-[#282e4a] rounded-[24px] p-5 pb-6 shadow-xl relative overflow-hidden">
            {/* Header inside AI Banner */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-extrabold text-white tracking-wide uppercase">YAPAY ZEKADA BİZ</span>
              <div className="px-2.5 py-0.5 rounded-full bg-[#00f2fe] shadow-[0_0_10px_rgba(0,242,254,0.4)]">
                <span className="text-[10px] font-bold text-[#121520] tracking-wide">Yeni</span>
              </div>
            </div>

            {/* Description Text */}
            <p className="text-xs font-normal text-[#8c94b5] leading-relaxed mb-5">
              İtemsatışı yapay zeka hafızasında sorgulayın ve hakkımızda güncel bilgilere ulaşın.
            </p>

            {/* AI Model Icons Row */}
            <div className="flex items-center gap-2.5">
              <button className="w-10 h-10 flex items-center justify-center bg-[#151928] border border-[#232a42] rounded-xl hover:border-[#00f2fe] hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] transition-all">
                <Bot className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#151928] border border-[#232a42] rounded-xl hover:border-[#00f2fe] hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] transition-all">
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#151928] border border-[#232a42] rounded-xl hover:border-[#00f2fe] hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] transition-all">
                <Cpu className="w-5 h-5 text-emerald-400" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#151928] border border-[#232a42] rounded-xl hover:border-[#00f2fe] hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] transition-all">
                <Target className="w-5 h-5 text-slate-300" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#151928] border border-[#232a42] rounded-xl hover:border-[#00f2fe] hover:shadow-[0_0_12px_rgba(0,242,254,0.2)] transition-all">
                <Command className="w-5 h-5 text-rose-400" />
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* ================= DESKTOP VIEW (>= md) ================= */}
      <main className="hidden md:flex flex-1 flex-col items-center justify-start px-[30px] pt-[70px] pb-8 bg-[#2E3140] w-full relative">
        
        {/* Dynamic Desktop Background Banner Effect */}
        <div className="absolute top-0 left-0 w-full h-[400px] overflow-hidden pointer-events-none z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-150 blur-2xl opacity-40 brightness-50"
            style={{ backgroundImage: `url(${profileBannerUrl})` }}
          />
          {/* Gradient fade to #2E3140 at the bottom */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#2E3140] to-transparent" />
        </div>

        {/* Main Container */}
        <div className="w-full bg-[#181724] rounded-2xl overflow-hidden shadow-2xl border border-[#232232] relative z-10">
          
          {/* 1. Cover Banner */}
          <div className="w-full h-52 sm:h-64 bg-[#f0f3f8] transition-all relative">
            <img 
              src="https://cdn.itemsatis.com/cover/global/Wallpaper1.png" 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* 2. Profile Details Section */}
          <div className="px-6 pt-6 pb-4 bg-[#181724]">
            
            {/* Top Meta Info (Membership Date) */}
            <div className="flex justify-end items-center mb-2">
              <div className="flex items-center space-x-1.5 text-xs text-[#8a899a]">
                <span className="w-3.5 h-3.5 bg-[#4c4962] text-white rounded flex items-center justify-center text-[9px]">
                  <Square className="w-2 h-2" />
                </span>
                <span>Üyelik Tarihi: <strong className="text-gray-300 font-normal">17 mart 2024</strong></span>
              </div>
            </div>
            
            {/* Main Profile Body: Left Info + Right Stats */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              
              {/* Left Side: Avatar + Username + Edit Button */}
              <div className="flex items-start sm:items-center space-x-5">
                {/* Profile Avatar Box */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-transparent rounded-xl flex-shrink-0 border-2 border-[#232232] overflow-hidden shadow-md">
                  <img 
                    src="https://i.ibb.co/QjbzzqBM/hinduuu.png" 
                    alt="Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* User Details Stack */}
                <div className="flex flex-col space-y-2">
                  {/* Username Row */}
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">Norex1</h1>
                    
                    {/* Level Badge */}
                    <div className="flex items-center bg-[#524be3] text-white text-[11px] font-bold px-2 py-0.5 rounded-md space-x-1">
                      <span>LEVEL</span>
                      <span className="bg-[#3833a0] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">2</span>
                    </div>
                    
                    {/* Online Indicator */}
                    <div className="flex items-center space-x-1.5 text-xs font-medium text-[#10b981]">
                      <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                      <span>Çevrimiçi</span>
                    </div>
                  </div>
                  
                  {/* Diamond/Badge Icon */}
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-[#2a293a] border border-[#39374d] rounded flex items-center justify-center text-gray-300 text-xs shadow-sm">
                      <Gem className="w-3.5 h-3.5 text-gray-300" />
                    </div>
                  </div>
                  
                  {/* Edit Profile Button */}
                  <div className="pt-1">
                    <button className="inline-flex items-center space-x-2 bg-[#3563e9] hover:bg-[#2b54ca] text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors shadow-sm">
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Profilini Düzenle</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Right Side: Stats Panel Card */}
              <div className="w-full lg:w-auto">
                <div className="bg-[#1e1d2b] border border-[#2a293c] rounded-xl p-4 flex items-center divide-x divide-[#2e2d42] min-w-[320px]">
                  
                  {/* Left Stat: Successful Transactions */}
                  <div className="flex-1 pr-4">
                    <div className="flex items-center space-x-1.5 mb-2">
                      <Shield className="w-3.5 h-3.5 text-[#10b981]" />
                      <span className="text-[10px] font-bold tracking-wider text-[#8a899a] uppercase">BAŞARILI İŞLEM</span>
                    </div>
                    <div className="text-2xl font-bold text-[#10b981] mb-0.5">0</div>
                    <div className="text-[11px] text-[#10b981] flex items-center space-x-1">
                      <span>•</span>
                      <span>Adet</span>
                    </div>
                  </div>
                  
                  {/* Right Stat: Evaluation/Rating */}
                  <div className="flex-1 pl-5">
                    <div className="flex items-center space-x-1.5 mb-2">
                      <Star className="w-3.5 h-3.5 text-[#f59e0b]" />
                      <span className="text-[10px] font-bold tracking-wider text-[#8a899a] uppercase">DEĞERLENDİRME</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-0.5">
                      0<span className="text-sm font-normal text-[#8a899a]">/10</span>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          
          {/* 3. Navigation Tab Bar */}
          <div className="border-t border-[#232232] bg-[#161522] px-4 flex flex-wrap justify-between items-center text-xs text-[#8a899a] font-medium">
            
            {/* Left Tabs Group */}
            <div className="flex items-center space-x-1 sm:space-x-6 overflow-x-auto py-2">
              
              {/* Active Tab: İlanlar */}
              <button className="relative py-2.5 px-3 text-white font-semibold flex items-center space-x-2 border-b-2 border-[#6366f1] focus:outline-none">
                <Tag className="w-3.5 h-3.5" />
                <span>İlanlar</span>
                <span className="bg-[#2a293a] text-gray-300 text-[10px] px-1.5 py-0.5 rounded-full font-bold">0</span>
              </button>
              
              {/* Tab: Değerlendirmeler */}
              <button className="py-2.5 px-3 hover:text-gray-200 flex items-center space-x-2 transition-colors">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Değerlendirmeler</span>
                <span className="bg-[#242334] text-gray-400 text-[10px] px-1.5 py-0.5 rounded-full font-bold">0</span>
              </button>
              
              {/* Tab: Başarılar */}
              <button className="py-2.5 px-3 hover:text-gray-200 flex items-center space-x-2 transition-colors">
                <Trophy className="w-3.5 h-3.5" />
                <span>Başarılar</span>
              </button>
              
              {/* Tab: Takipçiler */}
              <button className="py-2.5 px-3 hover:text-gray-200 flex items-center space-x-2 transition-colors">
                <Users className="w-3.5 h-3.5" />
                <span>Takipçiler</span>
                <span className="bg-[#242334] text-gray-400 text-[10px] px-1.5 py-0.5 rounded-full font-bold">0</span>
              </button>
              
              {/* Tab: Takip Ettikleri */}
              <button className="py-2.5 px-3 hover:text-gray-200 flex items-center space-x-2 transition-colors">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Takip Ettikleri</span>
              </button>
            </div>
            
            {/* Right Tab Link: Topluluk Profili */}
            <div className="py-2.5 px-3">
              <button className="hover:text-gray-200 flex items-center space-x-2 transition-colors">
                <Globe className="w-3.5 h-3.5" />
                <span>Topluluk Profili</span>
              </button>
            </div>
            
          </div>
        </div>

        {/* 2-Column Layout Content Area */}
        <div className="w-full mt-6 flex gap-6 pb-20 relative">
          
          {/* Left Sidebar: "Filtreleme" (Filters) */}
          <aside className="w-80 shrink-0 bg-[#1b1a23] rounded-2xl p-6 flex flex-col gap-6">
            {/* Sidebar Header */}
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-5 h-5 text-[#8f92a1]" />
              <h2 className="text-base font-semibold text-white tracking-wide">Filtreleme</h2>
            </div>
            
            {/* Category 1: KATEGORİLER */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 tracking-wider mb-2">KATEGORİLER</h3>
              <div className="relative flex items-center mb-3">
                <input 
                  type="text" 
                  placeholder="Arama yapın..." 
                  className="w-full bg-[#131219] text-sm text-gray-300 placeholder-gray-600 px-4 py-2.5 rounded-xl border border-transparent focus:border-indigo-500 focus:outline-none"
                />
                <Search className="absolute right-4 text-gray-600 w-4 h-4" />
              </div>
              
              <div className="flex flex-col gap-1">
                {/* Valorant Item */}
                <div className="flex items-center justify-between py-2 px-1 hover:bg-[#232233]/50 rounded-lg transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-red-500/20">
                      <img src="https://i.ibb.co/zh9YVZbc/images-1.png" className="w-full h-full object-cover" alt="Valorant" />
                    </div>
                    <span className="text-sm text-gray-300">Valorant</span>
                  </div>
                  <span className="bg-[#252431] text-xs text-gray-400 px-2.5 py-0.5 rounded-full">1</span>
                </div>
              </div>
            </div>

            {/* Category 2: FİYAT ARALIĞI (₺) */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 tracking-wider mb-2">FİYAT ARALIĞI (₺)</h3>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="En az" 
                  className="w-1/2 bg-[#131219] text-sm text-gray-300 placeholder-gray-600 px-4 py-2.5 rounded-xl border border-transparent focus:border-indigo-500 focus:outline-none"
                />
                <input 
                  type="text" 
                  placeholder="En çok" 
                  className="w-1/2 bg-[#131219] text-sm text-gray-300 placeholder-gray-600 px-4 py-2.5 rounded-xl border border-transparent focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Category 3: SIRALAMA */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 tracking-wider mb-2">SIRALAMA</h3>
              <div className="flex items-center justify-between w-full bg-[#131219] text-sm text-gray-400 px-4 py-3 rounded-xl cursor-pointer">
                <span>Seçiniz</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>

            {/* Category 4: KELİME FİLTRELE */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 tracking-wider mb-2">KELİME FİLTRELE</h3>
              <input 
                type="text" 
                className="w-full bg-[#131219] h-11 rounded-xl mb-3 px-4 text-sm text-white focus:outline-none border border-transparent focus:border-indigo-500"
              />
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input type="checkbox" className="hidden" />
                <div className="w-4.5 h-4.5 bg-[#131219] rounded border border-gray-700 flex items-center justify-center group-hover:border-indigo-500 transition-colors"></div>
                <span className="text-xs text-gray-400 font-medium select-none">Açıklamalarını dahil et</span>
              </label>
            </div>

            {/* Category 5: DİĞER ÖZELLİKLER */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 tracking-wider mb-2">DİĞER ÖZELLİKLER</h3>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input type="checkbox" className="hidden" />
                <div className="w-4.5 h-4.5 bg-[#131219] rounded border border-gray-700 flex items-center justify-center group-hover:border-indigo-500 transition-colors"></div>
                <span className="text-xs text-gray-400 font-medium select-none">Otomatik Teslimat</span>
              </label>
            </div>

            {/* Apply Button */}
            <button className="mt-auto w-full bg-[#5b59f4] hover:bg-indigo-600 text-white font-semibold text-sm py-3.5 rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-200">
              Filtre Uygula
            </button>
          </aside>

          {/* Center Grid (Main Content) */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start content-start">
            <article 
              onClick={() => handleListingClick('Dolu Sağlam Hesap Mail Değişimli Pazarlık Olur.')}
              className="flex flex-col bg-[#2a2936] rounded-2xl overflow-hidden shadow-lg border border-[#2a2936] transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-full h-36 sm:h-40 overflow-hidden bg-[#2a2f4a] relative">
                <img 
                  src="https://cdn.itemsatis.com/uploads/post_images/dolu-saglam-hesap-mail-degisimli-dolu-skinli-19076286.png" 
                  alt="Valorant Hesap" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[#ff0000] opacity-5"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="border-2 border-red-500 text-red-500 text-xs font-bold px-3 py-1.5 text-center bg-[#2a2936]/90 shadow-lg">
                    satış işlemi bekleniyor
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col bg-[#2a2936]">
                <div className="text-[10px] font-bold tracking-wider text-[#79809c] mb-1.5 text-left">VALORANT</div>
                <div className="text-sm font-bold text-white uppercase leading-snug line-clamp-2 h-10 mb-2">
                  Dolu Sağlam Hesap Mail Değişimli Pazarlık Olur.
                </div>
                <span className="text-sm font-bold text-[#dfa841]">3.450,00 ₺</span>
              </div>
            </article>
          </div>

        </div>

      </main>

      <ChatWidget />
      <ItemAIFloatingWidget />
      <Footer />
    </div>
  );
};
