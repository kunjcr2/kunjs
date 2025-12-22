import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'

function Hero() {
    const handleResumeDownload = () => {
        const link = document.createElement('a')
        link.href = '/resumes/Kunj_Shah_Resume.pdf'
        link.download = 'Kunj_Shah_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0b]">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-[#0f0f11] to-[#0a0a0b]"></div>

            {/* Very subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }}></div>

            <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Overline */}
                        <motion.p
                            className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Machine Learning Engineer
                        </motion.p>

                        {/* Main Heading */}
                        <motion.h1
                            className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-neutral-100 leading-[1.1]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Kunj Shah
                        </motion.h1>

                        {/* Divider */}
                        <motion.div
                            className="w-16 h-px bg-neutral-700 mx-auto"
                            initial={{ width: 0 }}
                            animate={{ width: 64 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        ></motion.div>

                        {/* Description */}
                        <motion.p
                            className="text-lg text-neutral-400 leading-relaxed font-light max-w-xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Specializing in the architecture, pre-training, and fine-tuning of Large Language Models.
                            Building systems that advance reasoning capabilities and optimize inference at scale.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-wrap items-center justify-center gap-6 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <a
                                href="/resumes/Kunj_Shah_Resume.pdf"
                                target="_blank"
                                // rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-neutral-100 text-sm font-medium tracking-wide hover:text-white transition-colors group"
                            >
                                View Resume
                                <ArrowDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-0.5 transition-transform" />
                            </a>

                            <span className="text-neutral-700">|</span>

                            <button
                                onClick={handleResumeDownload}
                                className="inline-flex items-center gap-2 text-neutral-500 text-sm font-medium tracking-wide hover:text-neutral-300 transition-colors group"
                            >
                                <Download className="w-4 h-4" />
                                Get Resume
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            {/* <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
            >
                <div className="w-px h-16 bg-gradient-to-b from-neutral-600 to-transparent"></div>
            </motion.div> */}
        </section>
    )
}

export default Hero
