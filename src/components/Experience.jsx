import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function Experience() {
    const experiences = [
        {
            title: 'AI Engineering Intern',
            company: 'Routes Technologies',
            location: 'Remote (Texas)',
            period: 'Oct 2025 — Jan 2026',
            description: '',
            achievements: [],
            link: 'https://www.linkedin.com/company/routestechnologies/posts/?feedView=all',
            linkLabel: 'LinkedIn',
        },
        {
            title: 'AI Agent Intern',
            company: 'Dreamable Inc.',
            location: '',
            period: 'June 2024 — August 2025',
            description: 'Collaborating on the development of AI agent solutions that enable developers to build intelligent LLM workflows 2–3x faster using low-code and no-code tools, focusing on agent orchestration, prompt chaining, and modular tool integration.',
            achievements: [
                'n8n outreach agent adopted by 14 interns',
                'lead‑quality ↑2.3×'
            ],
            link: '',
            linkLabel: '',
        },
        {
            title: 'Vice President of AI Club',
            company: 'SF State',
            location: '',
            period: 'June 2024 — August 2025',
            description: 'Leading initiatives to bring AI education and resources to students on campus, organizing workshops, talks, and hands-on projects.',
            achievements: [
                'Bringing AI to students on campus of SFSU'
            ],
            link: 'https://ai-at-sfsu.vercel.app/home',
            linkLabel: 'Website',
        }
    ]

    return (
        <section id="experience" className="py-16 bg-[#0a0a0b]">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium mb-4">Career</p>
                    <h2 className="text-3xl font-light text-neutral-100 mb-4">Experience</h2>
                    <div className="w-12 h-px bg-neutral-700"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-[#111113] border border-neutral-800/50 rounded-lg p-6 hover:border-neutral-700 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-neutral-100">{exp.title}</h3>
                                        <p className="text-neutral-400 text-sm">{exp.company}{exp.location && ` · ${exp.location}`}</p>
                                    </div>
                                    <span className="text-xs text-neutral-500 font-medium tracking-wide">
                                        {exp.period}
                                    </span>
                                </div>

                                {exp.description && (
                                    <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                                        {exp.description}
                                    </p>
                                )}

                                {exp.achievements.length > 0 && (
                                    <ul className="space-y-1 mb-4">
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                                                <span className="text-neutral-600 mt-1">—</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {exp.link && (
                                    <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
                                    >
                                        {exp.linkLabel || 'Learn more'}
                                        <ArrowUpRight size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
