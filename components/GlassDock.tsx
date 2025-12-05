"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function GlassDock() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Hide on scroll down
            } else {
                setIsVisible(true); // Show on scroll up
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
                >
                    <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.1)]">
                        <NavLink href="#manifesto">Manifesto</NavLink>
                        <div className="w-[1px] h-4 bg-white/10 mx-1" />
                        <NavLink href="#impact">Impact</NavLink>
                        <div className="w-[1px] h-4 bg-white/10 mx-1" />
                        <NavLink href="#standard">The Standard</NavLink>
                        <div className="w-[1px] h-4 bg-white/10 mx-1" />
                        <NavLink href="#join" highlight>Join</NavLink>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function NavLink({ href, children, highlight = false }: { href: string; children: React.ReactNode; highlight?: boolean }) {
    return (
        <Link href={href}>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${highlight
                        ? "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/20"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
            >
                {children}
            </motion.div>
        </Link>
    );
}
