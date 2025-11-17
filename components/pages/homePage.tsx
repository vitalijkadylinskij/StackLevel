import Navbar from "@/components/NavBar/navbar";
import {HeroSection} from "@/components/hero-section/hero-section";
import {ExperienceSection} from "@/components/experience-section/experience-section";

export default function HomePage() {
    return (
        <main className="min-h-screen w-80%">
            <HeroSection />
            <ExperienceSection />
        </main>
    );
}