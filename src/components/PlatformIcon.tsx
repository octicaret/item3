import React from 'react';
import {
  SiValorant,
  SiPubg,
  SiSteam,
  SiDiscord,
  SiRoblox,
  SiLeagueoflegends,
  SiCounterstrike,
  SiYoutube,
  SiInstagram,
  SiTiktok,
} from 'react-icons/si';
import { Gamepad2, Globe, Sparkles } from 'lucide-react';

interface PlatformIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const PlatformIcon: React.FC<PlatformIconProps> = ({
  name,
  className = 'w-4 h-4 inline-block',
  size,
}) => {
  const lower = name.toLowerCase();

  if (lower.includes('valorant') || lower === 'vp' || lower.includes('val-rand')) {
    return <span className={`${className} text-[#ff4655] inline-flex items-center justify-center`} style={size ? { fontSize: size } : undefined}><SiValorant /></span>;
  }
  if (lower.includes('pubg') || lower === 'uc') {
    return <span className={`${className} text-[#f2a900] inline-flex items-center justify-center`} style={size ? { fontSize: size } : undefined}><SiPubg /></span>;
  }
  if (lower.includes('steam')) {
    return <span className={`${className} text-[#38bdf8] inline-flex items-center justify-center`} style={size ? { fontSize: size } : undefined}><SiSteam /></span>;
  }
  if (lower.includes('discord') || lower.includes('nitro') || lower.includes('boost')) {
    return <span className={`${className} text-[#5865f2] inline-flex items-center justify-center`} style={size ? { fontSize: size } : undefined}><SiDiscord /></span>;
  }
  if (lower.includes('roblox') || lower.includes('robux')) {
    return <span className={`${className} text-[#00a2ff] inline-flex items-center justify-center`} style={size ? { fontSize: size } : undefined}><SiRoblox /></span>;
  }
  if (lower.includes('league') || lower.includes('lol')) {
    return <span className={`${className} text-[#c29b38] inline-flex items-center justify-center`} style={size ? { fontSize: size } : undefined}><SiLeagueoflegends /></span>;
  }
  if (lower.includes('cs2') || lower.includes('counter') || lower.includes('cs:go')) {
    return <span className={`${className} text-[#de9b35] inline-flex items-center justify-center`} style={size ? { fontSize: size } : undefined}><SiCounterstrike /></span>;
  }
  if (lower.includes('youtube')) {
    return <span className={`${className} text-[#ff0000] inline-flex items-center justify-center`} style={size ? { fontSize: size } : undefined}><SiYoutube /></span>;
  }
  if (lower.includes('instagram')) {
    return <span className={`${className} text-[#e4405f] inline-flex items-center justify-center`} style={size ? { fontSize: size } : undefined}><SiInstagram /></span>;
  }
  if (lower.includes('tiktok')) {
    return <span className={`${className} text-[#00f2fe] inline-flex items-center justify-center`} style={size ? { fontSize: size } : undefined}><SiTiktok /></span>;
  }
  if (lower.includes('ai') || lower.includes('yapay zeka')) {
    return <Sparkles className={`${className} text-[#a855f7]`} />;
  }

  return <Gamepad2 className={`${className} text-[#8b5cf6]`} />;
};
