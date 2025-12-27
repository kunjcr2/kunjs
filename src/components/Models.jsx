import { motion } from 'framer-motion'
import { ExternalLink, Cpu, ArrowUpRight } from 'lucide-react'

function Models() {
    const models = [
        {
            name: 'MedAssist-GPT-401M',
            description: 'A 401M parameter medical-domain transformer pretrained on PubMed abstracts using RoPE, GQA, and SwiGLU for research-only text generation.',
            huggingface: 'https://huggingface.co/kunjcr2/MedAssist-GPT-401M',
            parameters: '401M'
        },
        {
            name: 'Qwen2.5-0.5B SFT+DPO',
            description: 'A 0.5B parameter Qwen2.5-based chat model enhanced with supervised fine-tuning and LoRA-based DPO for improved preference alignment.',
            huggingface: 'https://huggingface.co/kunjcr2/qwen2.5-0.5b-sft-dpo',
            parameters: '0.5B'
        },
        {
            name: 'Llama-3.2-3B OpenHermes LoRA',
            description: 'A 3B parameter Llama-3.2 model adapted with QLoRA on the OpenHermes dataset for improved multi-domain instruction following.',
            huggingface: 'https://huggingface.co/kunjcr2/llama3-3b-lora-openhermes',
            parameters: '3B'
        }
    ]

    const formatParams = (params) => {
        return params.toUpperCase()
    }

    return (
        <section id="models" className="py-16 bg-[#0a0a0b]">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium mb-4">Open Source</p>
                    <h2 className="text-3xl font-light text-neutral-100 mb-4">Models</h2>
                    <div className="w-12 h-px bg-neutral-700"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {models.map((model, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-[#111113] border border-neutral-800/50 rounded-lg p-6 hover:border-neutral-700 transition-all duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    {/* Model Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-lg font-medium text-neutral-100 group-hover:text-white transition-colors truncate">
                                                {model.name}
                                            </h3>
                                            <span className="flex items-center gap-1.5 px-2.5 py-0.5 bg-neutral-900 text-neutral-400 text-xs font-medium border border-neutral-800 rounded-full whitespace-nowrap">
                                                <Cpu size={12} />
                                                {formatParams(model.parameters)}
                                            </span>
                                        </div>
                                        <p className="text-neutral-500 text-sm leading-relaxed">
                                            {model.description}
                                        </p>
                                    </div>

                                    {/* HuggingFace Link */}
                                    <a
                                        href={model.huggingface}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg text-sm text-neutral-400 hover:text-neutral-200 transition-all duration-200 whitespace-nowrap group/link"
                                    >
                                        <span className="text-base">🤗</span>
                                        Hugging Face
                                        <ArrowUpRight size={14} className="opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All on HuggingFace */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://huggingface.co/kunjcr2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                    >
                        View all models on Hugging Face
                        <ExternalLink size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Models
