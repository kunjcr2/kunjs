import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Clock, Github, Linkedin, ArrowRight, Send } from 'lucide-react'

function AboutContact() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    // Placeholder handler — backend wired up later
    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: wire up backend endpoint
        setSubmitted(true)
    }

    return (
        <section id="contact" className="pt-12 pb-24 bg-parchment">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="mb-12">
                        <p className="section-overline text-stone-gray">Connect</p>
                        <h2 className="serif-heading text-[3.25rem] font-light text-near-black mb-5">Get in Touch</h2>
                        <div className="w-12 h-px bg-border-warm" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Left — Contact Info */}
                        <div>
                            <p className="text-olive-gray leading-relaxed mb-8 text-body-lg">
                                Have an interesting project? Want to discuss LLM architectures?
                                My inbox is always open.
                            </p>

                            <div className="space-y-5">
                                <a
                                    href="mailto:kunjcr2@gmail.com"
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-11 h-11 rounded-comfort"
                                        style={{ backgroundColor: '#faf9f5', border: '1px solid #e8e6dc' }}
                                    >
                                        <div className="w-full h-full flex items-center justify-center group-hover:bg-terracotta/10 rounded-comfort transition-colors">
                                            <Mail size={17} className="text-terracotta" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-stone-gray mb-0.5 uppercase tracking-wider">Email</div>
                                        <div className="text-sm text-near-black group-hover:text-terracotta transition-colors">kunjcr2@gmail.com</div>
                                    </div>
                                    <ArrowRight size={14} className="ml-auto text-stone-gray opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </a>

                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-comfort flex items-center justify-center"
                                        style={{ backgroundColor: '#faf9f5', border: '1px solid #e8e6dc' }}
                                    >
                                        <Clock size={17} className="text-stone-gray" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-stone-gray mb-0.5 uppercase tracking-wider">Response Time</div>
                                        <div className="text-sm text-near-black">Usually within 24 hours</div>
                                    </div>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="mt-10 pt-8 border-t border-border-cream">
                                <p className="text-xs text-stone-gray uppercase tracking-wider mb-4">Find me on</p>
                                <div className="flex items-center gap-4">
                                    <a href="https://github.com/kunjcr2" target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-stone-gray hover:text-terracotta transition-colors text-sm">
                                        <Github size={16} />
                                        GitHub
                                    </a>
                                    <span className="text-stone-gray">·</span>
                                    <a href="https://www.linkedin.com/in/kunjcr2/" target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-stone-gray hover:text-terracotta transition-colors text-sm">
                                        <Linkedin size={16} />
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right — Custom Contact Form */}
                        <div
                            className="rounded-generous p-6"
                            style={{ backgroundColor: '#faf9f5', border: '1px solid #e8e6dc' }}
                        >
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-12 h-12 rounded-full bg-terracotta/15 flex items-center justify-center mb-4">
                                        <Send size={20} className="text-terracotta" />
                                    </div>
                                    <h3 className="font-serif text-[1.3rem] font-light text-near-black mb-2">Message Sent</h3>
                                    <p className="text-olive-gray text-sm">I'll get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', subject: '', message: '' }) }}
                                        className="mt-6 text-xs text-stone-gray hover:text-terracotta transition-colors"
                                    >
                                        Send another
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <h3 className="font-serif text-[1.1rem] font-light text-near-black mb-5">Send a Message</h3>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label htmlFor="contact-name" className="block text-xs text-stone-gray mb-1.5 uppercase tracking-wider">Name</label>
                                                <input
                                                    id="contact-name"
                                                    type="text"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Your name"
                                                    className="w-full px-3 py-2.5 text-sm text-near-black placeholder-stone-gray/70 rounded-comfort outline-none transition-all"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        border: '1px solid #e8e6dc',
                                                        caretColor: '#c96442',
                                                    }}
                                                    onFocus={(e) => { e.target.style.borderColor = '#c96442'; e.target.style.boxShadow = '0 0 0 2px rgba(201,100,66,0.12)' }}
                                                    onBlur={(e) => { e.target.style.borderColor = '#e8e6dc'; e.target.style.boxShadow = 'none' }}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="contact-email" className="block text-xs text-stone-gray mb-1.5 uppercase tracking-wider">Email</label>
                                                <input
                                                    id="contact-email"
                                                    type="email"
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="you@email.com"
                                                    className="w-full px-3 py-2.5 text-sm text-near-black placeholder-stone-gray/70 rounded-comfort outline-none transition-all"
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        border: '1px solid #e8e6dc',
                                                        caretColor: '#c96442',
                                                    }}
                                                    onFocus={(e) => { e.target.style.borderColor = '#c96442'; e.target.style.boxShadow = '0 0 0 2px rgba(201,100,66,0.12)' }}
                                                    onBlur={(e) => { e.target.style.borderColor = '#e8e6dc'; e.target.style.boxShadow = 'none' }}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="contact-subject" className="block text-xs text-stone-gray mb-1.5 uppercase tracking-wider">Subject</label>
                                            <input
                                                id="contact-subject"
                                                type="text"
                                                name="subject"
                                                value={formState.subject}
                                                onChange={handleChange}
                                                required
                                                placeholder="What's this about?"
                                                className="w-full px-3 py-2.5 text-sm text-near-black placeholder-stone-gray/70 rounded-comfort outline-none transition-all"
                                                style={{
                                                    backgroundColor: '#ffffff',
                                                    border: '1px solid #e8e6dc',
                                                    caretColor: '#c96442',
                                                }}
                                                onFocus={(e) => { e.target.style.borderColor = '#c96442'; e.target.style.boxShadow = '0 0 0 2px rgba(201,100,66,0.12)' }}
                                                onBlur={(e) => { e.target.style.borderColor = '#e8e6dc'; e.target.style.boxShadow = 'none' }}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="contact-message" className="block text-xs text-stone-gray mb-1.5 uppercase tracking-wider">Message</label>
                                            <textarea
                                                id="contact-message"
                                                name="message"
                                                value={formState.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                placeholder="Tell me about your project..."
                                                className="w-full px-3 py-2.5 text-sm text-near-black placeholder-stone-gray/70 rounded-comfort outline-none transition-all resize-none"
                                                style={{
                                                    backgroundColor: '#ffffff',
                                                    border: '1px solid #e8e6dc',
                                                    caretColor: '#c96442',
                                                }}
                                                onFocus={(e) => { e.target.style.borderColor = '#c96442'; e.target.style.boxShadow = '0 0 0 2px rgba(201,100,66,0.12)' }}
                                                onBlur={(e) => { e.target.style.borderColor = '#e8e6dc'; e.target.style.boxShadow = 'none' }}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            id="contact-submit-btn"
                                            className="btn-terracotta w-full justify-center"
                                        >
                                            <Send size={14} />
                                            Send Message
                                        </button>
                                    </form>

                                    <p className="text-xs text-stone-gray mt-3">
                                        Backend coming soon — form UI ready for integration.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutContact
