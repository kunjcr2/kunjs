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
                'Dean\'s List',
                'Researching Next Sentence Prediction with Professor William',
                'CodePath Advanced Data Structures & Algorithms'
            ],
            coursework: [
                'Object-Oriented Programming', 'Advanced Data Structures & Algorithms',
                'Computer Architecture', 'Full Stack Software Engineering'
            ],
            clubs: [
                'AI/ML Club',
                'ACM Chapter'
            ]
        },
        {
            school: 'San Francisco State University',
            degree: 'Computer Science (Transferred)',
            location: 'San Francisco, CA',
            period: 'Jul 2023 — Dec 2025',
            gpa: null,
            highlights: [
                'Dean\'s List',
                'Vice President of AI Club',
                'Tech Lead at SparkSF',
                'Hosted SFHacks — 400+ attendees'
            ],
            coursework: [],
            clubs: [
                'AI Club — Vice President',
                'SparkSF — Tech Lead'
            ]
        }
    ]



    return (
        <section id="education" className="py-16 bg-[#0a0a0b]">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium mb-4">Background</p>
                    <h2 className="text-3xl font-light text-neutral-100 mb-4">Education</h2>
                    <div className="w-12 h-px bg-neutral-700"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-[#111113] border border-neutral-800/50 rounded-lg p-6 hover:border-neutral-700 transition-colors">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-neutral-100 flex items-center gap-2">
                                            <GraduationCap size={18} className="text-neutral-400" />
                                            {edu.school}
                                        </h3>
                                        <p className="text-neutral-400 text-sm mt-1">{edu.degree}</p>
                                        <p className="text-neutral-500 text-xs flex items-center gap-1 mt-1">
                                            <MapPin size={12} />
                                            {edu.location}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-neutral-500 font-medium tracking-wide">
                                            {edu.period}
                                        </span>
                                        {edu.gpa && (
                                            <p className="text-sm text-neutral-300 font-medium mt-1">
                                                GPA: {edu.gpa}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Highlights */}
                                {edu.highlights.length > 0 && (
                                    <div className="mb-4">
                                        <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5">
                                            <Award size={12} />
                                            Achievements
                                        </p>
                                        <ul className="space-y-1">
                                            {edu.highlights.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                                                    <span className="text-neutral-600 mt-1">—</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Coursework */}
                                {edu.coursework.length > 0 && (
                                    <div className="mb-4">
                                        <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5">
                                            <BookOpen size={12} />
                                            Coursework
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.coursework.map((course, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2.5 py-1 bg-neutral-900 border border-neutral-800/50 text-neutral-500 text-xs font-medium rounded hover:text-neutral-400 hover:border-neutral-700 transition-colors"
                                                >
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Clubs */}
                                {edu.clubs.length > 0 && (
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5">
                                            <Users size={12} />
                                            Organizations
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.clubs.map((club, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2.5 py-1 bg-neutral-900 border border-neutral-800/50 text-neutral-500 text-xs font-medium rounded hover:text-neutral-400 hover:border-neutral-700 transition-colors"
                                                >
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
