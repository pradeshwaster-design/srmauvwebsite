import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TeamOverview() {
    const ref = useScrollReveal();

    return (
        <section id="overview" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Column */}
                    <div>
                        <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4">Who We Are</p>
                        <h2 className="section-title text-white mb-6">Team Overview</h2>
                        <div className="space-y-5 mt-10">
                            <p className="text-light-grey leading-relaxed">
                                Established in 2013, Team SRM AUV is a multidisciplinary, student-driven technical team from SRM Institute of Science and Technology. We are dedicated to the design, development, and deployment of intelligent underwater robotic systems capable of operating in complex aquatic environments.
                            </p>
                            <p className="text-light-grey leading-relaxed">
                                Our team integrates mechanical, electronics, software, and systems engineering to build competition-proven and field-tested vehicles that represent SRM at national and international platforms.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {[
                                    { num: '10+', label: 'Years of Excellence' },
                                    { num: '5+', label: 'Vehicles Built' },
                                    { num: '10+', label: 'Competitions' },
                                    { num: '50+', label: 'Team Members' },
                                ].map((stat) => (
                                    <div key={stat.label} className="glass p-4 text-center glass-hover transition-all duration-300">
                                        <div className="text-2xl font-bold text-cyan font-heading">{stat.num}</div>
                                        <div className="text-xs text-light-grey mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="relative">
                        <div className="glass p-3 rounded-2xl overflow-hidden">
                            <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-navy-lighter flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent z-10" />
                                <div className="text-center z-20 p-8">
                                    <svg className="w-20 h-20 mx-auto text-cyan/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <p className="text-light-grey text-sm">Team SRM AUV</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative glow */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-cyan/5 blur-3xl pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
