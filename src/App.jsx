import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Models from './components/Models'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Hackathons from './components/Hackathons'
import Certificates from './components/Certificates'
import AboutContact from './components/AboutContact'
import Footer from './components/Footer'
import BackgroundLayout from './components/BackgroundLayout'

function App() {
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = window.innerWidth < 768 ? 60 : 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
            });
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.08 }
        );

        document.querySelectorAll('section').forEach((section) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <BackgroundLayout>
            <ScrollProgress />
            <BackToTop />
            <Header />
            <Hero />
            <main>
                <Models />
                <Experience />
                <Education />
                <Projects />
                <Skills />
                <Hackathons />
                <Certificates />
                <AboutContact />
            </main>
            <Footer />
        </BackgroundLayout>
    )
}

export default App
