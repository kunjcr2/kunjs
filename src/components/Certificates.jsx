import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check } from 'lucide-react'

function Certificates() {
    const [isExpanded, setIsExpanded] = useState(false)

    const certificates = [
        'Deep Learning Specialization - Coursera (DeepLearning.AI)',
        'Machine Learning Engineering for Production (MLOps) Specialization - Coursera (DeepLearning.AI)',
        'Natural Language Processing Specialization - Coursera (DeepLearning.AI)',
        'TensorFlow: Data and Deployment Specialization - Coursera (DeepLearning.AI)',
        'Structuring Machine Learning Projects - Coursera (DeepLearning.AI)',
        'Convolutional Neural Networks - Coursera (DeepLearning.AI)',
        'Sequence Models - Coursera (DeepLearning.AI)',
        'Improving Deep Neural Networks - Coursera (DeepLearning.AI)',
        'Neural Networks and Deep Learning - Coursera (DeepLearning.AI)',
        'AWS Certified Cloud Practitioner - Amazon Web Services',
        'Google IT Automation with Python - Coursera (Google)',
        'Google Project Management Specialization - Coursera (Google)',
        'IBM AI Engineering Professional Certificate - Coursera (IBM)',
        'IBM Machine Learning Professional Certificate - Coursera (IBM)',
        'IBM Data Science Professional Certificate - Coursera (IBM)',
        'IBM Data Analyst Professional Certificate - Coursera (IBM)',
    ]

    return (
        <section id="certificates" className="py-16 bg-[#0a0a0b]">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium mb-4">Credentials</p>
                    <h2 className="text-3xl font-light text-neutral-100 mb-4">Certificates</h2>
                    <div className="w-12 h-px bg-neutral-700"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 text-sm font-medium transition-colors"
                        >
                            {isExpanded ? 'Show Less' : `Show All (${certificates.length})`}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
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
                                    className="bg-[#111113] border border-neutral-800/50 rounded-lg p-4 hover:border-neutral-700 transition-colors flex items-start gap-3"
                                >
                                    <Check className="w-4 h-4 text-neutral-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-neutral-400 text-sm leading-relaxed">{cert}</p>
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
