import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Sistem Pengurusan Akademik (SAKT)",
      role: "Full Stack Developer with Data Analytics (Final Year Project)",
      description: "A comprehensive web-based academic management system to digitalize student performance monitoring, attendance tracking, Islamic practical assessments, and parent communication. Features role-based access control (RLS), real-time notifications, and data analytics modules for generating automated ranking and performance reports.",
      tags: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Data Analytics"],
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Academic & Personal Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card card" key={index}>
              <div className="project-header">
                <Folder size={40} className="project-folder-icon" />
                <div className="project-links">
                  <a href={project.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.3 5.3 0 0 0 19 4.5a5.3 5.3 0 0 0-.1-3.5s-1.4-.4-4.5 2.5a14.2 14.2 0 0 0-8 0C3.3 1 1.9 1.4 1.9 1.4A5.3 5.3 0 0 0 1.8 4.9a5.3 5.3 0 0 0-1.5 3.3c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 5.8 18v4"></path></svg>
                  </a>
                  <a href={project.links.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-description">{project.description}</p>
              </div>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
