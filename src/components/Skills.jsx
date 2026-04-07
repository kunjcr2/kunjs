import { motion } from 'framer-motion'

function Skills() {
    const skillCategories = [
        {
            title: 'Programming',
            skills: [
                'Python', 'SQL', 'Java', 'JavaScript', 'C++', 'HTML5/CSS', 'TailwindCSS',
                'Bash/Shell Scripting', 'R', 'Git', 'Jupyter Notebooks', 'Linux/Unix',
                'Object-Oriented Programming', 'Data Structures & Algorithms'
            ]
        },
        {
            title: 'Machine Learning & NLP',
            skills: [
                'Supervised & Unsupervised Learning', 'PyTorch', 'TensorFlow', 'Scikit-learn',
                'Azure ML', 'Weights & Biases', 'Pandas', 'NumPy', 'Neural Networks',
                'Deep Learning', 'Reinforcement Learning', 'LangChain', 'n8n',
                'Artificial Intelligence', 'Data Analysis', 'OpenCV', 'Hugging Face',
                'FAISS', 'Sentence Transformers', 'NLP', 'Computer Vision',
                'Whisper', 'BART', 'Matplotlib/Seaborn', 'Transfer Learning',
                'Tokenization', 'Attention Mechanisms', 'Embeddings',
                'Hyperparameter Tuning', 'Data Preprocessing', 'Feature Engineering',
                'Gradient Descent / Backpropagation', 'SciPy'
            ]
        },
        {
            title: 'LLM',
            skills: [
                'Transformers', 'Large Language Models', 'Fine Tuning', 'Model Training',
                'Model Inference', 'Model Alignment', 'Model Tracking & Experimenting',
                'Model Evaluation', 'vLLM', 'LoRA/PEFT', 'RLHF', 'TRPO', 'PPO', 'DPO',
                'GRPO', 'RAG Pipelines', 'OpenAI API', 'Prompt Engineering',
                'Hugging Face Hub', 'TRL', 'Quantization', 'Knowledge Distillation',
                'Few-Shot / Zero-Shot Learning', 'Semantic Search', 'Vector Databases',
                'Chain-of-Thought Prompting', 'Anthropic API'
            ]
        },
        {
            title: 'Backend Systems',
            skills: [
                'RESTful API', 'FastAPI', 'Flask', 'Streamlit', 'PostgreSQL', 'MongoDB',
                'MySQL', 'ORMs', 'Pydantic', 'Docker', 'Microsoft Azure Ecosystem',
                'Azure ML Studio', 'Azure Blob Storage', 'Azure SQL', 'GCP', 'Scrapy',
                'BeautifulSoup', 'OAuth', 'CI/CD', 'Nginx', 'Agile',
                'Google Colab', 'ngrok', 'Postman', 'Logging & Monitoring',
                'Microsoft Office Suite'
            ]
        }
    ]

    return (
        <section id="skills" className="py-24 bg-ivory">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="section-overline text-stone-gray">Expertise</p>
                    <h2 className="serif-heading text-[3.25rem] text-near-black mb-5">Skills</h2>
                    <div className="w-12 h-px bg-border-warm" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <div
                                className="rounded-comfort p-6 hover:border-border-warm transition-all duration-300 h-full"
                                style={{
                                    backgroundColor: '#faf9f5',
                                    border: '1px solid #f0eee6',
                                    boxShadow: 'rgba(0,0,0,0.04) 0px 4px 24px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0px 0px 0px 0px #e8e6dc, 0px 0px 0px 1px #d1cfc5, rgba(0,0,0,0.05) 0px 4px 24px'
                                    e.currentTarget.style.borderColor = '#e8e6dc'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = 'rgba(0,0,0,0.04) 0px 4px 24px'
                                    e.currentTarget.style.borderColor = '#f0eee6'
                                }}
                            >
                                <h3 className="font-serif text-[1.2rem] font-medium text-near-black mb-4 pb-3 border-b border-border-warm">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 bg-warm-sand border border-border-warm text-charcoal-warm text-xs font-medium rounded-sm-round hover:border-ring-warm hover:text-near-black transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
