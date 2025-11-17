import Image from "next/image";


export function ExperienceSection() {
    return (
        <section className="w-full">
            <div className="container flex w-full h-full text-center justify-center mx-auto py-30">
                <h1 className="font-normal text-7xl max-w-[1190px]">Revolutionize Your Workflow with Custom AI
                    Tools</h1>
            </div>
            <div className="relative container flex w-full h-full justify-center mx-auto pb-30 px-4 w-full lg:px-34">
                <div className="rounded-xl w-full h-full min-h-[780px] bg-[url('/images/exp-section.jpg')] bg-cover bg-no-repeat bg-center">
                    <div className="flex justify-between py-20 px-15">
                        <h2 className="font-normal text-5xl max-w-[525px]">
                            Build Smarter with AI Generators
                        </h2>
                        <div className="flex justify-end">
                            <div className="w-[228px] h-[27px] rounded-md mr-5 bg-white/17 text-center items-center">Simplifying AI for Everyone</div>
                            <div className="w-[310px] h-[27px] rounded-md mr-5 bg-white/17 text-center items-center">Creations with AI-Driven Technology</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}