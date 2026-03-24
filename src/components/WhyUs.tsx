"use client";

import { motion, Variants } from "framer-motion";
import { UserCheck, Brain, HeartHandshake } from "lucide-react";

const features = [
    {
        icon: UserCheck,
        title: "Certified Technicians",
        description:
            "Our team holds official Hikvision certifications and years of field experience across industrial, commercial, and residential installations.",
    },
    {
        icon: Brain,
        title: "Smart AI Integration",
        description:
            "From facial recognition to anomaly detection, our systems leverage cutting-edge AI to deliver proactive security, not just passive recording.",
    },
    {
        icon: HeartHandshake,
        title: "Cost-Effective Excellence",
        description:
            "Premium security doesn't have to break the bank. We engineer solutions that maximize protection per rupee, with transparent pricing and no hidden costs.",
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export function WhyUs() {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-emerald/[0.03] blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-medium text-neon-emerald uppercase tracking-widest">
                        Why Choose Us
                    </span>
                    <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold mt-3 mb-6">
                        Security You Can{" "}
                        <span className="text-gradient">Trust</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                        We combine cutting-edge technology with local expertise to protect
                        what matters most.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                >
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                className="group text-center md:text-left"
                            >
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-neon-emerald/10 text-neon-emerald mb-6 group-hover:bg-neon-emerald/20 transition-colors duration-300">
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Decorative line */}
                                <div className="mt-6 h-px w-12 bg-gradient-to-r from-neon-emerald/40 to-transparent mx-auto md:mx-0" />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 glass-card p-8 md:p-12"
                >
                    {[
                        { value: "500+", label: "Installations" },
                        { value: "10+", label: "Years Experience" },
                        { value: "99.9%", label: "Uptime" },
                        { value: "24/7", label: "Support" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-gradient">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
