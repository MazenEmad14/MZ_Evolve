"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { useTheme } from "./ThemeProvider";
import { siteConfig } from "@/config/site";
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
  Sparkles,
  Search,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHomeSection, setActiveHomeSection] = useState<string | null>(null);
  const mobileMenuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const updateActiveSection = () => {
      let activeHref = "/";

      for (const section of document.querySelectorAll<HTMLElement>(
        "[data-nav-section]",
      )) {
        if (section.getBoundingClientRect().top > 140) break;
        activeHref = section.dataset.navSection || activeHref;
      }

      setActiveHomeSection(activeHref);
    };

    const initialUpdate = window.requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(initialUpdate);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const firstLink = document.querySelector<HTMLAnchorElement>(
      "#mobile-navigation a",
    );
    firstLink?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        mobileMenuToggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const activeNavHref =
    pathname === "/"
      ? activeHomeSection || "/"
      : siteConfig.navigation
          .filter(
            (item) =>
              item.href !== "/" &&
              (pathname === item.href || pathname.startsWith(`${item.href}/`)),
          )
          .sort((a, b) => b.href.length - a.href.length)[0]?.href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-base)]/85 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Logo size="md" shape="circle" />

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-surface)]/60 border border-[var(--border-subtle)] backdrop-blur-sm"
          >
            {siteConfig.navigation.map((item) => {
              const isActive = item.href === activeNavHref;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 after:absolute after:left-4 after:right-4 after:bottom-0.5 after:h-0.5 after:rounded-full after:bg-[var(--brand-emerald)] after:transition-transform after:duration-200 ${
                    isActive
                      ? "text-[var(--brand-emerald)] bg-[var(--brand-emerald-glow)] font-semibold after:scale-x-100"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] after:scale-x-0"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
              aria-label="Search pages, services, and actions"
              aria-haspopup="dialog"
              aria-keyshortcuts="Control+K Meta+K"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-[var(--brand-emerald)]" />
              <span className="hidden lg:inline">Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] rounded text-[var(--text-muted)]">
                Ctrl/⌘ K
              </kbd>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-pressed={theme === "light"}
              aria-label={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
              className="p-2.5 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[#19D879]" />
              ) : (
                <Moon className="w-4 h-4 text-emerald-700" />
              )}
            </button>

            {/* Primary CTA */}
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Action Bar */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
              aria-label="Search pages, services, and actions"
              aria-haspopup="dialog"
              aria-keyshortcuts="Control+K Meta+K"
              className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] cursor-pointer"
            >
              <Search className="w-4 h-4 text-[var(--brand-emerald)]" />
            </button>

            <button
              onClick={toggleTheme}
              aria-pressed={theme === "light"}
              aria-label={
                theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
              className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[#19D879]" />
              ) : (
                <Moon className="w-4 h-4 text-emerald-700" />
              )}
            </button>

            <button
              ref={mobileMenuToggleRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="min-h-11 min-w-11 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] cursor-pointer inline-flex items-center justify-center"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#19D879]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-base)] border-b border-[var(--border-subtle)] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav
            id="mobile-navigation"
            aria-label="Mobile Navigation"
            className="flex flex-col space-y-1"
          >
            {siteConfig.navigation.map((item) => {
              const isActive = item.href === activeNavHref;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium px-4 py-3 rounded-lg flex items-center justify-between ${
                    isActive
                      ? "text-[var(--brand-emerald)] bg-[var(--brand-emerald-glow)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[var(--brand-emerald)]" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
              onNavigate={() => setMobileMenuOpen(false)}
            >
              Start a Project
            </Button>
            <div className="text-center pt-2 space-y-1">
              <a
                href={siteConfig.contact.emailLink}
                className="text-xs text-[var(--text-secondary)] hover:text-[#19D879] font-mono block"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.phoneLink}
                className="text-xs text-[var(--text-muted)] hover:text-[#19D879] font-mono block"
              >
                Tel: {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
