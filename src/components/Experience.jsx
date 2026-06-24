import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Night Market Vendor",
      company: "Self-Employed",
      location: "Kluang, Johor",
      period: "2018 – Present",
      description: [
        "Operated a solo retail stall at local night markets, independently managing everything from stock transportation and stall setup to packing up.",
        "Handled all cash and digital transactions directly with customers, ensuring accurate math and balancing daily earnings.",
        "Managed inventory and purchasing, tracking fast-selling items and buying stock ahead of time.",
        "Served a high volume of customers face-to-face in a fast-paced environment, keeping service quick and friendly."
      ]
    },
    {
      title: "Internship",
      company: "Pusat Kerjaya dan Alumni (PKKA), UTHM",
      location: "Batu Pahat, Johor",
      period: "Sept 2020 – Nov 2020",
      description: [
        "Managed and organized database records for student and alumni profiles, ensuring high data accuracy and streamlined information retrieval.",
        "Supported the coordination of career development programs, alumni networking events, and university career fairs.",
        "Handled frontline administrative tasks, including managing inquiries from students, alumni, and external corporate partners.",
        "Assisted in daily office operations, improving documentation workflows and supporting the center’s administrative team."
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="exp-item" key={index}>
              <div className="exp-icon">
                <Briefcase size={24} />
              </div>
              <div className="exp-content card animate-fade-in">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="exp-description">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
