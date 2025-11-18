import {ExpertiseCard} from "@/components/ui/expertise-card";
import Image from "next/image";
import {CustomButton} from "@/components/ui/custom-button";
import Navbar from "@/components/NavBar/navbar";


export function HeroSection() {
    return (
        <section className="w-full h-full">
            <div className="w-full h-full py-10 glow-sides">
                <Navbar/>
                <Image
                    src="/images/hero-image.png"
                    alt="hero-image"
                    width={1000}
                    height={1000}
                    className="absolute object-cover top-1/2 -right-1/5 w-3/4 h-2/3 -translate-y-1/2 z-10"
                    style={{width: "auto", height: "auto"}}
                />
                <div className="relative flex container px-4 w-full lg:px-14 h-full mx-auto">
                    <div className="flex flex-col justify-between w-full h-full">
                        <h1 className="max-w-[830px] text-7xl">Elevate Your Creations With AI-Driven Technology!</h1>
                        <div className="flex w-full items-center space-x-6">
                            <p className="max-w-[390px] text-white/80 text-base">
                                From generating complex algorithms to
                                simple AI-driven tools, we offer cutting-edge
                            </p>
                            <ExpertiseCard/>
                        </div>
                        <div className="flex w-full items-center space-x-6">
                            <div className="max-w-[223px] max-h-[66px] text-2xl font-medium mr-0">Workflow with Custom
                                AI
                                Tools
                            </div>
                            <div className="flex">
                                <div className="flex w-full items-center">
                                    <Image
                                        src="/images/glob.png"
                                        alt="hero-image"
                                        width={48}
                                        height={48}
                                        className="object-cover"
                                        style={{width: "auto", height: "auto"}}
                                    />
                                    <Image
                                        src="/images/unnamed.png"
                                        alt="hero-image"
                                        width={48}
                                        height={48}
                                        className="object-cover ml-[-18px]"
                                        style={{width: "auto", height: "auto"}}
                                    />
                                    <Image
                                        src="/images/attr_addbonuses.png"
                                        alt="hero-image"
                                        width={59}
                                        height={59}
                                        className="object-cover  ml-[-24px]"
                                        style={{width: "auto", height: "auto"}}
                                    />
                                </div>
                                <div className="flex w-full flex-col min-w-[131px] min-h-[61px] ml-4">
                                    <div className="text-2xl font-bold">578M +</div>
                                    <div className="font-normal text-lg">User Active</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full items-center space-x-6 py-30">
                            <div className="flex w-full items-center space-x-6">
                                <CustomButton color="blue" className="w-full max-w-[222px]"/>
                                <CustomButton text="Learn More" className="w-full max-w-[222px]"/>
                            </div>
                            <div className="flex w-full items-center justify-around">
                                <div className="flex flex-col">
                                    <div className="font-medium text-4xl">123.4+</div>
                                    <div className="font-normal text-xl">Technology</div>
                                </div>
                                <div className="w-full max-w-[266px] font-medium text-2xl z-10">
                                    Discover the Future of AI Innovation
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex container w-full justify-between items-center space-x-6 px-4 w-full lg:px-14 h-full mx-auto">
                <div className="flex flex-col max-w-[200px]">
                    <div className="font-medium text-9xl pb-9">12+</div>
                    <div className="font-medium text-3xl w-full ml-1">Digital Experience</div>
                </div>
                <div className="flex w-full items-center justify-center">
                    <Image
                        src="/images/stigma.png"
                        alt="hero-image"
                        width={333}
                        height={222}
                        className="object-cover"
                        style={{width: "auto", height: "auto"}}
                    />
                </div>
                <div className="flex flex-col w-full font-medium text-xl">
                    <div className="text-end pb-6">Transform Ideas into Reality</div>
                    <div className="flex w-full justify-end">
                        <div className="pr-8">Power of AI at Your Fingertips</div>
                        <div>AI Partner for Smarter</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
