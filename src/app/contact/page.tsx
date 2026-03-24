"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import ColorBends from "@/components/ColorBends";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
    {
        icon: Phone,
        label: "Phone",
        value: "+92 330 5500855",
        href: "tel:+923305500855",
        color: "emerald",
    },
    {
        icon: Mail,
        label: "Email",
        value: "mitsolpk@gmail.com",
        href: "mailto:mitsolpk@gmail.com",
        color: "cyan",
    },
    {
        icon: MapPin,
        label: "Headquarters",
        value: "Multi Residencia and Orchards, Main Jhang Bhater Road, ROS, Pakistan",
        href: "https://maps.google.com/?q=Multi+Residencia+and+Orchards,+Main+Jhang+Bhater+Road,+ROS,+Pakistan",
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

                        {/* Map Embed */}
                        <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 opacity-80 hover:opacity-100 transition-opacity duration-500">
                            <iframe 
                                src="https://maps.google.com/maps?q=33.7165422,72.7121262&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            />
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
