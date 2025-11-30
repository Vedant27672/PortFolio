// ------- GLOBAL LINK CONFIG ------- //
let linkConfig = {};

// ------- DATA CONFIG (non-link content) ------- //

const resumeData = {
    personalInfo: {
        name: "Vedant Singh Chauhan",
        role: "Software Engineer at Salescode.ai",
        location: "India",
        tagline:
            "I enjoy designing reliable backends, clean APIs, and data-heavy systems that actually ship.",
        contact: {
            email: "vedant.chauhan213@gmail.com",
            phone: "+91-8924029890"
        },
        status: "Open to impactful backend, data, and ML opportunities"
    },
    profiles: [
        {
            key: "github",
            name: "GitHub",
            url: "",       // will be filled from data.json
            icon: "🐙"
        },
        {
            key: "linkedin",
            name: "LinkedIn",
            url: "",
            icon: "💼"
        },
        {
            key: "leetcode",
            name: "LeetCode",
            url: "",
            icon: "🧠"
        }
    ],
    workExperience: [
        {
            role: "Software Engineer",
            company: "Salescode.ai",
            location: "On-site",
            duration: "June 2025 – Present",
            summary:
                "Part of a product team building microservice-based systems for data-heavy use cases. I mostly work with Java Spring Boot, MySQL, and internal data pipelines.",
            highlights: [
                "Own development of several Spring Boot microservices used across the platform.",
                "Automated internal reporting with Jasper Reports and optimized MySQL queries.",
                "Collaborate with a 6-member Agile team to ship features reliably."
            ]
        }
    ],
    education: [
        {
            degree: "B.Tech · Computer Science and Engineering",
            institution: "Jaypee Institute of Information Technology, Noida",
            duration: "2022 – 2026",
            extra: "Current CGPA: 8.0 / 10"
        },
        {
            degree: "Intermediate (ISC)",
            institution: "City Montessori School, Lucknow",
            duration: "2021 – 2022",
            extra: "Percentage: 96.5%"
        }
    ],
    projects: [
        {
            key: "projectCampease",
            name: "CampEase",
            description:
                "A full-stack platform for finding and managing campgrounds with authentication, reviews, and a smooth booking flow.",
            url: "",
            tags: ["Node.js", "Express", "MongoDB", "EJS", "Auth"],
            status: "Live"
        },
        {
            key: "projectPcosBlockchain",
            name: "PCOS Synthetic Dataset & Blockchain Storage",
            description:
                "Experimental system that generates synthetic medical datasets (PCOS) using CTGAN and stores metadata on a custom blockchain for integrity.",
            url: "",
            tags: ["Flask", "CTGAN", "Blockchain", "MongoDB"],
            status: "Research"
        },
        {
            key: "projectPcosDetection",
            name: "PCOS Detection Tool",
            description:
                "Ultrasound image classifier with MobileNet and Grad-CAM visualizations so doctors can see why a prediction is made.",
            url: "",
            tags: ["Flask", "MobileNet", "Grad-CAM", "TensorFlow"],
            status: "Live"
        }
    ],
    technicalSkills: [
        {
            category: "Languages",
            items: ["C", "C++", "Java", "Python", "JavaScript", "SQL", "HTML/CSS"]
        },
        {
            category: "Backend & APIs",
            items: ["Spring Boot", "Express.js", "Flask", "REST API Design"]
        },
        {
            category: "Databases & Data",
            items: ["MySQL", "MongoDB", "Database Design", "Jolt", "Jasper Reports", "Apache NiFi"]
        },
        {
            category: "ML & Tools",
            items: ["TensorFlow", "Keras", "CTGAN", "Git", "VS Code", "Linux basics"]
        }
    ],
    achievements: [
        {
            title: "IC3 2025 Paper Acceptance",
            detail:
                "Paper on the PCOS Detection Tool accepted at the IC3 2025 conference, focusing on explainable AI in medical imaging.",
            link: "https://drive.google.com/file/d/18CDeVRNe5u1YFrjGy5-y4NpHcm3ZXC1m/view?usp=drive_link"
        },
        {
            title: "Ride-Hack 2024 · Top 10",
            detail:
                "Reached the Top 10 among 50+ teams at JIIT’s Ride-Hack for Metropolis Assist, a smart transport assistant."
        },
        {
            title: "800+ Coding Problems",
            detail:
                "Solved 800+ problems across LeetCode, HackerRank, and GFG, building a strong base in data structures and algorithms."
        },
        {
            title: "Full-Stack Web Dev",
            detail:
                "Completed a full-stack web development course and put it into practice through real deployed projects.",
            link: "https://drive.google.com/file/d/1bL8lF9IzDSUDV381Z_tF4mNATMbVuWCX/view?usp=sharing"
        }
    ],
    resume: {
        file: "", // from data.json if present
        displayName: "Resume_Vedant_Singh_Chauhan_213.pdf.pdf"
    }
};

// ------- APPLY CONFIG FROM data.json ------- //

function applyLinkConfig() {
    // Profiles
    resumeData.profiles.forEach((p) => {
        if (p.key && linkConfig[p.key]) {
            p.url = linkConfig[p.key];
        }
    });

    // Projects
    resumeData.projects.forEach((proj) => {
        if (proj.key && linkConfig[proj.key]) {
            proj.url = linkConfig[proj.key];
        }
    });

    // Resume PDF
    if (linkConfig.resumePdf) {
        resumeData.resume.file = linkConfig.resumePdf;
        resumeData.resume.displayName = linkConfig.resumePdf;
    } else {
        // fallback
        resumeData.resume.file = "Resume_Vedant_Singh_Chauhan_213.pdf";
    }
}

// Helper to get photo path with fallback
function getProfilePhoto() {
    return linkConfig.profilePhoto || "Images/Photo_neww.jpg";
}

// ------- HELPERS ------- //

function createElement(tag, options = {}) {
    const el = document.createElement(tag);
    const { className, text, html, attrs = {} } = options;

    if (className) el.className = className;
    if (text) el.textContent = text;
    if (html) el.innerHTML = html;

    Object.entries(attrs).forEach(([key, value]) => {
        el.setAttribute(key, value);
    });

    return el;
}

function smoothScrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -10;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
}

// ------- RENDER FUNCTIONS ------- //

function renderThemeToggle(container) {
    const wrapper = createElement("div", { className: "theme-toggle" });
    const button = createElement("button");
    const iconSpan = createElement("span", { text: "🌙" });
    const textSpan = createElement("span", { text: "Dark" });

    button.appendChild(iconSpan);
    button.appendChild(textSpan);

    const prefersLight =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches;

    if (prefersLight) {
        document.body.classList.add("light-theme");
        iconSpan.textContent = "☀️";
        textSpan.textContent = "Light";
    }

    button.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-theme");
        if (isLight) {
            iconSpan.textContent = "☀️";
            textSpan.textContent = "Light";
        } else {
            iconSpan.textContent = "🌙";
            textSpan.textContent = "Dark";
        }
    });

    wrapper.appendChild(button);
    container.appendChild(wrapper);
}

function renderHero(container) {
    const header = createElement("header", { className: "hero" });

    const orbit = createElement("div", { className: "hero-accent-orbit" });
    const dot = createElement("div", { className: "hero-accent-dot" });
    header.appendChild(orbit);
    header.appendChild(dot);

    const heroMain = createElement("div", { className: "hero-main" });

    const heroText = createElement("div", { className: "hero-text" });

    const title = createElement("h1", {
        className: "hero-title",
        text: resumeData.personalInfo.name
    });

    const role = createElement("p", {
        className: "hero-role",
        text: resumeData.personalInfo.role
    });

    const meta = createElement("div", { className: "hero-meta" });

    const locationSpan = createElement("span", {
        text: `📍 ${resumeData.personalInfo.location}`
    });

    const statusBadge = createElement("span", { className: "hero-badge" });
    const statusDot = createElement("span", { className: "hero-badge-dot" });
    const statusText = createElement("span", {
        text: resumeData.personalInfo.status
    });
    statusBadge.appendChild(statusDot);
    statusBadge.appendChild(statusText);

    meta.appendChild(locationSpan);
    meta.appendChild(statusBadge);

    const subtitle = createElement("p", {
        className: "hero-subtitle",
        text: resumeData.personalInfo.tagline
    });

    const actions = createElement("div", { className: "hero-actions" });

    const primaryBtn = createElement("button", {
        className: "btn btn-primary"
    });
    primaryBtn.innerHTML = `View Resume <span>↗</span>`;
    primaryBtn.addEventListener("click", () => {
        smoothScrollTo("resume-section");
    });

    const ghostBtn = createElement("button", {
        className: "btn btn-ghost"
    });
    ghostBtn.innerHTML = `Contact Me`;
    ghostBtn.addEventListener("click", () => {
        const mailTo = `mailto:${resumeData.personalInfo.contact.email}`;
        window.location.href = mailTo;
    });

    actions.appendChild(primaryBtn);
    actions.appendChild(ghostBtn);

    heroText.appendChild(title);
    heroText.appendChild(role);
    heroText.appendChild(meta);
    heroText.appendChild(subtitle);
    heroText.appendChild(actions);

    // PROFILE PHOTO (from config)
    const heroVisual = createElement("div", { className: "hero-visual" });
    const heroImg = createElement("img", {
        className: "hero-photo",
        attrs: {
            src: getProfilePhoto(),
            alt: "Vedant Singh Chauhan",
            loading: "lazy"
        }
    });
    heroVisual.appendChild(heroImg);

    heroMain.appendChild(heroText);
    heroMain.appendChild(heroVisual);

    header.appendChild(heroMain);
    container.appendChild(header);
}

function renderNav(container) {
    const sections = [
        { id: "profiles-section", label: "Profiles" },
        { id: "work-section", label: "Work" },
        { id: "education-section", label: "Education" },
        { id: "projects-section", label: "Projects" },
        { id: "skills-section", label: "Skills" },
        { id: "achievements-section", label: "Achievements" },
        { id: "resume-section", label: "Resume" }
    ];

    const navBar = createElement("nav", { className: "navbar" });

    sections.forEach((section, idx) => {
        const pill = createElement("button", {
            className: "nav-pill",
            text: section.label
        });
        if (idx === 0) pill.classList.add("active");

        pill.addEventListener("click", () => {
            document
                .querySelectorAll(".nav-pill")
                .forEach((p) => p.classList.remove("active"));
            pill.classList.add("active");
            smoothScrollTo(section.id);
        });

        navBar.appendChild(pill);
    });

    container.appendChild(navBar);
}

function renderProfilesSection(container) {
    const section = createElement("section", {
        className: "section",
        attrs: { id: "profiles-section" }
    });

    const header = createElement("div", { className: "section-header" });
    const title = createElement("h2", {
        className: "section-title",
        text: "Profiles"
    });
    const pill = createElement("span", {
        className: "section-pill",
        text: "Online presence"
    });

    header.appendChild(title);
    header.appendChild(pill);
    section.appendChild(header);

    const inlineList = createElement("ul", { className: "inline-list" });

    resumeData.profiles.forEach((profile) => {
        const li = createElement("li");
        const pillDiv = createElement("div", { className: "inline-pill" });

        const iconSpan = createElement("span", {
            className: "icon",
            text: profile.icon
        });
        const link = createElement("a", {
            text: profile.name,
            attrs: {
                href: profile.url || "#",
                target: "_blank",
                rel: "noopener noreferrer"
            }
        });

        pillDiv.appendChild(iconSpan);
        pillDiv.appendChild(link);
        li.appendChild(pillDiv);
        inlineList.appendChild(li);
    });

    section.appendChild(inlineList);
    container.appendChild(section);
}

function renderWorkSection(container) {
    const section = createElement("section", {
        className: "section",
        attrs: { id: "work-section" }
    });

    const header = createElement("div", { className: "section-header" });
    const title = createElement("h2", {
        className: "section-title",
        text: "Work Experience"
    });
    const pill = createElement("span", {
        className: "section-pill",
        text: "What I do"
    });

    header.appendChild(title);
    header.appendChild(pill);
    section.appendChild(header);

    const cardList = createElement("div", { className: "card-list" });

    resumeData.workExperience.forEach((job) => {
        const card = createElement("article", { className: "card" });

        const cardTitle = createElement("h3", {
            className: "card-title",
            text: `${job.role} · ${job.company}`
        });

        const cardSubtitle = createElement("p", {
            className: "card-subtitle",
            text: `${job.location} · ${job.duration}`
        });

        const summary = createElement("p", {
            text: job.summary
        });

        // ✅ No <ul>/<li> now — just plain text lines
        const highlightsContainer = createElement("div", {
            className: "highlights-block"
        });

        job.highlights.forEach((h) => {
            const p = createElement("p", { text: h });
            highlightsContainer.appendChild(p);
        });

        card.appendChild(cardTitle);
        card.appendChild(cardSubtitle);
        card.appendChild(summary);
        card.appendChild(highlightsContainer);

        cardList.appendChild(card);
    });

    section.appendChild(cardList);
    container.appendChild(section);
}


function renderEducationSection(container) {
    const section = createElement("section", {
        className: "section",
        attrs: { id: "education-section" }
    });

    const header = createElement("div", { className: "section-header" });
    const title = createElement("h2", {
        className: "section-title",
        text: "Education"
    });
    const pill = createElement("span", {
        className: "section-pill",
        text: "Academics"
    });

    header.appendChild(title);
    header.appendChild(pill);
    section.appendChild(header);

    const cardList = createElement("div", { className: "card-list" });

    resumeData.education.forEach((edu) => {
        const card = createElement("article", { className: "card" });

        const cardTitle = createElement("h3", {
            className: "card-title",
            text: edu.degree
        });

        const cardSubtitle = createElement("p", {
            className: "card-subtitle",
            text: `${edu.institution} · ${edu.duration}`
        });

        const extra = createElement("p", { text: edu.extra });

        card.appendChild(cardTitle);
        card.appendChild(cardSubtitle);
        card.appendChild(extra);
        cardList.appendChild(card);
    });

    section.appendChild(cardList);
    container.appendChild(section);
}

function renderProjectsSection(container) {
    const section = createElement("section", {
        className: "section",
        attrs: { id: "projects-section" }
    });

    const header = createElement("div", { className: "section-header" });
    const title = createElement("h2", {
        className: "section-title",
        text: "Projects"
    });
    const pill = createElement("span", {
        className: "section-pill",
        text: "Built & deployed"
    });

    header.appendChild(title);
    header.appendChild(pill);
    section.appendChild(header);

    const cardList = createElement("div", { className: "card-list" });

    resumeData.projects.forEach((project) => {
        const card = createElement("article", { className: "card" });

        const cardTitle = createElement("h3", {
            className: "card-title",
            text: project.name
        });

        const cardSubtitle = createElement("p", {
            className: "card-subtitle",
            text: project.description
        });

        const meta = createElement("div", { className: "card-meta" });
        const status = createElement("span", {
            text: project.status
        });
        meta.appendChild(status);

        const footer = createElement("div", { className: "card-footer" });

        let link;
        if (project.url && project.url !== "#") {
            link = createElement("a", {
                text: "Open project ↗",
                attrs: {
                    href: project.url,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            });
        } else {
            link = createElement("span", {
                text: "Code / demo coming soon"
            });
        }

        const tags = createElement("span", {
            text: project.tags.join(" • ")
        });

        footer.appendChild(link);
        footer.appendChild(tags);

        card.appendChild(cardTitle);
        card.appendChild(cardSubtitle);
        card.appendChild(meta);
        card.appendChild(footer);

        cardList.appendChild(card);
    });

    section.appendChild(cardList);
    container.appendChild(section);
}

function renderSkillsSection(container) {
    const section = createElement("section", {
        className: "section",
        attrs: { id: "skills-section" }
    });

    const header = createElement("div", { className: "section-header" });
    const title = createElement("h2", {
        className: "section-title",
        text: "Technical Skills"
    });
    const pill = createElement("span", {
        className: "section-pill",
        text: "What I work with"
    });

    header.appendChild(title);
    header.appendChild(pill);
    section.appendChild(header);

    const cardList = createElement("div", { className: "card-list" });

    resumeData.technicalSkills.forEach((group) => {
        const card = createElement("article", { className: "card" });

        const cardTitle = createElement("h3", {
            className: "card-title",
            text: group.category
        });

        const items = createElement("p", {
            text: group.items.join(" · ")
        });

        card.appendChild(cardTitle);
        card.appendChild(items);
        cardList.appendChild(card);
    });

    section.appendChild(cardList);
    container.appendChild(section);
}

function renderAchievementsSection(container) {
    const section = createElement("section", {
        className: "section",
        attrs: { id: "achievements-section" }
    });

    const header = createElement("div", { className: "section-header" });
    const title = createElement("h2", {
        className: "section-title",
        text: "Highlights"
    });
    const pill = createElement("span", {
        className: "section-pill",
        text: "A few wins"
    });

    header.appendChild(title);
    header.appendChild(pill);
    section.appendChild(header);

    const cardList = createElement("div", { className: "card-list" });

    resumeData.achievements.forEach((ach) => {
        const card = createElement("article", { className: "card" });

        const cardTitle = createElement("h3", {
            className: "card-title",
            text: ach.title
        });

        const detail = createElement("p", {
            className: "card-subtitle",
            text: ach.detail
        });

        card.appendChild(cardTitle);
        card.appendChild(detail);

        // If this achievement has a link, show a "View Document" anchor
        if (ach.link) {
            const linkEl = createElement("a", {
                className: "card-link",
                text: "View Document ↗",
                attrs: {
                    href: ach.link,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            });
            card.appendChild(linkEl);
        }

        cardList.appendChild(card);
    });

    section.appendChild(cardList);
    container.appendChild(section);
}

// Resume viewer: unchanged behavior, just uses resumeData.resume.file
function renderResumeSection(container) {
    const section = createElement("section", {
        className: "section",
        attrs: { id: "resume-section" }
    });

    const header = createElement("div", { className: "section-header" });
    const title = createElement("h2", {
        className: "section-title",
        text: "Resume"
    });
    const pill = createElement("span", {
        className: "section-pill",
        text: "PDF preview"
    });

    header.appendChild(title);
    header.appendChild(pill);
    section.appendChild(header);

    const desc = createElement("p", {
        text: "Preview the full resume below or open it in a new tab."
    });

    section.appendChild(desc);

    const embedContainer = createElement("div", {
        className: "resume-embed-container"
    });

    const iframe = createElement("iframe", {
        className: "resume-embed",
        attrs: {
            src: `${resumeData.resume.file}#toolbar=0&navpanes=0&scrollbar=0`,
            title: "Resume Preview",
            loading: "lazy"
        }
    });
    embedContainer.appendChild(iframe);

    const fallback = createElement("p", {
        html: `If the resume does not load, <a href="${resumeData.resume.file}" target="_blank" rel="noopener noreferrer">click here to open ${resumeData.resume.displayName}</a>.`
    });

    section.appendChild(embedContainer);
    section.appendChild(fallback);

    container.appendChild(section);
}

function renderFooter(container) {
    const footer = createElement("footer", { className: "site-footer" });

    const left = createElement("span", {
        text: `Contact: ${resumeData.personalInfo.contact.email} | ${resumeData.personalInfo.contact.phone}`
    });

    footer.appendChild(left);
    container.appendChild(footer);
}

// ------- ANIMATIONS / SCROLL REVEAL ------- //

function setupScrollReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    document.querySelectorAll("section.section").forEach((section) => {
        observer.observe(section);
    });
}

// ------- MAIN RENDER ------- //

function renderApp() {
    const app = document.getElementById("app");
    if (!app) return;

    const shell = createElement("div", { className: "app-shell" });

    const glow1 = createElement("div", { className: "glow glow-1" });
    const glow2 = createElement("div", { className: "glow glow-2" });
    document.body.appendChild(glow1);
    document.body.appendChild(glow2);

    renderThemeToggle(shell);
    renderHero(shell);
    renderNav(shell);
    renderProfilesSection(shell);
    renderWorkSection(shell);
    renderEducationSection(shell);
    renderProjectsSection(shell);
    renderSkillsSection(shell);
    renderAchievementsSection(shell);
    renderResumeSection(shell);
    renderFooter(shell);

    app.appendChild(shell);

    setupScrollReveal();
}

// ------- LOAD CONFIG + INIT ------- //

async function loadConfigAndRender() {
    try {
        const res = await fetch("data.json");
        if (res.ok) {
            linkConfig = await res.json();
        } else {
            console.warn("data.json not found or could not be loaded, using defaults.");
        }
    } catch (err) {
        console.error("Failed to load data.json, using defaults.", err);
    }

    applyLinkConfig();
    renderApp();
}

document.addEventListener("DOMContentLoaded", () => {
    loadConfigAndRender();
});
