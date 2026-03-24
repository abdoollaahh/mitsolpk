"use client";

import { motion, Variants } from "framer-motion";

const projects = [
    {
        title: "Karachi Industrial Complex",
        tag: "Industrial Complex",
        cameras: "64 Cameras",
        gradient: "from-neon-emerald/20 to-neon-cyan/10",
        height: "h-72",
    },
    {
        title: "DHA Residence",
        tag: "Private Residence",
        cameras: "16 Cameras",
        gradient: "from-neon-cyan/20 to-blue-500/10",
        height: "h-56",
    },
    {
        title: "Lahore Commercial Plaza",
        tag: "Commercial Plaza",
        cameras: "48 Cameras",
        gradient: "from-purple-500/20 to-neon-emerald/10",
        height: "h-64",
    },
    {
        title: "Islamabad Corporate HQ",
        tag: "Corporate Office",
        cameras: "32 Cameras",
        gradient: "from-neon-emerald/15 to-yellow-500/10",
        height: "h-80",
    },
    {
        title: "Faisalabad Warehouse",
        tag: "Industrial Facility",
        cameras: "24 Cameras",
        gradient: "from-neon-cyan/15 to-neon-emerald/10",
        height: "h-60",
    },
    {
        title: "Rawalpindi Gated Community",
        tag: "Residential Complex",
        cameras: "40 Cameras",
        gradient: "from-rose-500/15 to-neon-cyan/10",
        height: "h-72",
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
};

export function ProjectShowcase() {
    return (
        <section id="projects" className="section-padding">
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
                        Our Work
                    </span>
                    <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold mt-3">
                        Recent{" "}
                        <span className="text-gradient">Installations</span>
                    </h2>
                </motion.div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer"
                        >
                            {/* Placeholder visual — gradient background simulating project photo */}
                            <div
                                className={`${project.height} bg-gradient-to-br ${project.gradient} bg-card relative`}
                            >
                                {/* Grid pattern overlay */}
                                <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />

                                {/* Centered camera icon placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg
                                        className="w-16 h-16 text-white/10"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <span className="inline-flex self-start items-center rounded-full bg-neon-emerald/10 border border-neon-emerald/20 px-3 py-1 text-xs font-medium text-neon-emerald mb-2">
                                        {project.tag}
                                    </span>
                                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-foreground">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {project.cameras} • Hikvision System
                                    </p>
                                </div>
                            </div>

                            {/* Bottom info (always visible) */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                                <span className="text-xs text-neon-emerald/70 font-medium">
                                    {project.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
