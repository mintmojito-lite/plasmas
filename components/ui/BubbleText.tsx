"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface BubbleTextProps {
    segments: { text: string; className?: string }[];
    className?: string;
}

export const BubbleText = ({ segments, className }: BubbleTextProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Flatten segments into a single array of characters with their specific classNames
    const characters = segments.flatMap((segment) =>
        segment.text.split("").map((char) => ({
            char,
            className: segment.className,
        }))
    );

    return (
        <div
            onMouseLeave={() => setHoveredIndex(null)}
            className={cn("text-center cursor-default", className)}
        >
            {characters.map(({ char, className: charClassName }, idx) => {
                const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - idx) : null;

                let classes = "transition-all duration-300 ease-in-out inline-block";

                // Apply styles based on distance
                switch (distance) {
                    case 0:
                        classes += " scale-150 z-10 origin-bottom";
                        break;
                    case 1:
                        classes += " scale-125 z-0 origin-bottom";
                        break;
                    case 2:
                        classes += " scale-110 z-0 origin-bottom";
                        break;
                    default:
                        classes += " scale-100";
                        break;
                }

                return (
                    <span
                        key={idx}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        className={cn(classes, charClassName, char === " " ? "mx-2" : "mx-[0.5px]")}
                    >
                        {char === " " ? " " : char}
                    </span>
                );
            })}
        </div>
    );
};
