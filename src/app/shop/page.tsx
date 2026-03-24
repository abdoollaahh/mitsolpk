"use client";

import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "@/components/shop/ProductCard";

// Mock Product Data (Placeholder for Shopify integration)
const PRODUCTS = [
    {
        id: "1",
        name: "Hikvision 4K Dome Camera",
        price: 149.99,
        category: "Cameras",
        image: "/images/placeholders/camera-1.jpg",
    },
    {
        id: "2",
        name: "8-Channel NVR System",
        price: 299.00,
        category: "Recording",
        image: "/images/placeholders/nvr-1.jpg",
    },
    {
        id: "3",
        name: "Smart Motion Sensor",
        price: 45.00,
        category: "Smart Home",
        image: "/images/placeholders/sensor-1.jpg",
    },
    {
        id: "4",
        name: "PTZ Outdoor Camera",
        price: 219.50,
        category: "Cameras",
        image: "/images/placeholders/camera-2.jpg",
    },
    {
        id: "5",
        name: "1TB Surveillance HDD",
        price: 89.99,
        category: "Storage",
        image: "/images/placeholders/hdd-1.jpg",
    },
    {
        id: "6",
        name: "Cat6 Ethernet Cable (100ft)",
        price: 34.99,
        category: "Accessories",
        image: "/images/placeholders/cable-1.jpg",
    },
    // New Hardcoded Products
    { id: "7",  name: "2CD1023GOE-I 2MP IP CAMERA NORMAL", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "8",  name: "2CD1323GOE-I 2MP IP CAMERA NORMAL", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "9",  name: "2CD1043GOE-I 4MP IP CAMERA NORMAL", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "10", name: "DS-2CD2163G2-IU", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "11", name: "DS 2CD1143GO-I", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "12", name: "2DC1027G2-L 2MP IP CAMERA color vu", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "13", name: "2DC1027G2H-LIU 2MP IP CAMERA color vu", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "14", name: "2CD1021G2-LIU 2MP IP CAMERA Smart", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "15", name: "2CD1321G2LIU", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "16", name: "2CD1023G2-LIU 2MP IP CAMERA Smart", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "17", name: "DS-2CD1047G2H-LIU 4MP", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "18", name: "DS 2CD1027G3LIU 3.0 IP CAMERA", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "19", name: "2DE2C400MWG-E 4M IP CAMERA Smart", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "20", name: "2DE4425IW-DE T5 4MP/25x PTZ CAMERA", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "21", name: "2CD1327G2-LIU 2MP IP SMART CAMERA", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "22", name: "2CD1323G2-LIU 2MP IP SMART CAMERA", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "23", name: "3E0106-E/M 4/2 POE SWITCH", price: 0, category: "Networking", image: "/images/placeholders/sensor-1.jpg" },
    { id: "24", name: "3EO105P-E/M(B) 4/1 POE SWITCH", price: 0, category: "Networking", image: "/images/placeholders/sensor-1.jpg" },
    { id: "25", name: "3E0110MP-E/M 8/2 GIGABIT POE SWITCH", price: 0, category: "Networking", image: "/images/placeholders/sensor-1.jpg" },
    { id: "26", name: "DS 3E0310P E/M 8+2 GIGABIT SWITCH", price: 0, category: "Networking", image: "/images/placeholders/sensor-1.jpg" },
    { id: "27", name: "3E0510P-E/M 8/1 GIGABIT POE SWITCH", price: 0, category: "Networking", image: "/images/placeholders/sensor-1.jpg" },
    { id: "28", name: "CS-H8c (3MP,4mm) EZVIZ (360) INDOOR", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "29", name: "CS-H6c pro 2K EZVIZ (360) CAMERA", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "30", name: "CS-H3c (4MP COLOR VU) EZVIZ BULLIT CAMERA", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "31", name: "H90 DUAL 2K+", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "32", name: "CS-H9C 3mp dual camera", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "33", name: "DS7616NXI-K1 16CH NVR", price: 0, category: "Recording", image: "/images/placeholders/nvr-1.jpg" },
    { id: "34", name: "DS7616NI-Q1 16CH NVR", price: 0, category: "Recording", image: "/images/placeholders/nvr-1.jpg" },
    { id: "35", name: "DS7616NXI-K2 16CH NVR", price: 0, category: "Recording", image: "/images/placeholders/nvr-1.jpg" },
    { id: "36", name: "DS-7608NXI-K1 NVR", price: 0, category: "Recording", image: "/images/placeholders/nvr-1.jpg" },
    { id: "37", name: "DS-7608NI-Q1 NVR", price: 0, category: "Recording", image: "/images/placeholders/nvr-1.jpg" },
    { id: "38", name: "DS-7604NX-Q1 NVR", price: 0, category: "Recording", image: "/images/placeholders/nvr-1.jpg" },
    { id: "39", name: "DS-7604NXI-K1 NVR", price: 0, category: "Recording", image: "/images/placeholders/nvr-1.jpg" },
    { id: "40", name: "7108HGHI-M1(1080MP/ 8CH) DVR", price: 0, category: "Recording", image: "/images/placeholders/nvr-1.jpg" },
    { id: "41", name: "7104HQHI-M1/S(5MP/4CH) DVR", price: 0, category: "Recording", image: "/images/placeholders/nvr-1.jpg" },
    { id: "42", name: "7104HQHI-M1/S(4MP/4CH) DVR", price: 0, category: "Recording", image: "/images/placeholders/nvr-1.jpg" },
    { id: "43", name: "DS-7116HGHI-M1 16CH 2MP", price: 0, category: "Recording", image: "/images/placeholders/nvr-1.jpg" },
    { id: "44", name: "DS-7104HGHI-M1 (1080MP/4CH) DVR", price: 0, category: "Recording", image: "/images/placeholders/nvr-1.jpg" },
    { id: "45", name: "DS-2CE78DOT-LXTS TWO WAY AUDIO", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "46", name: "2CE16DOT-EXIPF 2MP Analog Camera", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "47", name: "2CE76DOT-EXIPF 2MP Analog DOOM Camera", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "48", name: "2CE16KOT-LPFS 3K Analog smart Camera", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "49", name: "2CE10DOFT-PF 2MP Analog ColorVu Camera", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "50", name: "2CE10DOFT-PFS 2MP Analog ColorVu Camera", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "51", name: "2CE10KOFT-PFS 3K Analog ColorVu Camera", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "52", name: "2CE70DFOT-PFS 2MP Analog DOOM ColorVu Camera", price: 0, category: "Cameras", image: "/images/placeholders/camera-1.jpg" },
    { id: "53", name: "TANDA ROUTER MODEL : N301", price: 0, category: "Networking", image: "/images/placeholders/sensor-1.jpg" },
    { id: "54", name: "TP LINK 844N", price: 0, category: "Networking", image: "/images/placeholders/sensor-1.jpg" },
    { id: "55", name: "TP LINK 840N", price: 0, category: "Networking", image: "/images/placeholders/sensor-1.jpg" },
    { id: "56", name: "TENDA Router F3", price: 0, category: "Networking", image: "/images/placeholders/sensor-1.jpg" },
    { id: "57", name: "Hikvision Router", price: 0, category: "Networking", image: "/images/placeholders/sensor-1.jpg" },
    { id: "58", name: "TP-LINK 5-PORT Gigabit Switch", price: 0, category: "Networking", image: "/images/placeholders/sensor-1.jpg" },
    { id: "59", name: "SEAGATE HDD 3TB", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "60", name: "SEAGATE HDD 2TB", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "61", name: "SEAGATE HDD 500GP", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "62", name: "WD HDD 1.0TB", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "63", name: "SEAGATE HDD 1TB", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "64", name: "WD HDD 320GB", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "65", name: "HIKVISION CAT 6 WHITE CABLE", price: 0, category: "Accessories", image: "/images/placeholders/cable-1.jpg" },
    { id: "66", name: "WD HDD 3TB", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "67", name: "SEAGATE HDD 250GP", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "68", name: "SD CARD 64 GB", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "69", name: "SD CARD128GB", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "70", name: "HIK SEMI 32GP CARD", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "71", name: "lexar 32 gb card", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "72", name: "CORNING CAT6 CABLE", price: 0, category: "Accessories", image: "/images/placeholders/cable-1.jpg" },
    { id: "73", name: "HIK CAT6 CABLE 1ROLL", price: 0, category: "Accessories", image: "/images/placeholders/cable-1.jpg" },
    { id: "74", name: "RJ-59 INNOVATIVE CABLE", price: 0, category: "Accessories", image: "/images/placeholders/cable-1.jpg" },
    { id: "75", name: "NETLINK CCTV YELLOW TAPE CABLE", price: 0, category: "Accessories", image: "/images/placeholders/cable-1.jpg" },
    { id: "76", name: "RJ-59 high qualtity cctv CABLE", price: 0, category: "Accessories", image: "/images/placeholders/cable-1.jpg" },
    { id: "77", name: "KINGSTON USB 64GB", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "78", name: "KINGSTON USB 32GB", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "79", name: "KINGSTON USB 16GB", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "80", name: "WD HDD 500GB", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "81", name: "FLEX EDGE BLUE RG 59+2C 80Y", price: 0, category: "Accessories", image: "/images/placeholders/cable-1.jpg" },
    { id: "82", name: "RJ-59 HADI CABLE", price: 0, category: "Accessories", image: "/images/placeholders/cable-1.jpg" },
    { id: "83", name: "DELL HDD 2TB", price: 0, category: "Storage", image: "/images/placeholders/hdd-1.jpg" },
    { id: "84", name: "Ruijie router", price: 0, category: "Networking", image: "/images/placeholders/sensor-1.jpg" }
];

const CATEGORIES = ["All", "Cameras", "Recording", "Smart Home", "Storage", "Accessories", "Networking"];

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = PRODUCTS.filter((product) => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            {/* ── Header Section ────────────────────────────────────────── */}
            <section className="relative mb-12 px-6 text-center">
                <div className="absolute inset-0 bg-neon-emerald/5 blur-[100px] pointer-events-none" />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold mb-4"
                >
                    Security Store
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground max-w-2xl mx-auto text-lg"
                >
                    Professional-grade surveillance equipment for your home and business.
                </motion.p>
            </section>

            {/* ── Filter & Search Bar ───────────────────────────────────── */}
            <div className="container mx-auto px-6 mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-md">

                    {/* Categories */}
                    <div className="flex flex-wrap items-center gap-2">
                        <Filter className="w-5 h-5 text-neon-emerald mr-2" />
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat
                                        ? "bg-neon-emerald text-black"
                                        : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-auto min-w-[300px]">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:border-neon-emerald/50 focus:outline-none focus:ring-1 focus:ring-neon-emerald/50 text-white placeholder:text-gray-500"
                        />
                    </div>
                </div>
            </div>

            {/* ── Product Grid ──────────────────────────────────────────── */}
            <div className="container mx-auto px-6">
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                                // Placeholder image logic
                                image={`https://placehold.co/600x600/1a1a1a/FFF?text=${encodeURIComponent(product.name)}`}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
                        <button
                            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                            className="mt-4 text-neon-emerald hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
