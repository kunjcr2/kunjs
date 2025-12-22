import { motion } from 'framer-motion'
import { Mail, Clock, ArrowUpRight } from 'lucide-react'

function AboutContact() {
    return (
        <section id="contact" className="py-16 bg-[#0a0a0b]">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="mb-12">
                        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium mb-4">Connect</p>
                        <h2 className="text-3xl font-light text-neutral-100 mb-4">Get in Touch</h2>
                        <div className="w-12 h-px bg-neutral-700"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <p className="text-neutral-400 leading-relaxed mb-8">
                                Have an interesting project? Want to discuss LLM architectures?
                                My inbox is always open.
                            </p>

                            <div className="space-y-6">
                                <a
                                    href="mailto:kunjcr2@gmail.com"
                                    className="flex items-center gap-4 text-neutral-400 hover:text-neutral-200 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-700 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-neutral-500 mb-1">Email</div>
                                        <div className="text-sm text-neutral-300">kunjcr2@gmail.com</div>
                                    </div>
                                    <ArrowUpRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>

                                <div className="flex items-center gap-4 text-neutral-400">
                                    <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                                        <Clock size={18} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-neutral-500 mb-1">Response Time</div>
                                        <div className="text-sm text-neutral-300">Usually within 24 hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-[#111113] border border-neutral-800/50 rounded-lg p-6">
                            <h3 className="text-sm font-medium text-neutral-300 mb-4">Send a Message</h3>

                            <div className="w-full relative rounded-lg overflow-hidden border border-neutral-800/50 bg-neutral-950">
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSdLanvgNt7DR23VJYfHKKmYYnuA5r8l1YqwXqsspJUcCMkggg/viewform?embedded=true"
                                    width="100%"
                                    height="480"
                                    frameBorder="0"
                                    marginHeight="0"
                                    marginWidth="0"
                                    className="w-full filter invert-[.92] hue-rotate-180 contrast-90 opacity-80 hover:opacity-100 transition-opacity"
                                    title="Contact Form"
                                    style={{ backgroundColor: 'transparent' }}
                                >
                                    Loading…
                                </iframe>
                            </div>
                            <p className="text-xs text-neutral-600 mt-3">
                                Powered by Google Forms
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutContact
