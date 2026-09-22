// ------- GLOBAL LINK CONFIG ------- //
let linkConfig = {};

// ------- STATS DATA ------- //
const statsData = [
    { value: 2.5, suffix: "M",   label: "Retailers Served",   decimals: 1 },
    { value: 100, suffix: "K+",  label: "Outlets Onboarded",  decimals: 0 },
    { value: 5,   suffix: "Cr+", label: "Records Processed/Day", decimals: 0 },
    { value: 300, suffix: "ms",  label: "API Latency (p95)",  decimals: 0 }
];

// ------- TYPING ANIMATION ROLES ------- //
const typingRoles = [
    "Backend Software Engineer",
    "Java · Spring Boot · Microservices",
    "Kafka · NiFi · Event-Driven Pipelines",
    "Immediate Joiner"
];

// ------- DATA CONFIG ------- //
const resumeData = {
    personalInfo: {
        name: "Vedant Singh Chauhan",
        role: "Backend Software Engineer",
        location: "Gurgaon, Haryana, India",
        tagline:
            "I build Java Spring Boot microservices and event-driven data pipelines (Kafka, NiFi, AWS) that hold up at scale in production.",
        contact: {
            email: "vedant2004chauhan@gmail.com",
            phone: "+91-8924029890"
        },
        status: "Immediate Joiner · Open to backend & data engineering roles"
    },
    profiles: [
        { key: "github",   name: "GitHub",   url: "", icon: "🐙" },
        { key: "linkedin", name: "LinkedIn", url: "", icon: "💼" },
        { key: "leetcode", name: "LeetCode", url: "", icon: "🧠" }
    ],
    workExperience: [
        {
            role: "Software Engineer (Backend)",
            company: "Salescode.ai",
            location: "Gurgaon, Haryana · On-site",
            duration: "June 2025 – Present",
            summary:
                "Building Java Spring Boot microservices and REST APIs for ITC Unnati, a B2B eCommerce platform serving 2.5M retailers/outlets, in a 6-member Agile team.",
            highlights: [
                "Delivered 3–4 end-to-end bug/complex CRs and 25–30 smaller CRs, plus complex business-logic features with role-based access.",
                "Designed and built the end-to-end outlet onboarding flow (registration, supplier mapping, client approval/rejection) using Spring Boot, Kafka, and NiFi — onboarding 100K outlets.",
                "Cut API and report latency from 5–6 seconds to under 300 ms with Redis caching, MySQL query tuning, and removing pipeline bottlenecks.",
                "Engineered event-driven data pipelines with Apache NiFi, Kafka, and REST APIs feeding downstream Flink processing — validation, enrichment, and transformation across MySQL/MSSQL for 4–5 crore records/day.",
                "Built an end-to-end historical sales data integration: NiFi stages daily CSVs to AWS S3, a job loads them into Amazon Redshift, and DynamoDB tracks processed files so daily runs never reprocess data.",
                "Built MDM workflows (Excel-based ingestion, templates, validation) and 8+ Jasper Reports to reduce manual reporting effort.",
                "Built NiFi monitoring flows with Slack/email alerts and DB flags; resolved production incidents using CloudWatch, Kafka, and SQL analysis.",
                "Integrated sales-rep features into the Unnati PWA (login flow, data management, contest enrollment); shipped via Jenkins CI/CD with cron-scheduled jobs."
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
            cssClass: "lang",
            items: ["Java", "SQL", "Python", "JavaScript", "C++"]
        },
        {
            category: "Backend & APIs",
            cssClass: "backend",
            items: ["Spring Boot", "REST APIs", "Microservices", "Node.js/Express", "Flask"]
        },
        {
            category: "Messaging & Integration",
            cssClass: "data",
            items: ["Apache Kafka", "Apache NiFi", "Redis", "Jolt"]
        },
        {
            category: "Databases",
            cssClass: "data",
            items: ["MySQL", "MSSQL", "MongoDB", "DynamoDB", "Amazon Redshift"]
        },
        {
            category: "Cloud & DevOps",
            cssClass: "backend",
            items: ["AWS (S3, DynamoDB, Redshift, CloudWatch)", "Jenkins CI/CD", "Git", "Linux"]
        },
        {
            category: "ML & Other",
            cssClass: "ml",
            items: ["TensorFlow", "Keras", "Jasper Reports", "Data Structures & Algorithms"]
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
                "Reached the Top 10 among 50+ teams at JIIT's Ride-Hack for Metropolis Assist, a smart transport assistant."
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
        file: "",
        displayName: "Resume_Vedant_Singh_Chauhan.pdf",
        driveLink: ""
    }
};

// ------- APPLY CONFIG FROM data.json ------- //
function applyLinkConfig() {
    resumeData.profiles.forEach((p) => {
        if (p.key && linkConfig[p.key]) p.url = linkConfig[p.key];
    });

    resumeData.projects.forEach((proj) => {
        if (proj.key && linkConfig[proj.key]) proj.url = linkConfig[proj.key];
    });

    if (linkConfig.resumePdf) {
        resumeData.resume.file = linkConfig.resumePdf;
        resumeData.resume.displayName =
            linkConfig.resumePdf.split("/").pop() || linkConfig.resumePdf;
    } else {
        resumeData.resume.file = "Resume_Vedant_Singh_Chauhan.pdf";
        resumeData.resume.displayName = "Resume_Vedant_Singh_Chauhan.pdf";
    }

    resumeData.resume.driveLink = linkConfig.resumeDrive || "";
}

function getProfilePhoto() {
    return linkConfig.profilePhoto || "Images/Photo_neww.jpeg";
}

// ------- HELPERS ------- //
function createElement(tag, options = {}) {
    const el = document.createElement(tag);
    const { className, text, html, attrs = {} } = options;
    if (className) el.className = className;
    if (text)      el.textContent = text;
    if (html)      el.innerHTML   = html;
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    return el;
}

function smoothScrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 10;
    window.scrollTo({ top: y, behavior: "smooth" });
}

// ------- TYPING ANIMATION ------- //
function setupTypingEffect(el) {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let waitAfterType = false;

    function tick() {
        const current = typingRoles[roleIdx];

        if (waitAfterType) {
            waitAfterType = false;
            setTimeout(tick, 1500);
            return;
        }

        if (!deleting) {
            charIdx++;
            el.textContent = current.slice(0, charIdx);
            if (charIdx === current.length) {
                deleting = true;
                waitAfterType = true;
            }
            setTimeout(tick, 62);
        } else {
            charIdx--;
            el.textContent = current.slice(0, charIdx);
            if (charIdx === 0) {
                deleting = false;
                roleIdx = (roleIdx + 1) % typingRoles.length;
            }
            setTimeout(tick, 32);
        }
    }

    // small initial delay so hero fade-in plays first
    setTimeout(tick, 500);
}

// ------- STATUS BADGE HELPER ------- //
function getStatusClass(status) {
    const s = (status || "").toLowerCase();
    if (s === "live")     return "live";
    if (s === "research") return "research";
    return "live";
}

// ------- RENDER: THEME TOGGLE ------- //
function renderThemeToggle(container) {
    const wrapper = createElement("div", { className: "theme-toggle" });
    const button  = createElement("button");
    const iconSpan = createElement("span", { text: "🌙" });
    const textSpan = createElement("span", { text: "Dark" });

    button.appendChild(iconSpan);
    button.appendChild(textSpan);

    const prefersLight =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    if (prefersLight) {
        document.body.classList.add("light-theme");
        iconSpan.textContent = "☀️";
        textSpan.textContent = "Light";
    }

    button.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-theme");
        iconSpan.textContent = isLight ? "☀️" : "🌙";
        textSpan.textContent = isLight ? "Light" : "Dark";
    });

    wrapper.appendChild(button);
    container.appendChild(wrapper);
}

// ------- RENDER: HERO ------- //
function renderHero(container) {
    const header = createElement("header", { className: "hero" });

    // Orbit rings
    const orbit1 = createElement("div", { className: "hero-accent-orbit o1" });
    const orbit2 = createElement("div", { className: "hero-accent-orbit o2" });
    const dot    = createElement("div", { className: "hero-accent-dot" });
    header.appendChild(orbit1);
    header.appendChild(orbit2);
    header.appendChild(dot);

    const heroMain = createElement("div", { className: "hero-main" });
    const heroText = createElement("div", { className: "hero-text" });

    // Title
    const title = createElement("h1", {
        className: "hero-title",
        text: resumeData.personalInfo.name
    });

    // Typing role
    const roleWrap   = createElement("div", { className: "hero-role-wrap" });
    const roleSpan   = createElement("span", { className: "hero-role" });
    const cursor     = createElement("span", { className: "typing-cursor" });
    roleWrap.appendChild(roleSpan);
    roleWrap.appendChild(cursor);

    // Meta row (location + status badge)
    const meta = createElement("div", { className: "hero-meta" });

    const locationSpan = createElement("span", {
        text: `📍 ${resumeData.personalInfo.location}`
    });

    const statusBadge = createElement("span", { className: "hero-badge" });
    const statusDot   = createElement("span", { className: "hero-badge-dot" });
    const statusText  = createElement("span", { text: resumeData.personalInfo.status });
    statusBadge.appendChild(statusDot);
    statusBadge.appendChild(statusText);

    meta.appendChild(locationSpan);
    meta.appendChild(statusBadge);

    // Subtitle / tagline
    const subtitle = createElement("p", {
        className: "hero-subtitle",
        text: resumeData.personalInfo.tagline
    });

    // CTA buttons
    const actions    = createElement("div", { className: "hero-actions" });
    const primaryBtn = createElement("button", { className: "btn btn-primary" });
    primaryBtn.innerHTML = `View Resume <span>↗</span>`;
    primaryBtn.addEventListener("click", () => smoothScrollTo("resume-section"));

    const ghostBtn = createElement("button", { className: "btn btn-ghost" });
    ghostBtn.innerHTML = `✉️ Contact Me`;
    ghostBtn.addEventListener("click", () => {
        window.location.href = `mailto:${resumeData.personalInfo.contact.email}`;
    });

    actions.appendChild(primaryBtn);
    actions.appendChild(ghostBtn);

    heroText.appendChild(title);
    heroText.appendChild(roleWrap);
    heroText.appendChild(meta);
    heroText.appendChild(subtitle);
    heroText.appendChild(actions);

    // Social quick-link pills row (inside hero)
    const socialRow = createElement("div", { className: "hero-social-row" });
    resumeData.profiles.forEach((profile) => {
        if (!profile.url) return;
        const pill = createElement("a", {
            className: "hero-social-pill",
            attrs: {
                href: profile.url,
                target: "_blank",
                rel: "noopener noreferrer"
            }
        });
        pill.textContent = `${profile.icon} ${profile.name}`;
        socialRow.appendChild(pill);
    });
    const emailPill = createElement("a", {
        className: "hero-social-pill",
        attrs: { href: `mailto:${resumeData.personalInfo.contact.email}` }
    });
    emailPill.textContent = `✉️ Email`;
    socialRow.appendChild(emailPill);

    heroText.appendChild(socialRow);

    // Profile photo
    const heroVisual = createElement("div", { className: "hero-visual" });
    const heroImg    = createElement("img", {
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

    // Start typing after DOM is ready
    setupTypingEffect(roleSpan);
}

// ------- RENDER: NAV ------- //
function renderNav(container) {
    const sections = [
        { id: "profiles-section",     label: "Profiles"      },
        { id: "work-section",         label: "Work"          },
        { id: "education-section",    label: "Education"     },
        { id: "projects-section",     label: "Projects"      },
        { id: "skills-section",       label: "Skills"        },
        { id: "achievements-section", label: "Achievements"  },
        { id: "resume-section",       label: "Resume"        }
    ];

    const navWrap = createElement("div", { className: "navbar-wrap" });
    const navBar  = createElement("nav",  { className: "navbar" });
    const pills   = [];

    sections.forEach((section, idx) => {
        const pill = createElement("button", {
            className: idx === 0 ? "nav-pill active" : "nav-pill",
            text: section.label,
            attrs: { "data-target": section.id }
        });

        pill.addEventListener("click", () => {
            pills.forEach((p) => p.classList.remove("active"));
            pill.classList.add("active");
            smoothScrollTo(section.id);
        });

        pills.push(pill);
        navBar.appendChild(pill);
    });

    navWrap.appendChild(navBar);
    container.appendChild(navWrap);

    return { pills, sectionIds: sections.map((s) => s.id) };
}

// ------- RENDER: PROFILES ------- //
function renderProfilesSection(container) {
    const section = createElement("section", {
        className: "section",
        attrs: { id: "profiles-section" }
    });

    const header = createElement("div", { className: "section-header" });
    header.appendChild(createElement("h2", { className: "section-title", text: "Profiles" }));
    header.appendChild(createElement("span", { className: "section-pill", text: "Online presence" }));
    section.appendChild(header);

    const list = createElement("ul", { className: "inline-list" });

    resumeData.profiles.forEach((profile) => {
        const li   = createElement("li");
        const pill = createElement("div", { className: "inline-pill" });
        const icon = createElement("span", { className: "icon", text: profile.icon });
        const link = createElement("a", {
            text: profile.name,
            attrs: {
                href: profile.url || "#",
                target: "_blank",
                rel: "noopener noreferrer"
            }
        });
        pill.appendChild(icon);
        pill.appendChild(link);
        li.appendChild(pill);
        list.appendChild(li);
    });

    section.appendChild(list);
    container.appendChild(section);
}

// ------- RENDER: WORK ------- //
function renderWorkSection(container) {
    const section = createElement("section", {
        className: "section",
        attrs: { id: "work-section" }
    });

    const header = createElement("div", { className: "section-header" });
    header.appendChild(createElement("h2", { className: "section-title", text: "Work Experience" }));
    header.appendChild(createElement("span", { className: "section-pill", text: "What I do" }));
    section.appendChild(header);

    const cardList = createElement("div", { className: "card-list" });

    resumeData.workExperience.forEach((job) => {
        const card = createElement("article", { className: "card" });

        card.appendChild(createElement("h3", {
            className: "card-title",
            text: `${job.role} · ${job.company}`
        }));
        card.appendChild(createElement("p", {
            className: "card-subtitle",
            text: `${job.location} · ${job.duration}`
        }));
        card.appendChild(createElement("p", {
            className: "card-summary",
            text: job.summary
        }));

        const highlights = createElement("div", { className: "highlights-block" });
        job.highlights.forEach((h) => {
            const item  = createElement("div", { className: "highlight-item" });
            const arrow = createElement("span", { className: "highlight-arrow", text: "▹" });
            const text  = createElement("span", { text: h });
            item.appendChild(arrow);
            item.appendChild(text);
            highlights.appendChild(item);
        });
        card.appendChild(highlights);
        cardList.appendChild(card);
    });

    section.appendChild(cardList);
    container.appendChild(section);
}

// ------- RENDER: EDUCATION ------- //
function renderEducationSection(container) {
    const section = createElement("section", {
        className: "section",
        attrs: { id: "education-section" }
    });

    const header = createElement("div", { className: "section-header" });
    header.appendChild(createElement("h2", { className: "section-title", text: "Education" }));
    header.appendChild(createElement("span", { className: "section-pill", text: "Academics" }));
    section.appendChild(header);

    const cardList = createElement("div", { className: "card-list" });

    resumeData.education.forEach((edu) => {
        const card = createElement("article", { className: "card" });

        card.appendChild(createElement("h3", { className: "card-title",    text: edu.degree }));
        card.appendChild(createElement("p",  { className: "card-subtitle", text: `${edu.institution} · ${edu.duration}` }));
        card.appendChild(createElement("span", { className: "edu-extra",   text: edu.extra }));

        cardList.appendChild(card);
    });

    section.appendChild(cardList);
    container.appendChild(section);
}

// ------- RENDER: PROJECTS ------- //
function renderProjectsSection(container) {
    const section = createElement("section", {
        className: "section",
        attrs: { id: "projects-section" }
    });

    const header = createElement("div", { className: "section-header" });
    header.appendChild(createElement("h2", { className: "section-title", text: "Projects" }));
    header.appendChild(createElement("span", { className: "section-pill", text: "Built & deployed" }));
    section.appendChild(header);

    // --- Filter bar ---
    const filterTags = ["All", "Flask", "Node.js", "TensorFlow", "MongoDB"];
    const filterBar  = createElement("div", { className: "filter-bar" });
    const cards      = [];

    filterTags.forEach((tag, idx) => {
        const btn = createElement("button", {
            className: idx === 0 ? "filter-btn active" : "filter-btn",
            text: tag,
            attrs: { "data-filter": tag }
        });
        btn.addEventListener("click", () => {
            // Update active button
            filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            // Show / hide cards
            cards.forEach((card) => {
                const tagList = JSON.parse(card.dataset.tags || "[]");
                const match = tag === "All" || tagList.includes(tag);
                card.classList.toggle("card--hidden", !match);
            });
        });
        filterBar.appendChild(btn);
    });
    section.appendChild(filterBar);

    // --- Cards ---
    const cardList = createElement("div", { className: "card-list" });

    resumeData.projects.forEach((project) => {
        const card = createElement("article", {
            className: "card",
            attrs: { "data-tags": JSON.stringify(project.tags) }
        });
        cards.push(card);

        // Status badge
        const statusBadge = createElement("span", {
            className: `status-badge ${getStatusClass(project.status)}`
        });
        const statusDot = createElement("span", { className: "status-dot" });
        statusBadge.appendChild(statusDot);
        statusBadge.appendChild(createElement("span", { text: project.status }));
        card.appendChild(statusBadge);

        card.appendChild(createElement("h3", { className: "card-title",    text: project.name }));
        card.appendChild(createElement("p",  { className: "card-subtitle", text: project.description }));

        // Tag pills
        const tagsDiv = createElement("div", { className: "project-tags" });
        project.tags.forEach((tag) => {
            tagsDiv.appendChild(createElement("span", { className: "project-tag", text: tag }));
        });
        card.appendChild(tagsDiv);

        // Footer with link
        const footer = createElement("div", { className: "card-footer" });
        let link;
        if (project.url && project.url !== "#") {
            link = createElement("a", {
                className: "card-link",
                text: "Open project ↗",
                attrs: {
                    href: project.url,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            });
        } else {
            link = createElement("span", {
                className: "card-subtitle",
                text: "Demo coming soon"
            });
        }
        footer.appendChild(link);
        card.appendChild(footer);

        cardList.appendChild(card);
    });

    section.appendChild(cardList);
    container.appendChild(section);
}

// ------- RENDER: SKILLS ------- //
function renderSkillsSection(container) {
    const section = createElement("section", {
        className: "section",
        attrs: { id: "skills-section" }
    });

    const header = createElement("div", { className: "section-header" });
    header.appendChild(createElement("h2", { className: "section-title", text: "Technical Skills" }));
    header.appendChild(createElement("span", { className: "section-pill", text: "What I work with" }));
    section.appendChild(header);

    const skillsContainer = createElement("div", { className: "skills-container" });

    resumeData.technicalSkills.forEach((group) => {
        const groupDiv = createElement("div");

        const label = createElement("div", {
            className: "skills-group-label",
            text: group.category
        });

        const tagsDiv = createElement("div", { className: "skills-tags" });
        group.items.forEach((item) => {
            tagsDiv.appendChild(createElement("span", {
                className: `skill-tag ${group.cssClass || "lang"}`,
                text: item
            }));
        });

        groupDiv.appendChild(label);
        groupDiv.appendChild(tagsDiv);
        skillsContainer.appendChild(groupDiv);
    });

    section.appendChild(skillsContainer);
    container.appendChild(section);
}

// ------- RENDER: ACHIEVEMENTS ------- //
function renderAchievementsSection(container) {
    const section = createElement("section", {
        className: "section",
        attrs: { id: "achievements-section" }
    });

    const header = createElement("div", { className: "section-header" });
    header.appendChild(createElement("h2", { className: "section-title", text: "Highlights" }));
    header.appendChild(createElement("span", { className: "section-pill", text: "A few wins" }));
    section.appendChild(header);

    const cardList = createElement("div", { className: "card-list" });

    resumeData.achievements.forEach((ach, idx) => {
        const card = createElement("article", { className: "card" });

        // Index number in background
        card.appendChild(createElement("span", {
            className: "card-index",
            text: String(idx + 1).padStart(2, "0")
        }));

        card.appendChild(createElement("h3", { className: "card-title",    text: ach.title }));
        card.appendChild(createElement("p",  { className: "card-subtitle", text: ach.detail }));

        if (ach.link) {
            card.appendChild(createElement("a", {
                className: "card-link",
                text: "View Document ↗",
                attrs: {
                    href: ach.link,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }
            }));
        }

        cardList.appendChild(card);
    });

    section.appendChild(cardList);
    container.appendChild(section);
}

// ------- RENDER: RESUME ------- //
function renderResumeSection(container) {
    const section = createElement("section", {
        className: "section",
        attrs: { id: "resume-section" }
    });

    const header = createElement("div", { className: "section-header" });
    header.appendChild(createElement("h2", { className: "section-title", text: "Resume" }));
    header.appendChild(createElement("span", { className: "section-pill", text: "PDF preview" }));
    section.appendChild(header);

    section.appendChild(createElement("p", {
        text: "Preview the full resume below or open it in a new tab."
    }));

    const embedContainer = createElement("div", { className: "resume-embed-container" });
    const iframe = createElement("iframe", {
        className: "resume-embed",
        attrs: {
            src: `${resumeData.resume.file}#toolbar=0&navpanes=0&scrollbar=0`,
            title: "Resume Preview",
            loading: "lazy"
        }
    });
    embedContainer.appendChild(iframe);
    section.appendChild(embedContainer);

    section.appendChild(createElement("p", {
        className: "resume-fallback",
        html: `If the resume does not load, <a href="${resumeData.resume.file}" target="_blank" rel="noopener noreferrer">click here to open ${resumeData.resume.displayName}</a>.`
    }));

    if (resumeData.resume.driveLink) {
        section.appendChild(createElement("p", {
            className: "resume-fallback",
            html: `Prefer Google Drive? <a href="${resumeData.resume.driveLink}" target="_blank" rel="noopener noreferrer">View on Google Drive ↗</a>.`
        }));
    }

    container.appendChild(section);
}

// ------- RENDER: BACK TO TOP ------- //
function renderBackToTop() {
    const btn = createElement("button", {
        className: "back-to-top",
        attrs: { "aria-label": "Back to top", title: "Back to top" }
    });
    btn.textContent = "↑";

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        btn.classList.toggle("visible", window.scrollY > 320);
    }, { passive: true });

    document.body.appendChild(btn);
}

// ------- RENDER: FOOTER ------- //
function renderFooter(container) {
    const footer = createElement("footer", { className: "site-footer" });

    // Left: contact info + copyright
    const left = createElement("div", { className: "footer-left" });

    const contactDiv = createElement("div", { className: "footer-contact" });
    contactDiv.appendChild(createElement("a", {
        text: `✉️ ${resumeData.personalInfo.contact.email}`,
        attrs: { href: `mailto:${resumeData.personalInfo.contact.email}` }
    }));
    contactDiv.appendChild(createElement("a", {
        text: `📞 ${resumeData.personalInfo.contact.phone}`,
        attrs: { href: `tel:${resumeData.personalInfo.contact.phone}` }
    }));

    const copy = createElement("p", {
        className: "footer-copy",
        text: `© ${new Date().getFullYear()} ${resumeData.personalInfo.name} · Built with ❤️`
    });

    left.appendChild(contactDiv);
    left.appendChild(copy);

    // Right: social pills
    const social = createElement("div", { className: "footer-social" });
    resumeData.profiles.forEach((profile) => {
        if (!profile.url) return;
        const pill = createElement("a", {
            className: "footer-social-pill",
            attrs: {
                href: profile.url,
                target: "_blank",
                rel: "noopener noreferrer"
            }
        });
        pill.textContent = `${profile.icon} ${profile.name}`;
        social.appendChild(pill);
    });

    footer.appendChild(left);
    footer.appendChild(social);
    container.appendChild(footer);
}

// ------- RENDER: STATS STRIP ------- //
function renderStatsStrip(container) {
    const strip = createElement("div", { className: "stats-strip" });

    statsData.forEach((stat, idx) => {
        const item = createElement("div", { className: "stat-item" });

        const value = createElement("span", {
            className: "stat-value",
            attrs: {
                "data-target":   String(stat.value),
                "data-suffix":   stat.suffix,
                "data-decimals": String(stat.decimals)
            }
        });
        // Placeholder before counter kicks in
        value.textContent = stat.decimals > 0
            ? stat.value.toFixed(stat.decimals) + stat.suffix
            : "0" + stat.suffix;

        const label = createElement("span", { className: "stat-label", text: stat.label });

        item.appendChild(value);
        item.appendChild(label);
        strip.appendChild(item);
    });

    container.appendChild(strip);
}

// ------- COUNTER ANIMATION ------- //
function animateCounter(el, target, suffix, decimals) {
    const duration = 1500;
    const startTime = performance.now();

    function tick(now) {
        const elapsed  = Math.min(now - startTime, duration);
        const progress = elapsed / duration;
        // Ease-out cubic
        const eased    = 1 - Math.pow(1 - progress, 3);
        const current  = eased * target;
        el.textContent = decimals > 0
            ? current.toFixed(decimals) + suffix
            : Math.floor(current) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

function setupAnimatedCounters() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el       = entry.target;
                const target   = parseFloat(el.dataset.target  || "0");
                const suffix   = el.dataset.suffix   || "";
                const decimals = parseInt(el.dataset.decimals  || "0", 10);
                animateCounter(el, target, suffix, decimals);
                observer.unobserve(el);
            });
        },
        { threshold: 0.5 }
    );

    document.querySelectorAll(".stat-value[data-target]").forEach((el) => {
        observer.observe(el);
    });
}

// ------- SCROLL PROGRESS BAR ------- //
function setupScrollProgress() {
    const bar = createElement("div", { className: "scroll-progress" });
    document.body.appendChild(bar);

    function update() {
        const scrolled = window.scrollY;
        const max      = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = max > 0 ? `${(scrolled / max) * 100}%` : "0%";
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
}

// ------- MOUSE SPOTLIGHT ------- //
function setupMouseSpotlight() {
    document.addEventListener("mousemove", (e) => {
        document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    }, { passive: true });
}

// ------- 3D CARD TILT ------- //
function setupCardTilt() {
    const MAX_TILT = 10; // degrees

    document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            // Disable CSS transform transition during tilt for instant response
            card.style.transition =
                "box-shadow 0.22s ease-out, border-color 0.22s ease-out, opacity 0.25s ease";
        });

        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x    = e.clientX - rect.left;
            const y    = e.clientY - rect.top;
            const cx   = rect.width  / 2;
            const cy   = rect.height / 2;
            const dx   = (x - cx) / cx;  // -1 to 1
            const dy   = (y - cy) / cy;  // -1 to 1
            const rotX = dy * -MAX_TILT;
            const rotY = dx *  MAX_TILT;
            card.style.transform =
                `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px) scale(1.01)`;
        });

        card.addEventListener("mouseleave", () => {
            // Re-enable smooth transition for the reset
            card.style.transition =
                "box-shadow 0.22s ease-out, border-color 0.22s ease-out, opacity 0.25s ease, transform 0.35s ease-out";
            card.style.transform = "";
        });
    });
}

// ------- SCROLL REVEAL ------- //
function setupScrollReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.07, rootMargin: "0px 0px -24px 0px" }
    );

    document.querySelectorAll("section.section").forEach((section) => {
        observer.observe(section);
    });
}

// ------- SCROLL SPY (active nav highlight) ------- //
function setupScrollSpy(pills, sectionIds) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    pills.forEach((pill) => {
                        pill.classList.toggle("active", pill.dataset.target === id);
                    });
                }
            });
        },
        { rootMargin: "-38% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
}

// ------- MAIN RENDER ------- //
function renderApp() {
    const app = document.getElementById("app");
    if (!app) return;

    const shell = createElement("div", { className: "app-shell" });

    // Background glows
    [1, 2, 3].forEach((n) => {
        document.body.appendChild(createElement("div", { className: `glow glow-${n}` }));
    });

    renderThemeToggle(shell);
    renderHero(shell);
    renderStatsStrip(shell);                       // ← stats between hero & nav

    const { pills, sectionIds } = renderNav(shell);

    renderProfilesSection(shell);
    renderWorkSection(shell);
    renderEducationSection(shell);
    renderProjectsSection(shell);                  // ← now includes filter bar
    renderSkillsSection(shell);
    renderAchievementsSection(shell);
    renderResumeSection(shell);
    renderFooter(shell);

    app.appendChild(shell);

    setupScrollReveal();
    setupScrollSpy(pills, sectionIds);
    setupScrollProgress();                         // ← progress bar
    setupMouseSpotlight();                         // ← cursor glow
    setupCardTilt();                               // ← 3D tilt (needs cards in DOM)
    setupAnimatedCounters();                       // ← stat counters
    renderBackToTop();
}

// ------- LOAD CONFIG + INIT ------- //
async function loadConfigAndRender() {
    try {
        const res = await fetch("data.json");
        if (res.ok) {
            linkConfig = await res.json();
        } else {
            console.warn("data.json not found, using defaults.");
        }
    } catch (err) {
        console.warn("Could not load data.json, using defaults.", err);
    }

    applyLinkConfig();
    renderApp();
}

document.addEventListener("DOMContentLoaded", () => {
    loadConfigAndRender();
});
