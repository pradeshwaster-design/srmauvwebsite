import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FacultyGuidance() {
    const ref = useScrollReveal();

    return (
        <section id="faculty" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div ref={ref} className="reveal">
                    <div className="text-center mb-16">
                        <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4">Academic Mentorship</p>
                        <h2 className="section-title text-white mx-auto">Faculty Guidance</h2>
                    </div>

                    <div className="max-w-4xl mx-auto glass p-10 md:p-14 relative overflow-hidden">
                        {/* Decorative */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan/5 rounded-full blur-3xl" />

                        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                            {/* Avatar placeholder */}
                            <div className="w-32 h-32 rounded-full bg-navy-lighter border-2 border-cyan/30 flex items-center justify-center flex-shrink-0">
                                <svg className="w-16 h-16 text-cyan/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </div>

                            <div>
                                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                                    Dr. Annapurani Panaiyappan Kumarappan
                                </h3>
                                <p className="text-cyan font-medium mb-4">
                                    Professor, Department of Computer Science and Engineering
                                </p>
                                <p className="text-light-grey/70 text-sm mb-4">
                                    SRM Institute of Science and Technology
                                </p>
                                <p className="text-light-grey leading-relaxed">
                                    Under her academic mentorship, the team follows structured design practices and systematic development cycles, ensuring that each project balances experimentation with reliability. Her guidance provides the team with strong academic grounding while encouraging innovation, discipline, and practical engineering thinking.
                                </p>
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                            {[
                                { icon: '📐', label: 'Structured Design Practices' },
                                { icon: '🔄', label: 'Systematic Development Cycles' },
                                { icon: '🎓', label: 'Academic Rigor' },
                                { icon: '💡', label: 'Innovation + Engineering' },
                            ].map((item) => (
                                <div key={item.label} className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
                                    <span className="text-2xl block mb-2">{item.icon}</span>
                                    <span className="text-xs text-light-grey">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
