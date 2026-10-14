"use client";

import React, { useState, useEffect } from "react";
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
} from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-surface)]/60 border border-[var(--border-subtle)] backdrop-blur-sm"
          >
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[#19D879] bg-[#19D879]/10 font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
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

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[#19D879]" />
              ) : (
                <Moon className="w-4 h-4 text-emerald-700" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-[var(--border-subtle)] cursor-pointer"
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
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium px-4 py-3 rounded-lg flex items-center justify-between ${
                    isActive
                      ? "text-[#19D879] bg-[#19D879]/10 font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#19D879]" />}
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
