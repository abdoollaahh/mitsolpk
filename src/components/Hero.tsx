"use client";

import { motion, Variants } from "framer-motion";
import { Zap } from "lucide-react";
import ColorBends from "./ColorBends";

const words = ["Intelligence.", "Surveillance.", "Security."];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
};

const wordVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* ── ColorBends WebGL Background ─────────────────────── */}
            <div className="absolute inset-0 z-0">
                <ColorBends
                    colors={["#00ff88", "#00e5ff", "#0a0a0a"]}
                    rotation={0}
                    speed={0.2}
                    scale={1}
                    frequency={1}
                    warpStrength={1}
                    mouseInfluence={1}
                    parallax={0.5}
                    noise={0.1}
                    transparent={false}
                    autoRotate={0}
                />
            </div>

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 z-[1] bg-background/60" />

            {/* ── Content ───────────────────────────────────────────── */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-neon-emerald/20 bg-neon-emerald/5 px-4 py-1.5 text-xs font-medium text-neon-emerald mb-8"
                >
                    <Zap className="w-3 h-3" />
                    Authorized Hikvision Partners
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6"
                >
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            variants={wordVariants}
                            className={`inline-block mr-4 ${i === 2 ? "text-gradient" : "text-foreground"
                                }`}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.7 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
                >
                    Authorized Hikvision Partners delivering enterprise-grade security
                    solutions for Pakistan&apos;s homes and industries.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#contact"
                        className="group relative inline-flex items-center gap-2 rounded-full bg-neon-emerald px-8 py-3.5 text-base font-semibold text-background transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:scale-105"
                    >
                        <span>Get a Security Audit</span>
                        <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </a>
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-3.5 text-base font-medium text-foreground transition-all duration-300 hover:border-neon-emerald/40 hover:text-neon-emerald hover:bg-neon-emerald/5"
                    >
                        View Projects
                    </a>
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}
