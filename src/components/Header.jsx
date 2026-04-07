import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const HuggingFaceIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0z" />
        <path fill="#f5f4ed" d="M10 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM22 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        <path fill="#f5f4ed" d="M16 24c-3.3 0-6-2.2-6-5h12c0 2.8-2.7 5-6 5z" />
    </svg>
)

function Header() {
    const [activeSection, setActiveSection] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const sectionIds = ['models', 'experience', 'education', 'projects', 'skills', 'contact']

        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
            const scrollPosition = window.scrollY + 150
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i])
                if (el && scrollPosition >= el.offsetTop) {
                    setActiveSection(sectionIds[i])
                    return
                }
            }
            setActiveSection(sectionIds[0])
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '#models', label: 'Models' },
        { href: '#experience', label: 'Experience' },
        { href: '#education', label: 'Education' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' },
    ]

    const handleMobileNavClick = (href) => {
        setMobileMenuOpen(false)
        setTimeout(() => {
            const element = document.getElementById(href.replace('#', ''))
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
        >
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div
                    className={`bg-parchment/90 backdrop-blur-md border rounded-generous px-6 py-4 flex items-center justify-between transition-all duration-300 ${scrolled ? 'border-border-warm' : 'border-border-cream'
                        }`}
                    style={{ boxShadow: 'rgba(0,0,0,0.04) 0px 2px 16px' }}
                >
                    {/* Logo
                    <a
                        href="#"
                        className="font-serif text-lg font-medium text-near-black hover:text-terracotta transition-colors tracking-tight"
                    >
                        Kunj Shah
                    </a> */}

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center space-x-7">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.replace('#', '')
                            return (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={`text-sm font-medium tracking-wide transition-colors duration-200 ${isActive
                                            ? 'text-near-black'
                                            : 'text-olive-gray hover:text-near-black'
                                            }`}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <span className="block h-px bg-terracotta mt-0.5 rounded-full" />
                                        )}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    {/* Social Icons Desktop */}
                    <div className="hidden md:flex items-center gap-4 pl-6 border-l border-border-cream">
                        <a href="https://github.com/kunjcr2" target="_blank" rel="noopener noreferrer" title="GitHub"
                            className="text-stone-gray hover:text-near-black transition-colors">
                            <Github size={17} />
                        </a>
                        <a href="https://www.linkedin.com/in/kunjcr2/" target="_blank" rel="noopener noreferrer" title="LinkedIn"
                            className="text-stone-gray hover:text-near-black transition-colors">
                            <Linkedin size={17} />
                        </a>
                        <a href="https://huggingface.co/kunjcr2" target="_blank" rel="noopener noreferrer" title="Hugging Face"
                            className="text-stone-gray hover:text-near-black transition-colors">
                            <HuggingFaceIcon size={17} />
                        </a>
                        <a href="mailto:kunjcr2@gmail.com" title="Email"
                            className="text-stone-gray hover:text-near-black transition-colors">
                            <Mail size={17} />
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 text-olive-gray hover:text-near-black transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-6 right-6 mt-2 p-4 bg-ivory border border-border-cream rounded-generous md:hidden"
                            style={{ boxShadow: 'rgba(0,0,0,0.06) 0px 8px 24px' }}
                        >
                            <ul className="space-y-1">
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.href.replace('#', '')
                                    return (
                                        <li key={item.href}>
                                            <a
                                                href={item.href}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    handleMobileNavClick(item.href)
                                                }}
                                                className={`block px-4 py-3 text-sm font-medium rounded-comfort transition-colors ${isActive
                                                    ? 'text-near-black bg-warm-sand'
                                                    : 'text-olive-gray hover:text-near-black hover:bg-border-cream'
                                                    }`}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-border-cream">
                                <a href="https://github.com/kunjcr2" target="_blank" rel="noopener noreferrer" className="text-stone-gray hover:text-near-black"><Github size={18} /></a>
                                <a href="https://www.linkedin.com/in/kunjcr2/" target="_blank" rel="noopener noreferrer" className="text-stone-gray hover:text-near-black"><Linkedin size={18} /></a>
                                <a href="https://huggingface.co/kunjcr2" target="_blank" rel="noopener noreferrer" className="text-stone-gray hover:text-near-black"><HuggingFaceIcon size={18} /></a>
                                <a href="mailto:kunjcr2@gmail.com" className="text-stone-gray hover:text-near-black"><Mail size={18} /></a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}

export default Header