import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function Header() {
    const [activeSection, setActiveSection] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const sectionIds = ['llm-projects', 'experience', 'projects', 'skills', 'contact']

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
        { href: '#llm-projects', label: 'Research' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' },
    ]

    const handleMobileNavClick = (href) => {
        setMobileMenuOpen(false)
        setTimeout(() => {
            const element = document.getElementById(href.replace('#', ''))
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }, 100)
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
        >
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className={`backdrop-blur-md bg-[#0a0a0b]/80 border border-neutral-800/50 rounded-none sm:rounded-lg px-6 py-4 flex items-center justify-between transition-all duration-300 ${scrolled ? 'border-neutral-700/50' : ''}`}>

                    <a
                        href="#"
                        className="text-lg font-medium text-neutral-100 tracking-tight hover:text-white transition-colors"
                    >
                        Kunj Shah
                    </a>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.replace('#', '')
                            return (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={`text-sm font-medium tracking-wide transition-colors ${isActive ? 'text-neutral-100' : 'text-neutral-500 hover:text-neutral-300'}`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    {/* Social/Contact Icons Desktop */}
                    <div className="hidden md:flex items-center gap-5 pl-6 border-l border-neutral-800">
                        <a href="https://github.com/kunjcr2" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition-colors"><Github size={18} /></a>
                        <a href="https://www.linkedin.com/in/kunjcr2/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition-colors"><Linkedin size={18} /></a>
                        <a href="mailto:kunjcr2@gmail.com" className="text-neutral-500 hover:text-neutral-300 transition-colors"><Mail size={18} /></a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-neutral-400 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-6 right-6 mt-2 p-4 bg-[#0a0a0b]/95 backdrop-blur-xl border border-neutral-800 rounded-lg md:hidden"
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
                                                className={`block px-4 py-3 text-sm font-medium rounded transition-colors ${isActive
                                                    ? 'text-neutral-100 bg-neutral-800/50'
                                                    : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800/30'
                                                    }`}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-neutral-800">
                                <a href="https://github.com/kunjcr2" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300"><Github size={20} /></a>
                                <a href="https://www.linkedin.com/in/kunjcr2/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300"><Linkedin size={20} /></a>
                                <a href="mailto:kunjcr2@gmail.com" className="text-neutral-500 hover:text-neutral-300"><Mail size={20} /></a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}

export default Header