export const PINK = "#ff2d78";
export const TEAL = "#2de8c4";

export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80&fit=crop",
];

export const ROLES = ["JAVA DEVELOPER", "MERN STACK DEVELOPER", "REACT DEVELOPER", "SOFTWARE TESTER"];

export const SKILLS = [
  { cat: "Backend", icon: "▲", items: ["Java", "Spring Boot", "Hibernate ORM", "JDBC", "Servlets", "JSP", "Node.js", "Express.js", "JWT", "Spring Security"] },
  { cat: "Frontend", icon: "●", items: ["React.js", "JavaScript ES6+", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"] },
  { cat: "Databases", icon: "■", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { cat: "Testing", icon: "▲", items: ["Manual Testing", "Test Case Design", "Bug Reporting", "SDLC", "STLC"] },
  { cat: "Tools", icon: "●", items: ["Git", "GitHub", "Docker", "AWS", "Swagger", "Postman"] },
];

export const RULES = [
  { num: "1", color: TEAL, title: "3 Companies", desc: "Each role sharper. Each stack deeper. Growth over comfort." },
  { num: "2", color: PINK, title: "No Shortcuts", desc: "Every feature tested. Every bug tracked. Quality ships." },
  { num: "3", color: TEAL, title: "Full Stack", desc: "Java backend to React frontend — every layer covered." },
  { num: "4", color: PINK, title: "Always Shipping", desc: "Currently building at BPointer Technologies." },
];

export const PROJECTS = [
  { name: "NASA API Web App", emoji: "🚀", stack: "Spring Boot · JWT · OAuth2 · Docker · AWS",
    desc: "Real-time astronomy platform — NASA's APOD & Mars Rover APIs, Spring Security auth, AWS deployment via Docker.", color: PINK, shape: "▲" },
  { name: "Hospital Management System", emoji: "🏥", stack: "Java · JSP · Servlets · JDBC · MySQL",
    desc: "Patient registration, appointments, doctor management, role-based access control.", color: TEAL, shape: "■" },
  { name: "Broadband Network Manager", emoji: "📡", stack: "Java Swing · Hibernate · MySQL · JWT",
    desc: "Admin/customer dashboards, plan purchase flow, Hibernate ORM + JWT security.", color: PINK, shape: "●" },
  { name: "Personal Portfolio", emoji: "🌐", stack: "React.js · CSS3 · GitHub Pages",
    desc: "Responsive SPA, React Router, EmailJS contact form, GitHub Pages deployment.", color: TEAL, shape: "▲" },
  { name: "Notepad Clone", emoji: "📝", stack: "Java · Java Swing · Encryption",
    desc: "Secure desktop notepad — session login, encryption, full file management.", color: PINK, shape: "■" },
];

export const JOBS = [
  { role: "MERN Stack Developer", co: "BPointer Technologies Pvt. Ltd", period: "Jan 2026 – Present", current: true, color: TEAL,
    bullets: ["Full-stack apps with MongoDB, Express.js, React.js, Node.js.", "RESTful APIs integrated with React frontends.", "JWT auth, Agile sprints, Git workflow."] },
  { role: "Software Engineer Associate", co: "Visholmedia Pvt. Ltd", period: "Oct 2025 – Jan 2026", current: false, color: PINK,
    bullets: ["Frontend and backend feature development.", "Code reviews, testing, deployment."] },
  { role: "Java Developer Intern", co: "Robowaves", period: "Nov 2024 – Apr 2025", current: false, color: TEAL,
    bullets: ["Java backend modules — Servlets, JSP, JDBC.", "JWT auth and role-based access control.", "MySQL schema optimization."] },
];

export const CONTACTS = [
  { icon: "✉", label: "EMAIL", val: "pravinrathod93527", href: "mailto:pravinrathod93527@gmail.com" },
  { icon: "☏", label: "PHONE", val: "+91-9172619890", href: "tel:+919172619890" },
  { icon: "in", label: "LINKEDIN", val: "pravin-rathod", href: "https://linkedin.com/in/pravin-rathod-2338b224b" },
  { icon: "</>", label: "GITHUB", val: "Pravinkumar7", href: "https://github.com/Pravinkumar7" },
];
