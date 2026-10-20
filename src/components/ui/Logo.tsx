import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  shape?: "default" | "circle";
  className?: string;
  asLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  shape = "default",
  className = "",
  asLink = true,
}) => {
  const defaultDimensions = {
    sm: { width: 88, height: 52, image: 138 },
    md: { width: 120, height: 70, image: 188 },
    lg: { width: 156, height: 90, image: 240 },
  }[size];
  const circleSize = { sm: 48, md: 64, lg: 80 }[size];
  const dimensions =
    shape === "circle"
      ? { width: circleSize, height: circleSize, image: circleSize }
      : defaultDimensions;

  const content = (
    <span
      className={`relative inline-block shrink-0 overflow-hidden ${
        shape === "circle" ? "rounded-full" : "rounded-lg"
      } ${className}`}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      <Image
        src="/logo.webp"
        alt="MZEVOLVE"
        width={dimensions.image}
        height={dimensions.image}
        sizes={`${dimensions.image}px`}
        className={
          shape === "circle"
            ? "h-full w-full object-cover"
            : "absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        }
      />
    </span>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        aria-label="MZEVOLVE Home"
        className="inline-flex rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19D879]"
      >
        {content}
      </Link>
    );
  }

  return content;
};
