import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

function LLMProjects() {
    const projects = [
        {
            title: 'How LLMs Are Made',
            description: 'Comprehensive documentation and implementation of LLM architectures. Building GPT, Deepseek, and Kimi from scratch to understand MoE, MoD, and attention mechanisms.',
            tags: ['PyTorch', 'Transformers', 'MoE', 'Architecture'],
            link: 'https://github.com/kunjcr2/how-llms-are-made',
        },
        {
            title: 'GatorGPT',
            description: '63M parameter transformer model optimized for academic use. Implements Grouped Query Attention (GQA) and RoPE for efficient inference on consumer hardware.',
            tags: ['LLM', 'Inference', 'C++', 'CUDA'],
            links: [
                { label: 'GitHub', url: 'https://github.com/kunjcr2/GatorGPT' },
                { label: 'HuggingFace', url: 'https://huggingface.co/kunjcr2/GatorGPT2' }
            ]
        },
        {
            title: 'End-to-End LLM Post-Pretraining Pipeline',
            description: 'Complete production-style pipeline for LLM post-pretraining covering Supervised Fine-Tuning (SFT) with LoRA and GRPO alignment. Demonstrates the full workflow from data preprocessing to model alignment using StableLM 1.6B.',
            tags: ['SFT', 'GRPO', 'LoRA', 'TRL', 'PEFT'],
            links: [
                { label: 'GitHub', url: 'https://github.com/kunjcr2/end-to-end-post-pretraining' },
                { label: 'HuggingFace', url: 'https://huggingface.co/kunjcr2/stablelm-1.6b-finetuned-aligned' },
                { label: 'WandB', url: 'https://wandb.ai/kunjcr2-dreamable/huggingface/runs/qds5kqi2' }
            ]
        }
    ]

    return (
        <section id="llm-projects" className="py-16 bg-[#0a0a0b]">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium mb-4">Research</p>
                    <h2 className="text-3xl font-light text-neutral-100 mb-4">LLM Engineering</h2>
                    <div className="w-12 h-px bg-neutral-700"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-[#111113] border border-neutral-800/50 rounded-lg p-8 hover:border-neutral-700 transition-colors h-full flex flex-col">
                                <h3 className="text-xl font-medium text-neutral-100 mb-4 group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-neutral-500 mb-6 leading-relaxed text-sm flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-neutral-900 text-neutral-400 text-xs font-medium border border-neutral-800 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6 pt-4 border-t border-neutral-800/50">
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
                                        >
                                            <Github size={16} />
                                            Source
                                            <ArrowUpRight size={14} />
                                        </a>
                                    ) : (
                                        project.links?.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
                                            >
                                                {link.label === 'GitHub' ? <Github size={16} /> : <ExternalLink size={16} />}
                                                {link.label}
                                                <ArrowUpRight size={14} />
                                            </a>
                                        ))
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LLMProjects
