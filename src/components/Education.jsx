import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Award, BookOpen, Users } from 'lucide-react'

function Education() {
    const education = [
        {
            school: 'San Jose State University',
            degree: 'B.S., Computer Science',
            location: 'San Jose, CA',
            period: 'Jan 2026 — May 2027',
            gpa: '3.94 / 4.00',
            highlights: [
                "Dean's List",
                'Researching Next Sentence Prediction with Professor William',
                'CodePath Advanced Data Structures & Algorithms'
            ],
            coursework: [
                'Object-Oriented Programming', 'Advanced Data Structures & Algorithms',
                'Computer Architecture', 'Full Stack Software Engineering'
            ],
            clubs: ['AI/ML Club', 'ACM Chapter']
        },
        {
            school: 'San Francisco State University',
            degree: 'Computer Science (Transferred)',
            location: 'San Francisco, CA',
            period: 'Jul 2023 — Dec 2025',
            gpa: null,
            highlights: [
                "Dean's List",
                'Vice President of AI Club',
                'Tech Lead at SparkSF',
                'Hosted SFHacks — 400+ attendees'
            ],
            coursework: [],
            clubs: ['AI Club — Vice President', 'SparkSF — Tech Lead']
        }
    ]

    return (
        <section id="education" className="py-20 bg-parchment">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="section-overline text-stone-gray">Background</p>
                    <h2 className="serif-heading text-[3.25rem] text-near-black mb-5">Education</h2>
                    <div className="w-12 h-px bg-border-warm" />
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-5">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div
                                className="card-light p-6 hover:border-border-warm transition-all duration-300 group"
                                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0px 0px 0px 0px #e8e6dc, 0px 0px 0px 1px #d1cfc5, rgba(0,0,0,0.05) 0px 4px 24px' }}
                                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'rgba(0,0,0,0.05) 0px 4px 24px' }}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                                    <div>
                                        <h3 className="font-serif text-[1.3rem] font-medium text-near-black flex items-center gap-2.5 group-hover:text-terracotta transition-colors">
                                            <GraduationCap size={17} className="text-terracotta flex-shrink-0" />
                                            {edu.school}
                                        </h3>
                                        <p className="text-olive-gray text-sm mt-1">{edu.degree}</p>
                                        <p className="text-stone-gray text-xs flex items-center gap-1 mt-1">
                                            <MapPin size={11} />
                                            {edu.location}
                                        </p>
                                    </div>
                                    <div className="text-right flex-shrink-0">
                                        <span className="text-xs text-stone-gray font-medium tracking-wide">{edu.period}</span>
                                        {edu.gpa && (
                                            <p className="text-sm text-terracotta font-medium mt-1">GPA {edu.gpa}</p>
                                        )}
                                    </div>
                                </div>

                                {edu.highlights.length > 0 && (
                                    <div className="mb-4">
                                        <p className="text-[0.65rem] uppercase tracking-wider text-stone-gray mb-2 flex items-center gap-1.5">
                                            <Award size={11} />Achievements
                                        </p>
                                        <ul className="space-y-1.5">
                                            {edu.highlights.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal-warm">
                                                    <span className="text-terracotta mt-1 flex-shrink-0">—</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {edu.coursework.length > 0 && (
                                    <div className="mb-4">
                                        <p className="text-[0.65rem] uppercase tracking-wider text-stone-gray mb-2 flex items-center gap-1.5">
                                            <BookOpen size={11} />Coursework
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.coursework.map((course, i) => (
                                                <span key={i} className="px-2 py-0.5 bg-warm-sand border border-border-warm text-charcoal-warm text-xs font-medium rounded-sm-round">
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {edu.clubs.length > 0 && (
                                    <div>
                                        <p className="text-[0.65rem] uppercase tracking-wider text-stone-gray mb-2 flex items-center gap-1.5">
                                            <Users size={11} />Organizations
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.clubs.map((club, i) => (
                                                <span key={i} className="px-2 py-0.5 bg-warm-sand border border-border-warm text-charcoal-warm text-xs font-medium rounded-sm-round">
                                                    {club}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
