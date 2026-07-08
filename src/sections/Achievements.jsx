import { useScrollReveal } from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';

const achievements = [
    {
        emoji: '🏆',
        title: 'National Champions',
        subtitle: 'NIOT SAVe Competition, 2015',
        color: '#FFD700',
    },
    {
        emoji: '🏆',
        title: 'Top International Finish',
        subtitle: 'SAUVC — Singapore AUV Challenge',
        color: '#FFD700',
    },
    {
        emoji: '🥉',
        title: '3rd Place',
        subtitle: "NEXUS'24 (CIT), 2024",
        color: '#CD7F32',
    },
    {
        emoji: '🥇',
        title: 'Winner',
        subtitle: 'MarinaX Underwater Robotics, VIT Vellore, 2025',
        color: '#FFD700',
    },
];

const recognitions = [
    'Government-sponsored international representation',
    'I4C Innovation Recognition (Make in India)',
    'NVIDIA GPU Grant',
    'Multi-year competitive presence',
];

const stats = [
    { value: 10, suffix: '+', label: 'Years Active' },
    { value: 5, suffix: '+', label: 'Vehicles Built' },
    { value: 15, suffix: '+', label: 'Competitions' },
    { value: 4, suffix: '', label: 'Major Awards' },
];

function StatCounter({ stat }) {
    const ref = useCountUp(stat.value, 1500);
    return (
        <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-cyan">
                <span ref={ref}>0</span>{stat.suffix}
            </div>
            <div className="text-light-grey text-sm mt-1">{stat.label}</div>
        </div>
    );
}

export default function Achievements() {
    const ref = useScrollReveal();

    return (
        <section id="achievements" className="py-24 px-6 relative bg-navy-light/50">
            <div className="max-w-7xl mx-auto">
                <div ref={ref} className="reveal">
                    <div className="text-center mb-16">
                        <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4">Our Milestones</p>
                        <h2 className="section-title text-white mx-auto">Key Achievements</h2>
                    </div>

                    {/* Animated counters */}
                    <div className="glass p-8 md:p-12 mb-12 pulse-glow">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat) => (
                                <StatCounter key={stat.label} stat={stat} />
                            ))}
                        </div>
                    </div>

                    {/* Achievement cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {achievements.map((ach, i) => (
                            <div
                                key={i}
                                className="glass glass-hover p-6 flex items-start gap-5 transition-all duration-500 group"
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl"
                                    style={{ background: `${ach.color}15`, border: `1px solid ${ach.color}30` }}
                                >
                                    {ach.emoji}
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-white text-lg group-hover:text-cyan transition-colors">
                                        {ach.title}
                                    </h3>
                                    <p className="text-light-grey text-sm mt-1">{ach.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recognitions */}
                    <div className="glass p-8 max-w-3xl mx-auto">
                        <h3 className="font-heading font-semibold text-lg text-white mb-6 text-center">Recognition & Grants</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {recognitions.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-light-grey">
                                    <svg className="w-4 h-4 text-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
