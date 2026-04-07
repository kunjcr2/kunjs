import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, BookMarked } from 'lucide-react'

function Certificates() {
    const [isExpanded, setIsExpanded] = useState(false)

    const certificates = [
        // AI & LLM (high-signal)
        'AI Memory: Exploring and Building LLM Memory Systems — LinkedIn (Jul 2025)',
        'Automate Development Tasks with OpenAI\'s Codex — LinkedIn (Jul 2025)',
        'Fine-Tuning for LLMs: From Beginner to Advanced — LinkedIn (Jul 2025)',
        'Model Context Protocol (MCP): Hands-On with Agentic AI — LinkedIn (Jul 2025)',
        'Introduction to Generative AI — Google Cloud Education (Jan 2024)',
        // Programming / SWE Foundations
        'Crash Course on Python — Google Career Certificates (Jan 2024)',
        'Introduction to Programming Using Python — University of Michigan (Apr 2023)',
        'Python — University of Michigan',
        // Web / General
        'Introduction to Web Development — UC Davis (Jan 2024)',
        // Math / Theory
        'Introduction to Complex Analysis — Wesleyan University (Jul 2022)',
        'Understanding Einstein: The Special Theory of Relativity — Stanford University (Mar 2022)',
        'Calculus through Data & Modelling: Integration Applications — Johns Hopkins University',
        'Calculus through Data & Modelling: Series and Integration — Johns Hopkins University',
        'Calculus through Data & Modelling: Techniques of Integration — Johns Hopkins University',
        'Calculus through Data & Modelling: Vector Calculus — Johns Hopkins University',
    ]

    return (
        <section id="certificates" className="pt-12 pb-24 bg-parchment">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="section-overline text-stone-gray">Credentials</p>
                    <h2 className="serif-heading text-[3.25rem] text-near-black mb-5">Certificates</h2>
                    <div className="w-12 h-px bg-border-warm" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="btn-sand text-xs"
                        >
                            {isExpanded ? 'Show Less' : `Show All (${certificates.length})`}
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                        <AnimatePresence>
                            {(isExpanded ? certificates : certificates.slice(0, 6)).map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <div className="card-light p-4 hover:border-border-warm transition-all duration-200 flex items-start gap-3">
                                        <BookMarked className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
                                        <p className="text-olive-gray text-sm leading-relaxed">{cert}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificates
