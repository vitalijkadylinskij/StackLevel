import Image from "next/image";
import {CustomButton} from "@/components/ui/custom-button";

export function AiPartnersSection() {
    return (
        <section className="w-full container pt-10 pb-30 px-4 w-full lg:px-14 h-full mx-auto">
            <div className="flex w-full justify-between items-stretch">
                <div className="flex w-full max-w-[280px] font-medium text-2xl self-end">
                    Workflow with Custom AI Tools
                </div>
                <h1 className="max-w-[940px] text-7xl font-normal text-white text-end">Your AI Partner for Smarter
                    Faster Solutions</h1>
            </div>
            <div className="w-full flex mt-20">
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="flex flex-col">
                        <div className="text-white/80 font-normal text-base w-full max-w-[380px]">Our Technology AI
                            Generator website empowers
                            individuals and businesses
                        </div>
                        <div className="w-full max-w-[347px] mt-30">
                            <Image
                                src="/images/egg.jpg"
                                alt="partners-image"
                                width={347}
                                height={390}
                                className="object-cover rounded-lg"
                                style={{width: "auto", height: "auto"}}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-20">
                        <div className="flex w-full">
                            <div className="flex flex-col space-x-25">
                                <div className="font-medium text-4xl">123.4+</div>
                                <div className="font-normal text-xl">Technology</div>
                            </div>
                            <div className="w-full max-w-[266px] font-medium text-2xl">Discover the Future of AI
                                Innovation
                            </div>
                        </div>
                        <div className="flex w-full items-center space-x-6 mt-15 self-end">
                            <CustomButton color="blue" className="w-full max-w-[222px]"/>
                            <CustomButton text="Learn More" className="w-full max-w-[222px]"/>
                        </div>
                    </div>
                </div>
                <div className="relative flex w-full flex-col justify-between mr-[-500]">
                    <div
                        className="w-full max-w-[420px] h-full max-h-[208px] border border-gray-700 rounded-4xl px-10 py-10 bg-white/4 backdrop-blur-sm">
                        <div className="flex w-full justify-between">
                            <div
                                className="w-full h-full max-w-[18px] min-h-[18px] rounded-full bg-custom-violet mt-7"></div>
                            <div className="flex flex-col ml-5">
                                <div className="w-full font-medium text-2xl">Vision AI Technology</div>
                                <div className="w-full font-normal text-base text-white/80 mt-5">Our Technology AI
                                    Generator website empowers individuals
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full max-w-[420px] h-full max-h-[208px] px-10 py-10 ml-[-200]">
                        <div className="flex w-full justify-between">
                            <div
                                className="w-full h-full max-w-[18px] min-h-[18px] rounded-full bg-white mt-7"></div>
                            <div className="flex flex-col ml-5">
                                <div className="w-full font-medium text-2xl">Vision AI Technology</div>
                                <div className="w-full font-normal text-base text-white/80 mt-5">Our Technology AI
                                    Generator website empowers individuals
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full max-w-[420px] h-full max-h-[208px] border border-gray-700 rounded-4xl px-10 py-10 bg-white/4 backdrop-blur-sm">
                        <div className="flex w-full justify-between">
                            <div
                                className="w-full h-full max-w-[18px] min-h-[18px] rounded-full bg-custom-dark-blue mt-7"></div>
                            <div className="flex flex-col ml-5">
                                <div className="w-full font-medium text-2xl">Vision AI Technology</div>
                                <div className="w-full font-normal text-base text-white/80 mt-5">Our Technology AI
                                    Generator website empowers individuals
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[auto] max-h-[935px] bg-[url('/images/3d-man.png')] bg-cover bg-no-repeat rounded-4xl" />
            </div>
        </section>
    )
}