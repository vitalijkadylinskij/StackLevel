import {NetworkNode} from "@/components/ui/network-node";


export function AiInnovationSection() {
    return (
        <section id="Services" className="w-full container pt-10 pb-30 px-4 w-full lg:px-14 h-full mx-auto">
            <div className="flex flex-col">
                <div className="flex justify-between w-full">
                    <h1 className="w-full max-w-[813px] font-normal text-6xl">Discover the Future of AI Innovation</h1>
                    <div className="w-full max-w-[483px] font-normal text-base text-white/80">From generating complex
                        algorithms to simple AI-driven tools, we offer cutting-edge solutions that cater to every need.
                        Whether you’re a developer, entrepreneur
                    </div>
                </div>
                <div className="flex mt-20 w-full">
                    <div className="w-full max-w-[390px] h-full min-h-[721px] bg-[url('/images/3d-woman.jpg')] bg-cover bg-no-repeat rounded-4xl" />
                    <div className="flex flex-col w-full ml-20 justify-between">
                        <div className="flex h-1/2 w-full justify-between">
                            <div className="flex h-full flex-col font-normal justify-between">
                                <div className="flex text-base space-x-6">
                                    <div className="flex rounded-xl bg-custom-violet w-[228px] h-[34px] justify-center items-center">Simplifying AI for Everyone</div>
                                    <div className="flex rounded-xl bg-custom-dark-blue w-[228px] h-[34px] justify-center items-center">AI Generator Platform</div>
                                </div>
                                <div className="text-5xl w-full max-w-[597px]">Empower Your Vision with AI Technology</div>
                                <div className="text-base text-white/80 w-full max-w-[597px]">From generating complex algorithms to simple AI-driven tools, we offer cutting-edge solutions that cater to every need.</div>
                            </div>
                            <div className="w-full max-w-[300px] h-full max-h-[311px] bg-[url('/images/there-is-pool.jpg')] bg-center bg-cover bg-no-repeat rounded-4xl"></div>
                        </div>
                        <div className="flex w-full h-1/2 items-end">
                            <div
                                className="flex w-full max-w-[994px] h-full max-h-[294px] border border-gray-700 rounded-4xl bg-white/4 px-20 pt-15 justify-between">
                                <NetworkNode />
                                <div className="flex flex-col">
                                    <div className="font-medium text-2xl w-full max-w-[320px]">Innovate Faster with Our AI Generator Platform</div>
                                    <div className="font-normal text-base text-white/80 w-full max-w-[352px] mt-12">From generating complex algorithms to simple AI-driven tools, we offer cutting-edge</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-normal text-9xl">12+</div>
                                    <div className="font-medium text-2xl mt-3">Digital Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}