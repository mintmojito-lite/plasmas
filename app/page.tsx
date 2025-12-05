"use client";

import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Impact from "@/components/Impact";
import JoinFooter from "@/components/JoinFooter";
import Launch from "@/components/Launch";
import { WebGLShader } from "@/components/WebGLShader";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative h-screen w-full text-white selection:bg-cyan-500/30 overflow-hidden">
      <WebGLShader />

      <div className="relative z-10 h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section id="hero" className="h-screen w-full snap-start flex-shrink-0">
          <Hero onNext={() => scrollToSection("manifesto")} />
        </section>

        <section id="manifesto" className="h-screen w-full snap-start flex-shrink-0">
          <Manifesto onNext={() => scrollToSection("impact")} />
        </section>

        <section id="impact" className="min-h-screen w-full snap-start flex-shrink-0">
          <Impact onNext={() => scrollToSection("join")} />
        </section>

                <section id="join" className="h-screen w-full snap-start flex-shrink-0">

                  <JoinFooter onRestart={() => scrollToSection("hero")} />

                </section>

        

                <section id="launch" className="h-screen w-full snap-start flex-shrink-0">

                  <Launch />

                </section>

              </div>

            </main>

          );

        }

        