import { useScrollReveal } from '../hooks/useScrollReveal';

const domains = [
    {
        title: 'Mechanical Team',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.09-3.03M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93s.844.076 1.165-.237l.636-.636a1.076 1.076 0 011.522 0l.773.773a1.076 1.076 0 010 1.522l-.636.636c-.313.321-.396.77-.237 1.165s.506.71.93.78l.894.149c.542.09.94.56.94 1.11v1.093c0 .55-.398 1.02-.94 1.11l-.894.149c-.424.07-.764.384-.93.78s-.076.844.237 1.165l.636.636a1.076 1.076 0 010 1.522l-.773.773a1.076 1.076 0 01-1.522 0l-.636-.636c-.321-.313-.77-.396-1.165-.237s-.71.506-.78.93l-.149.894c-.09.542-.56.94-1.11.94h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.894c-.07-.424-.384-.764-.78-.93s-.844-.076-1.165.237l-.636.636a1.076 1.076 0 01-1.522 0l-.773-.773a1.076 1.076 0 010-1.522l.636-.636c.313-.321.396-.77.237-1.165s-.506-.71-.93-.78l-.894-.149c-.542-.09-.94-.56-.94-1.11v-1.093c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.764-.384.93-.78s.076-.844-.237-1.165l-.636-.636a1.076 1.076 0 010-1.522l.773-.773a1.076 1.076 0 011.522 0l.636.636c.321.313.77.396 1.165.237s.71-.506.78-.93l.149-.894z" />
            </svg>
        ),
        description: 'Responsible for vehicle structure, hydrodynamic design, buoyancy control, and modular integration ensuring stability and durability in underwater conditions.',
        color: 'from-blue-500/20 to-cyan/10',
    },
    {
        title: 'Electrical Team',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        description: 'Manages power systems, onboard electronics, sensor interfacing, and safety mechanisms, enabling reliable operation and robust subsystem communication.',
        color: 'from-yellow-500/20 to-orange-500/10',
    },
    {
        title: 'Software Team',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
        description: 'Develops control logic, perception systems, and navigation frameworks that enable precise maneuvering and intelligent decision-making underwater.',
        color: 'from-green-500/20 to-emerald-500/10',
    },
    {
        title: 'Corporate Team',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
            </svg>
        ),
        description: 'Oversees outreach, partnerships, documentation, and logistics, supporting smooth operations and long-term continuity of the team\'s projects.',
        color: 'from-purple-500/20 to-pink-500/10',
    },
];

export default function DomainsOfExpertise() {
    const ref = useScrollReveal();

    return (
        <section id="domains" className="py-24 px-6 relative bg-navy-light/50">
            <div className="max-w-7xl mx-auto">
                <div ref={ref} className="reveal text-center mb-16">
                    <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4">What We Do</p>
                    <h2 className="section-title text-white mx-auto">Domains of Expertise</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {domains.map((domain, i) => (
                        <DomainCard key={domain.title} domain={domain} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function DomainCard({ domain, index }) {
    const ref = useScrollReveal(0.1);

    return (
        <div
            ref={ref}
            className="reveal glass glass-hover p-8 text-center group cursor-default transition-all duration-500"
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Icon */}
            <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${domain.color} flex items-center justify-center text-cyan group-hover:scale-110 transition-transform duration-300`}>
                {domain.icon}
            </div>

            <h3 className="font-heading font-semibold text-lg text-white mb-3 group-hover:text-cyan transition-colors">
                {domain.title}
            </h3>

            <p className="text-light-grey text-sm leading-relaxed">
                {domain.description}
            </p>

            {/* Bottom glow line */}
            <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-cyan/30 to-transparent group-hover:via-cyan/60 transition-all duration-500" />
        </div>
    );
}
