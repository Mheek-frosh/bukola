import { useState } from 'react'
import { motion } from 'framer-motion'
import bukImg from './assets/buk.png'
import whatsappIcon from './assets/whatsapp.png'
import './App.css'

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1], staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const sectionTitle = (title, subtitle) => (
  <div className="section-heading">
    <p className="section-kicker">{subtitle}</p>
    <h2>{title}</h2>
  </div>
)

function App() {
  const [whatsAppMessage, setWhatsAppMessage] = useState('')

  const handleWhatsAppSend = (e) => {
    e.preventDefault()
    if (!whatsAppMessage.trim()) return
    const phone = '2349114086683'
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsAppMessage.trim())}`
    window.open(url, '_blank')
    setWhatsAppMessage('')
  }

  return (
    <div className="page">
      <header className="nav">
        <div className="nav-left">
          <span className="nav-name">BUKOLA</span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Works</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="nav-cta">
          Download my résumé ↓
        </a>
      </header>

      <main>
        <motion.section
          id="hero"
          className="hero-section"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <p className="eyebrow">Business Analyst</p>
            <h1 className="hero-heading">
              Hi I&apos;m <span className="hero-name">BUKOLA,</span>
              <br />
              a business analyst
              <br />
              I create <span className="highlight">DATA‑DRIVEN SOLUTIONS</span>
              <br />
              for organizations
            </h1>
            <p className="hero-tagline">
              I help teams understand what their data is saying, organize their processes, and
              make confident decisions that actually match how people work day to day.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-btn">
                Get in touch →
              </a>
              <a href="#projects" className="ghost-btn">
                View my work
              </a>
            </div>

            <div className="hero-socials">
              <a href="mailto:bukolaadepoju0@gmail.com" className="icon-link email">
                <span className="icon-circle">@</span>
                <span>Email</span>
              </a>
              <a href="#" className="icon-link linkedin">
                <span className="icon-circle">in</span>
                <span>LinkedIn</span>
              </a>
              <a href="#" className="icon-link twitter">
                <span className="icon-circle">t</span>
                <span>Twitter</span>
              </a>
            </div>
          </motion.div>

          <motion.div className="hero-photo-card" variants={fadeInUp}>
            <img src={bukImg} alt="Portrait of Adepoju Bukola" className="hero-photo" />
          </motion.div>
        </motion.section>

        <motion.section
          id="about"
          className="content-section about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="two-column">
            <div className="about-card">
              <div className="about-photo-bg"></div>
              <img src={bukImg} alt="Adepoju Bukola" className="about-photo" />
            </div>

            <div>
              <h2 className="about-title">About myself</h2>
              <p className="about-text">
                I&apos;m a detail-driven Junior Business Analyst with a background in Political
                Science and a passion for turning research and data into clear, actionable insights.
                I enjoy simplifying complex processes, improving the way teams work, and making sure
                decisions are backed by reliable information.
              </p>
              <p className="about-text">
                From document management systems to internal reporting, I focus on understanding
                how people work, where the bottlenecks are, and what changes will truly make their
                day-to-day easier.
              </p>

              <div className="about-stats">
                <div className="stat-card">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Years of experience</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projects supported</span>
                </div>
              </div>

              <div className="about-tools">
                <p className="tools-title">Tools I use</p>
                <div className="tools-row">
                  <span className="tool-pill">Excel</span>
                  <span className="tool-pill">PowerPoint</span>
                  <span className="tool-pill">Word</span>
                  <span className="tool-pill">Teams</span>
                  <span className="tool-pill">SharePoint</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="content-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {sectionTitle('Experience', 'PROFESSIONAL JOURNEY')}
          <div className="timeline">
            <motion.article className="timeline-card" variants={itemVariants}>
              <div className="timeline-header">
                <div>
                  <h3>Junior Business Analyst</h3>
                  <p className="company">Secured Records Management Solutions · Abuja</p>
                </div>
                <span className="pill">May 2024 – Present</span>
              </div>
              <ul>
                <li>Conduct research and data analysis to support business improvement strategies.</li>
                <li>Gather, document, and analyze business requirements for document workflow solutions.</li>
                <li>Support implementation of document management systems to enhance operational efficiency.</li>
                <li>Collaborate with stakeholders to monitor and report performance metrics.</li>
                <li>Prepare presentations and visual reports for internal teams and management.</li>
              </ul>
            </motion.article>

            <motion.article className="timeline-card" variants={itemVariants}>
              <div className="timeline-header">
                <div>
                  <h3>Office Assistant</h3>
                  <p className="company">National Bureau of Statistics · Abuja</p>
                </div>
                <span className="pill">Jan 2024 – Apr 2024</span>
              </div>
              <ul>
                <li>Maintained organized records and supported planning for internal events.</li>
                <li>Assisted with internal documentation and office communication tasks.</li>
                <li>Supported teams with accurate, timely information for reporting.</li>
              </ul>
            </motion.article>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="content-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {sectionTitle('Skills & Strengths', 'CAPABILITIES')}
          <div className="skills-grid">
            <motion.div className="skill-group" variants={itemVariants}>
              <h3>Business & Analysis</h3>
              <div className="chip-row">
                <span className="chip">Business Process Analysis</span>
                <span className="chip">Requirement Gathering</span>
                <span className="chip">Data Collection & Documentation</span>
              </div>
            </motion.div>

            <motion.div className="skill-group" variants={itemVariants}>
              <h3>Tools & Productivity</h3>
              <div className="chip-row">
                <span className="chip">Microsoft Excel</span>
                <span className="chip">PowerPoint</span>
                <span className="chip">Word</span>
              </div>
            </motion.div>

            <motion.div className="skill-group" variants={itemVariants}>
              <h3>Core Strengths</h3>
              <div className="chip-row">
                <span className="chip">Research & Critical Thinking</span>
                <span className="chip">Report Writing</span>
                <span className="chip">Communication</span>
                <span className="chip">Team Collaboration</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="content-section projects-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="projects-title">My recent projects</h2>
          <p className="projects-subtitle">
            A snapshot of how I&apos;ve used research, data and documentation to make day‑to‑day
            work clearer and more organized.
          </p>

          <div className="projects-layout">
            <div className="projects-list">
              <div className="project-item">
                <div className="project-line"></div>
                <div>
                  <h3 className="project-heading">Document workflow improvement – SRMS</h3>
                  <p className="project-text">
                    Mapped current document handling, identified delays and duplicated work, and
                    supported a new workflow that reduced manual hand‑offs and improved tracking.
                  </p>
                </div>
              </div>

              <div className="project-item">
                <div className="project-line"></div>
                <div>
                  <h3 className="project-heading">Reporting dashboard support – SRMS</h3>
                  <p className="project-text">
                    Helped collect and structure operational data, define simple metrics and create
                    presentation‑ready summaries for management reviews.
                  </p>
                </div>
              </div>

              <div className="project-item">
                <div className="project-line faint"></div>
                <div>
                  <h3 className="project-heading faint">Service request tracking (concept)</h3>
                  <p className="project-text faint">
                    Concept for a centralized log of requests, status and owners to make follow‑up
                    easier for operations and admin teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="projects-card-wrapper">
              <div className="projects-shapes"></div>
              <div className="projects-card">
                <div className="projects-card-header"></div>
                <div className="projects-card-body">
                  <h4 className="projects-card-title">Operations dashboard concept</h4>
                  <p className="projects-card-text">
                    A simple layout showing incoming requests, processed files and pending tasks to
                    help managers quickly see where attention is needed.
                  </p>
                  <button className="projects-card-btn" type="button">
                    View details →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button className="projects-more" type="button">
            See more
          </button>
        </motion.section>

        <motion.section
          id="education"
          className="content-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {sectionTitle('Education', 'ACADEMIC BACKGROUND')}
          <div className="timeline">
            <article className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>National Youth Service Corps (NYSC)</h3>
                  <p className="company">Nigeria</p>
                </div>
                <span className="pill">Dec 2023 – Nov 2024</span>
              </div>
            </article>

            <article className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>B.Sc. Political Science</h3>
                  <p className="company">Obafemi Awolowo University · Ile-Ife</p>
                </div>
                <span className="pill">May 2018 – Aug 2023</span>
              </div>
            </article>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="contact-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="contact-card">
            <p className="section-kicker">CONTACT</p>
            <h2>Let&apos;s talk about your team or project.</h2>
            <p className="contact-text">
              I am open to Junior Business Analyst, Operations, Research, or Graduate roles in
              Abuja and remote-friendly opportunities.
            </p>
            <div className="contact-grid">
              <div>
                <p className="meta-label">Phone</p>
                <a href="tel:+2348114086683" className="contact-link">
                  0811 408 6683
                </a>
              </div>
              <div>
                <p className="meta-label">Email</p>
                <a href="mailto:bukolaadepoju0@gmail.com" className="contact-link">
                  bukolaadepoju0@gmail.com
                </a>
              </div>
              <div>
                <p className="meta-label">Location</p>
                <p className="contact-plain">Plot 617, Sunday Adewusi Street, Guzape, Abuja</p>
              </div>
            </div>

            <form className="contact-form">
              <div className="contact-field">
                <label className="field-label" htmlFor="phone">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="field-input"
                />
              </div>
              <div className="contact-field full">
                <label className="field-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  placeholder="Share a bit about your project, role or question…"
                  className="field-input field-textarea"
                ></textarea>
              </div>
              <button type="submit" className="contact-submit">
                Send message
              </button>
            </form>
          </div>
        </motion.section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Adepoju Bukola</span>
        <span className="footer-dot"></span>
        <span>Designed with care and data.</span>
      </footer>

      <form className="whatsapp-widget" onSubmit={handleWhatsAppSend}>
        <button
          type="button"
          className="whatsapp-icon"
          onClick={() => {
            const phone = '2349114086683'
            const url = `https://wa.me/${phone}`
            window.open(url, '_blank')
          }}
        >
          <img src={whatsappIcon} alt="Chat on WhatsApp" className="whatsapp-icon-img" />
        </button>
        <input
          className="whatsapp-input"
          type="text"
          placeholder="Chat with me on WhatsApp…"
          value={whatsAppMessage}
          onChange={(e) => setWhatsAppMessage(e.target.value)}
        />
        <button type="submit" className="whatsapp-send">
          Send
        </button>
      </form>

      <button
        type="button"
        className="scroll-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </div>
  )
}

export default App
