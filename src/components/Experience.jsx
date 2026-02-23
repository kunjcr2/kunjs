import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function Experience() {
    const experiences = [
        {
            title: 'ML Engineering Intern',
            company: 'Routes Technologies',
            location: 'Remote, TX',
            period: 'Oct 2025 — Present',
            description: 'Collaborating with the team to train and manage AI models using Python, PyTorch, and Transformers — with model tracking via Weights & Biases and seamless deployment through Azure ML Studio endpoints.',
            achievements: [
                'Engineered a fully functional Web Crawler with Scrapy and BeautifulSoup4, enabling ethical extraction of company-relevant data from open web sources',
                'Developed a Flask-based Instagram Graph API integration leveraging Python and PyDantic, featuring OAuth Authentication and intelligent hashtag/recipe detection'
            ],
            technologies: ['Python', 'PyTorch', 'Transformers', 'Azure ML', 'wandb', 'Flask', 'Scrapy', 'BeautifulSoup4'],
            link: 'https://www.linkedin.com/company/routestechnologies/posts/?feedView=all',
            linkLabel: 'LinkedIn',
        },
        {
            title: 'AI Engineer Intern',
            company: 'Dreamable Inc.',
            location: 'San Francisco, CA',
            period: 'May 2025 — Aug 2025',
            description: 'Contributed to fine-tuning Qwen-2.5-7B using Hugging Face, PyTorch, and LoRA on Lambda Cloud for cost and memory efficient training — deployed on GCP Cloud Run.',
            achievements: [
                'Spearheaded dataset curation pipeline using pandas, NumPy, and datasets library for Q&A task optimization',
                'Tuned model hyperparameters to achieve remarkably low validation loss, with full experiment tracking via Weights & Biases',
                'Built an AI-powered Outreach Agent using Langchain, Exa.ai, and OpenAI API to automate and scale messaging workflows'
            ],
            technologies: ['Hugging Face', 'PyTorch', 'LoRA', 'GCP Cloud Run', 'Lambda', 'Langchain', 'OpenAI', 'wandb'],
            link: 'https://www.linkedin.com/company/dreamable-inc/posts/?feedView=all',
            linkLabel: 'LinkedIn',
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

                                {exp.technologies && exp.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className="px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-500 text-xs font-medium rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
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
