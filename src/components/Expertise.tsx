import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faAws } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "RESTful APIs",
    "JWT",
    "Stripe",
    "Razorpay",
];

const labelsSecond = [
    "Generative AI",
    "LLMs",
    "RAG",
    "LangChain",
    "Embeddings",
    "Prompt Engineering",
    "Chatbot Development",
    "Ollama",
];

const labelsThird = [
    "Python",
    "C++",
    "SQL",
    "Machine Learning",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "AWS",
    "Docker",
    "Git",
    "DSA",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build full-stack MERN applications with role-based access, secure APIs, and cloud-ready backends. Recent work includes a healthcare platform with three portals, payment flows, and analytics dashboards.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & Generative AI</h3>
                    <p>I design RAG pipelines for context-aware chatbots and question answering — from document chunking and embeddings to vector search, LLM inference, and prompt engineering.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Data, ML & Cloud</h3>
                    <p>I apply data structures, algorithms, and machine learning to practical systems, and deploy with Git, Docker, AWS, and Cloudinary. Core CS foundations in OOP and DBMS support everything I ship.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
