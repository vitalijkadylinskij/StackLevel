"use client"

export function ExpertiseCard() {
    const bars = [
        { height: 40, color: "from-blue-500 to-blue-600" },
        { height: 65, color: "from-purple-500 to-purple-600" },
        { height: 90, color: "from-pink-500 to-pink-600" },
        { height: 80, color: "from-purple-500 to-pink-600" },
        { height: 50, color: "from-blue-500 to-purple-500" },
        { height: 70, color: "from-pink-500 to-purple-500" },
    ]

    return (
        <div className="relative ml-[20%] max-lg:w-full min-w-[345px] h-[248] overflow-hidden rounded-xl p-8 border border-white/10 inset-0 bg-white/4 backdrop-blur-sm z-11">
            {/* Content Container */}
            <div className="relative h-full justify-between z-10 flex flex-col items-start gap-4">
                {/* Top Text */}
                <div className="flex items-center justify-centre">
                    <h3 className="text-3xl font-bold mr-10">
                        13+
                    </h3>
                    <div className="w-full h-full max-w-[162px] max-h-[44px] text-base text-white/70 font-medium ">
                        Years of Industry Expertise
                    </div>
                </div>

                {/* Bar Chart Container */}
                <div className="flex flex-col items-center gap-2 w-full">

                    {/* Bars */}
                    <div className="flex items-end gap-6 w-full h-full">
                        {bars.map((bar, index) => (
                            <div
                                key={index}
                                className={`w-6 bg-gradient-to-t ${bar.color} rounded-full transition-all duration-500 hover:brightness-110`}
                                style={{
                                    height: `${bar.height}px`,
                                    animation: `grow 0.8s ease-out ${index * 0.1}s both`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

