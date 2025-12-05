"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface RulesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const rules = [
    "No “Hello sir, job?” we’re here to build, not beg.",
    "Touch grass occasionally burnout doesn’t count as hustle.",
    "Teamwork, not therapy don’t dump drama.",
    "Meetings < Making stuff less talk, more push.",
    "If you rage quit, leave snacks, emotional damage must be compensated.",
    "Git pushes > gym crushes",
    "ChatGPT helps, but your brain is still needed don’t be",
    "Copying is fine… only if you actually understand it",
    "Bugs are normal crying about them isn’t",
    "Flex skills, not screenshots of certificates",
];

export default function RulesModal({ isOpen, onClose }: RulesModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0a0a0a]/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                            <h3 className="text-xl font-bold text-white tracking-tight">Plasmas Rules</h3>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 overflow-y-auto custom-scrollbar">
                            <ul className="space-y-4">
                                {rules.map((rule, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex gap-4 text-white/80"
                                    >
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xs font-mono text-cyan-400">
                                            {index + 1}
                                        </span>
                                        <span className="text-sm md:text-base font-medium leading-relaxed">
                                            {rule}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                <p className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 italic">
                                    "Follow the rules. Break everything else"
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
