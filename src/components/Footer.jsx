import { Github, Linkedin, Mail } from 'lucide-react'

// Custom Hugging Face icon component
const HuggingFaceIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0z" />
        <path fill="#0a0a0b" d="M10 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM22 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        <path fill="#0a0a0b" d="M16 24c-3.3 0-6-2.2-6-5h12c0 2.8-2.7 5-6 5z" />
    </svg>
)


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
                        <a href="https://github.com/kunjcr2" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-neutral-500 hover:text-neutral-300 transition-colors">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/kunj-shah-a58934255/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-neutral-500 hover:text-neutral-300 transition-colors">
                            <Linkedin size={18} />
                        </a>
                        <a href="https://huggingface.co/kunjcr2" target="_blank" rel="noopener noreferrer" title="Hugging Face" className="text-neutral-500 hover:text-neutral-300 transition-colors">
                            <HuggingFaceIcon size={18} />
                        </a>
                        <a href="mailto:kunjcr2@gmail.com" title="Email" className="text-neutral-500 hover:text-neutral-300 transition-colors">
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
