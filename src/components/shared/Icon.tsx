"use client";

import {
  Zap,
  RefreshCw,
  DollarSign,
  Gamepad2,
  Cake,
  Briefcase,
  GraduationCap,
  PartyPopper,
  Target,
  Timer,
  Trophy,
  Infinity,
  Cpu,
  Users,
  MapPin,
  Mail,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  "refresh-cw": RefreshCw,
  "dollar-sign": DollarSign,
  gamepad: Gamepad2,
  cake: Cake,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  "party-popper": PartyPopper,
  target: Target,
  timer: Timer,
  trophy: Trophy,
  infinity: Infinity,
  cpu: Cpu,
  users: Users,
  "map-pin": MapPin,
  mail: Mail,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className = "", size = 24 }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} size={size} />;
}
