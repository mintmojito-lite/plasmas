"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LiquidButton from "./ui/liquid-button";
import { FlowButton } from "./ui/flow-button";
import { Github, Instagram, Disc, RefreshCcw } from "lucide-react";
import RulesModal from "./RulesModal";

export default function JoinFooter({ onRestart }: { onRestart: () => void }) {
    const [showForm, setShowForm] = useState(false);
    const [showRules, setShowRules] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <footer id="join" className="relative w-full h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
                {!showForm ? (
                    <>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter"
                        >
                            Ready to Evolve?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-white mb-12 font-mono drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        >
                            We don’t accept boring. Impress us. Or go collect another certificate.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-6 mb-20"
                        >
                            <FlowButton text="Join Plasmas Now!" onClick={() => setShowForm(true)} />
                            <button
                                onClick={() => setShowRules(true)}
                                className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                            >
                                See Rules
                            </button>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="text-sm text-white font-mono tracking-widest uppercase mb-20 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        >
                            All this started because we had nothing else to do
                        </motion.p>
                    </>
                ) : !isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full max-w-4xl mx-auto h-[80vh] bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl flex flex-col"
                    >
                        {/* Header Bar */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/20 backdrop-blur-md">
                            <span className="text-sm font-mono text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">APPLICATION PORTAL</span>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setIsSubmitted(true)}
                                    className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 hover:text-black transition-all duration-300"
                                >
                                    I've Submitted
                                </button>
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>

                        {/* Form Container */}
                        <div className="flex-1 w-full bg-white">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSe85EHzULSoTm4A0pjpzmfjhUqxsr3KKqHs-u7L0iLac6NsMQ/viewform?embedded=true&rm=minimal"
                                className="w-full h-full border-0"
                                title="Join Plasmas Form"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center"
                    >
                        <img
                            src="/thanks.png"
                            alt="Thank You"
                            className="max-w-md w-full object-contain mb-8"
                        />
                        <button
                            onClick={() => {
                                setIsSubmitted(false);
                                setShowForm(false);
                            }}
                            className="px-6 py-3 rounded-full bg-white text-black text-sm font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            Return to Base
                        </button>
                    </motion.div>
                )}
            </div>

            <div className="absolute bottom-6 left-0 w-full text-center z-10">
                <p className="text-[10px] text-white font-mono uppercase tracking-[0.2em] drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]">
                    designed by humans on earth
                </p>
            </div>

            <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
        </footer>
    );
}
