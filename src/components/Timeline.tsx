import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faDatabase, faLayerGroup, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Chip from '@mui/material/Chip';
import '../assets/styles/Timeline.scss';
import '../assets/styles/Expertise.scss';

const iconStyle = {
  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
  color: '#ffffff',
  boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.2), 0 8px 20px rgba(0, 0, 0, 0.35)',
};

// Curated skills badges from the badges folder
const floatingBadgesData = [
  { name: 'React', src: `${process.env.PUBLIC_URL}/badges/badges_react.png`, left: '6%', top: '6%', speed: 0.18, floatDur: 7.2, rotate: -8 },
  { name: 'Python', src: `${process.env.PUBLIC_URL}/badges/badges_python.png`, left: '88%', top: '12%', speed: -0.22, floatDur: 6.8, rotate: 10 },
  { name: 'C++', src: `${process.env.PUBLIC_URL}/badges/badges_cpp.png`, left: '4%', top: '24%', speed: 0.24, floatDur: 8.5, rotate: 6 },
  { name: 'JavaScript', src: `${process.env.PUBLIC_URL}/badges/badges_javascript.png`, left: '90%', top: '28%', speed: -0.16, floatDur: 7.6, rotate: -12 },
  { name: 'Node / API', src: `${process.env.PUBLIC_URL}/badges/badges_api.png`, left: '7%', top: '42%', speed: 0.28, floatDur: 9.0, rotate: 12 },
  { name: 'Docker', src: `${process.env.PUBLIC_URL}/badges/badges_docker.png`, left: '89%', top: '48%', speed: -0.25, floatDur: 6.4, rotate: -7 },
  { name: 'SQL', src: `${process.env.PUBLIC_URL}/badges/badges_sql.png`, left: '5%', top: '60%', speed: 0.2, floatDur: 7.8, rotate: -10 },
  { name: 'Git', src: `${process.env.PUBLIC_URL}/badges/badges_git.png`, left: '88%', top: '66%', speed: -0.22, floatDur: 8.2, rotate: 9 },
  { name: 'Java', src: `${process.env.PUBLIC_URL}/badges/badges_java.png`, left: '8%', top: '78%', speed: 0.26, floatDur: 7.0, rotate: 7 },
  { name: 'VS Code', src: `${process.env.PUBLIC_URL}/badges/badges_vscode.png`, left: '91%', top: '84%', speed: -0.19, floatDur: 8.8, rotate: -6 },
  { name: 'Bash', src: `${process.env.PUBLIC_URL}/badges/badges_bash.png`, left: '6%', top: '92%', speed: 0.23, floatDur: 6.5, rotate: 11 },
  { name: 'SQLite', src: `${process.env.PUBLIC_URL}/badges/badges_sqlite.png`, left: '87%', top: '95%', speed: -0.24, floatDur: 7.4, rotate: -8 },
];

function SkillChips({ labels }: { labels: string[] }) {
  return (
    <div className="flex-chips">
      {labels.map((label) => (
        <Chip key={label} className="chip" label={label} />
      ))}
    </div>
  );
}

function Timeline() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.pageYOffset || document.documentElement.scrollTop);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="skills">
      {/* Floating Badges Background Layer */}
      <div className="floating-badges-container" aria-hidden="true">
        {floatingBadgesData.map((badge, idx) => {
          const parallaxOffset = scrollY * badge.speed;
          return (
            <div
              key={idx}
              className="floating-badge-item"
              style={{
                left: badge.left,
                top: badge.top,
                animationDuration: `${badge.floatDur}s`,
                animationDelay: `${(idx % 4) * 0.8}s`,
                transform: `translate3d(0, ${parallaxOffset}px, 0) rotate(${badge.rotate}deg)`,
              }}
            >
              <img src={badge.src} alt={badge.name} loading="lazy" />
            </div>
          );
        })}
      </div>

      <div className="items-container">
        <h1>Skills</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Programming Languages</h3>
            <h4 className="vertical-timeline-element-subtitle">Core Syntax, Algorithms & Problem Solving</h4>
            <SkillChips labels={["Java", "Python", "C++", "JavaScript (ES6+)"]} />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faReact} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Responsive, Interactive & Modern UI/UX</h4>
            <SkillChips labels={["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]} />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faServer} />}
          >
            <h3 className="vertical-timeline-element-title">Backend & Systems</h3>
            <h4 className="vertical-timeline-element-subtitle">Scalable Architectures, APIs & Performance</h4>
            <SkillChips labels={[
              "Node.js & Express.js",
              "RESTful API Design",
              "Authentication & Authorization (JWT)",
              "Database Design & Optimization",
              "Caching Strategies (Redis)",
              "System Design & Architecture",
              "Scalability & Load Balancing",
              "Asynchronous Processing",
            ]} />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faDatabase} />}
          >
            <h3 className="vertical-timeline-element-title">Databases & Storage</h3>
            <h4 className="vertical-timeline-element-subtitle">Data Modeling, Query Optimization & Schema Design</h4>
            <SkillChips labels={["MongoDB", "SQL", "Mongoose", "Vector DBs"]} />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faRobot} />}
          >
            <h3 className="vertical-timeline-element-title">AI & Machine Learning</h3>
            <h4 className="vertical-timeline-element-subtitle">RAG Pipelines, LLMs, Embeddings & Data Analysis</h4>
            <SkillChips labels={["Python", "RAG Systems", "Scikit-learn", "Pandas", "NumPy", "TensorFlow", "FAISS / Vector Search"]} />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faLayerGroup} />}
          >
            <h3 className="vertical-timeline-element-title">Core Competencies</h3>
            <h4 className="vertical-timeline-element-subtitle">Foundations, Best Practices & Collaboration</h4>
            <SkillChips labels={[
              "Data Structures & Algorithms",
              "Object-Oriented Programming (OOP)",
              "Git & GitHub",
              "System Design",
            ]} />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
