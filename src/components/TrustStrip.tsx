"use client";

import { Shield, Building2, Home, Factory } from "lucide-react";

const badges = [
    { icon: Shield, label: "Hikvision Authorized Distributor" },
    { icon: Building2, label: "Corporate Solutions" },
    { icon: Factory, label: "Industrial Security" },
    { icon: Home, label: "Residential Protection" },
    { icon: Shield, label: "Certified Installations" },
    { icon: Building2, label: "Enterprise Grade" },
    { icon: Factory, label: "24/7 Monitoring" },
    { icon: Home, label: "Smart AI Detection" },
];

function BadgeItem({ icon: Icon, label }: { icon: typeof Shield; label: string }) {
    return (
        <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/5 bg-white/[0.02] whitespace-nowrap">
            <Icon className="w-4 h-4 text-neon-emerald flex-shrink-0" />
            <span className="text-sm text-muted-foreground font-medium">{label}</span>
        </div>
    );
}

export function TrustStrip() {
    return (
        <section className="relative py-8 overflow-hidden border-y border-white/5">
            {/* Glow edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Marquee */}
            <div className="flex animate-marquee gap-6">
                {[...badges, ...badges].map((badge, i) => (
                    <BadgeItem key={i} icon={badge.icon} label={badge.label} />
                ))}
            </div>
        </section>
    );
}
