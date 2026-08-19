import React, { useState, useMemo, useEffect } from 'react';
import { TopBanner } from './components/TopBanner';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { QuickFilters } from './components/QuickFilters';
import { HeroSlider, desktopGalleryImages } from './components/HeroSlider';
import { CategoryGrid } from './components/CategoryGrid';
import { MobileCategoryGrid } from './components/MobileCategoryGrid';
import { SubCategoryTags } from './components/SubCategoryTags';
import { VitrinInfoBanner } from './components/VitrinInfoBanner';
import { ShowcaseListings } from './components/ShowcaseListings';
import { MobileShowcaseListings } from './components/MobileShowcaseListings';
import { MobilePopularGamesSection } from './components/MobilePopularGamesSection';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ItemAIFloatingWidget } from './components/ItemAIFloatingWidget';
import { ChatWidget } from './components/ChatWidget';
import { AddListingModal } from './components/AddListingModal';
import { LoginModal } from './components/LoginModal';
import { ListingDetailModal } from './components/ListingDetailModal';
import { Footer } from './components/Footer';
import { DevirPage } from './components/DevirPage';
import { showcaseListingsData } from './data/mockData';
import { ShowcaseListing } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    document.title = "İtem Satış | Türkiye'nin En Güvenilir Satış Platformu";
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const [listings, setListings] = useState<ShowcaseListing[]>(showcaseListingsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [activeDesktopSlide, setActiveDesktopSlide] = useState(0);

  // Modals state
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAddListingOpen, setIsAddListingOpen] = useState(false);
  const [selectedListingDetail, setSelectedListingDetail] = useState<ShowcaseListing | null>(
    null
  );

  // Filter listings based on search, filter pills, category dropdown, and sub-tags
  const filteredListings = useMemo(() => {
    return listings.filter((item) => {
      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        const matchesSeller = item.seller.name.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCat && !matchesSeller) return false;
      }

      // Quick filter pill
      if (activeFilter === 'valorant' && !item.category.toLowerCase().includes('valorant')) {
        return false;
      }
      if (activeFilter === 'pubg' && !item.category.toLowerCase().includes('pubg')) {
        return false;
      }
      if (activeFilter === 'roblox' && !item.category.toLowerCase().includes('roblox')) {
        return false;
      }
      if (activeFilter === 'lol' && !item.category.toLowerCase().includes('league')) {
        return false;
      }
      if (activeFilter === 'cs2' && !item.category.toLowerCase().includes('counter')) {
        return false;
      }

      // Sub Tag filter
      if (selectedTag !== 'all') {
        if (selectedTag === 'discord' && !item.category.toLowerCase().includes('discord')) {
          return false;
        }
        if (selectedTag === 'valorant' && !item.category.toLowerCase().includes('valorant')) {
          return false;
        }
        if (selectedTag === 'roblox' && !item.category.toLowerCase().includes('roblox')) {
          return false;
        }
        if (selectedTag === 'pubg' && !item.category.toLowerCase().includes('pubg')) {
          return false;
        }
        if (selectedTag === 'steam' && !item.category.toLowerCase().includes('steam')) {
          return false;
        }
      }

      return true;
    });
  }, [listings, searchQuery, activeFilter, selectedCategory, selectedTag]);

  // If path is /devir, render the profile page instead
  if (currentPath === '/devir') {
    return <DevirPage onNavigateHome={() => navigateTo('/')} />;
  }

  // Handle adding a new user listing
  const handleAddListing = (newListing: ShowcaseListing) => {
    setListings((prev) => [newListing, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#141724] text-gray-100 font-sans selection:bg-[#8b5cf6] selection:text-white flex flex-col justify-between">
      <div>
        {/* Top Banner (Above Header/Navbar) */}
        <TopBanner />

        {/* Top Utility Announcement Bar */}
        <TopBar />

        {/* Main Header & Search */}
        <Header
          onProfileClick={() => navigateTo('/devir')}
          onOpenAddListing={() => setIsAddListingOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onNavigateHome={() => navigateTo('/')}
        />

        {/* Navigation Bar (Desktop & Mobile Menu) */}
        <Navigation
          onOpenAddListing={() => setIsAddListingOpen(true)}
          selectedCategory={selectedCategory}
          setSelectedCategory={(cat) => {
            setSelectedCategory(cat);
            if (cat !== 'all') {
              setActiveFilter(cat);
            }
          }}
        />

        {/* Solid #383A4F Background Area */}
        <main className="relative bg-[#383A4F] w-full flex-1">
          {/* ================= DESKTOP MAIN LAYOUT (>= md) ================= */}
          <div className="hidden md:block">
            {/* Top section containing QuickFilters & HeroSlider */}
            <div className="relative w-full overflow-hidden pb-4">
              {/* Desktop Background: Active slider image 1.5x magnified with dimming overlay */}
              <div className="hidden md:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <img
                  src={desktopGalleryImages[activeDesktopSlide]}
                  alt="Active Slide Background"
                  className="w-full h-full object-cover object-center scale-150 transform blur-[2px]"
                />
                <div className="absolute inset-0 bg-[#0f121d]/70 backdrop-blur-sm" />
              </div>

              <div className="relative z-10">
                <QuickFilters
                  activeFilter={activeFilter}
                  setActiveFilter={(filter) => {
                    setActiveFilter(filter);
                    setSelectedTag('all');
                  }}
                  activeSlideImage={desktopGalleryImages[activeDesktopSlide]}
                />
                <HeroSlider
                  activeDesktopSlide={activeDesktopSlide}
                  setActiveDesktopSlide={setActiveDesktopSlide}
                />
              </div>
            </div>

            {/* Desktop Category Grid & Showcase Section */}
            <div className="relative z-10">
              <CategoryGrid
                onSelectCategory={(catId) => {
                  setSelectedCategory(catId);
                  setActiveFilter(catId);
                }}
              />

              <SubCategoryTags
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
              />

              <VitrinInfoBanner />

              <ShowcaseListings
                listings={filteredListings}
                onSelectListing={(listing) => setSelectedListingDetail(listing)}
              />
            </div>
          </div>

          {/* ================= MOBILE MAIN LAYOUT (< md) ================= */}
          <div className="block md:hidden px-3 py-2 space-y-3 relative z-10">
            {/* 1. Scrolling images (HeroSlider) immediately below search bar */}
            <div className="w-full">
              <HeroSlider />
            </div>

            {/* 2. Newly Redesigned Categories Section (Exclusively for Mobile) */}
            <MobileCategoryGrid
              onSelectCategory={(catId) => {
                setSelectedCategory(catId);
                setActiveFilter(catId);
              }}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />

            {/* 3. Redesigned Showcase Ads ("Vitrin İlanları") Section (Exclusively for Mobile) */}
            <MobileShowcaseListings
              listings={filteredListings}
              onSelectListing={(listing) => setSelectedListingDetail(listing)}
            />

            {/* 4. Brand New Section Below Showcase Ads (Exclusively for Mobile) */}
            <MobilePopularGamesSection
              onSelectCategory={(catId) => {
                setSelectedCategory(catId);
                setActiveFilter(catId);
              }}
            />

            {/* Vitrin Info Banner */}
            <VitrinInfoBanner />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating AI Assistant Widget */}
      <ItemAIFloatingWidget />
      
      {/* Live Telegram Chat Widget */}
      <ChatWidget />
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Modals */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      <AddListingModal
        isOpen={isAddListingOpen}
        onClose={() => setIsAddListingOpen(false)}
        onAddListing={handleAddListing}
      />

      <ListingDetailModal
        listing={selectedListingDetail}
        onClose={() => setSelectedListingDetail(null)}
      />
    </div>
  );
}

