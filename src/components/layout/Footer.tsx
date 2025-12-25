"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { routes, getLocaleFromPath, type Locale } from "@/lib/i18n/config";
import { Container } from "./Container";
import type { Dictionary } from "@/lib/i18n/dictionaries";

interface FooterProps {
  dictionary: Dictionary["footer"];
}

export function Footer({ dictionary }: FooterProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const localeRoutes = routes[locale];

  return (
    <footer className="bg-cyber-dark border-t border-cyber-gray-light">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/images/logos/Logo_JeuGames_NoBG-1.webp"
              alt="JeuXP"
              width={140}
              height={47}
              className="h-10 w-auto"
            />
            <p className="text-sm text-gray-400 font-display uppercase tracking-wider">
              {dictionary.tagline}
            </p>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="font-display text-sm uppercase tracking-wider text-neon-cyan">
              {dictionary.location.title}
            </h3>
            <div className="text-sm text-gray-400 space-y-1">
              <p className="font-medium text-white">{dictionary.location.mall}</p>
              <p>{dictionary.location.address}</p>
            </div>
            <a
              href="https://maps.app.goo.gl/V4vVvQNDdLXUpo9n8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-cyan/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Google Maps
            </a>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-display text-sm uppercase tracking-wider text-neon-cyan">
              {dictionary.contact.title}
            </h3>
            <a
              href={`mailto:${dictionary.contact.email}`}
              className="text-sm text-gray-400 hover:text-white transition-colors block"
            >
              {dictionary.contact.email}
            </a>
            <div className="pt-2">
              <h4 className="font-display text-xs uppercase tracking-wider text-gray-500 mb-3">
                {dictionary.social.title}
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href={dictionary.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-magenta transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
                <a
                  href={dictionary.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-display text-sm uppercase tracking-wider text-neon-cyan">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={localeRoutes.legal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dictionary.legal.rules}
                </Link>
              </li>
              <li>
                <Link
                  href={localeRoutes.legal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dictionary.legal.terms}
                </Link>
              </li>
              <li>
                <Link
                  href={localeRoutes.legal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {dictionary.legal.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-cyber-gray-light">
          <p className="text-center text-sm text-gray-500">
            {dictionary.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
