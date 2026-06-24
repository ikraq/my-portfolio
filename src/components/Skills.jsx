import React, { useState } from 'react';
import { Code, Database, LineChart, Wrench, Server } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: null },
    { name: 'Data Science', icon: <LineChart size={18} /> },
    { name: 'Development', icon: <Code size={18} /> },
    { name: 'Database', icon: <Database size={18} /> },
    { name: 'Networking', icon: <Server size={18} /> },
    { name: 'Tools', icon: <Wrench size={18} /> }
  ];

  const allSkills = [
    { name: 'React', level: 85, category: 'Development' },
    { name: 'JavaScript / TypeScript', level: 80, category: 'Development' },
    { name: 'Java', level: 75, category: 'Development' },
    { name: 'HTML / CSS', level: 90, category: 'Development' },
    { name: 'PHP / C', level: 70, category: 'Development' },
    
    { name: 'Data Analysis & Cleaning', level: 85, category: 'Data Science' },
    { name: 'Data Modelling', level: 80, category: 'Data Science' },
    { name: 'SAS', level: 75, category: 'Data Science' },
    { name: 'Power BI', level: 80, category: 'Data Science' },

    { name: 'PostgreSQL', level: 85, category: 'Database' },
    { name: 'MySQL', level: 80, category: 'Database' },
    { name: 'Database Design', level: 85, category: 'Database' },

    { name: 'Network Design & Config', level: 75, category: 'Networking' },
    { name: 'Hardware Troubleshooting', level: 80, category: 'Networking' },

    { name: 'Git & GitHub', level: 85, category: 'Tools' },
    { name: 'VS Code', level: 90, category: 'Tools' },
    { name: 'Cisco Packet Tracer', level: 80, category: 'Tools' },
    { name: 'Canva', level: 90, category: 'Tools' }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-filter">
          {categories.map((cat) => (
            <button 
              key={cat.name} 
              className={`filter-btn ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div className="skill-card card" key={`${skill.name}-${index}`}>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
