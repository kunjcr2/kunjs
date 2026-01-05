import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

function Hackathons() {
    const [isExpanded, setIsExpanded] = useState(false)

    const hackathons = [
        {
            name: 'CalHacks 12.0',
            where: 'Palace of Fine Arts, SF',
            when: 'October 2025',
            project: 'Kanting',
        },
        {
            name: 'MCP AWS Agentic Challenge',
            where: 'AWS Builder Loft, SF',
            when: 'July 2025',
            project: 'Nango Automation',
        },
        {
            name: 'SacHacks',
            where: 'Virtual',
            when: 'March 2025',
            project: 'Web Detective',
        },
        {
            name: 'HackMerced',
            where: 'UC Merced',
            when: 'March 2025',
            project: 'Web Detective',
        },
        {
            name: 'Cal Hacks 11.0',
            where: 'San Francisco, CA',
            when: 'October 2024',
            project: 'Workout Web App',
        }
    ]

    return (
        <section id="hackathons" className="py-16 bg-[#0a0a0b]">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium mb-4">Events</p>
                    <h2 className="text-3xl font-light text-neutral-100 mb-4">Hackathons</h2>
                    <div className="w-12 h-px bg-neutral-700"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 text-sm font-medium transition-colors"
                        >
                            {isExpanded ? 'Show Less' : `Show All (${hackathons.length})`}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <AnimatePresence>
                            {(isExpanded ? hackathons : hackathons.slice(0, 2)).map((hackathon, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    layout
                                    className="bg-[#111113] border border-neutral-800/50 rounded-lg p-6 hover:border-neutral-700 transition-colors"
                                >
                                    <h3 className="text-lg font-medium text-neutral-100 mb-3">
                                        {hackathon.name}
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-neutral-500">Location</span>
                                            <span className="text-neutral-400">{hackathon.where}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-neutral-500">Date</span>
                                            <span className="text-neutral-400">{hackathon.when}</span>
                                        </div>
                                        <div className="flex items-center justify-between pt-2 border-t border-neutral-800/50">
                                            <span className="text-neutral-500">Project</span>
                                            <span className="text-neutral-300 font-medium">{hackathon.project}</span>
                                        </div>
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

export default Hackathons
