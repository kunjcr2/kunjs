import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MapPin, Calendar, Code2 } from 'lucide-react'

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
        <section id="hackathons" className="pt-12 pb-24 bg-near-black">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="section-overline text-warm-silver/50">Events</p>
                    <h2 className="serif-heading text-[3.25rem] text-ivory mb-5">Hackathons</h2>
                    <div className="w-12 h-px bg-dark-surface" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="btn-dark text-xs"
                        >
                            {isExpanded ? 'Show Less' : `Show All (${hackathons.length})`}
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <AnimatePresence>
                            {(isExpanded ? hackathons : hackathons.slice(0, 2)).map((hackathon, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    layout
                                >
                                    <div className="card-dark p-6 hover:border-warm-silver/20 transition-colors duration-300 h-full">
                                        <h3 className="font-serif text-[1.25rem] font-medium text-ivory mb-4">
                                            {hackathon.name}
                                        </h3>
                                        <div className="space-y-2.5 text-sm">
                                            <div className="flex items-center gap-2.5 text-warm-silver/60">
                                                <MapPin size={13} className="text-stone-gray flex-shrink-0" />
                                                {hackathon.where}
                                            </div>
                                            <div className="flex items-center gap-2.5 text-warm-silver/60">
                                                <Calendar size={13} className="text-stone-gray flex-shrink-0" />
                                                {hackathon.when}
                                            </div>
                                            <div className="flex items-center gap-2.5 pt-2 border-t border-dark-warm/30">
                                                <Code2 size={13} className="text-terracotta flex-shrink-0" />
                                                <span className="text-coral font-medium">{hackathon.project}</span>
                                            </div>
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
