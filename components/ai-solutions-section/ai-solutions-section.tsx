

export function AiSolutionsSection() {

    const images = [
        { src: '/images/a-tiger-2.jpg', offset: 0 },
        { src: '/images/skull-1.jpg', offset: 80 },
        { src: '/images/orig.jpg', offset: 0 },
        { src: '/images/a-tiger-1.jpg', offset: 80 },
    ];

    return (
        <section className="w-full container pt-10 pb-30 px-4 w-full lg:px-14 h-full mx-auto">
            <h1 className="font-normal text-7xl text-center">Transform Ideas into Reality with Cutting-Edge AI
                Solutions</h1>
            <div className="w-full py-12 px-6">
                <div className="flex items-start justify-center gap-6 max-w-7xl mx-auto">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            style={{transform: `translateY(${image.offset}px)`}}
                            className="transition-transform duration-300"
                        >
                            <div
                                className="w-80 h-96 bg-cover bg-center rounded-3xl shadow-xl transition-transform duration-1000 hover:scale-110 cursor-pointer"
                                style={{
                                    backgroundImage: `url('${image.src}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}