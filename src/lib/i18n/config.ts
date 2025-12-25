export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export const routes = {
  fr: {
    home: "/",
    challenges: "/defis",
    about: "/a-propos",
    groupsEvents: "/groupes-evenements",
    faq: "/faq",
    legal: "/legal",
  },
  en: {
    home: "/en",
    challenges: "/en/challenges",
    about: "/en/about",
    groupsEvents: "/en/groups-events",
    faq: "/en/faq",
    legal: "/en/legal",
  },
} as const;

// Get the opposite locale route for language switching
export function getAlternateRoute(
  currentPath: string,
  currentLocale: Locale
): string {
  const targetLocale = currentLocale === "fr" ? "en" : "fr";
  const currentRoutes = routes[currentLocale];
  const targetRoutes = routes[targetLocale];

  // Find which route matches current path
  for (const [key, path] of Object.entries(currentRoutes)) {
    if (path === currentPath) {
      return targetRoutes[key as keyof typeof targetRoutes];
    }
  }

  // Default fallback
  return targetLocale === "en" ? "/en" : "/";
}

// Detect locale from pathname
export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "fr";
}
