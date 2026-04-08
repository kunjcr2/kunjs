import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'

function Projects() {
    const projects = [
        {
            title: 'Kanting — Video RAG System',
            tags: ['Semantic Search', 'Whisper ASR', 'Claude AI'],
            description: 'Built a video RAG system that indexes YouTube videos using Whisper for transcription, stores embeddings with Sentence-Transformers, and enables semantic search with timestamped clip extraction powered by Claude.',
            links: [
                { label: 'GitHub', url: 'https://github.com/kunjcr2/kanting' }
            ]
        },
        {
            title: 'theHelper — AI Research Assistant',
            tags: ['FastAPI', 'FAISS', 'LangChain', 'Cross-Encoder Reranking', 'OpenAI', 'GitHub Actions'],
            description: 'Production-grade PDF RAG service backed by a persistent local FAISS vector index, LangChain recursive chunking, and cross-encoder reranking — returns structured source references alongside every generated answer.',
            achievements: [
                'Implemented a local-first observability layer tracing every query to daily JSONL files and writing per-request artifacts — full reproducibility with zero external dependencies',
                'Designed an automated eval suite measuring retrieval quality and generation quality, gated into a GitHub Actions CI pipeline that fails on quality regressions'
            ],
            links: [
                { label: 'GitHub', url: 'https://github.com/kunjcr2/theHelper' }
            ]
        },
        {
            title: 'LLM Firewall for Agentic Tool-Calling',
            tags: ['BERT', 'GPT-2', 'LoRA', 'Prompt Injection', 'Adversarial Training', 'W&B'],
            description: 'A low-latency inline defense system that intercepts direct, indirect, and jailbreak prompt injection attacks before they can hijack an AI agent\'s tool access.',
            achievements: [
                'Engineered a generative adversarial training loop powered by a fine-tuned GPT-2 attacker to synthesize novel injection variants, reducing bypass rate from 23.1% to 3.72%',
                'Trained a compact BERT-base classifier using LoRA adapters for ~20ms latency overhead, achieving 96.24% test accuracy and 99.30% recall at a strict 1% FPR boundary'
            ],
            links: [
                { label: 'GitHub', url: 'https://github.com/kunjcr2/llms-from-scratch/tree/main/models/llm-firewall' }
            ]
        }
    ]

    return (
        <section id="projects" className="pt-12 pb-24 bg-parchment">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="section-overline text-stone-gray">Portfolio</p>
                    <h2 className="serif-heading text-[3.25rem] text-near-black mb-5">Open Source</h2>
                    <div className="w-12 h-px bg-border-warm" />
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <div
                                className="card-light p-6 hover:border-border-warm transition-all duration-300 group"
                                style={{ transition: 'border-color 0.2s, box-shadow 0.2s' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0px 0px 0px 0px #e8e6dc, 0px 0px 0px 1px #d1cfc5, rgba(0,0,0,0.05) 0px 4px 24px'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = 'rgba(0,0,0,0.05) 0px 4px 24px'
                                }}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="font-serif text-[1.3rem] font-medium text-near-black group-hover:text-terracotta transition-colors truncate">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="px-2 py-0.5 bg-warm-sand border border-border-warm text-charcoal-warm text-xs font-medium rounded-sm-round">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-olive-gray text-sm leading-relaxed mb-3">
                                            {project.description}
                                        </p>
                                        {project.achievements && project.achievements.length > 0 && (
                                            <ul className="space-y-1.5 mt-3">
                                                {project.achievements.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-charcoal-warm">
                                                        <span className="text-terracotta mt-1 flex-shrink-0">—</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-2 flex-shrink-0">
                                        {project.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-sand whitespace-nowrap flex-shrink-0 group/link justify-center"
                                            >
                                                {link.label}
                                                <ArrowUpRight size={13} className="opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12">
                    <a
                        href="https://github.com/kunjcr2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sand inline-flex"
                    >
                        <Github size={15} />
                        View all on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
