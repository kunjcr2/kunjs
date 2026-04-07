import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function Experience() {
    const experiences = [
        {
            title: 'Deep Learning Intern — LLM Research & Model Safety',
            company: 'A10 Networks',
            location: 'San Jose, CA',
            period: 'May 2026 — Aug 2026',
            description: 'Incoming intern focusing on Large Language Model (LLM) research, with an emphasis on safety, interpretability, and alignment.',
            achievements: [],
            technologies: ['PyTorch', 'Transformers', 'LLMs', 'Model Safety', 'Alignment'],
            link: 'https://www.a10networks.com/',
            linkLabel: 'Company Website',
        },
        {
            title: 'AI Engineering Intern',
            company: 'Routes Technologies',
            location: 'Remote, TX',
            period: 'Oct 2025 — Present',
            description: 'Collaborating with the team to train and manage AI models using Python, PyTorch, and Transformers — with model tracking via Weights & Biases and seamless deployment through Azure ML Studio endpoints.',
            achievements: [
                'Engineered a fully functional Web Crawler with Scrapy and BeautifulSoup4, enabling ethical extraction of company-relevant data from open web sources',
                'Developed a Flask-based Instagram Graph API integration leveraging Python and PyDantic, featuring OAuth Authentication and intelligent hashtag/recipe detection',
                'Deployed AI model endpoints via Azure ML Studio managed endpoints, configuring load balancing and auto-scaling for production-grade reliability'
            ],
            technologies: ['Python', 'PyTorch', 'Transformers', 'Azure ML', 'wandb', 'Flask', 'Scrapy', 'BeautifulSoup4'],
            link: 'https://routestechnologies.com/landing',
            linkLabel: 'Website',
        },
        {
            title: 'AI Engineering Intern',
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
        <section id="experience" className="py-20 bg-parchment">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="section-overline text-stone-gray">Career</p>
                    <h2 className="serif-heading text-[3.25rem] text-near-black mb-5">Experience</h2>
                    <div className="w-12 h-px bg-border-warm" />
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-5">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div
                                className="card-light p-6 hover:border-border-warm transition-all duration-300 group"
                                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0px 0px 0px 0px #e8e6dc, 0px 0px 0px 1px #d1cfc5, rgba(0,0,0,0.05) 0px 4px 24px' }}
                                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'rgba(0,0,0,0.05) 0px 4px 24px' }}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="font-serif text-[1.3rem] font-medium text-near-black group-hover:text-terracotta transition-colors">
                                            {exp.title}
                                        </h3>
                                        <p className="text-olive-gray text-sm mt-0.5">
                                            {exp.company}{exp.location && ` · ${exp.location}`}
                                        </p>
                                    </div>
                                    <span className="text-xs text-stone-gray font-medium tracking-wide whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>

                                {exp.description && (
                                    <p className="text-olive-gray text-sm leading-relaxed mb-4">
                                        {exp.description}
                                    </p>
                                )}

                                {exp.achievements.length > 0 && (
                                    <ul className="space-y-2 mb-4">
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal-warm">
                                                <span className="text-terracotta mt-1 flex-shrink-0">—</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {exp.technologies && exp.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className="px-2 py-0.5 bg-warm-sand border border-border-warm text-charcoal-warm text-xs font-medium rounded-sm-round">
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
                                        className="inline-flex items-center gap-1 text-xs text-olive-gray hover:text-terracotta transition-colors font-medium"
                                    >
                                        {exp.linkLabel || 'Learn more'}
                                        <ArrowUpRight size={12} />
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
