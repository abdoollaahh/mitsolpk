"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call
        setTimeout(() => {
            // For now, always success
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset status after 3 seconds
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto">
            {/* Glassmorphism Container */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-emerald/5 to-neon-cyan/5 rounded-2xl blur-xl" />
            <div className="relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">

                <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-white text-center">
                    Let's Start a Conversation
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Input */}
                        <div className="relative group">
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-neon-emerald transition-colors placeholder-transparent"
                                placeholder="Name"
                                id="name"
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-0 top-3 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-emerald peer-valid:-top-3 peer-valid:text-xs peer-valid:text-neon-emerald cursor-text"
                            >
                                Name
                            </label>
                        </div>

                        {/* Email Input */}
                        <div className="relative group">
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-neon-emerald transition-colors placeholder-transparent"
                                placeholder="Email"
                                id="email"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 top-3 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-emerald peer-valid:-top-3 peer-valid:text-xs peer-valid:text-neon-emerald cursor-text"
                            >
                                Email
                            </label>
                        </div>
                    </div>

                    {/* Subject Input */}
                    <div className="relative group">
                        <input
                            type="text"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-neon-emerald transition-colors placeholder-transparent"
                            placeholder="Subject"
                            id="subject"
                        />
                        <label
                            htmlFor="subject"
                            className="absolute left-0 top-3 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-emerald peer-valid:-top-3 peer-valid:text-xs peer-valid:text-neon-emerald cursor-text"
                        >
                            Subject
                        </label>
                    </div>

                    {/* Message Input */}
                    <div className="relative group">
                        <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-neon-emerald transition-colors placeholder-transparent resize-none"
                            placeholder="Message"
                            id="message"
                        />
                        <label
                            htmlFor="message"
                            className="absolute left-0 top-3 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-emerald peer-valid:-top-3 peer-valid:text-xs peer-valid:text-neon-emerald cursor-text"
                        >
                            Message
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="group relative w-full overflow-hidden rounded-lg bg-white/5 bg-gradient-to-r from-neon-emerald/80 to-neon-cyan/80 p-[1px] transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <div className="relative flex items-center justify-center gap-2 rounded-lg bg-black/80 px-4 py-3 text-base font-semibold text-white transition-all group-hover:bg-transparent group-hover:text-black">
                            {status === "submitting" ? (
                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            ) : status === "success" ? (
                                <>
                                    <CheckCircle2 className="h-5 w-5" />
                                    Message Sent
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </div>
                    </button>

                    {/* Status Message */}
                    <AnimatePresence>
                        {status === "success" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center justify-center gap-2 text-sm text-neon-emerald"
                            >
                                <CheckCircle2 className="h-4 w-4" />
                                <span>Thank you! We'll get back to you shortly.</span>
                            </motion.div>
                        )}
                        {status === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center justify-center gap-2 text-sm text-red-400"
                            >
                                <AlertCircle className="h-4 w-4" />
                                <span>Something went wrong. Please try again.</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </div>
        </div>
    );
}
