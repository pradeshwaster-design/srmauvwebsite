import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
    { icon: '🏅', text: 'Over a decade of engineering excellence' },
    { icon: '🔧', text: 'Real-world applied engineering with field-tested vehicles' },
    { icon: '🌍', text: 'National & international exposure and representation' },
    { icon: '🤝', text: 'Technical engagement and brand visibility opportunity' },
    { icon: '💡', text: 'STEM innovation and workforce development contribution' },
];

export default function WhySponsor() {
    const ref = useScrollReveal();

    return (
        <section id="why-sponsor" className="py-24 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-cyan/[0.04] blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div ref={ref} className="reveal">
                    <div className="text-center mb-16">
                        <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4">Partner With Us</p>
                        <h2 className="section-title text-white mx-auto">Why Sponsor Team SRM AUV</h2>
                    </div>

                    <div className="glass p-10 md:p-14 text-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 text-left max-w-3xl mx-auto">
                            {highlights.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan/20 transition-colors"
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-light-grey text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-xl md:text-2xl font-heading font-semibold gradient-text mb-10">
                            "Together, we engineer depth — and navigate the future."
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#contact" className="glow-btn-filled glow-btn no-underline">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                Download Sponsorship Brochure
                            </a>
                            <a href="#contact" className="glow-btn no-underline">
                                Become a Sponsor
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
