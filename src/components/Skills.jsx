import { motion } from 'framer-motion'

function Skills() {
    const skillCategories = [
        {
            title: 'Languages',
            skills: ['Python', 'JavaScript', 'Java', 'C++', 'HTML/CSS', 'SQL']
        },
        {
            title: 'AI & Frameworks',
            skills: [
                'LangChain', 'LangFlow', 'n8n', 'RAG Pipelines', 'OpenAI API',
                'Hugging Face', 'MCP Servers', 'Vector DBs', 'Prompt Engineering'
            ]
        },
        {
            title: 'ML & Deep Learning',
            skills: [
                'PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'OpenCV', 'Pandas', 'NumPy',
                'NLP', 'Computer Vision', 'LoRA', 'Weights & Biases',
                'Reinforcement Learning', 'DPO', 'PPO'
            ]
        },
        {
            title: 'MLOps & Deployment',
            skills: [
                'Docker', 'vLLM Serving', 'Hugging Face Hub', 'Model Deployment',
                'GPU Optimization', 'Distributed Training', 'Vertex AI', 'Git'
            ]
        },
        {
            title: 'Web Development',
            skills: ['Node.js', 'React.js', 'Flask', 'TailwindCSS', 'Express.js']
        },
        {
            title: 'Databases & Tools',
            skills: ['MongoDB', 'MySQL', 'Vertex AI', 'Git', 'Docker']
        }
    ]

    return (
        <section id="skills" className="py-16 bg-[#0a0a0b]">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium mb-4">Expertise</p>
                    <h2 className="text-3xl font-light text-neutral-100 mb-4">Skills</h2>
                    <div className="w-12 h-px bg-neutral-700"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-[#111113] border border-neutral-800/50 rounded-lg p-6 hover:border-neutral-700 transition-colors"
                        >
                            <h3 className="text-sm font-medium text-neutral-300 mb-4 pb-3 border-b border-neutral-800/50">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-2.5 py-1 bg-neutral-900 border border-neutral-800/50 text-neutral-500 text-xs font-medium rounded hover:text-neutral-400 hover:border-neutral-700 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
