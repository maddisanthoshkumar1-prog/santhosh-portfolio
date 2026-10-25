import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, ShieldCheck, Github, Linkedin, Mail, Menu, Terminal, ScanSearch, Network, LockKeyhole, Code2, Braces, Database, Globe, Cpu, ExternalLink } from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01', name: 'DataSniff', label: 'FEATURED PROJECT', status: 'Built',
    description: 'A Flask-based web application that scans files for potentially exposed secrets and sensitive information.',
    features: ['Regex detection', 'Entropy analysis', 'Risk classification', 'Secret masking'],
    stack: ['Python', 'Flask', 'Cybersecurity'],
    icon: <ScanSearch size={26} />,
    github: 'https://github.com/maddisanthoshkumar1-prog/Data-Sniff--Website',
    live: '',
  },
  
];

const skills = [
  { name: 'Python', icon: <Code2 /> }, { name: 'Flask', icon: <Braces /> },
  { name: 'Cybersecurity', icon: <ShieldCheck /> }, { name: 'Regex & Secret Detection', icon: <ScanSearch /> },
  { name: 'SQL / DBMS', icon: <Database /> }, { name: 'HTML & CSS', icon: <Globe /> },
  { name: 'JavaScript', icon: <Code2 /> }, { name: 'AI Security', icon: <Cpu /> },
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const links = [['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']];
  return <header className="header"><a className="brand" href="#home" aria-label="Home">SK<span>.</span></a>
    <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}><Menu /></button>
    <nav className={open ? 'nav nav-open' : 'nav'}>{links.map(([name, href]) => <a key={name} href={href} onClick={() => setOpen(false)}>{name}</a>)}</nav>
    <a className="header-cta" href="https://github.com/maddisanthoshkumar1-prog" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a>
  </header>;
}

function ProjectCard({ project }) {
  return <article className="project-card">
    <div className="project-top"><div className="project-icon">{project.icon}</div><span className={`status ${project.status.toLowerCase()}`}>{project.label}</span><span className="project-number">{project.number}</span></div>
    <h3>{project.name}</h3><p>{project.description}</p>
    <div className="feature-list">{project.features.map(f => <span key={f}>{f}</span>)}</div>
    <div className="stack-list">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
    <div className="project-links">{project.github ? <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a> : <span className="coming-soon"><LockKeyhole size={14} /> Repository not published</span>}{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a>}</div>
  </article>;
}

function App() {
  return <><Header /><main>
    <section className="hero section-wrap" id="home">
      <div className="hero-copy"><div className="eyebrow"><span className="pulse-dot" /> CYBERSECURITY STUDENT <span className="eyebrow-line" /></div>
        <p className="hello">Hello, I'm</p><h1>Santhosh <span>Kumar.</span></h1>
        <h2>Building practical tools for a <span>safer digital world.</span></h2>
        <p className="hero-text">I'm a B.Tech Cyber Security student interested in security engineering, Python development and AI security. I enjoy turning what I learn into practical projects and documenting the process.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my projects <ArrowRight size={17} /></a><a className="button button-ghost" href="https://github.com/maddisanthoshkumar1-prog" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a></div>
        <div className="hero-facts"><div><strong>01<span>+</span></strong><small>Project published</small></div><div><strong>Cyber<span>Sec</span></strong><small>Domain focus</small></div><div><strong>Always</strong><small>Learning by building</small></div></div>
      </div>
      <div className="hero-art" aria-label="Cybersecurity illustration"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="glow-core"><ShieldCheck size={76} strokeWidth={1.2}/></div><div className="art-grid"/><div className="float-card float-card-one"><ScanSearch size={18}/><span>Secret Detection</span><i>ACTIVE</i></div><div className="float-card float-card-two"><Terminal size={18}/><span>Security Tools</span><i>BUILDING</i></div><div className="float-card float-card-three"><LockKeyhole size={18}/><span>Privacy First</span><i>FOCUS</i></div><div className="art-caption"><span className="pulse-dot"/> LEARN · BUILD · SECURE</div></div>
    </section>

    <section className="ticker" aria-label="Areas of interest"><div className="ticker-track"><span>CYBERSECURITY</span><b>✳</b><span>PYTHON DEVELOPMENT</span><b>✳</b><span>AI SECURITY</span><b>✳</b><span>SECURE SOFTWARE</span><b>✳</b><span>CYBERSECURITY</span><b>✳</b><span>PYTHON DEVELOPMENT</span><b>✳</b><span>AI SECURITY</span><b>✳</b><span>SECURE SOFTWARE</span></div></section>

    <section className="section-wrap section-block" id="about"><div className="section-heading"><div><span className="section-kicker">01 / ABOUT</span><h2>A little about <span>me.</span></h2></div><p>Curiosity first. Practical work always.</p></div>
      <div className="about-grid"><div className="about-copy"><p className="large-copy">I'm a Cyber Security student focused on learning how systems fail — and how to make them safer.</p><p>My approach is hands-on: learn a concept, build a small tool, test it, and improve it. I'm currently growing my skills in Python, web development, defensive security and AI security.</p><a className="text-link" href="#contact">Let's connect <ArrowDownRight size={17}/></a></div><div className="about-aside"><div className="aside-row"><span className="aside-icon"><ShieldCheck/></span><div><strong>Primary interest</strong><small>Cybersecurity & secure development</small></div></div><div className="aside-row"><span className="aside-icon"><Code2/></span><div><strong>Building with</strong><small>Python, Flask and web technologies</small></div></div><div className="aside-row"><span className="aside-icon"><Cpu/></span><div><strong>Currently exploring</strong><small>AI security and practical security testing</small></div></div></div></div>
    </section>

    <section className="section-wrap section-block" id="projects"><div className="section-heading"><div><span className="section-kicker">02 / SELECTED WORK</span><h2>Projects that <span>do something.</span></h2></div><p>Built projects are labelled clearly. Ideas are marked as planned.</p></div><div className="projects-grid">{projects.map(p => <ProjectCard key={p.number} project={p}/>)}</div><p className="project-note"><span className="pulse-dot"/> More projects will be added as they become functional and documented.</p></section>

    <section className="section-wrap section-block" id="skills"><div className="section-heading"><div><span className="section-kicker">03 / TOOLKIT</span><h2>Skills I'm <span>developing.</span></h2></div><p>A living list — based on hands-on practice.</p></div><div className="skills-grid">{skills.map(s => <div className="skill-tile" key={s.name}><span>{s.icon}</span><strong>{s.name}</strong><ArrowUpRight className="skill-arrow" size={15}/></div>)}</div><p className="muted-note">Skill levels are not self-rated here; project evidence and ongoing practice matter more than labels.</p></section>

    <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div><span className="section-kicker">04 / CONTACT</span><h2>Have a project in <span>mind?</span></h2><p>Open to learning opportunities, collaborations, internships and thoughtful conversations about cybersecurity.</p></div><div className="contact-actions"><a className="button button-primary" href="https://github.com/maddisanthoshkumar1-prog" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={15}/></a><a className="button button-ghost" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> Find me on LinkedIn <ArrowUpRight size={15}/></a><a className="button button-ghost" href="mailto:"><Mail size={17}/> Add your email</a></div></div></section>
  </main><footer className="footer section-wrap"><a className="brand" href="#home">SK<span>.</span></a><p>Designed to learn. Built to secure.</p><a href="#home">Back to top ↑</a><small>© {new Date().getFullYear()} Santhosh Kumar. Built with React.</small></footer></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
