import { useScrollReveal } from '../hooks/useScrollReveal';

const leads = [
    {
        name: 'Preetham',
        role: 'Team Lead',
        year: '4th Year',
        image: '/team/preetham.jpg',
    },
    {
        name: 'MG Aditya',
        role: 'Team Manager',
        year: '4th Year',
        image: '/team/manager.jpg',
    },
    {
        name: 'Dharani',
        role: 'Mechanical Lead',
        year: '4th Year',
        image: '/team/mechanical.jpg',
    },
    {
        name: 'Shylendran',
        role: 'Electronic Lead',
        year: '4th Year',
        image: '/team/electronic.jpg',
    },
    {
        name: 'Arun Kumar',
        role: 'Software Lead',
        year: '4th Year',
        image: '/team/software.jpg',
    },
];

export default function TeamLeads() {
    const ref = useScrollReveal();

    return (
        <section id="team-leads" className="py-24 px-6 relative bg-navy-light/10">
            <div className="max-w-7xl mx-auto">
                <div ref={ref} className="reveal text-center mb-16">
                    <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4">Leadership</p>
                    <h2 className="section-title text-white mx-auto">Team Leads</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {leads.map((lead, i) => (
                        <LeadCard key={lead.name} lead={lead} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function LeadCard({ lead, index }) {
    const ref = useScrollReveal(0.1);

    return (
        <div
            ref={ref}
            className="reveal glass glass-hover p-4 text-center group w-72 transition-all duration-500"
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="relative w-full aspect-[3/4] mb-5 rounded-lg overflow-hidden bg-navy-lighter/50">
                <img
                    src={lead.image}
                    alt={lead.role}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            <h3 className="font-heading font-bold text-xl text-white mb-1 group-hover:text-cyan transition-colors">
                {lead.name}
            </h3>
            <p className="text-cyan text-sm font-medium mb-1">{lead.role}</p>
            <p className="text-light-grey text-xs">{lead.year}</p>
        </div>
    );
}
