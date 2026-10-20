"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

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
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      >
        {/* Tooltip visible on desktop hover */}
        <span
          className={`hidden md:inline-flex items-center absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#1E2422] border border-[#273430] text-xs font-semibold text-white shadow-xl whitespace-nowrap pointer-events-none transition-all duration-200 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          Chat with us on WhatsApp
        </span>

        {/* Centered WhatsApp Vector Glyph */}
        <WhatsAppIcon className="w-8 h-8 transition-transform duration-200 group-hover:scale-110" />
      </a>
    </aside>
  );
};
