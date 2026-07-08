import { useScrollReveal } from '../hooks/useScrollReveal';

const competitions = {
    international: [
        { name: 'AUVSI RoboSub', location: 'USA', description: 'Premier international AUV competition' },
        { name: 'SAUVC', location: 'Singapore', description: 'Singapore Autonomous Underwater Vehicle Challenge' },
        { name: 'Underwater Robotics Challenge TAC 2024', location: 'Norway', description: 'European underwater robotics challenge' },
    ],
    national: [
        { name: 'NIOT SAVe Competition', location: 'India', description: 'National underwater vehicle competition' },
        { name: "NEXUS'24 (CIT)", location: 'India', description: 'National-level robotics competition' },
        { name: 'MarinaX (VIT)', location: 'India', description: 'Underwater robotics competition at VIT' },
    ],
    exhibitions: [
        { name: 'ACMEE Exhibition', type: 'Exhibition' },
        { name: 'Indian Express EdEx Expo', type: 'Expo' },
        { name: 'Aarush Workshops', type: 'Workshop' },
    ],
};

export default function Competitions() {
    const ref = useScrollReveal();

    return (
        <section id="competitions" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div ref={ref} className="reveal">
                    <div className="text-center mb-16">
                        <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4">Where We Compete</p>
                        <h2 className="section-title text-white mx-auto">Competitions & Participation</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* International */}
                        <div className="glass p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </div>
                                <h3 className="font-heading font-semibold text-xl text-white">International</h3>
                            </div>
                            <div className="space-y-4">
                                {competitions.international.map((comp, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan/20 transition-colors group">
                                        <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 text-cyan font-heading font-bold text-sm">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm group-hover:text-cyan transition-colors">{comp.name}</h4>
                                            <p className="text-light-grey text-xs mt-1">{comp.location} · {comp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* National */}
                        <div className="glass p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                                    </svg>
                                </div>
                                <h3 className="font-heading font-semibold text-xl text-white">National</h3>
                            </div>
                            <div className="space-y-4">
                                {competitions.national.map((comp, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan/20 transition-colors group">
                                        <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 text-cyan font-heading font-bold text-sm">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm group-hover:text-cyan transition-colors">{comp.name}</h4>
                                            <p className="text-light-grey text-xs mt-1">{comp.location} · {comp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Exhibitions & Events */}
                    <div className="glass p-8 max-w-2xl mx-auto">
                        <h3 className="font-heading font-semibold text-lg text-white mb-6 text-center">Exhibitions & Events</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {competitions.exhibitions.map((event, i) => (
                                <div
                                    key={i}
                                    className="px-5 py-3 rounded-full bg-white/[0.03] border border-white/10 text-light-grey text-sm hover:border-cyan/30 hover:text-cyan transition-all cursor-default"
                                >
                                    {event.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
