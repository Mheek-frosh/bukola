import { motion } from 'framer-motion'
import bukImg from './assets/buk.png'
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
  return (
    <div className="page">
      <div className="page-gradient"></div>
      <header className="nav">
        <div className="nav-left">
          <span className="nav-dot"></span>
          <span className="nav-name">Adepoju Bukola</span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Highlights</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="nav-cta">
          Let&apos;s work together
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
          <motion.div className="hero-photo-card" variants={fadeInUp}>
            <img src={bukImg} alt="Portrait of Adepoju Bukola" className="hero-photo" />
          </motion.div>

          <motion.div className="hero-text" variants={itemVariants}>
            <p className="eyebrow">Junior Business Analyst · Abuja, Nigeria</p>
            <h1>
              Turning <span className="highlight">data</span> into
              <br />
              confident business decisions.
            </h1>
            <p className="hero-tagline">
              Detail-oriented Political Science graduate specializing in research, data interpretation,
              and process optimization. Currently helping organizations streamline document workflows
              and make smarter, data-driven decisions.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-btn">
                Book a conversation
              </a>
              <a href="#experience" className="ghost-btn">
                View experience
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <p className="meta-label">Location</p>
                <p className="meta-value">Guzape, Abuja, Nigeria</p>
              </div>
              <div>
                <p className="meta-label">Open to</p>
                <p className="meta-value">Business Analyst · Operations · Research roles</p>
              </div>
            </div>
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
          className="content-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {sectionTitle('Value I Bring', 'HIGHLIGHTS')}
          <div className="cards-grid">
            <motion.article className="value-card" variants={itemVariants}>
              <h3>Data-informed decisions</h3>
              <p>
                I translate raw data into clear, structured insights that help decision-makers
                understand what is happening and why it matters.
              </p>
            </motion.article>
            <motion.article className="value-card" variants={itemVariants}>
              <h3>Organized operations</h3>
              <p>
                From document management to reporting workflows, I help bring order, clarity, and
                repeatability to everyday processes.
              </p>
            </motion.article>
            <motion.article className="value-card" variants={itemVariants}>
              <h3>Strong communication</h3>
              <p>
                I am comfortable working with technical and non-technical stakeholders, ensuring
                everyone is aligned on goals, timelines, and outcomes.
              </p>
            </motion.article>
          </div>
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
          </div>
        </motion.section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Adepoju Bukola</span>
        <span className="footer-dot"></span>
        <span>Designed with care and data.</span>
      </footer>
    </div>
  )
}

export default App
