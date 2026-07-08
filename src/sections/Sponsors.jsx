import { useScrollReveal } from '../hooks/useScrollReveal';

const sponsorCategories = [
    {
        title: 'Institutional Support',
        sponsors: [
            'SRM Institute of Science and Technology',
            'Directorate of Sports SRMIST',
            'Government of India',
        ],
    },
    {
        title: 'Research Bodies',
        sponsors: [
            'NIOT',
            'IEEE — Oceanic Engineering Society',
        ],
    },
    {
        title: 'Industry Sponsors',
        sponsors: [
            'NVIDIA',
            'PCB Power Market',
            'Navicom Technology International Pvt. Ltd.',
            'Dassault Systèmes — SOLIDWORKS',
            'Blue Robotics',
            'MATLAB',
            'Water Linked',
            'Altium',
        ],
    },
];

export default function Sponsors() {
    const ref = useScrollReveal();

    return (
        <section id="sponsors" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div ref={ref} className="reveal">
                    <div className="text-center mb-16">
                        <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4">Our Partners</p>
                        <h2 className="section-title text-white mx-auto">Sponsors & Collaborators</h2>
                    </div>

                    <div className="space-y-12">
                        {sponsorCategories.map((category, ci) => (
                            <div key={ci}>
                                <h3 className="font-heading font-semibold text-lg text-white mb-6 text-center">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {category.sponsors.map((sponsor, si) => (
                                        <div
                                            key={si}
                                            className="glass glass-hover px-8 py-6 flex items-center justify-center min-w-[180px] group cursor-default transition-all duration-300"
                                        >
                                            <span className="text-light-grey text-sm font-medium text-center group-hover:text-cyan transition-colors">
                                                {sponsor}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
