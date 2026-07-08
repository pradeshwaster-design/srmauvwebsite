import ParticleBackground from '../components/ParticleBackground';

export default function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Deep ocean gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, #0A192F 0%, #071225 40%, #0d2137 70%, #0A192F 100%)',
                }}
            />

            {/* Subtle radial glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)',
                }}
            />

            <ParticleBackground />

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-glass-border text-cyan text-sm font-medium mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                    Established 2013 · SRM Institute of Science and Technology
                </div>

                {/* Title */}
                <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tight leading-[1.1]">
                    TEAM SRM{' '}
                    <span className="gradient-text">AUV</span>
                </h1>

                {/* Tagline */}
                <p className="font-heading text-xl md:text-2xl text-cyan/80 font-medium mb-8 tracking-wide">
                    Engineering Depths, Navigating Future
                </p>

                {/* Description */}
                <p className="text-light-grey text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
                    A multidisciplinary student engineering team dedicated to the design, development, and deployment of intelligent underwater robotic systems capable of operating in complex aquatic environments.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a href="#vehicles" className="glow-btn-filled glow-btn no-underline">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Explore Our Vehicles
                    </a>
                    <a href="#achievements" className="glow-btn no-underline">
                        View Achievements
                    </a>
                    <a href="#why-sponsor" className="glow-btn no-underline">
                        Sponsor Us
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="mt-16 animate-bounce">
                    <svg className="w-6 h-6 mx-auto text-cyan/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
