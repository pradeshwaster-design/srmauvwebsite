import { useScrollReveal } from '../hooks/useScrollReveal';

const vehicles = [
    {
        id: '01',
        name: 'Sedna',
        years: '2014–2016',
        description: 'The foundation vehicle that laid the groundwork for Team SRM AUV. Focused on underwater navigation, multi-axis control, and sensor integration — establishing core competencies in autonomous underwater systems.',
        color: '#00E5FF',
    },
    {
        id: '02',
        name: 'Alpheus',
        years: '2017',
        description: 'Featured improved mechanical design with better maneuverability and structured task execution capabilities. Represented a significant step forward in the team\'s engineering maturity.',
        color: '#64FFDA',
    },
    {
        id: '03',
        name: 'Zarna',
        years: '2018–2019',
        description: 'An advanced platform with enhanced sensing capabilities and mission readiness. Incorporated improved perception systems and robust mechanical design for competitive performance.',
        color: '#00B4D8',
    },
    {
        id: '04',
        name: 'Vatkhd',
        years: '2023–2024',
        description: 'A recent-generation platform focused on navigation refinement and vision-based perception. Integrates modern sensor suites and advanced control algorithms for autonomous operation.',
        color: '#48CAE4',
    },
];

export default function PastVehicles() {
    const ref = useScrollReveal();

    return (
        <section id="vehicles" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div ref={ref} className="reveal">
                    <div className="text-center mb-16">
                        <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4">Our Legacy</p>
                        <h2 className="section-title text-white mx-auto">Our Past Vehicles</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {vehicles.map((vehicle, i) => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function VehicleCard({ vehicle, index }) {
    const ref = useScrollReveal(0.1);

    return (
        <div
            ref={ref}
            className="reveal glass glass-hover overflow-hidden group transition-all duration-500"
            style={{ transitionDelay: `${index * 120}ms` }}
        >
            {/* Image area */}
            <div className="relative h-48 bg-navy-lighter overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-glass" />
                {/* Vehicle number watermark */}
                <div
                    className="absolute top-4 right-6 font-heading font-extrabold text-7xl opacity-10"
                    style={{ color: vehicle.color }}
                >
                    {vehicle.id}
                </div>
                {/* Placeholder icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white/10 group-hover:text-white/20 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                </div>
                {/* Year badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: `${vehicle.color}20`, color: vehicle.color, border: `1px solid ${vehicle.color}40` }}>
                    {vehicle.years}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-cyan transition-colors">
                    {vehicle.name}
                </h3>
                <p className="text-light-grey text-sm leading-relaxed mb-5">
                    {vehicle.description}
                </p>
                <button className="glow-btn !text-xs !py-2 !px-4">
                    View Details →
                </button>
            </div>
        </div>
    );
}
