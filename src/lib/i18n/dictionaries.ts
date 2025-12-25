import type { Locale } from "./config";

// Type for the dictionary structure
export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    challenges: string;
    about: string;
    groupsEvents: string;
    faq: string;
    legal: string;
  };
  home: {
    announcement: string;
    tagline: string;
    cta: string;
  };
  challenges: {
    tagline: string;
    subtitle: string;
    intro: string;
    pillars: Array<{
      id: string;
      title: string;
      description: string;
    }>;
    roomsTitle: string;
    rooms: Array<{
      id: string;
      name: string;
      description: string;
      type: string[];
      players: string;
      image: string;
    }>;
    quickFaq: Array<{
      question: string;
      answer: string;
    }>;
    viewAllFaq: string;
    location: {
      title: string;
      address: string;
      mall: string;
      mapLink: string;
    };
  };
  about: {
    hero: {
      title: string;
      slogan: string;
    };
    mission: {
      title: string;
      content: string[];
    };
    differentiators: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    vision: {
      title: string;
      content: string;
    };
  };
  groupsEvents: {
    hero: {
      title: string;
      subtitle: string;
    };
    intro: string;
    eventTypes: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    benefits: Array<{
      title: string;
      description: string;
    }>;
    form: {
      title: string;
      subtitle: string;
      fields: {
        name: string;
        email: string;
        eventType: string;
        participants: string;
        message: string;
      };
      eventOptions: Record<string, string>;
      submit: string;
      success: string;
      error: string;
    };
  };
  faq: {
    hero: {
      title: string;
      subtitle: string;
    };
    sections: Array<{
      title: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    }>;
  };
  legal: {
    title: string;
    rules: {
      title: string;
      items: string[];
    };
    terms: {
      title: string;
      items: string[];
    };
    privacy: {
      title: string;
      items: string[];
    };
  };
  footer: {
    tagline: string;
    location: {
      title: string;
      mall: string;
      address: string;
    };
    contact: {
      title: string;
      email: string;
    };
    social: {
      title: string;
      tiktok: string;
      facebook: string;
    };
    newsletter: {
      title: string;
      placeholder: string;
      button: string;
      success: string;
    };
    legal: {
      rules: string;
      terms: string;
      privacy: string;
    };
    copyright: string;
  };
  common: {
    learnMore: string;
    contactUs: string;
    bookNow: string;
    viewAll: string;
    loading: string;
    error: string;
    backToHome: string;
  };
}

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("@/content/fr/dictionary.json").then((m) => m.default as Dictionary),
  en: () => import("@/content/en/dictionary.json").then((m) => m.default as Dictionary),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]();
};
