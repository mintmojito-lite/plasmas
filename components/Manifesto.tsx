"use client";

import { motion } from "framer-motion";
import { WordPullUp } from "./ui/WordPullUp";
import { BubbleText } from "./ui/BubbleText";

export default function Manifesto({ onNext }: { onNext: () => void }) {
    return (
        <section id="manifesto" className="relative w-full h-screen flex flex-col justify-center items-center px-6">
            <div className="max-w-6xl text-center">
                <WordPullUp
                    words="Lets Get Into Reality"
                    className="text-3xl md:text-5xl font-bold text-cyan-500 mb-8"
                />

                <div className="mb-12 space-y-8">
                    <BubbleText
                        className="text-xl md:text-3xl lg:text-4xl leading-relaxed"
                        segments={[
                            { text: "College teaches you syntax. We teach you ", className: "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" },
                            { text: "Engineering.", className: "text-white font-semibold" },
                        ]}
                    />

                    <BubbleText
                        className="text-xl md:text-3xl lg:text-4xl leading-relaxed"
                        segments={[
                            { text: "We are a team of builders, designers,and architects. We skip the boring theory and dive straight into ", className: "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" },
                            { text: "Compilers", className: "text-cyan-400" },
                            { text: ", ", className: "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" },
                            { text: "Vector AI", className: "text-purple-400" },
                            { text: ", ", className: "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" },
                            { text: "Quantum Routing", className: "text-blue-400" },
                            { text: ", and ", className: "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" },
                            { text: "ZKPs", className: "text-emerald-400" },
                            { text: ".", className: "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" },
                        ]}
                    />

                    <BubbleText
                        className="text-xl md:text-3xl lg:text-4xl leading-relaxed"
                        segments={[
                            { text: "If you are the only person in your class who actually ", className: "text-white font-medium" },
                            { text: "enjoys", className: "italic text-cyan-200" },
                            { text: " debugging at 3 AM, you just found your home.", className: "text-white font-medium" },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
