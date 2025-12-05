"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef, useState } from "react";
import LiquidButton from "./ui/liquid-button";

const items = [
    {
        id: "01",
        title: "Talent ≠ CGPA",
        desc: "We don’t care about rank cards. If you can build, break, think wild, or make something glow at 3AM you’re in. Because honestly, marks don’t build satellites… people do. Meanwhile, some folks are out there polishing certificates for LinkedIn likes we’re busy polishing new tech.",
        video: "/preview1.mp4",
        gradient: "from-cyan-900 to-black",
    },
    {
        id: "02",
        title: "We Cook Weird, Smart Stuff",
        desc: "AI, GPU Compilers, Medical Analytics, ZKP, NLP, Quantum… Whatever sounds like “bro wth is this?” we try it anyway. We don’t do snake game, we do “THIS GONNA CHANGE SMTH” kinda systems. While others are flexing chatbots that reply “hi,” we’re deploying defenses that break attackers’ keyboards.",
        video: "/preview2.mp4",
        gradient: "from-purple-900 to-black",
    },
    {
        id: "03",
        title: "Teams Without Drama",
        desc: "No seniors flexing. No juniors following orders. Just everyone pushing each other to become dangerously good. Nobody here says “I’m leader, you’re editor.” We all build not clap from the audience like “nice project bro”.",
        video: "/preview3.mp4",
        gradient: "from-blue-900 to-black",
    },
    {
        id: "04",
        title: "Your Work Won’t Rot in a Folder",
        desc: "Every tiny idea becomes a cool system, demo, or research project. Your GitHub gets stars instead of cobwebs. Certificates fade… but working products hit recruiters like “WHAT did you just build???”",
        video: "/preview4.mp4",
        gradient: "from-emerald-900 to-black",
    },
];

export default function Impact({ onNext }: { onNext: () => void }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <section id="impact" ref={container} className="relative w-full bg-black/20">
            <div className="w-full max-w-6xl mx-auto px-6 py-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white text-center mb-20 z-0"
                >
                    Why Join Plasmas?
                </motion.h2>

                <div className="mt-10 mb-40">
                    {items.map((item, index) => {
                        const targetScale = 1 - (items.length - index) * 0.05;
                        return (
                            <Card
                                key={index}
                                i={index}
                                item={item}
                                progress={scrollYProgress}
                                range={[index * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

const Card = ({
    i,
    item,
    progress,
    range,
    targetScale,
}: {
    i: number;
    item: typeof items[0];
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, 1]); // No scaling
    // Fade out - accelerated
    const opacity = useTransform(progress, [range[0], range[0] + 0.3], [1, 0]);

    return (
        <div
            ref={container}
            className="h-screen flex items-center justify-center sticky top-0 pointer-events-none"
        >
            <motion.div
                style={{
                    scale,
                    opacity,
                    top: 0, // No stacking offset
                }}
                className="relative flex flex-col w-full max-w-[90%] md:max-w-4xl h-auto min-h-[40vh] md:h-[50vh] rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-2xl origin-top pointer-events-auto p-6 md:p-12 justify-center"
            >
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 font-mono text-lg text-cyan-400">
                            {item.id}
                        </span>
                        <div className={`h-px flex-1 bg-gradient-to-r ${item.gradient} opacity-50`} />
                    </div>
                    <h3 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-8 leading-tight">
                        {item.title}
                    </h3>
                    <p className="text-base md:text-xl text-white leading-relaxed max-w-3xl drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                        {item.desc}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
