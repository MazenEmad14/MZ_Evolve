"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  Compass,
  Cpu,
  Calculator,
  BookOpen,
  Phone,
  Mail,
  MessageSquare,
  Moon,
  Sun,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { useTheme } from "@/components/layout/ThemeProvider";
import { useLanguage } from "@/context/LanguageContext";

interface CommandItem {
  id: string;
  category: "Navigation" | "Services" | "Actions" | "Preferences";
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string[];
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  // Listen for Cmd+K / Ctrl+K and custom event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      category: "Navigation",
      title: t("nav.home", "Home"),
      subtitle: "Overview & Corporate Mission",
      icon: <Compass className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        router.push("/");
        setIsOpen(false);
      },
      keywords: ["home", "main", "start", "landing", "الرئيسية"],
    },
    {
      id: "nav-services",
      category: "Navigation",
      title: t("nav.services", "Services"),
      subtitle: "8 Core Engineering Disciplines",
      icon: <Cpu className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        router.push("/services");
        setIsOpen(false);
      },
      keywords: ["services", "capabilities", "offerings", "ai", "خدمات"],
    },
    {
      id: "nav-estimator",
      category: "Navigation",
      title: t("nav.estimator", "Project Scope Estimator"),
      subtitle: "Interactive Architectural Calculator",
      icon: <Calculator className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        router.push("/estimator");
        setIsOpen(false);
      },
      keywords: ["estimator", "calculator", "cost", "pricing", "budget", "scope", "حاسبة"],
    },
    {
      id: "nav-work",
      category: "Navigation",
      title: t("nav.work", "Demonstrations & Proofs"),
      subtitle: "Interactive Architecture Blueprints",
      icon: <Sparkles className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        router.push("/work");
        setIsOpen(false);
      },
      keywords: ["work", "proofs", "blueprints", "demonstrations", "prototypes", "أعمال"],
    },
    {
      id: "nav-insights",
      category: "Navigation",
      title: t("nav.insights", "Engineering Insights"),
      subtitle: "Technical Whitepapers & Articles",
      icon: <BookOpen className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        router.push("/insights");
        setIsOpen(false);
      },
      keywords: ["insights", "blog", "articles", "whitepapers", " مقالات", "رؤى"],
    },
    {
      id: "nav-contact",
      category: "Navigation",
      title: t("nav.contact", "Contact & Inquiries"),
      subtitle: "Consult Our Engineering Team",
      icon: <Mail className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        router.push("/contact");
        setIsOpen(false);
      },
      keywords: ["contact", "inquiry", "email", "form", "reach", "تواصل"],
    },

    // Services
    {
      id: "srv-ai-solutions",
      category: "Services",
      title: "AI Solutions & LLM Applications",
      subtitle: "Production LLM Pipelines & Custom Interfaces",
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      action: () => {
        router.push("/services/ai-solutions-llm-applications");
        setIsOpen(false);
      },
      keywords: ["llm", "gpt", "claude", "nlp", "models", "inference"],
    },
    {
      id: "srv-rag",
      category: "Services",
      title: "RAG & Knowledge Assistants",
      subtitle: "Enterprise Vector Retrieval & Grounded Search",
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      action: () => {
        router.push("/services/rag-knowledge-assistants");
        setIsOpen(false);
      },
      keywords: ["rag", "vector", "embeddings", "pinecone", "chroma", "search"],
    },
    {
      id: "srv-agents",
      category: "Services",
      title: "AI Agents & Workflow Automation",
      subtitle: "Autonomous Tool Calling & Multi-Agent Loops",
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      action: () => {
        router.push("/services/ai-agents-workflow-automation");
        setIsOpen(false);
      },
      keywords: ["agents", "autonomous", "tools", "workflow", "automation"],
    },
    {
      id: "srv-web",
      category: "Services",
      title: "Websites & Business Applications",
      subtitle: "Next.js Architecture & High-Performance Platforms",
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      action: () => {
        router.push("/services/websites-business-applications");
        setIsOpen(false);
      },
      keywords: ["web", "nextjs", "react", "fullstack", "saas", "dashboard"],
    },

    // Actions
    {
      id: "act-whatsapp",
      category: "Actions",
      title: "Start WhatsApp Chat",
      subtitle: siteConfig.contact.whatsappNumber,
      icon: <MessageSquare className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        window.open(siteConfig.contact.whatsappPrefilledUrl, "_blank", "noopener,noreferrer");
        setIsOpen(false);
      },
      keywords: ["whatsapp", "chat", "message", "واتساب"],
    },
    {
      id: "act-call",
      category: "Actions",
      title: "Direct Phone Call",
      subtitle: siteConfig.contact.phone,
      icon: <Phone className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        window.location.href = siteConfig.contact.phoneLink;
        setIsOpen(false);
      },
      keywords: ["phone", "call", "telephone", "اتصال"],
    },
    {
      id: "act-email",
      category: "Actions",
      title: "Send Official Email",
      subtitle: siteConfig.contact.email,
      icon: <Mail className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        window.location.href = siteConfig.contact.emailLink;
        setIsOpen(false);
      },
      keywords: ["email", "mail", "gmail", "بريد"],
    },

    // Preferences
    {
      id: "pref-theme",
      category: "Preferences",
      title: theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme",
      subtitle: `Currently active: ${theme === "dark" ? "Charcoal Dark" : "Off-White Light"}`,
      icon: theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />,
      action: () => {
        toggleTheme();
        setIsOpen(false);
      },
      keywords: ["theme", "dark", "light", "mode", "color", "سمة"],
    },
    {
      id: "pref-lang",
      category: "Preferences",
      title: language === "en" ? "التبديل إلى اللغة العربية" : "Switch to English",
      subtitle: language === "en" ? "تفعيل واجهة اللغة العربية (RTL)" : "Enable English interface (LTR)",
      icon: <Globe className="w-4 h-4 text-emerald-400" />,
      action: () => {
        toggleLanguage();
        setIsOpen(false);
      },
      keywords: ["language", "arabic", "english", "ترجمة", "عربي"],
    },
  ];

  // Filter commands
  const filteredCommands = commands.filter((cmd) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    const titleMatch = cmd.title.toLowerCase().includes(q);
    const subtitleMatch = cmd.subtitle?.toLowerCase().includes(q);
    const keywordMatch = cmd.keywords?.some((k) => k.toLowerCase().includes(q));
    const catMatch = cmd.category.toLowerCase().includes(q);
    return titleMatch || subtitleMatch || keywordMatch || catMatch;
  });

  // Handle keyboard arrow navigation
  const handleKeyDownInList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-150"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-[#171B1A] border border-[#273430] shadow-2xl shadow-[#19D879]/10 text-white"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownInList}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#273430]">
          <Search className="w-5 h-5 text-[#19D879] shrink-0 me-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder={t("ui.searchPlaceholder", "Type a command or search...")}
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-zinc-400 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-zinc-400 hover:text-white me-2 rounded"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-[#1E2422] border border-[#273430] rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div ref={listRef} className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-12 text-center text-sm text-zinc-400">
              No matching commands or pages found for &quot;{query}&quot;.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-start transition-all duration-150 ${
                    isSelected
                      ? "bg-[#1E2422] border border-[#19D879]/40 text-white shadow-sm"
                      : "text-zinc-300 hover:bg-[#1E2422]/60 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg shrink-0 transition-colors ${
                        isSelected ? "bg-[#19D879]/15 text-[#19D879]" : "bg-[#111413] text-zinc-400"
                      }`}
                    >
                      {cmd.icon}
                    </div>
                    <div className="truncate">
                      <div className="text-sm font-medium text-white flex items-center gap-2">
                        {cmd.title}
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#111413] text-zinc-400 border border-[#273430]">
                          {cmd.category}
                        </span>
                      </div>
                      {cmd.subtitle && (
                        <div className="text-xs text-zinc-400 truncate">{cmd.subtitle}</div>
                      )}
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 ms-2 transition-transform ${
                      isSelected ? "text-[#19D879] translate-x-1" : "text-zinc-600 opacity-0"
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts info */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#111413] border-t border-[#273430] text-[11px] text-zinc-400">
          <div className="flex items-center gap-2">
            <span>Navigate:</span>
            <kbd className="px-1.5 py-0.5 bg-[#1E2422] border border-[#273430] rounded font-mono">↑</kbd>
            <kbd className="px-1.5 py-0.5 bg-[#1E2422] border border-[#273430] rounded font-mono">↓</kbd>
            <span>Select:</span>
            <kbd className="px-1.5 py-0.5 bg-[#1E2422] border border-[#273430] rounded font-mono">↵</kbd>
          </div>
          <div>
            <span className="text-emerald-400 font-mono">MZEVOLVE</span> Command Hub
          </div>
        </div>
      </div>
    </div>
  );
};
