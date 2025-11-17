import {HeroSection} from "@/components/hero-section/hero-section";
import {ExperienceSection} from "@/components/experience-section/experience-section";
import {AiPartnersSection} from "@/components/ai-partners/ai-partners-section";
import {AiInnovationSection} from "@/components/ai-innovation-section/ai-innovation-section";
import {AiSolutionsSection} from "@/components/ai-solutions-section/ai-solutions-section";
import {Footer} from "@/components/footer/footer";

export default function HomePage() {
    return (
        <main className="min-h-screen w-80%">
            <HeroSection />
            <ExperienceSection />
            <AiPartnersSection />
            <AiInnovationSection />
            <AiSolutionsSection />
            <Footer />
        </main>
    );
}