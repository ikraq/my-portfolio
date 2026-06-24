import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Science (Software Engineering) with Honours",
      school: "Universiti Tun Hussein Onn Malaysia (UTHM), Batu Pahat, Johor",
      period: "Oct 2023 – Present",
      gpa: "3.29",
      icon: <GraduationCap size={24} />
    },
    {
      degree: "Diploma in Computer Science And Mathematics",
      school: "Universiti Teknologi Mara, Jasin, Melaka",
      period: "Oct 2020 – Mar 2023",
      gpa: "3.07",
      icon: <GraduationCap size={24} />
    }
  ];

  const certifications = [
    "SAS Viya Overview",
    "Data Literacy in Practice",
    "Data Literacy Essentials",
    "CCNA: Introduction to Networks",
    "Fundamentals of Cloud Computing"
  ];

  return (
    <section id="education" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education-grid">
          <div className="education-column">
            <h3 className="column-title">Academic Background</h3>
            <div className="timeline">
              {educationData.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-icon">
                    {item.icon}
                  </div>
                  <div className="timeline-content card">
                    <span className="period">{item.period}</span>
                    <h4 className="degree">{item.degree}</h4>
                    <p className="school">{item.school}</p>
                    <div className="gpa-badge">CGPA: {item.gpa}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="certifications-column">
            <h3 className="column-title">Certifications</h3>
            <div className="certifications-list card">
              <ul>
                {certifications.map((cert, index) => (
                  <li key={index} className="cert-item">
                    <Award className="cert-icon" size={20} />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
