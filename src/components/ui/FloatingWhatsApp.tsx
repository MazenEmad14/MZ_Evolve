"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="WhatsApp Quick Contact"
      className="fixed bottom-6 right-6 z-40 print:hidden select-none"
    >
      <a
        href={siteConfig.contact.whatsappPrefilledUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#19D879] text-[#111413] shadow-[0_4px_24px_-4px_rgba(25,216,121,0.5)] hover:shadow-[0_6px_32px_0px_rgba(25,216,121,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19D879]"
      >
        {/* Tooltip / Label visible on desktop hover or keyboard focus */}
        <span
          className={`hidden md:inline-flex items-center absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-primary)] shadow-lg whitespace-nowrap pointer-events-none transition-all duration-200 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          Chat with us on WhatsApp
        </span>

        {/* Official WhatsApp SVG Vector Icon */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          aria-hidden="true"
          className="transition-transform group-hover:scale-110"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.33 7.34 9.01 7.42 8.74 7.71C8.47 8 7.72 8.7 7.72 10.13C7.72 11.56 8.76 12.94 8.91 13.14C9.06 13.34 11.11 16.5 14.25 17.86C15 18.18 15.58 18.37 16.03 18.52C16.82 18.77 17.53 18.73 18.1 18.65C18.73 18.56 20.05 17.85 20.32 17.07C20.6 16.28 20.6 15.61 20.52 15.47C20.44 15.33 20.24 15.25 19.95 15.11C19.65 14.96 18.18 14.24 17.91 14.14C17.64 14.04 17.44 13.99 17.24 14.29C17.04 14.59 16.46 15.28 16.28 15.48C16.11 15.68 15.93 15.7 15.63 15.55C15.34 15.41 14.38 15.09 13.25 14.08C12.37 13.3 11.78 12.33 11.6 12.03C11.43 11.74 11.58 11.58 11.73 11.43C11.86 11.3 12.02 11.08 12.17 10.91C12.32 10.74 12.37 10.61 12.47 10.42C12.57 10.22 12.52 10.05 12.45 9.9C12.37 9.76 11.78 8.3 11.53 7.71C11.3 7.13 11.06 7.21 10.88 7.2C10.71 7.2 10.51 7.2 10.31 7.2C10.11 7.2 9.8 7.28 9.53 7.34Z" />
        </svg>

        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#19D879] opacity-25 animate-ping -z-10" />
      </a>
    </aside>
  );
};
