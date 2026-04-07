import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop
            setIsVisible(winScroll > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-11 h-11 flex items-center justify-center rounded-comfort bg-warm-sand border border-border-warm text-charcoal-warm hover:bg-border-warm transition-all duration-200 group"
                    style={{ boxShadow: '0px 0px 0px 0px #e8e6dc, 0px 0px 0px 1px #d1cfc5' }}
                    aria-label="Back to top"
                >
                    <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default BackToTop
