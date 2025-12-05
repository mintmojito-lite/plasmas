"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    target?: string;
    children: React.ReactNode;
}

const LiquidButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, LiquidButtonProps>(
    ({ className, href, target, children, onClick, ...props }, ref) => {
        const baseStyles =
            "group relative px-6 py-3 bg-cyan-500/10 backdrop-blur-md border border-cyan-500/20 text-cyan-50 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.1)] font-bold text-sm sm:text-base hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] flex items-center gap-2 overflow-hidden cursor-pointer tracking-wider";

        const shimmer = (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
        );

        if (href) {
            return (
                <a
                    href={href}
                    target={target}
                    className={cn(baseStyles, className)}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                >
                    {shimmer}
                    {children}
                </a>
            );
        }

        return (
            <button
                className={cn(baseStyles, className)}
                onClick={onClick}
                ref={ref as React.Ref<HTMLButtonElement>}
                {...props}
            >
                {shimmer}
                {children}
            </button>
        );
    }
);

LiquidButton.displayName = "LiquidButton";

export default LiquidButton;
