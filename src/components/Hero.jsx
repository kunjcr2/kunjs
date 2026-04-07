import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

function Hero() {
    const handleResumeDownload = () => {
        const link = document.createElement('a')
        link.href = '/resumes/Kunj P. Shah.pdf'
        link.download = 'Kunj P. Shah.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-parchment overflow-hidden">
            {/* Subtle paper texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '128px 128px'
                }}
            />

            {/* Warm ambient glow — very subtle */}
            <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(201,100,66,0.04) 0%, transparent 70%)' }}
            />

            <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9 }}
                        className="space-y-8"
                    >
                        {/* Overline */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="section-overline text-stone-gray"
                        >
                            LLM Engineer · ML Engineer
                        </motion.p>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.25 }}
                            className="font-serif text-5xl sm:text-6xl lg:text-[4rem] font-medium text-near-black leading-[1.10] tracking-tight"
                        >
                            Kunj Shah
                        </motion.h1>

                        {/* Terracotta divider */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 48, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="h-px bg-terracotta mx-auto"
                        />

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="text-body-lg text-olive-gray leading-relaxed font-light max-w-xl mx-auto"
                        >
                            Specializing in the architecture, pre-training, and fine-tuning of Large Language Models.
                            Building systems that advance reasoning capabilities and optimize inference at scale.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="flex flex-wrap items-center justify-center gap-4 pt-2"
                        >
                            <a
                                href="/resumes/Kunj P. Shah.pdf"
                                target="_blank"
                                className="btn-terracotta"
                                id="hero-view-resume"
                            >
                                View Resume
                                <ArrowRight size={15} />
                            </a>

                            <button
                                onClick={handleResumeDownload}
                                className="btn-sand"
                                id="hero-download-resume"
                            >
                                <Download size={15} />
                                Download
                            </button>
                        </motion.div>

                        {/* Social proof / context line */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-stone-gray text-xs tracking-wide"
                        >
                            San Jose, CA · Incoming Deep Learning Intern @ A10 Networks
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Transition handled by SectionFade gradient in App.jsx */}
        </section>
    )
}

export default Hero
