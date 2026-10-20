"use client";

import React, { useCallback, useState, useEffect, useRef } from "react";
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
  Moon,
  Sun,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { useTheme } from "@/components/layout/ThemeProvider";
import { WhatsAppIcon } from "./WhatsAppIcon";

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
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const previousBodyOverflowRef = useRef("");
  const { theme, toggleTheme } = useTheme();

  const closePalette = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  // Listen for Cmd+K / Ctrl+K and custom event
  useEffect(() => {
    const openPalette = () => {
      previouslyFocusedRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      setIsOpen(true);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          closePalette();
        } else {
          openPalette();
        }
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        closePalette();
      }
    };

    const handleCustomOpen = () => openPalette();

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [closePalette, isOpen]);

  useEffect(() => {
    if (!isOpen && previouslyFocusedRef.current) {
      window.requestAnimationFrame(() => previouslyFocusedRef.current?.focus());
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      previousBodyOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = previousBodyOverflowRef.current;
    }

    return () => {
      if (isOpen) {
        document.body.style.overflow = previousBodyOverflowRef.current;
      }
    };
  }, [isOpen]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>('[aria-selected="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      category: "Navigation",
      title: "Home",
      subtitle: "Overview & Corporate Mission",
      icon: <Compass className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        router.push("/");
        closePalette();
      },
      keywords: ["home", "main", "start", "landing"],
    },
    {
      id: "nav-services",
      category: "Navigation",
      title: "Services",
      subtitle: "8 Core Engineering Disciplines",
      icon: <Cpu className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        router.push("/services");
        closePalette();
      },
      keywords: ["services", "capabilities", "offerings", "ai"],
    },
    {
      id: "nav-estimator",
      category: "Navigation",
      title: "Project Scope Estimator",
      subtitle: "Interactive Architectural Calculator",
      icon: <Calculator className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        router.push("/estimator");
        closePalette();
      },
      keywords: ["estimator", "calculator", "cost", "pricing", "budget", "scope"],
    },
    {
      id: "nav-work",
      category: "Navigation",
      title: "Demonstrations & Proofs",
      subtitle: "Interactive Architecture Blueprints",
      icon: <Sparkles className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        router.push("/work");
        closePalette();
      },
      keywords: ["work", "proofs", "blueprints", "demonstrations", "prototypes"],
    },
    {
      id: "nav-insights",
      category: "Navigation",
      title: "Engineering Insights",
      subtitle: "Technical Whitepapers & Articles",
      icon: <BookOpen className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        router.push("/insights");
        closePalette();
      },
      keywords: ["insights", "blog", "articles", "whitepapers"],
    },
    {
      id: "nav-contact",
      category: "Navigation",
      title: "Contact & Inquiries",
      subtitle: "Consult Our Engineering Team",
      icon: <Mail className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        router.push("/contact");
        closePalette();
      },
      keywords: ["contact", "inquiry", "email", "form", "reach"],
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
        closePalette();
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
        closePalette();
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
        closePalette();
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
        closePalette();
      },
      keywords: ["web", "nextjs", "react", "fullstack", "saas", "dashboard"],
    },

    // Actions
    {
      id: "act-whatsapp",
      category: "Actions",
      title: "Start WhatsApp Chat",
      subtitle: siteConfig.contact.whatsappNumber,
      icon: <WhatsAppIcon className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        window.open(siteConfig.contact.whatsappPrefilledUrl, "_blank", "noopener,noreferrer");
        closePalette();
      },
      keywords: ["whatsapp", "chat", "message"],
    },
    {
      id: "act-call",
      category: "Actions",
      title: "Direct Phone Call",
      subtitle: siteConfig.contact.phone,
      icon: <Phone className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        window.location.assign(siteConfig.contact.phoneLink);
        closePalette();
      },
      keywords: ["phone", "call", "telephone"],
    },
    {
      id: "act-email",
      category: "Actions",
      title: "Send Official Email",
      subtitle: siteConfig.contact.email,
      icon: <Mail className="w-4 h-4 text-[#19D879]" />,
      action: () => {
        window.location.assign(siteConfig.contact.emailLink);
        closePalette();
      },
      keywords: ["email", "mail", "gmail"],
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
        closePalette();
      },
      keywords: ["theme", "dark", "light", "mode", "color"],
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
    } else if (e.key === "Tab") {
      const focusableElements = Array.from(
        e.currentTarget.querySelectorAll<HTMLElement>(
          'input:not([disabled]), button:not([disabled])',
        ),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (
        e.shiftKey &&
        (document.activeElement === firstElement ||
          document.activeElement === e.currentTarget)
      ) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="command-palette-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-150"
      onClick={closePalette}
    >
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-2xl shadow-[#19D879]/10 text-[var(--text-primary)]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownInList}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[var(--border-subtle)]">
          <Search className="w-5 h-5 text-[var(--brand-emerald)] shrink-0 me-3" />
          <h2 id="command-palette-title" className="sr-only">Search MZEVOLVE</h2>
          <input
            ref={inputRef}
            type="text"
            value={query}
            role="combobox"
            aria-label="Search pages, services, and actions"
            aria-autocomplete="list"
            aria-expanded="true"
            aria-controls="command-palette-results"
            aria-activedescendant={
              filteredCommands[selectedIndex]
                ? `command-${filteredCommands[selectedIndex].id}`
                : undefined
            }
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search pages, services, or actions..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] me-2 rounded"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div
          id="command-palette-results"
          ref={listRef}
          role="listbox"
          aria-label="Search results"
          className="max-h-80 overflow-y-auto p-2 space-y-1"
        >
          {filteredCommands.length === 0 ? (
            <div role="status" className="py-12 text-center text-sm text-[var(--text-muted)]">
              No matching commands or pages found for &quot;{query}&quot;.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  id={`command-${cmd.id}`}
                  role="option"
                  aria-selected={isSelected}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-start transition-all duration-150 ${
                    isSelected
                      ? "bg-[var(--bg-surface-elevated)] border border-[var(--border-highlight)] text-[var(--text-primary)] shadow-sm"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface-elevated)] border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[var(--brand-emerald-glow)] text-[var(--brand-emerald)]"
                          : "bg-[var(--bg-base)] text-[var(--text-muted)]"
                      }`}
                    >
                      {cmd.icon}
                    </div>
                    <div className="truncate">
                      <div className="text-sm font-medium text-[var(--text-primary)] flex items-center gap-2">
                        {cmd.title}
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                          {cmd.category}
                        </span>
                      </div>
                      {cmd.subtitle && (
                        <div className="text-xs text-[var(--text-secondary)] truncate">{cmd.subtitle}</div>
                      )}
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 ms-2 transition-transform ${
                      isSelected                       ? "text-[var(--brand-emerald)] translate-x-1" : "text-[var(--text-muted)] opacity-0"
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts info */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-base)] border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span>Navigate:</span>
            <kbd className="px-1.5 py-0.5 bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] rounded font-mono">↑</kbd>
            <kbd className="px-1.5 py-0.5 bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] rounded font-mono">↓</kbd>
            <span>Select:</span>
            <kbd className="px-1.5 py-0.5 bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] rounded font-mono">↵</kbd>
          </div>
          <div>
            <span className="text-emerald-400 font-mono">MZEVOLVE</span> Command Hub
          </div>
        </div>
      </div>
    </div>
  );
};
