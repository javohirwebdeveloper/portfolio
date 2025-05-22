import React, { useRef } from "react";
import AnimatedBackground from "./components/AnimatedBackground"; // ⬅️ import qiling

import { motion } from "framer-motion";
import { Button } from "./components/Button";
import { Github, ExternalLink, Mail, Linkedin } from "lucide-react";


export default function App() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
   <main className="min-h-screen bg-gradient-to-b from-gray-950  via-black to-gray-900 text-white font-sans">
  <AnimatedBackground /> <div className="flex relative bg-black items-center h-10 z-10 justify-center md:gap-6 gap-4">
          <a href="mailto:jumaboyevjavohir07@gmail.com" className="flex md:gap-2 gap-1 md:text-base text-xs items-center text-indigo-400 hover:underline">
            <span className="max-md:hidden"><Mail size={20} /></span><span className="md:hidden"><Mail size={14} /></span> Email
          </a>
          <a href="https://github.com/javohirwebdeveloper" target="_blank" className="flex md:text-base text-xs md:gap-2 gap-1 items-center text-white hover:underline">
            <span className="max-md:hidden"><Github size={20} /></span><span className="md:hidden"><Github size={14} /></span> GitHub
          </a>
          <a href="https://www.linkedin.com/in/javohir-jumaboyev-3a2a36308/" target="_blank" className="flex md:text-base text-xs md:gap-2 gap-1 items-center text-blue-400 hover:underline">
            <span className="max-md:hidden"><Linkedin size={20} /></span><span className="md:hidden"><Linkedin size={14} /></span> LinkedIn
          </a>
        </div><section className="text-center relative z-10  py-24 px-4">
        
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ lineHeight: 1.1}}
          className="md:text-6xl text-5xl font-black leading-tight flex flex-col items-center"
        >
          <span>Pixel-Perfect Interfaces,</span> <span className="text-indigo-500">Purposefully Engineered</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl  text-gray-400 max-w-2xl mx-auto mt-6"
        >
          I'm <strong>Javoxir Jumabayev</strong>, you can call me <strong className="text-gray-200">Javoxir</strong>. I build emotionally captivating, performance-driven web experiences with React, Firebase, and pure obsession for detail. Let's redefine user experience, one pixel at a time. I’m even ready to work <strong className="text-gray-200">without salary</strong>, just to get real experience and improve my skills
        </motion.p>
        <div className="mt-10  flex flex-wrap justify-center gap-4">
        <Button
            onClick={scrollToProjects}
            className="bg-indigo-600 hover:bg-indigo-500 rounded-full px-6 py-3 text-lg shadow-md"
          >
            View My Work
          </Button>

          <a href="/resume.pdf" download>
            <Button variant="outline" className="rounded-full px-6 py-3 text-lg border-gray-600 text-gray-300 hover:text-white">Download Resume</Button>
          </a>
        </div>
      </section>

      <section className="py-20 relative z-10 max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="text-lg text-gray-300 leading-relaxed space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            I'm a passionate front-end developer based in Tashkent with a sharp eye for design and a deep respect for user experience. I started coding as a high school student and quickly fell in love with creating intuitive, fast, and visually powerful web interfaces.
          </p>
          <p>
            I specialize in building full-scale user interfaces with React, integrating Firebase for scalable real-time solutions, and crafting pixel-perfect responsive designs using Tailwind CSS. I believe that every element on a webpage must have a reason to exist — I don’t code to fill space, I code to tell a story.
          </p>
          <p>
            My code is clean, my mindset is growth-oriented, and my goal is clear: contribute meaningfully to professional products while constantly leveling up my craft.
          </p>
          <p>
            Beyond coding, I enjoy solving UI/UX problems, optimizing Core Web Vitals, and learning from open-source communities. I'm excited to connect with teams that value clarity, speed, and creativity.
          </p>
          <ul className="list-disc list-inside mt-6 space-y-2 text-indigo-400">
            <li><strong>Favorite Tools & Libraries:</strong> React, Tailwind CSS, ShadCN UI, Framer Motion, Firebase, Zustand, TanStack Query</li>
            <li><strong>Currently Learning:</strong> React Native — expanding into mobile development</li>
            <li><strong>Based In:</strong> Tashkent — open to relocate or work remotely</li>
          </ul>
        </motion.div>
      </section>

      <section ref={projectsRef} className="py-20 relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Selected Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <ProjectCard
            title="UnumMarket.uz"
            desc="A complete e-commerce front built with React and Firebase. Includes cart logic, order placement, real-time updates, and mobile-first responsiveness."
            tech="React, Firebase, Tailwind, Vite"
            github="https://github.com/yourusername/unummarket"
            live="https://unummarket.uz"
          />

          <ProjectCard
            title="WeatherNow"
            desc="Progressive Web App for weather updates, installable on any device with offline-first capabilities and lazy-loaded data calls."
            tech="React, PWA, Service Workers, OpenWeather API"
            github="https://github.com/yourusername/weathernow"
          />

          <ProjectCard
            title="TaskRanger"
            desc="Modern Kanban board with drag-and-drop, persistent localStorage sync, and atomic Zustand state management."
            tech="React, Zustand, DnD Kit"
            github="https://github.com/yourusername/taskranger"
          />

          <ProjectCard
            title="My Portfolio"
            desc="The very site you're browsing now. Responsive, animated, and built with soul."
            tech="React, Tailwind, Framer Motion, Vercel"
            github="https://github.com/yourusername/portfolio"
            live="https://portfolio.site"
          />
        </div>
      </section>

      <section className="bg-black relative z-10 py-20 px-4 mt-20">
        <h2 className="text-3xl text-center font-bold mb-8">Let’s Work Together</h2>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-6">
          I’m actively looking for front-end internships and junior roles. Whether you represent a top-tier company or an ambitious startup, I’m ready to join, contribute, and grow. Let’s talk!
        </p>
        <div className="flex relative z-10 justify-center md:gap-6 gap-4 pt-5">
          <a href="mailto:jumaboyevjavohir07@gmail.com" className="flex md:gap-2 gap-1 md:text-base text-xs items-center text-indigo-400 hover:underline">
            <span className="max-md:hidden"><Mail size={20} /></span><span className="md:hidden"><Mail size={14} /></span> Email
          </a>
          <a href="https://github.com/javohirwebdeveloper" target="_blank" className="flex md:text-base text-xs md:gap-2 gap-1 items-center text-white hover:underline">
            <span className="max-md:hidden"><Github size={20} /></span><span className="md:hidden"><Github size={14} /></span> GitHub
          </a>
          <a href="https://www.linkedin.com/in/javohir-jumaboyev-3a2a36308/" target="_blank" className="flex md:text-base text-xs md:gap-2 gap-1 items-center text-blue-400 hover:underline">
            <span className="max-md:hidden"><Linkedin size={20} /></span><span className="md:hidden"><Linkedin size={14} /></span> LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ title, desc, tech, github, live }) {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-700 hover:shadow-xl transition duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-2">{desc}</p>
      <p className="text-sm text-gray-500 mb-4 italic">Tech Stack: {tech}</p>
      <div className="flex flex-wrap gap-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-400 hover:underline">
            <Github size={18} /> GitHub
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-400 hover:underline">
            <ExternalLink size={18} /> Live Site
          </a>
        )}
      </div>
    </motion.div>
  );
}