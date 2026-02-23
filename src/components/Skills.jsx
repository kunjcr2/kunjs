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

                <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
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
