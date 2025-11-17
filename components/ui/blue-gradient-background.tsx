'use client'

import Image from "next/image";

export default function BlueGradientBackground() {
    return (
        <div className="inset-0  overflow-hidden bg-custom-dark">

            {/* Left side bright blue glow - centered vertically */}
            <div className="absolute top-1/2 -left-1/2 w-2/3 h-2/3 rounded-full opacity-100 -translate-y-1/2"
                 style={{
                     background: 'radial-gradient(circle, rgba(30, 146, 255, 0.9) 50%, rgba(30, 146, 255, 0.5) 25%, rgba(30, 146, 255, 0.1) 100%, transparent 100%)',
                     filter: 'blur(100px)'
                 }}
            />

            {/* Right side bright blue glow - centered vertically */}
            <div className="absolute top-1/2 -right-1/3 w-2/3 h-2/3 rounded-full opacity-100 -translate-y-1/2"
                 style={{
                     background: 'radial-gradient(circle, rgba(30, 146, 255, 0.9) 50%, rgba(30, 146, 255, 0.5) 25%, rgba(30, 146, 255, 0.1) 100%, transparent 100%)',
                     filter: 'blur(100px)'
                 }}
            />
            <Image
                src="/images/hero-image.png"
                alt="hero-image"
                width={2000}
                height={1000}
                className="absolute object-cover top-1/2 -right-1/5 w-3/4 h-2/3 -translate-y-1/2"
                style={{ width: "auto", height: "auto" }}
            />
        </div>
    )
}