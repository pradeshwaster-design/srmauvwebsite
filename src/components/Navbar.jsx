import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'About', href: '#overview' },
    { label: 'Domains', href: '#domains' },
    { label: 'Vehicles', href: '#vehicles' },
    { label: 'NEMO', href: '#current-project' },
    { label: 'Competitions', href: '#competitions' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = () => setMenuOpen(false);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled
                    ? 'bg-[rgba(10,25,47,0.92)] backdrop-blur-lg shadow-lg shadow-black/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="flex items-center gap-3 text-white font-heading font-bold text-xl tracking-wide no-underline">
                    <div className="w-9 h-9 rounded-full bg-cyan flex items-center justify-center text-navy font-extrabold text-sm">
                        AUV
                    </div>
                    <span>
                        TEAM SRM <span className="text-cyan">AUV</span>
                    </span>
                </a>

                {/* Desktop nav */}
                <ul className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="px-3.5 py-2 text-sm font-medium text-light-grey hover:text-cyan transition-colors duration-200 rounded-lg hover:bg-white/5 no-underline"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="ml-3">
                        <a href="#why-sponsor" className="glow-btn text-sm !py-2 !px-5 no-underline">
                            Sponsor Us
                        </a>
                    </li>
                </ul>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-cyan transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-cyan transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-cyan transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    } bg-[rgba(10,25,47,0.97)] backdrop-blur-xl`}
            >
                <ul className="flex flex-col px-6 pb-6 gap-1">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={handleClick}
                                className="block px-4 py-3 text-light-grey hover:text-cyan hover:bg-white/5 rounded-lg transition-colors no-underline"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="mt-2">
                        <a href="#why-sponsor" onClick={handleClick} className="glow-btn text-center w-full justify-center no-underline">
                            Sponsor Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
