import React from "react";
import { Button } from "../ui/Button";
import { siteConfig } from "@/config/site";
import { ArrowRight, Mail, MessageSquare, Clock, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

export const ContactCtaSection: React.FC = () => {
  return (
    <section data-nav-section="/contact" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#1E2523] via-[#1A201F] to-[#121615] border border-[#19D879]/30 shadow-2xl">
          {/* Subtle Ambient Emerald Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#19D879]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#19D879]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#19D879]/10 border border-[#19D879]/30 text-xs font-mono text-[#19D879]">
              <Clock className="w-3.5 h-3.5" />
              <span>DIRECT TECHNICAL CONSULTATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to build systems that are built to evolve?
            </h2>

            <p className="text-base sm:text-lg text-[#C2CFC9] leading-relaxed max-w-2xl">
              Whether you need to integrate generative AI models, automate internal workflows, or build a fast modern web application, our team is ready to discuss your requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Send a Project Brief
              </Button>

              <a
                href={siteConfig.contact.emailLink}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white px-5 py-3.5 rounded-lg border border-white/15 hover:border-[#19D879] hover:bg-white/5 transition-all"
                title="Send email to MZEVOLVE"
              >
                <Mail className="w-4 h-4 text-[#19D879]" />
                <span className="font-mono">{siteConfig.contact.email}</span>
              </a>

              <a
                href={siteConfig.contact.whatsappPrefilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[#19D879] px-5 py-3.5 rounded-lg border border-[#19D879]/30 hover:border-[#19D879] hover:bg-[#19D879]/10 transition-all font-mono"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#19D879]" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#9EADA7]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#19D879]" />
                <span>Confidential Discussions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#19D879]" />
                <span>{siteConfig.contact.responseTime}</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono">
                <span>Direct Contact: {siteConfig.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
