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
            title: 'Kanting - Video RAG System',
            image: '/assets/kanting_thumb.png',
            tags: ['Semantic Search', 'Whisper ASR', 'Claude AI'],
            description: 'Built a video RAG (Retrieval-Augmented Generation) system that indexes YouTube videos using Whisper for transcription, stores embeddings with Sentence-Transformers, and enables semantic search with timestamped clip extraction powered by Claude.',
            links: [
                { label: 'GitHub', url: 'https://github.com/kunjcr2/kanting' }
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
