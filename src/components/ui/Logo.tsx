import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  useImage?: boolean;
  className?: string;
  asLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  showWordmark = true,
  useImage = false,
  className = "",
  asLink = true,
}) => {
  const dimensions = {
    sm: { icon: 32, text: "text-lg", gap: "gap-2.5", sub: "text-[10px]" },
    md: { icon: 40, text: "text-xl", gap: "gap-3", sub: "text-xs" },
    lg: { icon: 54, text: "text-2xl", gap: "gap-3.5", sub: "text-sm" },
  }[size];

  const content = (
    <div className={`inline-flex items-center ${dimensions.gap} group select-none ${className}`}>
      {/* Brand Icon */}
      <div
        className="relative flex items-center justify-center rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105"
        style={{ width: dimensions.icon, height: dimensions.icon }}
      >
        {useImage ? (
          <Image
            src="/images/logo.jpeg"
            alt="MZEVOLVE Official Logo"
            width={dimensions.icon}
            height={dimensions.icon}
            className="rounded-full object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full rounded-full bg-[#F5F7F6] border border-[#19D879]/40 flex items-center justify-center p-1.5 shadow-sm">
            {/* High-fidelity Vector Representation of the MZ Rocket Icon */}
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Continuous MZ Path */}
              <path
                d="M20 70V30L34 56L48 30V65C48 68 51 70 54 70H80"
                stroke="#0ea85c"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M52 30H78L56 62"
                stroke="#0ea85c"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Ascending Rocket Launch */}
              <path
                d="M62 55L75 42"
                stroke="#0ea85c"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <g transform="translate(68, 20) rotate(45) scale(0.65)">
                <path
                  d="M15 2C15 2 24 6 24 18V28L15 24L6 28V18C6 6 15 2 15 2Z"
                  stroke="#0ea85c"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  fill="#F5F7F6"
                />
                <circle cx="15" cy="14" r="3" fill="#0ea85c" />
                <path d="M6 22L2 28L6 26" stroke="#0ea85c" strokeWidth="3" strokeLinecap="round" />
                <path d="M24 22L28 28L24 26" stroke="#0ea85c" strokeWidth="3" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        )}
      </div>

      {/* Brand Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-[0.16em]">
            <span className={`font-extrabold text-[var(--text-primary)] ${dimensions.text}`}>
              MZ
            </span>
            <span
              className={`font-semibold tracking-[0.18em] ${dimensions.text}`}
              style={{ color: "var(--brand-emerald)" }}
            >
              EVOLVE
            </span>
          </div>
          <span
            className={`font-mono uppercase tracking-[0.25em] text-[var(--text-muted)] ${dimensions.sub} -mt-1 hidden sm:block`}
          >
            Built to Evolve
          </span>
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" aria-label="MZEVOLVE Home" className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
};
