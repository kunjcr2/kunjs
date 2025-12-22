import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

function Projects() {
    const projects = [
        {
            title: 'Max - AI Voice Assistant',
            image: '/assets/max_thumb.jpg',
            tags: ['90% voice accuracy', '8 tools', 'Langchain/OpenAI'],
            description: 'Developed a voice-activated AI assistant using Langchain, OpenAI, Hugging Face, and SpeechRecognition to automate tasks like web search, YouTube streaming, and emailing.',
            links: [
                { label: 'GitHub', url: 'https://github.com/kunjcr2/Max' }
            ]
        },
        {
            title: 'Llama-3.2-3b Finetuned',
            image: '/assets/llama.png',
            tags: ['~300k QA Pairs', 'LoRA', 'vLLM', 'Docker'],
            description: 'An instruction-tuned Llama-3.2-3B base model trained with LoRA on the OpenHermes dataset. This run transformed the base model into an instruct-capable assistant with only ~0.75% of parameters updated.',
            links: [
                { label: 'Hugging Face', url: 'https://huggingface.co/kunjcr2/llama3-3b-lora-openhermes' },
                { label: 'GitHub', url: 'https://github.com/kunjcr2/llama-3.2-3b-openhermes' }
            ]
        },
        {
            title: 'Qwen2.5-0.5B SFT + DPO',
            image: '/assets/qwen_image.png',
            tags: ['85M tokens', '1.48 val loss', '66% reward acc'],
            description: 'A two-stage pipeline where the model was first trained on 85M tokens with supervised fine-tuning, and then optimized with Direct Preference Optimization to achieve 66% reward accuracy.',
            links: [
                { label: 'Hugging Face', url: 'https://huggingface.co/kunjcr2/qwen2.5-0.5b-sft-dpo' },
                { label: 'GitHub', url: 'https://github.com/kunjcr2/how-llms-are-made/blob/main/docs/ml-and-dl/Reasoning Models/RLHF/DirectPreferenceOptimization.py' }
            ]
        }
    ]

    return (
        <section id="projects" className="py-16 bg-[#0a0a0b]">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium mb-4">Portfolio</p>
                    <h2 className="text-3xl font-light text-neutral-100 mb-4">Open Source</h2>
                    <div className="w-12 h-px bg-neutral-700"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#111113] border border-neutral-800/50 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors flex flex-col group"
                        >
                            {/* Image */}
                            <div className="relative h-40 overflow-hidden bg-neutral-900 border-b border-neutral-800/50">
                                <img
                                    src={project.image}
                                    alt={`${project.title} thumbnail`}
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-medium text-neutral-100 mb-3 group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-500 text-xs font-medium rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-neutral-500 leading-relaxed text-sm flex-grow mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4 border-t border-neutral-800/50">
                                    {project.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-neutral-200 text-sm transition-colors"
                                        >
                                            {link.label}
                                            <ArrowUpRight size={14} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16">
                    <a
                        href="https://github.com/kunjcr2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 text-sm font-medium transition-colors"
                    >
                        <Github size={18} />
                        View all on GitHub
                        <ArrowUpRight size={14} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
