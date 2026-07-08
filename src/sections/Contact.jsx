import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
    const ref = useScrollReveal();
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 px-6 relative bg-navy-light/50">
            <div className="max-w-7xl mx-auto">
                <div ref={ref} className="reveal">
                    <div className="text-center mb-16">
                        <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4">Get in Touch</p>
                        <h2 className="section-title text-white mx-auto">Contact Us</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="glass p-8 md:p-10">
                            <h3 className="font-heading font-semibold text-xl text-white mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm text-light-grey mb-2">Name</label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-colors placeholder:text-light-grey/40"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block text-sm text-light-grey mb-2">Email</label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-colors placeholder:text-light-grey/40"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-sm text-light-grey mb-2">Message</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-colors placeholder:text-light-grey/40 resize-none"
                                        placeholder="How can we collaborate?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="glow-btn-filled glow-btn w-full justify-center !rounded-xl"
                                >
                                    {submitted ? '✓ Message Sent!' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info + Map */}
                        <div className="space-y-6">
                            {/* Info cards */}
                            <div className="glass p-8">
                                <h3 className="font-heading font-semibold text-xl text-white mb-6">Contact Details</h3>
                                <div className="space-y-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm">Email</p>
                                            <a href="mailto:srmauvteam@gmail.com" className="text-cyan text-sm hover:underline no-underline">
                                                srmauvteam@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-cyan" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm">Instagram</p>
                                            <a href="https://instagram.com/srm.auv" target="_blank" rel="noopener noreferrer" className="text-cyan text-sm hover:underline no-underline">
                                                @srm.auv
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm">Location</p>
                                            <p className="text-light-grey text-sm">SRM Institute of Science and Technology, Chennai, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Google Map Embed */}
                            <div className="glass p-3 rounded-2xl overflow-hidden">
                                <iframe
                                    title="SRM Institute of Science and Technology Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.073925609685!2d80.04133831534662!3d12.823148890945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3ad8bb8!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1693984000000!5m2!1sen!2sin"
                                    className="w-full h-[250px] rounded-xl border-0"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
