"use client";

import React from "react";
import "./plasmas-entry.css";
import { motion } from "framer-motion";

export function PlasmasEntry() {
    const [rotate, setRotate] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height } = currentTarget.getBoundingClientRect();

        // Calculate rotation based on mouse position relative to center
        // Range: -20deg to 20deg
        const x = ((clientY / height) - 0.5) * -20;
        const y = ((clientX / width) - 0.5) * 20;

        setRotate({ x, y });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div
            className="flex flex-col items-center justify-center h-full w-full overflow-visible perspective-[1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="stage scale-75 md:scale-100 transition-transform duration-200 ease-out"
                style={{
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
                }}
            >
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="layer"></div>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-32 text-center text-gray-400 font-mono text-sm md:text-base tracking-widest uppercase pointer-events-none select-none"
            >
                All this started because we had nothing else to do
            </motion.p>
        </div>
    );
}
