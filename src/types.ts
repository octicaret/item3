export interface ShowcaseListing {
  id: string;
  title: string;
  category: string;
  price: number;
  currency: string;
  imageUrl: string;
  seller: {
    name: string;
    avatar: string;
    rating: number;
    salesCount: number;
    isVerified?: boolean;
  };
  badge: string; // e.g., "VİTRİN İLANI"
  isHot?: boolean;
  deliveryType?: string; // e.g. "Hızlı Teslimat", "Anında Teslim"
  tags?: string[];
}

export interface MainCategory {
  id: string;
  name: string;
  iconName: string;
  count?: string;
  badge?: string;
  color?: string;
}

export interface SubTag {
  id: string;
  name: string;
  category: string;
  iconUrl?: string;
  isPopular?: boolean;
}

export interface Announcement {
  id: string;
  text: string;
  linkText: string;
  linkUrl: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  imageUrl: string;
  buttonText: string;
  secondaryButtonText?: string;
  accentColor: string;
}
