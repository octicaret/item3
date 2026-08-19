import React, { useState, useEffect } from 'react';

export const desktopGalleryImages = [
  "https://cdn.itemsatis.com/uploads/slider/full/valorant-points-1899.png",
  "https://cdn.itemsatis.com/uploads/slider/full/ets2-5021.png",
  "https://cdn.itemsatis.com/uploads/slider/full/lol-rp-4923.png",
  "https://cdn.itemsatis.com/global/upload/6a7c06b97013a-slider-full-307cddcbcba4cb51ee5718d49e813c8c931da8f2.png"
];

const mobileHeroSlides = [
  "https://i.ibb.co/XxtHRJSG/rnek.jpg",
  "https://i.ibb.co/S48k9LtN/Whats-App-mage-2026-08-05-at-23-55-50-1.jpg",
  "https://i.ibb.co/20qNV3Z0/Whats-App-mage-2026-08-05-at-23-55-50-2.jpg",
  "https://i.ibb.co/q3bXY5TK/Whats-App-mage-2026-08-05-at-23-55-51-1.jpg",
  "https://i.ibb.co/Z6Gh2TCM/Whats-App-mage-2026-08-05-at-23-55-51-2.jpg",
  "https://i.ibb.co/b55GqnR6/Whats-App-mage-2026-08-05-at-23-55-51-3.jpg",
  "https://i.ibb.co/99ZgrfTN/Whats-App-mage-2026-08-05-at-23-55-51-5.jpg",
  "https://i.ibb.co/8L5y1wGH/Whats-App-mage-2026-08-05-at-23-55-51-6.jpg",
  "https://i.ibb.co/pj10m4NB/Whats-App-mage-2026-08-05-at-23-55-51.jpg"
];

interface HeroSliderProps {
  activeDesktopSlide?: number;
  setActiveDesktopSlide?: React.Dispatch<React.SetStateAction<number>>;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  activeDesktopSlide: propActiveDesktopSlide,
  setActiveDesktopSlide: propSetActiveDesktopSlide,
}) => {
  const [internalActiveDesktopSlide, setInternalActiveDesktopSlide] = useState(0);
  const [mobileCurrentSlide, setMobileCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const activeDesktopSlide = propActiveDesktopSlide !== undefined ? propActiveDesktopSlide : internalActiveDesktopSlide;
  const setActiveDesktopSlide = propSetActiveDesktopSlide || setInternalActiveDesktopSlide;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDesktopSlide((prev) => (prev + 1) % desktopGalleryImages.length);
      setMobileCurrentSlide((prev) => (prev + 1) % mobileHeroSlides.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [setActiveDesktopSlide]);

  const mobileSlideUrl = mobileHeroSlides[mobileCurrentSlide];

  const minSwipeDistance = 40;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setMobileCurrentSlide((prev) => (prev + 1) % mobileHeroSlides.length);
    } else if (isRightSwipe) {
      setMobileCurrentSlide((prev) => (prev - 1 + mobileHeroSlides.length) % mobileHeroSlides.length);
    }
  };

  return (
    <div className="relative w-[calc(100%+24px)] -ml-3 -mt-2 md:w-auto md:mx-[30px] md:my-4 md:px-0">
      {/* DESKTOP VIEW (>= md) - Original Dimensions, No padding inside, No fixed height */}
      <div className="hidden md:flex flex-row w-full gap-0 p-0 m-0 select-none rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f121d] items-stretch h-auto">
        {desktopGalleryImages.map((imgUrl, idx) => {
          const isActive = activeDesktopSlide === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveDesktopSlide(idx)}
              className={`relative overflow-hidden cursor-pointer group p-0 m-0 ${
                isActive ? 'flex-[4] bg-transparent' : 'flex-[1] bg-transparent'
              }`}
            >
              <img
                src={imgUrl}
                alt={`Desktop Slide ${idx + 1}`}
                className={`w-full block object-center p-0 m-0 ${isActive ? 'h-auto object-contain' : 'h-full object-cover'}`}
              />
            </div>
          );
        })}
      </div>

      {/* MOBILE VIEW (< md) - REDESIGNED ACCORDING TO MOBILE-ONLY SPECIFICATIONS */}
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="block md:hidden relative w-full mb-[30px] select-none"
      >
        {/* Mobile Slider Image */}
        <div className="w-full aspect-[9/8] relative">
          <img
            src={mobileSlideUrl}
            alt={`Slide ${mobileCurrentSlide + 1}`}
            className="w-full h-full object-cover object-center transition-all duration-500"
          />
        </div>

        {/* 30px Bottom Solid Black Curve */}
        <div className="w-full h-[30px] bg-black [clip-path:ellipse(50%_100%_at_50%_0%)] relative">
          {/* Centered Pagination Dots (Mobile ONLY) */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 pb-2">
            {mobileHeroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setMobileCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`transition-all ${
                  mobileCurrentSlide === idx
                    ? 'w-2.5 h-2.5 rounded-full bg-white border border-white'
                    : 'w-2.5 h-2.5 rounded-full border border-white bg-transparent'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


