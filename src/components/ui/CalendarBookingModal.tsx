"use client";

import React, { useState, useEffect } from "react";
import { Calendar, X, ExternalLink, Phone, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const CalendarBookingModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-150"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#171B1A] border border-[#273430] shadow-2xl p-6 sm:p-8 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-[#1E2422] transition-colors"
          aria-label="Close scheduling modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#19D879]/15 border border-[#19D879]/30 flex items-center justify-center text-[#19D879]">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#19D879]">
              Engineering Consultation
            </span>
            <h3 className="text-xl font-bold font-heading text-white">Schedule Discovery Session</h3>
          </div>
        </div>

        <p className="text-sm text-zinc-300 leading-relaxed mb-6">
          Book a direct 30-minute technical discovery session with MZEVOLVE engineers to review your
          project scope, architectural requirements, and integration timeline.
        </p>

        {/* Benefits list */}
        <div className="space-y-2 mb-6 p-4 rounded-xl bg-[#1E2422]/70 border border-[#273430]">
          <div className="flex items-center gap-2.5 text-xs text-zinc-200">
            <CheckCircle2 className="w-4 h-4 text-[#19D879] shrink-0" />
            <span>Direct conversation with senior AI & full-stack engineers</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-zinc-200">
            <CheckCircle2 className="w-4 h-4 text-[#19D879] shrink-0" />
            <span>Feasibility check & architectural scoping without sales fluff</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-zinc-200">
            <CheckCircle2 className="w-4 h-4 text-[#19D879] shrink-0" />
            <span>Zero obligation — protected under enterprise non-disclosure standards</span>
          </div>
        </div>

        {/* Primary Booking Link */}
        <div className="space-y-3">
          <a
            href={siteConfig.contact.calendarBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#19D879] hover:bg-[#15b867] text-[#111413] font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#19D879]/20 group"
          >
            <Clock className="w-4 h-4" />
            <span>Open Interactive Calendar (Cal.com)</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <div className="relative py-2 text-center">
            <span className="text-[11px] font-mono uppercase text-zinc-500 bg-[#171B1A] px-3 relative z-10">
              Or Connect Instantly
            </span>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#273430]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={siteConfig.contact.whatsappPrefilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#1E2422] hover:bg-[#252D2B] border border-[#273430] hover:border-[#19D879]/40 text-xs text-zinc-200 font-medium transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#19D879]" />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href={siteConfig.contact.phoneLink}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#1E2422] hover:bg-[#252D2B] border border-[#273430] hover:border-[#19D879]/40 text-xs text-zinc-200 font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[#19D879]" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
