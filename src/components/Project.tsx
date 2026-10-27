import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/shauryashrma/remedi" target="_blank" rel="noreferrer">
                    <div className="project-banner remedi">Re-medi</div>
                </a>
                <a href="https://github.com/shauryashrma/remedi" target="_blank" rel="noreferrer"><h2>Re-medi</h2></a>
                <p>Full-stack MERN healthcare platform with 3 role-based portals (Patient, Doctor, Admin), appointment scheduling, medicine reminders, dashboards, and analytics. Includes an AI medical chatbot on a RAG pipeline (chunking, embeddings, FAISS, Grok API), 20+ JWT-secured REST APIs, Stripe & Razorpay payments for 500+ users, and Cloudinary media storage.</p>
            </div>
            <div className="project">
                <a href="https://github.com/shauryashrma/SIMPLE-RAG" target="_blank" rel="noreferrer">
                    <div className="project-banner rag">SIMPLE-RAG</div>
                </a>
                <a href="https://github.com/shauryashrma/SIMPLE-RAG" target="_blank" rel="noreferrer"><h2>SIMPLE-RAG</h2></a>
                <p>High-performance vector database in C++ with 3 ANN algorithms (HNSW, KD-Tree, brute-force) and 3 distance metrics, reducing search from O(N) to O(log N). End-to-end RAG with Llama 3.2 via Ollama, 768-d embeddings, sub-second retrieval, 12+ REST endpoints, and a live PCA dashboard for comparing 20+ semantic vectors.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
