import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "full-color";
  className?: string;
  showText?: boolean;
}

export default function ZatilLogo({
  variant = "full-color",
  className = "",
  showText = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Crisp Emblem */}
      <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-lg overflow-hidden flex-shrink-0 shadow-sm transition-transform hover:scale-105">
        <Image
          src="/images/logo/zatil-logo.jpg"
          alt="Zatil Group Emblem"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center tracking-tight leading-none font-extrabold text-xl md:text-2xl">
            <span className="text-[#F26522] font-serif">ZΛTIL</span>
          </div>
          <span
            className={`text-[10px] md:text-[11px] font-semibold tracking-[0.28em] uppercase ${
              variant === "dark"
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            G R O U P
          </span>
        </div>
      )}
    </div>
  );
}
