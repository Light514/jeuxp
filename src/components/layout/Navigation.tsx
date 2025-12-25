"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { type Locale, routes, getLocaleFromPath } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

interface NavigationProps {
  dictionary: Dictionary["nav"];
  className?: string;
  onLinkClick?: () => void;
}

export function Navigation({ dictionary, className, onLinkClick }: NavigationProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const localeRoutes = routes[locale];

  const links = [
    { href: localeRoutes.challenges, label: dictionary.challenges },
    { href: localeRoutes.groupsEvents, label: dictionary.groupsEvents },
    { href: localeRoutes.faq, label: dictionary.faq },
    { href: localeRoutes.about, label: dictionary.about },
  ];

  return (
    <nav className={className}>
      <ul className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-8">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onLinkClick}
                className={cn(
                  "block px-3 py-2 lg:px-0 lg:py-0",
                  "text-sm font-medium uppercase tracking-wider",
                  "transition-colors duration-200",
                  "hover:text-neon-cyan",
                  isActive ? "text-neon-cyan" : "text-gray-300"
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
