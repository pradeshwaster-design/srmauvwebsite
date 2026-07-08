import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
    'Structural robustness for underwater operations',
    'Precise maneuverability with multi-thruster control',
    'Modular integration for rapid reconfiguration',
    'Real-time visual feedback and inspection capability',
    'Controlled navigation in complex environments',
    'Iterative pool testing and system validation',
];

export default function CurrentProject() {
    const ref = useScrollReveal();

    return (
        <section id="current-project" className="py-24 px-6 relative bg-navy-light/50 overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan/[0.03] blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div ref={ref} className="reveal">
                    <div className="text-center mb-16">
                        <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4">Currently Building</p>
                        <h2 className="section-title text-white mx-auto">Current Project — NEMO</h2>
                        <p className="text-light-grey mt-6 max-w-2xl mx-auto">2025–2026</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image / Visual placeholder */}
                        <div className="relative group">
                            <div className="glass p-3 rounded-2xl overflow-hidden">
                                <div className="relative aspect-video bg-navy-lighter rounded-xl overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent" />
                                    <div className="text-center z-10">
                                        <div className="font-heading font-extrabold text-6xl md:text-8xl gradient-text opacity-30 mb-2">
                                            NEMO
                                        </div>
                                        <p className="text-light-grey text-sm">ROV Platform</p>
                                    </div>
                                </div>
                            </div>
                            {/* Pulse glow */}
                            <div className="absolute -inset-1 rounded-2xl bg-cyan/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                        </div>

                        {/* Info */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-semibold mb-6">
                                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                                Active Development
                            </div>

                            <p className="text-light-grey leading-relaxed mb-8">
                                NEMO is a Remotely Operated Vehicle (ROV) designed for inspection and task-oriented underwater operations.
                                It represents Team SRM AUV's latest engineering effort, combining robust mechanical design with advanced control
                                systems for real-time underwater exploration and task execution.
                            </p>

                            <h4 className="font-heading font-semibold text-white text-lg mb-4">Key Focus Areas</h4>
                            <div className="space-y-3">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 group/item">
                                        <div className="w-5 h-5 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-cyan/20 transition-colors">
                                            <svg className="w-3 h-3 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <span className="text-light-grey text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
