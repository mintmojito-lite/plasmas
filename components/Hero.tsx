import { motion } from "framer-motion";
import { GradualSpacing } from "./ui/GradualSpacing";
import LiquidButton from "./ui/liquid-button";

export default function Hero({ onNext }: { onNext: () => void }) {
  return (
    <section className="relative flex w-full min-h-screen flex-col justify-center items-center overflow-hidden px-6 text-center z-10">

      <div className="max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">
            Stop Flexing <br />
            <GradualSpacing
              text="Certificates."
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-bold tracking-tighter"
            />
          </h1>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8">
            Start Building <br />
            <GradualSpacing
              text="Systems."
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold tracking-tighter"
            />
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto max-w-2xl text-lg md:text-xl text-white mb-10 font-mono leading-relaxed drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        >
          Plasmas is the forge for students who are tired of 'Hello World'. We don't care about your CGPA. We care about your code.
        </motion.p>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-0" />
    </section>
  );
}
