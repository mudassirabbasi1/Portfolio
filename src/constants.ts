/**
 * Portfolio Data Constants
 */

export const PERSONAL_INFO = {
  name: "Mudassir Ahmed",
  title: "Python & Backend Developer",
  location: "Karachi, Pakistan",
  email: "abbasimudasir2098@gmail.com",
  phone: "+92 330 3731929",
  github: "https://github.com/mudassirabbasi1",
  linkedin: "https://www.linkedin.com/in/mudassir-ahmed-b1b84727b/",
  bio: "CS graduate from Karachi specializing in backend engineering with Python and Flask. I transform complex real-world logic into clean, scalable, and maintainable software systems.",
  about: "I'm a passionate Computer Science graduate focused on building the invisible machinery that powers the modern web. My expertise lies in Python backend development, where I strive to write code that is not just functional, but an elegant solution to a difficult problem. I'm currently seeking internship and entry-level opportunities where I can contribute to mission-critical backend systems.",
};

export const SKILLS = [
  { name: "Python", category: "Languages", level: 90 },
  { name: "Flask", category: "Frameworks", level: 85 },
  { name: "SQLite", category: "Databases", level: 80 },
  { name: "Backend Engineering", category: "Core", level: 85 },
  { name: "Clean Code", category: "Soft Skills", level: 90 },
  { name: "API Integration", category: "Core", level: 80 },
  { name: "Tkinter", category: "GUI", level: 75 },
];

export const PROJECTS = [
  {
    id: "ibkr-trader",
    title: "IBKR Paper Trading Engine",
    description: "A sophisticated real-time paper trading application connecting to the Interactive Brokers API. Features include strategy backtesting and live market data simulation without financial risk.",
    tech: ["Python", "IBKR API", "Asynchronous Programming"],
    link: "https://github.com/mudassirabbasi1/ibkr-paper-trading-app",
    type: "Backend Tool",
  },
  {
    id: "todo-pro",
    title: "Todo-Pro Flask Architecture",
    description: "Full-stack residential task management system utilizing Python, Flask, and an optimized SQLite database schema. Demonstrated clean architectural patterns and MVC principles.",
    tech: ["Flask", "SQLite", "Python", "HTML/CSS"],
    link: "https://github.com/mudassirabbasi1/todo-flask-app",
    type: "Web Application",
  },
  {
    id: "tk-calc",
    title: "Precision Arithmetic Engine",
    description: "A desktop calculator utility built with Python's Tkinter. Implements full keyboard support, arithmetic priority, and a clean, user-friendly graphical interface.",
    tech: ["Python", "Tkinter", "GUI Design"],
    link: "https://github.com/mudassirabbasi1/simple-calculator-using-TK",
    type: "Desktop Utility",
  },
];

export const EXPERIENCE = [
  {
    role: "CS Graduate",
    company: "University Academic Program",
    period: "2022 - 2026",
    description: "Completed comprehensive computer science degree focusing on data structures, algorithms, and software engineering principles.",
  },
];

export const RESUME_CONTEXT = `
Mudassir Ahmed is a Python Backend Developer based in Karachi, Pakistan.
Contact: ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}
Education: CS Graduate (2026).
Key Skills: ${SKILLS.map(s => s.name).join(", ")}.
Projects:
1. IBKR Paper Trading App: Connects to Interactive Brokers for real-time simulation.
2. Todo Flask App: Full-stack CRUD with SQLite.
3. Simple Calculator: Desktop GUI with Tkinter.
Seeking: Backend internship or entry-level Python developer roles.
Philosophy: Focus on clean code, scalability, and backend efficiency.
`;
