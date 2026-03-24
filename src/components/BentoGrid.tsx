"use client";

import { motion } from "framer-motion";
import { Camera, Cloud, Wrench, FileSearch, ChevronRight } from "lucide-react";

const services = [
    {
        icon: Camera,
        title: "CCTV Installation & AI Detection",
        description:
            "Enterprise-grade surveillance with AI-powered motion detection, facial recognition, and smart analytics. Full HD to 4K systems tailored to your security needs.",
        large: true,
        accent: "emerald" as const,
    },
    {
        icon: Cloud,
        title: "Remote Monitoring & Cloud",
        description:
            "Access your cameras from anywhere. Cloud storage, mobile alerts, and real-time monitoring dashboards for total visibility.",
        large: false,
        accent: "cyan" as const,
    },
    {
        icon: Wrench,
        title: "Maintenance & Upgrades",
        description:
            "Preventive maintenance plans and seamless upgrades to keep your system running at peak performance.",
        large: false,
        accent: "emerald" as const,
    },
    {
        icon: FileSearch,
        title: "Solution Design & Risk Assessment",
        description:
            "Expert blueprints and vulnerability assessments. We design security architectures that protect every blind spot.",
        large: false,
        accent: "cyan" as const,
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

export function BentoGrid() {
    return (
        <section id="services" className="section-padding">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-sm font-medium text-neon-emerald uppercase tracking-widest">
                        Our Services
                    </span>
                    <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold mt-3">
                        Security Solutions
                        <br />
                        <span className="text-gradient">Built for the Future</span>
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        const isEmerald = service.accent === "emerald";

                        return (
                            <motion.div
                                key={service.title}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                className={`group relative glass-card p-8 transition-all duration-500 cursor-pointer overflow-hidden ${service.large ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                                    }`}
                            >
                                {/* Hover glow */}
                                <div
                                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl ${isEmerald ? "glow-emerald" : "glow-cyan"
                                        }`}
                                />

                                {/* Corner accent */}
                                <div
                                    className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity duration-500 ${isEmerald ? "bg-neon-emerald" : "bg-neon-cyan"
                                        }`}
                                />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${isEmerald
                                                ? "bg-neon-emerald/10 text-neon-emerald"
                                                : "bg-neon-cyan/10 text-neon-cyan"
                                            }`}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    {/* Content */}
                                    <h3
                                        className={`font-[family-name:var(--font-space-grotesk)] font-bold mb-3 ${service.large ? "text-2xl md:text-3xl" : "text-xl"
                                            }`}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className={`text-muted-foreground leading-relaxed ${service.large ? "text-base md:text-lg max-w-xl" : "text-sm"
                                            }`}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Learn More */}
                                    <div
                                        className={`inline-flex items-center gap-1 mt-6 text-sm font-medium transition-colors ${isEmerald
                                                ? "text-neon-emerald/70 group-hover:text-neon-emerald"
                                                : "text-neon-cyan/70 group-hover:text-neon-cyan"
                                            }`}
                                    >
                                        Learn more
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
