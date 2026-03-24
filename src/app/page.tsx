import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { BentoGrid } from "@/components/BentoGrid";
import { WhyUs } from "@/components/WhyUs";
import { ProjectShowcase } from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <BentoGrid />
      <WhyUs />
      <ProjectShowcase />
    </>
  );
}
