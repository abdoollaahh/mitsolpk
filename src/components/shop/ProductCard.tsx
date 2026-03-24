"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
}

export function ProductCard({
    id,
    name,
    price,
    category,
    image,
}: ProductCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-neon-emerald/30 hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]"
        >
            {/* ── Image Area ────────────────────────────────────────────── */}
            <div className="relative aspect-square overflow-hidden bg-black/40">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* ── Content Area ──────────────────────────────────────────── */}
            <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-neon-emerald">
                        {category}
                    </span>
                    <span className="text-lg font-bold text-white">
                        ${price.toLocaleString()}
                    </span>
                </div>

                <h3 className="mb-4 text-xl font-semibold text-white group-hover:text-neon-cyan transition-colors">
                    {name}
                </h3>

                <button
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-white/5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-neon-emerald hover:text-black active:scale-95"
                    aria-label={`Add ${name} to cart`}
                >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                </button>
            </div>

            {/* ── Decorative Corner Accents ─────────────────────────────── */}
            <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-neon-emerald/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 h-16 w-16 bg-gradient-to-tr from-neon-cyan/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
    );
}
