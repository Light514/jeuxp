"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { type Locale, getAlternateRoute, getLocaleFromPath } from "@/lib/i18n/config";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);
  const targetLocale: Locale = currentLocale === "fr" ? "en" : "fr";
  const targetPath = getAlternateRoute(pathname, currentLocale);

  return (
    <Link
      href={targetPath}
      className={cn(
        "flex items-center gap-1 px-3 py-1.5",
        "text-sm font-medium uppercase tracking-wider",
        "border border-cyber-gray-light rounded-sm",
        "hover:border-neon-cyan hover:text-neon-cyan",
        "transition-colors duration-200"
      )}
    >
      <span className={currentLocale === "fr" ? "text-neon-cyan" : "text-gray-500"}>
        FR
      </span>
      <span className="text-gray-600">|</span>
      <span className={currentLocale === "en" ? "text-neon-cyan" : "text-gray-500"}>
        EN
      </span>
    </Link>
  );
}
