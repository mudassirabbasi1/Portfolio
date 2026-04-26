import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronRight, Globe, Database } from "lucide-react";
import GeminiAssistant from "./components/GeminiAssistant";
import ThreeCanvas from "./components/ThreeCanvas";
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCE } from "./constants";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  type: string;
}

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-[#050505]">
      {/* 1. HERO SECTION (Dark Luxury Recipe) */}
      <section className="relative h-screen flex flex-col justify-center px-8 lg:px-24 overflow-hidden border-b border-white/5">
        <ThreeCanvas />
        
        <div className="absolute top-12 left-12 right-12 flex justify-between items-center z-20">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-500">System Architect</span>
            <span className="text-[10px] font-mono opacity-40">Portfolio.v4</span>
          </div>
          <div className="hidden md:flex gap-4">
             <a href="#about" className="nav-pill">About</a>
             <a href="#projects" className="nav-pill">Projects</a>
             <a href="#contact" className="nav-pill">Contact</a>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1400px] mx-auto w-full z-10"
        >
          <div className="perspective-text mb-6">
            <h1 className="font-display text-[12vw] sm:text-[10vw] font-light leading-[0.9] tracking-tighter mix-blend-difference">
              MUDASSIR<br />
              <span className="font-medium opacity-80 text-orange-500">AHMED</span>
            </h1>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            <div className="max-w-xl">
              <p className="text-xl sm:text-2xl font-light leading-relaxed opacity-50">
                Crafting discrete backend architectures and scalable <span className="text-white opacity-100">data systems</span> from Karachi, Pakistan.
              </p>
              <div className="mt-8 flex gap-6">
                <SocialIcon href={PERSONAL_INFO.github} icon={<Github size={20} />} />
                <SocialIcon href={PERSONAL_INFO.linkedin} icon={<Linkedin size={20} />} />
                <SocialIcon href={`mailto:${PERSONAL_INFO.email}`} icon={<Mail size={20} />} />
              </div>
            </div>
            
            <motion.div 
              initial={{ rotate: -5, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-8 group hidden lg:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">Operational Status</span>
              </div>
              <p className="text-sm font-mono opacity-80">GRADUATING_2026 // OPEN_FOR_INTERNSHIP</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 opacity-30">
          <span className="text-[9px] font-mono uppercase tracking-[0.5em]">Initiate Scan</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* 2. CAPABILITIES (Data Dashboard Recipe) */}
      <section id="about" className="py-32 px-8 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-orange-500 mb-6 block">01 / Profile</span>
              <h2 className="text-5xl font-display font-light mb-10 leading-tight">Translating logic into <br/><span className="italic font-normal">resilient infrastructure.</span></h2>
              <p className="text-lg leading-relaxed opacity-60 font-light mb-12">
                {PERSONAL_INFO.about}
              </p>
              <div className="grid grid-cols-2 gap-y-10 border-t border-white/10 pt-10">
                <InfoItem title="Region" value={PERSONAL_INFO.location} />
                <InfoItem title="Expertise" value="Cloud Architecture" />
                <InfoItem title="Philosophy" value="Immutable Code" />
                <InfoItem title="Available" value="Immediately" />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="glass-card p-10 border-orange-500/10">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40 mb-12 block text-right">Technical Spectrum</span>
                <div className="space-y-12">
                  {SKILLS.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-end mb-4">
                        <span className="text-xl font-display font-light tracking-tight">{skill.name}</span>
                        <span className="text-[10px] font-mono opacity-30">{skill.level}% Integrity</span>
                      </div>
                      <div className="h-[1px] w-full bg-white/5 relative">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: "circOut" }}
                          className="absolute h-full bg-orange-500/50 group-hover:bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ARTIFACTS (Project Grid) */}
      <section id="projects" className="py-32 px-8 lg:px-24 bg-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-orange-500 mb-6 block">02 / Artifacts</span>
              <h2 className="text-7xl font-display font-light tracking-tighter">SELECTED <span className="opacity-40 italic">WORKS</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {PROJECTS.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRAJECTORY */}
      <section className="py-32 px-8 lg:px-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-orange-500 mb-12 block">03 / Path</span>
            <div className="flex flex-col items-center">
                {EXPERIENCE.map((exp, index) => (
                <div key={index} className="max-w-2xl group cursor-default">
                    <h3 className="text-4xl font-display font-light group-hover:text-orange-500 transition-colors uppercase tracking-tight mb-2">{exp.role}</h3>
                    <div className="flex items-center justify-center gap-4 opacity-50 mb-6">
                        <span className="text-xs uppercase font-bold tracking-widest">{exp.company}</span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-xs font-mono">{exp.period}</span>
                    </div>
                    <p className="text-lg leading-relaxed opacity-40 group-hover:opacity-60 transition-opacity">
                        {exp.description}
                    </p>
                </div>
                ))}
            </div>
        </div>
      </section>

      {/* CONTACT/FOOTER */}
      <footer id="contact" className="py-24 px-8 lg:px-24 bg-black">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <h2 className="text-[10vw] font-display font-light tracking-tighter mb-12 opacity-80">LET'S CONNECT</h2>
          
          <div className="flex flex-wrap justify-center gap-10 mb-20">
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`} 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center gap-4"
            >
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all text-white">
                    <Mail size={24} />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">Email (Gmail)</span>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-4 text-white">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#0077B5] group-hover:border-[#0077B5] transition-all">
                    <Linkedin size={24} />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">LinkedIn</span>
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-4 text-white">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Github size={24} />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">GitHub</span>
            </a>
          </div>

          <div className="w-full flex justify-between items-center border-t border-white/5 pt-12">
            <span className="text-[10px] font-mono opacity-20 uppercase tracking-[0.5em]">Mudassir Ahmed © 2026</span>
            <div className="flex gap-4">
                <span className="text-[9px] font-bold uppercase tracking-widest opacity-30">Karachi, PK</span>
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
          </div>
        </div>
      </footer>

      <GeminiAssistant />
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number; key?: string }) {
  return (
      <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="data-row flex flex-col md:flex-row items-center gap-8 py-16 px-8 group overflow-hidden bg-transparent"
    >
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[10px] font-mono opacity-30">ARCHIVE_0{index + 1}</span>
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-orange-500/60 font-mono">
            {project.type}
          </span>
        </div>
        <h3 className="text-4xl font-display font-light uppercase tracking-tight group-hover:text-orange-500 transition-colors">
          {project.title}
        </h3>
        <p className="mt-4 max-w-2xl text-lg font-light leading-relaxed opacity-50 group-hover:opacity-100 transition-all">
          {project.description}
        </p>
        
        <div className="mt-8 flex flex-wrap gap-3">
          {project.tech.map((t: string) => (
            <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono opacity-60 group-hover:opacity-100 transition-all italic">
              {t}
            </span>
          ))}
        </div>
      </div>

      <motion.a 
        href={project.link} 
        target="_blank" 
        rel="noreferrer"
        whileHover={{ rotate: 45, scale: 1.1 }}
        className="w-20 h-20 flex items-center justify-center rounded-full border border-white/10 hover:bg-orange-500 hover:border-orange-500 transition-all text-white"
      >
        <ExternalLink size={24} />
      </motion.a>
    </motion.div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  const isMail = href.startsWith('mailto:');
  return (
    <a 
      href={href} 
      target={isMail ? undefined : "_blank"} 
      rel="noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
    >
      {icon}
    </a>
  );
}

function InfoItem({ title, value }: { title: string; value: string }) {
  return (
    <div>
        <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-40 mb-1">{title}</h4>
        <p className="text-lg font-display tracking-tight">{value}</p>
    </div>
  );
}
