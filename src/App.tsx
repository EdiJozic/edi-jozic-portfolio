
import { useState } from "react";
import "./App.css";

type Language = "HR" | "EN";

const profile = {
  name: "Edi Jožić",
  email: "jozic.edi@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/edi-jo%C5%BEi%C4%87-6b116939a/",
  github: "https://github.com/",
};

const content = {
  HR: {
    navAbout: "O meni",
    navSkills: "Vještine",
    navProjects: "Projekti",
    navContact: "Kontakt",
    available: "OTVOREN ZA JUNIOR PRILIKE",
    heroGreeting: "Bok, ja sam",
    heroRole: "Prvostupnik informatike.",
    heroDescription:
      "Nedavno sam završio studij informatike i tražim priliku za početak profesionalne karijere u razvoju softvera. Volim učiti nove tehnologije, rješavati probleme i pretvarati ideje u funkcionalne projekte.",
    viewProjects: "Pogledaj projekte",
    contactMe: "Kontaktiraj me",
    aboutLabel: "01 — O MENI",
    aboutTitle: "Tehnologija, znatiželja i stalno učenje.",
    aboutText:
      "Završio sam studij informatike na Veleučilištu u Rijeci. Kroz fakultetske projekte stekao sam iskustvo u razvoju web aplikacija, radu s bazama podataka i izradi 3D sadržaja. Sada tražim junior poziciju na kojoj mogu dalje razvijati svoje znanje i doprinositi timu.",
    educationLabel: "OBRAZOVANJE",
    educationTitle: "Prvostupnik informatike",
    educationPlace: "Veleučilište u Rijeci",
    skillsLabel: "02 — VJEŠTINE",
    skillsTitle: "Tehnologije s kojima radim.",
    skillsText:
      "Znanja stečena kroz studij, osobne projekte i samostalno učenje.",
    projectsLabel: "03 — ODABRANI RADOVI",
    projectsTitle: "Projekti na kojima sam radio.",
    projectsText:
      "Od web aplikacija do 3D vizualizacije — projekti kroz koje razvijam svoje vještine.",
    github: "Otvori GitHub",
    watchVideo: "Pogledaj 3D video",
    contactLabel: "04 — JAVIMO SE",
    contactTitle: "Imate projekt ili junior priliku?",
    contactText:
      "Rado ću razgovarati o junior pozicijama, suradnji ili projektima na kojima mogu učiti i doprinositi.",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    emailCta: "Pošalji mi poruku",
    footer: "Izrađeno s Reactom, TypeScriptom i znatiželjom.",
    backTop: "Natrag na vrh ↑",
    closeVideo: "Zatvori video",
  },
  EN: {
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    available: "OPEN TO JUNIOR OPPORTUNITIES",
    heroGreeting: "Hi, I'm",
    heroRole: "Informatics graduate.",
    heroDescription:
      "I recently graduated in Informatics and am looking for an opportunity to start my professional career in software development. I enjoy learning new technologies, solving problems, and turning ideas into functional projects.",
    viewProjects: "View projects",
    contactMe: "Contact me",
    aboutLabel: "01 — ABOUT ME",
    aboutTitle: "Technology, curiosity, and continuous learning.",
    aboutText:
      "I graduated in Informatics from the Polytechnic of Rijeka. Through university projects, I gained experience in web application development, working with databases, and creating 3D content. I am now looking for a junior role where I can keep learning and contribute to a team.",
    educationLabel: "EDUCATION",
    educationTitle: "Bachelor's degree in Informatics",
    educationPlace: "Polytechnic of Rijeka",
    skillsLabel: "02 — SKILLS",
    skillsTitle: "Technologies I work with.",
    skillsText:
      "Knowledge gained through university, personal projects, and independent learning.",
    projectsLabel: "03 — SELECTED WORK",
    projectsTitle: "Projects I've worked on.",
    projectsText:
      "From web applications to 3D visualization — projects that help me develop my skills.",
    github: "View on GitHub",
    watchVideo: "Watch 3D video",
    contactLabel: "04 — LET'S CONNECT",
    contactTitle: "Have a project or a junior opportunity?",
    contactText:
      "I'd be happy to talk about junior roles, collaboration, or projects where I can learn and contribute.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    emailCta: "Send me a message",
    footer: "Built with React, TypeScript, and curiosity.",
    backTop: "Back to top ↑",
    closeVideo: "Close video",
  },
};

const projects = [
  {
    number: "01",
    title: "Trenerko",
    category: "WEB APPLICATION",
    descriptionHR:
      "Web platforma za sport i fitness s kartom objekata, programima, cijenama i korisničkim funkcionalnostima.",
    descriptionEN:
      "A sports and fitness platform featuring facility maps, programs, prices, and user functionality.",
    technologies: ["Vue", "Quasar", "Node.js", "Express", "MySQL"],
    type: "github",
    link: "https://github.com/EdiJozic/Trenerko",
    symbol: "↗",
  },
  {
    number: "02",
    title: "3D Classroom",
    category: "3D VISUALIZATION",
    descriptionHR:
      "Realističan 3D model informatičke učionice izrađen u Blenderu, uz animaciju kamere i promotivni video.",
    descriptionEN:
      "A realistic 3D model of an informatics classroom created in Blender, featuring camera animation and a promotional video.",
    technologies: ["Blender", "3D Modeling", "Animation", "Rendering"],
    type: "video",
    link: "/0250-2500.mp4",
    symbol: "▶",
  },
  {
    number: "03",
    title: "Exbensive",
    category: "WEB APPLICATION",
    descriptionHR:
      "Aplikacija za praćenje troškova i upravljanje osobnim financijama uz funkcionalnosti konverzije valuta.",
    descriptionEN:
      "An expense tracking and personal finance application with currency conversion functionality.",
    technologies: ["Vue", "Quasar", "JavaScript"],
    type: "github",
    link: "https://github.com/EdiJozic/Exbensive",
    symbol: "↗",
  },
  {
    number: "04",
    title: "Personal Portfolio",
    category: "WEB DEVELOPMENT",
    descriptionHR:
      "Osobna portfolio stranica izrađena za predstavljanje mojih projekata, vještina i profesionalnog profila.",
    descriptionEN:
      "A personal portfolio website built to showcase my projects, skills, and professional profile.",
    technologies: ["React", "TypeScript", "CSS"],
    type: "github",
    link: "https://github.com/EdiJozic/edi-jozic-portfolio",
    symbol: "↗",
  },
];


const skillGroups = [
  {
    titleHR: "Programiranje",
    titleEN: "Programming",
    skills: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Python",
      "C",
      "Objektno orijentirano programiranje",
      "Algoritmi",
    ],
  },
  {
    titleHR: "Web razvoj",
    titleEN: "Web Development",
    skills: [
      "HTML5",
      "CSS3",
      "React",
      "Vue.js",
      "Quasar",
      "Node.js",
      "Express.js",
      "REST API",
      "Responzivni web dizajn",
    ],
  },
  {
    titleHR: "Baze podataka",
    titleEN: "Databases",
    skills: [
      "SQL",
      "MySQL",
      "NoSQL",
      "Dizajn baza podataka",
    ],
  },
  {
    titleHR: "Razvojni alati",
    titleEN: "Development Tools",
    skills: ["Git", "GitHub", "WordPress"],
  },
  {
    titleHR: "Umjetna inteligencija",
    titleEN: "Artificial Intelligence",
    skills: [
      "AI alati",
      "Prompt engineering",
      "Strojno učenje",
    ],
  },
  {
    titleHR: "Ostalo",
    titleEN: "Other Skills",
    skills: [
      "Microsoft Office",
      "UI/UX dizajn",
      "UML",
      "3D modeliranje",
      "Grafički dizajn",
      "Društvene mreže",
      "Timski rad",
      "Rad na računalu",
    ],
  },
];

function App() {
  const [language, setLanguage] = useState<Language>("HR");
  const [videoOpen, setVideoOpen] = useState(false);
  const t = content[language];

  const openProject = (project: (typeof projects)[number]) => {
    if (project.type === "video") {
      setVideoOpen(true);
    } else {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="portfolio" id="home">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Edi Jožić home">
          EJ<span>.</span>
        </a>

        <nav className="main-nav">
          <a href="#about">{t.navAbout}</a>
          <a href="#skills">{t.navSkills}</a>
          <a href="#projects">{t.navProjects}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>

        <div className="header-actions">
          <button
            className="language-switch"
            onClick={() =>
              setLanguage((current) => (current === "HR" ? "EN" : "HR"))
            }
            aria-label="Change language"
          >
            <span className={language === "HR" ? "active-language" : ""}>
              HR
            </span>
            <span className="language-divider">/</span>
            <span className={language === "EN" ? "active-language" : ""}>
              EN
            </span>
          </button>
          <a className="header-contact" href="#contact">
            {t.contactMe} <span>↗</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              {t.available}
            </div>

            <p className="hero-greeting">{t.heroGreeting},</p>
            <h1>
              Edi <span>Jožić.</span>
            </h1>
            <h2>{t.heroRole}</h2>
            <p className="hero-description">{t.heroDescription}</p>

            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">
                {t.viewProjects} <span>↘</span>
              </a>
              <a className="button button-secondary" href="#contact">
                {t.contactMe} <span>↗</span>
              </a>
            </div>

            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={`mailto:${profile.email}`}>Email ↗</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-frame">
              <div className="photo-topline">
                <span>PORTFOLIO / 2026</span>
                <span>01—04</span>
              </div>
              <img
                className="profile-photo"
                src="/edi.jpg"
                alt="Edi Jožić"
              />
              <div className="photo-caption">
                <span>EDI JOŽIĆ</span>
                <span>INFORMATICS GRADUATE</span>
              </div>
              
            </div>
            <div className="hero-note">
              <span className="note-star">✳</span>
              <span>Learning by building.</span>
            </div>
          </div>
        </section>

        <section className="section-shell section-block" id="about">
          <div className="section-heading">
            <p className="section-label">{t.aboutLabel}</p>
            <span className="section-line" />
          </div>

          <div className="about-grid">
            <h2 className="section-title">{t.aboutTitle}</h2>
            <div className="about-copy">
              <p>{t.aboutText}</p>
              <div className="education-card">
                <span className="education-icon">↗</span>
                <div>
                  <span className="card-overline">{t.educationLabel}</span>
                  <h3>{t.educationTitle}</h3>
                  <p>{t.educationPlace}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
<section className="section-shell section-block" id="skills">
  <div className="section-heading">
    <p className="section-label">{t.skillsLabel}</p>
    <span className="section-line" />
  </div>

  <div className="skills-intro">
    <h2 className="section-title">{t.skillsTitle}</h2>
    <p>{t.skillsText}</p>
  </div>

  <div className="skill-groups">
    {skillGroups.map((group, index) => (
      <div className="skill-group" key={group.titleHR}>
        <div className="skill-group-heading">
          <span className="skill-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>
            {language === "HR" ? group.titleHR : group.titleEN}
          </h3>
        </div>

        <div className="skill-tags">
          {group.skills.map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

        <section className="section-shell section-block" id="projects">
          <div className="section-heading">
            <p className="section-label">{t.projectsLabel}</p>
            <span className="section-line" />
          </div>

          <div className="projects-intro">
            <h2 className="section-title">{t.projectsTitle}</h2>
            <p>{t.projectsText}</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <button
                type="button"
                className={`project-card ${
                  project.type === "video" ? "video-project" : ""
                }`}
                key={project.number}
                onClick={() => openProject(project)}
              >
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                  <span className="project-arrow">{project.symbol}</span>
                </div>

                <div className="project-preview">
                  {project.type === "video" ? (
                    <div className="preview-3d">
                      <span className="preview-grid" />
                      <span className="preview-cube">◇</span>
                      <span className="preview-play">▶</span>
                      <span className="preview-label">BLENDER / RENDER</span>
                    </div>
                  ) : (
                    <div className="preview-code">
                      <span className="code-line code-line-short" />
                      <span className="code-line" />
                      <span className="code-line code-line-medium" />
                      <span className="code-line code-line-short" />
                      <span className="code-line code-line-long" />
                      <span className="code-prompt">&gt; build something useful_</span>
                    </div>
                  )}
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>
                    {language === "HR"
                      ? project.descriptionHR
                      : project.descriptionEN}
                  </p>
                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <div className="project-link">
                    {project.type === "video" ? t.watchVideo : t.github}
                    <span>{project.symbol}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="section-shell section-block" id="contact">
          <div className="section-heading">
            <p className="section-label">{t.contactLabel}</p>
            <span className="section-line" />
          </div>

          <div className="contact-panel">
            <div className="contact-copy">
              <p className="contact-kicker">OPEN TO OPPORTUNITIES</p>
              <h2>{t.contactTitle}</h2>
              <p className="contact-description">{t.contactText}</p>
              <a
                className="button button-primary contact-button"
                href={`mailto:${profile.email}`}
              >
                {t.emailCta} <span>↗</span>
              </a>
            </div>

            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                <span>{t.emailLabel}</span>
                <strong>{profile.email}</strong>
                <span className="contact-link-arrow">↗</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <span>{t.linkedinLabel}</span>
                <strong>LinkedIn profile</strong>
                <span className="contact-link-arrow">↗</span>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <span>{t.githubLabel}</span>
                <strong>GitHub profile</strong>
                <span className="contact-link-arrow">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="wordmark" href="#home">
          EJ<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} Edi Jožić. {t.footer}
        </p>
        <a href="#home">{t.backTop}</a>
      </footer>

      {videoOpen && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="3D Classroom video"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setVideoOpen(false);
            }
          }}
        >
          <div className="video-modal-content">
            <div className="video-modal-header">
              <div>
                <span className="video-modal-overline">PROJECT 02</span>
                <h2>3D Classroom</h2>
              </div>
              <button
                type="button"
                className="video-close"
                onClick={() => setVideoOpen(false)}
                aria-label={t.closeVideo}
              >
                ✕ <span>{t.closeVideo}</span>
              </button>
            </div>
            <video
              className="project-video"
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              <source src="/0250-2500.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;