import { useState } from "react";
import "./App.css";
import ediPhoto from "./assets/edi.jpg";

type Language = "hr" | "en";

const content = {
  hr: {
    navAbout: "O meni",
    navProjects: "Projekti",
    navSkills: "Vještine",
    navContact: "Kontakt",

    label: "DIPLOMIRANI INFORMATIČAR",
    greeting: "Bok, ja sam Edi.",
    role: "Gradim. Učim. Napredujem.",

    intro:
      "Završio sam studij informatike i tražim priliku za početak profesionalne karijere u razvoju softvera. Volim učiti nove tehnologije i pretvarati ideje u konkretne projekte.",

    projectsButton: "Moji projekti",
    contactButton: "Kontaktiraj me",

    photo: "Tvoja fotografija",

    aboutTitle: "Nešto o meni",

    aboutText:
      "Bok, ja sam Edi. Nedavno sam završio studij Informatike na Veleučilištu u Rijeci i trenutno tražim priliku za početak svoje profesionalne karijere u IT industriji. Tijekom studija stekao sam iskustvo u radu s različitim tehnologijama i programskim jezicima, uključujući Java, JavaScript, HTML, CSS, SQL i Node.js. Posebno me zanima web development, zbog čega trenutno dodatno učim React, TypeScript i moderne pristupe razvoju web aplikacija. Kroz fakultetske projekte radio sam na razvoju aplikacija, radu s bazama podataka i povezivanju različitih tehnologija u funkcionalne sustave. Jedan od većih projekata bio je Trenerko, web platforma za sportske i fitness objekte razvijena uz Vue, Quasar, Node.js i MySQL. Također sam kroz završni rad radio na izradi 3D modela informatičke učionice, animaciji kamere i izradi promotivnog videa u Blenderu. Najviše me motivira učenje novih tehnologija i rješavanje konkretnih problema kroz programiranje. Trenutno tražim juniorsku poziciju na kojoj bih mogao primijeniti dosadašnje znanje, nastaviti učiti od iskusnijih kolega i postupno graditi svoje iskustvo kao developer.",

    projectsTitle: "Izdvojeni projekti",
    projectsIntro:
      "Projekti na kojima sam radio i kroz koje nastavljam učiti.",

    trainerDesc:
      "Platforma za sportske objekte, programe, pretraživanje i planiranje aktivnosti.",

    blenderDesc:
      "3D model informatičke učionice s animacijom kamere i promotivnim videom.",

    portfolioDesc:
      "Osobna web stranica izrađena pomoću Reacta i TypeScripta.",

    exbensiveDesc:
      "Web aplikacija za praćenje osobnih troškova i konverziju valuta na dnevnoj i mjesečnoj bazi.",

    viewProject: "Pogledaj projekt",

    skillsTitle: "Tehnologije i vještine",

    contactTitle: "Upoznajmo se",

    contactText:
      "Tražim priliku za početak profesionalne karijere i otvoren sam za junior pozicije.",

    emailButton: "Pošalji mi e-mail",

    footer: "Izrađeno s Reactom i željom za učenjem.",
  },

  en: {
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",

    label: "INFORMATICS GRADUATE",
    greeting: "Hi, I'm Edi.",
    role: "Building. Learning. Growing.",

    intro:
      "I have completed my Informatics degree and am looking for an opportunity to start my professional career in software development. I enjoy learning new technologies and turning ideas into real projects.",

    projectsButton: "View projects",
    contactButton: "Get in touch",

    photo: "Your photo",

    aboutTitle: "A little about me",

    aboutText:
      "Hi, I'm Edi. I recently completed my degree in Informatics at the University of Applied Sciences in Rijeka, and I am currently looking for an opportunity to start my professional career in the IT industry. During my studies, I gained experience working with different technologies and programming languages, including Java, JavaScript, HTML, CSS, SQL, and Node.js. I am particularly interested in web development, which is why I am currently expanding my knowledge of React, TypeScript, and modern approaches to building web applications. Throughout my studies, I worked on various projects involving application development, databases, and connecting different technologies into functional systems. One of my main projects was Trenerko, a web platform for sports and fitness facilities built with Vue, Quasar, Node.js, and MySQL. For my final thesis, I also created a realistic 3D model of an IT classroom, developed camera animations, and created a promotional video using Blender. What motivates me most is learning new technologies and solving real-world problems through programming. I am currently looking for a junior position where I can apply the knowledge I have gained, learn from experienced developers, and continue growing as a software developer.",

    projectsTitle: "Featured projects",
    projectsIntro: "Projects I've worked on and continue learning from.",

    trainerDesc:
      "A platform for sports facilities, programs, searching and activity planning.",

    blenderDesc:
      "A 3D model of an IT classroom featuring camera animation and a promotional video.",

    portfolioDesc:
      "A personal website built with React and TypeScript.",

    exbensiveDesc:
      "A web application for tracking personal expenses and currency conversion on a daily and monthly basis.",

    viewProject: "View project",

    skillsTitle: "Technologies and skills",

    contactTitle: "Let's connect",

    contactText:
      "I'm looking for an opportunity to start my professional career and am open to junior positions.",

    emailButton: "Send me an email",

    footer: "Built with React and a passion for learning.",
  },
};

const projects = [
  {
    number: "01",
    name: "Trenerko",
    category: "WEB APPLICATION",
    descriptionKey: "trainerDesc",
    technologies: ["Vue", "Quasar", "Node.js", "MySQL", "REST API"],
    icon: "◈",
    link: "https://github.com/EdiJozic/Trenerko",
  },
  {
    number: "02",
    name: "3D informatička učionica",
    category: "3D & ANIMATION",
    descriptionKey: "blenderDesc",
    technologies: ["Blender", "3D Modeling", "Animation"],
    icon: "⬡",
  },
  {
    number: "03",
    name: "Personal Portfolio",
    category: "WEB DEVELOPMENT",
    descriptionKey: "portfolioDesc",
    technologies: ["React", "TypeScript", "CSS"],
    icon: "</>",
    link: "https://github.com/EdiJozic/edi-jozic-portfolio",
  },
  {
    number: "04",
    name: "Exbensive",
    category: "WEB APPLICATION",
    descriptionKey: "exbensiveDesc",
    technologies: ["Vue", "Quasar", "JavaScript", "Backend"],
    icon: "€",
    link: "https://github.com/EdiJozic/Exbensive",
  },
];

const skills = [
  "Java",
  "JavaScript",
  "React",
  "HTML & CSS",
  "SQL",
  "Node.js",
  "Git",
  "Python",
  "Linux",
  "Blender",
  "REST API",
  "Machine Learning",
  "AI",
  "Problem Solving",
  "Teamwork",
  "Express.js",
  "Vue.js",
  "Figma",
  "Data Modeling",
];

function App() {
  const [language, setLanguage] = useState<Language>("hr");

  const t = content[language];

  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=jozic.edi@gmail.com";

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home">
          E<span>.</span>J
        </a>

        <nav className="nav-links">
          <a href="#about">{t.navAbout}</a>
          <a href="#projects">{t.navProjects}</a>
          <a href="#skills">{t.navSkills}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>

        <button
          className="language-button"
          onClick={() =>
            setLanguage((current) => (current === "hr" ? "en" : "hr"))
          }
        >
          {language === "hr" ? "EN ↗" : "HR ↗"}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" />
              {t.label} · CROATIA
            </p>

            <h1>{t.greeting}</h1>

            <h2>{t.role}</h2>

            <p className="hero-description">{t.intro}</p>

            <div className="hero-buttons">
              <a className="button primary" href="#projects">
                {t.projectsButton} <span>↗</span>
              </a>

              <a
                className="button secondary"
                href={gmailLink}
                target="_blank"
                rel="noreferrer"
              >
                {t.contactButton}
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/EdiJozic"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/edi-jo%C5%BEi%C4%87-6b116939a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* PHOTO */}
          <div className="hero-visual">
            <div className="photo-frame">
              <div className="photo-placeholder">
                <img src={ediPhoto} alt="Edi Jožić" />
              </div>

              <div className="photo-decoration" />
            </div>

            <div className="floating-tag">
              <span className="status-dot" />
              Open to opportunities
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <p className="eyebrow">01 / ABOUT</p>

          <h2 className="section-title">{t.aboutTitle}</h2>

          <p className="section-description">{t.aboutText}</p>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <p className="eyebrow">02 / SELECTED WORK</p>

          <h2 className="section-title">{t.projectsTitle}</h2>

          <p className="section-description">{t.projectsIntro}</p>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-icon">{project.icon}</span>

                  <span className="project-number">
                    {project.number}
                  </span>
                </div>

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {t[project.descriptionKey as keyof typeof t]}
                </p>

                <div className="tech-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {project.link && (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.viewProject} ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <p className="eyebrow">03 / TOOLKIT</p>

          <h2 className="section-title">{t.skillsTitle}</h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <span className="skill-item" key={skill}>
                <span className="skill-check">↗</span>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <p className="eyebrow">04 / CONTACT</p>

          <h2 className="section-title">{t.contactTitle}</h2>

          <p className="section-description">{t.contactText}</p>

          <a
            className="button primary"
            href={gmailLink}
            target="_blank"
            rel="noreferrer"
          >
            {t.emailButton} ↗
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a className="brand" href="#home">
          E<span>.</span>J
        </a>

        <p>© {new Date().getFullYear()} Edi Jožić</p>

        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;