import { Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
    return (
        <footer className="bg-[#0a0a0b] border-t border-neutral-900 py-12">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <span className="text-lg font-medium text-neutral-100 tracking-tight block mb-1">Kunj Shah</span>
                        <p className="text-neutral-600 text-sm">
                            Building intelligent systems.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/kunjcr2" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition-colors">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/kunj-shah-a58934255/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition-colors">
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:kunjcr2@gmail.com" className="text-neutral-500 hover:text-neutral-300 transition-colors">
                            <Mail size={18} />
                        </a>
                    </div>

                    <div className="text-neutral-600 text-xs">
                        &copy; {new Date().getFullYear()} Kunj Shah
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
