import React from 'react';
import { Mail, ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Seeking Internship (Aug 2026 - Jan 2027)
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Mohamad Ikraq Izhar</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Software Engineering Student <br/>
            &amp; Aspiring Data Scientist
          </h2>
          
          <p className="hero-description">
            Final-year Software Engineering student at Universiti Tun Hussein Onn Malaysia (UTHM) 
            with a strong interest in Data Analytics and Data Science. Passionate about developing 
            data-driven solutions and looking to apply my skills to real-world problems.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Hire Me for Internship
            </a>
          </div>
          
          <div className="hero-socials">
            <a href="https://github.com/ikraq" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.3 5.3 0 0 0 19 4.5a5.3 5.3 0 0 0-.1-3.5s-1.4-.4-4.5 2.5a14.2 14.2 0 0 0-8 0C3.3 1 1.9 1.4 1.9 1.4A5.3 5.3 0 0 0 1.8 4.9a5.3 5.3 0 0 0-1.5 3.3c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 5.8 18v4"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:iikraqizhar13@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          
          <div className="glass hero-card">
            <div className="card-header">
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
              <div className="card-title">data_analytics.py</div>
            </div>
            <pre className="code-snippet">
              <code>
<span className="code-keyword">import</span> pandas <span className="code-keyword">as</span> pd{'\n'}
<span className="code-keyword">import</span> seaborn <span className="code-keyword">as</span> sns{'\n\n'}
<span className="code-comment"># Initialize profile</span>{'\n'}
profile = {'{\n'}
  <span className="code-string">"name"</span>: <span className="code-string">"Ikraq Izhar"</span>,{'\n'}
  <span className="code-string">"role"</span>: <span className="code-string">"Data Analyst Intern"</span>,{'\n'}
  <span className="code-string">"status"</span>: <span className="code-string">"Available Aug 2026"</span>{'\n'}
{'}'}{'\n\n'}
<span className="code-keyword">def</span> <span className="code-func">analyze_data</span>(data):{'\n'}
    <span className="code-keyword">return</span> <span className="code-string">"Insights Discovered!"</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
