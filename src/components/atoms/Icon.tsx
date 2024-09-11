import React from 'react';
import {
  Copy, Check, Github, Handshake, Earth, ChevronDown,
  Search, ChevronRight, Play, Pause, Volume2, Volume1,
  House, Compass, MessageCircle, ChevronsLeft, ChevronsRight,
  Repeat, Moon
} from 'lucide-react';

export const icons = {
  copy: Copy,
  check: Check,
  github: Github,
  handshake: Handshake,
  earth: Earth,
  chevronDown: ChevronDown,
  search: Search,
  chevronRight: ChevronRight,
  play: Play,
  pause: Pause,
  volumeUp: Volume2,
  volumeDown: Volume1,
  chevronsLeft: ChevronsLeft,
  chevronsRight: ChevronsRight,
  repeat: Repeat,
  moon: Moon,
  homeLink: House,
  compassLink: Compass,
  messageLink: MessageCircle,
};

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'black' }) => {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent size={size} color={color} /> : null;
};

export default Icon;
