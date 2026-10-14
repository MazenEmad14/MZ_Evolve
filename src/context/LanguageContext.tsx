"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";

export type Language = "en" | "ar";
export type Direction = "ltr" | "rtl";

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.work": "Demonstrations",
    "nav.estimator": "Project Estimator",
    "nav.insights": "Engineering Insights",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cmdK": "Search",
    "nav.quickInquiry": "Start a Project",

    // Brand & Slogans
    "brand.tagline": "Beyond Ordinary. Built to Evolve.",
    "brand.heroSubtitle": "We engineer production-grade AI platforms, intelligent workflow automations, and resilient digital architectures built to scale with modern technology.",

    // Actions & CTAs
    "cta.exploreServices": "Explore Capabilities",
    "cta.estimateProject": "Scope & Estimate Project",
    "cta.discussProject": "Consult Our Engineers",
    "cta.chatWhatsApp": "Chat on WhatsApp",
    "cta.callUs": "Call Direct",
    "cta.bookSession": "Schedule Discovery Session",
    "cta.viewWork": "Explore Demonstrations",
    "cta.readInsights": "Read Engineering Insights",
    "cta.transferToForm": "Transfer Scope to Inquiry Form",

    // Common UI
    "ui.verified": "Verified",
    "ui.confidentiality": "Enterprise Confidentiality",
    "ui.themeDark": "Dark Theme",
    "ui.themeLight": "Light Theme",
    "ui.searchPlaceholder": "Type a command or search...",
    "ui.copy": "Copy",
    "ui.copied": "Copied!",
    "ui.contactChannels": "Official Contact Channels",
    "ui.allServices": "All Services",
    "ui.allArticles": "All Articles",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "خدماتنا",
    "nav.work": "نماذج الأعمال",
    "nav.estimator": "حاسبة نطاق المشروع",
    "nav.insights": "رؤى هندسية",
    "nav.about": "عن الشركة",
    "nav.contact": "تواصل معنا",
    "nav.cmdK": "بحث",
    "nav.quickInquiry": "ابدأ مشروعك",

    // Brand & Slogans
    "brand.tagline": "ما وراء المألوف. بُني ليتطور.",
    "brand.heroSubtitle": "نبتكر ونطور منصات الذكاء الاصطناعي عالية الكفاءة، ونظم أتمتة الأعمال الذكية، وبنى تحتية رقمية متطورة قابلة للتوسع والتطور المستمر.",

    // Actions & CTAs
    "cta.exploreServices": "استكشف القدرات",
    "cta.estimateProject": "حساب نطاق وتكلفة المشروع",
    "cta.discussProject": "استشر مهندسينا",
    "cta.chatWhatsApp": "محادثة عبر واتساب",
    "cta.callUs": "اتصال مباشر",
    "cta.bookSession": "حجز جلسة استكشافية",
    "cta.viewWork": "استعراض النماذج المعمارية",
    "cta.readInsights": "قراءة الرؤى الهندسية",
    "cta.transferToForm": "تحويل النطاق إلى نموذج الاستفسار",

    // Common UI
    "ui.verified": "مُعتمد وموثوق",
    "ui.confidentiality": "سرية بيانات المؤسسات",
    "ui.themeDark": "الوضع الداكن",
    "ui.themeLight": "الوضع الفاتح",
    "ui.searchPlaceholder": "اكتب أمراً أو ابحث في الموقع...",
    "ui.copy": "نسخ",
    "ui.copied": "تم النسخ!",
    "ui.contactChannels": "قنوات التواصل الرسمية",
    "ui.allServices": "كافة الخدمات",
    "ui.allArticles": "جميع المقالات",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("mzevolve_lang") as Language;
      if (saved === "en" || saved === "ar") {
        setLanguageState(saved);
        document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = saved;
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("mzevolve_lang", lang);
    } catch {
      // LocalStorage unavailable
    }
    if (typeof document !== "undefined") {
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const direction: Direction = language === "ar" ? "rtl" : "ltr";

  const t = useMemo(() => {
    return (key: string, fallback?: string): string => {
      const val = translations[language]?.[key];
      if (val) return val;
      if (fallback) return fallback;
      return translations["en"]?.[key] || key;
    };
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language: mounted ? language : "en",
        direction: mounted ? direction : "ltr",
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
