import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import AboutAndPitch from "@/components/AboutAndPitch";
import ProjectsAndExperience from "@/components/ProjectsAndExperience";
import Contact from "@/components/Contact";
import SiteEffects from "@/components/SiteEffects";
import WireWeb from "@/components/WireWeb";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <WireWeb />
        <Hero />
        <AboutAndPitch />
        <ProjectsAndExperience />
        <Contact />
      </main>
      <SiteEffects />
    </>
  );
}