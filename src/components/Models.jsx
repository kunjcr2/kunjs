import { motion } from 'framer-motion'
import { ExternalLink, Cpu, ArrowUpRight } from 'lucide-react'

function Models() {
    const models = [
        {
            name: 'MedAssistGPT',
            description: 'A 303M and a 401M parameter medical-domain transformer pretrained on PubMed abstracts using RoPE, GQA, and SwiGLU for research-only text generation.',
            huggingface: 'https://huggingface.co/kunjcr2/MedAssistGPT',
            parameters: '303M & 401M'
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
        },
        {
            name: 'StableLM 1.6B SFT+GRPO',
            description: 'A 1.6B parameter StableLM model fine-tuned with LoRA-based SFT on UltraChat 200K and aligned with GRPO using PKU-SafeRLHF for safety.',
            huggingface: 'https://huggingface.co/kunjcr2/stablelm-1.6b-finetuned-aligned',
            parameters: '1.6B'
        }
    ]

    return (
        <section id="models" className="py-24 bg-parchment">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="section-overline text-stone-gray">Open Source</p>
                    <h2 className="serif-heading text-[3.25rem] text-near-black mb-5">Models</h2>
                    <div className="w-12 h-px bg-border-warm" />
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {models.map((model, index) => (
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
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    {/* Model Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="font-serif text-[1.3rem] font-medium text-near-black group-hover:text-terracotta transition-colors truncate">
                                                {model.name}
                                            </h3>
                                            <span className="flex items-center gap-1.5 px-2.5 py-0.5 bg-warm-sand text-charcoal-warm text-xs font-medium rounded-generous whitespace-nowrap border border-border-warm">
                                                <Cpu size={11} />
                                                {model.parameters}
                                            </span>
                                        </div>
                                        <p className="text-olive-gray text-sm leading-relaxed">
                                            {model.description}
                                        </p>
                                    </div>

                                    {/* HuggingFace Link */}
                                    <a
                                        href={model.huggingface}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-sand whitespace-nowrap flex-shrink-0 group/link"
                                    >
                                        {/* <span className="text-sm">🤗</span> */}
                                        Hugging Face
                                        <ArrowUpRight size={13} className="opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12"
                >
                    <a
                        href="https://huggingface.co/kunjcr2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-olive-gray hover:text-terracotta transition-colors font-medium"
                    >
                        View all models on Hugging Face
                        <ExternalLink size={13} />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Models
