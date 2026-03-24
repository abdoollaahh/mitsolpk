"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import ColorBends from "@/components/ColorBends";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
    {
        icon: Phone,
        label: "Phone",
        value: "+92 300 1234567",
        href: "tel:+923001234567",
        color: "emerald",
    },
    {
        icon: Mail,
        label: "Email",
        value: "info@mitsolpk.com",
        href: "mailto:info@mitsolpk.com",
        color: "cyan",
    },
    {
        icon: MapPin,
        label: "Headquarters",
        value: "Technologies Park, Lahore, Pakistan",
        href: "https://maps.google.com/?q=Technologies+Park,Lahore",
        color: "emerald",
    },
    {
        icon: Clock,
        label: "Hours",
        value: "Mon-Fri: 9am - 6pm",
        href: null,
        color: "cyan",
    },
];

export default function ContactPage() {
    return (
        <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
            {/* ── Background ────────────────────────────────────────────── */}
            <div className="absolute inset-0 z-0 opacity-50">
                <ColorBends
                    colors={["#0a0a0a", "#00ff88", "#002b1a"]} // Subtle dark & green theme
                    rotation={0}
                    speed={0.15}
                    scale={1.2}
                    mouseInfluence={0.5}
                />
            </div>

            {/* Dark overlay specifically for readability */}
            <div className="absolute inset-0 z-[1] bg-black/60 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6">
                {/* ── Header ────────────────────────────────────────────── */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold mb-6"
                    >
                        Get In <span className="text-neon-emerald">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg"
                    >
                        Ready to secure your future? Our team is standing by to provide expert consultation and support.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* ── Contact Info Cards ────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactInfo.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href || "#"}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className={`group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-${item.color === "emerald" ? "neon-emerald" : "neon-cyan"}/30 hover:-translate-y-1`}
                                >
                                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-${item.color === "emerald" ? "neon-emerald" : "neon-cyan"}/20 to-transparent text-${item.color === "emerald" ? "neon-emerald" : "neon-cyan"}`}>
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                                        {item.label}
                                    </h3>
                                    <p className="text-lg font-semibold text-white group-hover:text-neon-emerald transition-colors">
                                        {item.value}
                                    </p>
                                </motion.a>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 group">
                            {/* This would be a real Google Maps embed */}
                            <div className="absolute inset-0 bg-[url('https://placehold.co/800x400/1a1a1a/2a2a2a?text=Interactive+Location+Map')] bg-cover bg-center opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-neon-emerald/30 flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-neon-emerald" />
                                    <span className="text-sm font-medium text-white">View on Maps</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Contact Form ──────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
