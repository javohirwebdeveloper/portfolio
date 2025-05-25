import React, { useRef } from "react";
import AnimatedBackground from "./components/AnimatedBackground"; // ⬅️ import qiling
import { IconBrandTelegram } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Button } from "./components/Button";
import { Github, ExternalLink, Mail, Linkedin } from "lucide-react";
import { PhoneCall } from "lucide-react";


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
      

          <a href="/Javoxir Rezume.pdf" download>
          <div className="relative duration-300  hover:-rotate-0  -rotate-12 group border-sky-950 border-4  overflow-hidden rounded-2xl h-52 w-72 bg-gray-900 p-5 flex flex-col items-start gap-4">
  <div className="text-gray-50">
    <span className="font-bold text-5xl">JJ</span>
    <p className="text-xs">Frontend Developer</p>
  </div>
  <button className="duration-300 hover:bg-sky-950 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-900 px-3 py-2 flex flex-row items-center gap-3">
    Dowload Resume
    <svg
      className="w-6 h-6 fill-current"
      height={100}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 100 100"
      width={100}
      x={0}
      xmlns="http://www.w3.org/2000/svg"
      y={0}
    >
      <path
        d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z"
        fillRule="evenodd"
      ></path>
    </svg>
  </button>
  <svg
    className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-950"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
  >
    <path
      data-name="layer1"
      d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
      strokeMiterlimit={10}
      strokeWidth={5}
    />
  </svg>
  <svg
    className="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-800"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
  >
    <path
      data-name="layer1"
      d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
  </svg>
</div>
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
            I specialize in building full-scale user interfaces with React, integrating Firebase for scalable real-time solutions, and crafting pixel-perfect responsive designs using Tailwind CSS.
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
  desc="Only for mobile. A complete e-commerce front built with React and Firebase. Includes cart logic, order placement, real-time updates, and mobile-first responsiveness."
  tech="React, Firebase, Tailwind, Vite"
  github="https://github.com/javohirwebdeveloper/UNUM/"
  live="https://unummarket.uz/"
  image="/unum.jpg"
/>
        <ProjectCard
  title="GMT Health"
  desc="Responsive landing page for a company that sells medical equipment and transport vehicles for clinics and hospitals. Clean layout, professional design focus."
  tech="React, Tailwind CSS"
  github="https://github.com/javohirwebdeveloper/global-mt"
  live="https://global-mt.vercel.app/"
  image="/gmt.png"
/>
<ProjectCard
  title="Notivo — IELTS Essay AI Checker"
  desc="Frontend interface for an AI-powered IELTS essay evaluator. Features include dynamic essay analysis, smooth UX, and reliable API calls."
  tech="React, Tailwind CSS, REST API"
  github="https://github.com/javohirwebdeveloper/writing"
  live="https://notivo.vercel.app/"
  image="/notivo.png"
/>

<ProjectCard
  title="iPhone 15 Landing Page Clone"
  desc="Pixel-perfect clone of Apple's iPhone 15 product page. Built with Vite, Tailwind, and React. ESLint enforced code quality and mobile-first layout."
  tech="React, Tailwind CSS, Vite, ESLint"
  github="https://github.com/javohirwebdeveloper/apple-clone-main"
  live="http://apple-clone-by-javohir.vercel.app/"
  image="/apple.png"
/>
<ProjectCard
  title="Green Shop"
  desc="Modern online store with a product catalog, filtering logic, and cart system. Built with component-based architecture and responsive design."
  tech="React, Tailwind CSS"
  github="https://github.com/javohirwebdeveloper/7-oy-imtihon"
  live="https://7-oy-imtihon.netlify.app/"
  image="/greenshop.png"
/>

<ProjectCard
  title="UIC Group Clone"
  desc="Corporate website clone of UIC Group. Responsive grid layout, optimized assets, and modular components for reusability."
  tech="React, Tailwind CSS"
  github="https://github.com/javohirwebdeveloper/4-DARS"
  live="https://4-dars-two.vercel.app/"
  image="/uic.png"
/>
        </div>
      </section>
      <section className="relative z-10 py-10 px-4 bg-black text-center border-b border-gray-800">
  <motion.h2
    className="text-3xl font-bold text-white mb-6"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Get in Touch
  </motion.h2>
  <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
  I’m actively looking for front-end internships and junior roles. Whether you represent a top-tier company or an ambitious startup, I’m ready to join, contribute, and grow. Let’s talk!
  </p>
  <div className="flex flex-wrap justify-center md:gap-6 gap-4 md:text-base text-xs">
    <a href="mailto:jumaboyevjavohir07@gmail.com" className="flex items-center md:gap-2 gap-1 text-indigo-400 hover:underline">
    <span className="max-md:hidden"><Mail size={20} /></span><span className="md:hidden"><Mail size={14} /></span> Email
    </a>
    <a href="tel:+998335159977" className="flex items-center md:gap-2 gap-1 text-green-400 hover:underline">
    <span className="max-md:hidden"><PhoneCall size={20}/></span><span className="md:hidden"><PhoneCall size={14}/></span> Phone
     Phone
    </a>
    <a href="https://t.me/javohir_fd" target="_blank" rel="noopener noreferrer" className="flex items-center md:gap-2 gap-1 text-blue-400 hover:underline">
    <span className="max-md:hidden"><IconBrandTelegram size={20} /></span><span className="md:hidden"><IconBrandTelegram size={14} /></span> @javohir_fd
     
    </a>
    <a href="https://www.linkedin.com/in/javohir-jumaboyev-3a2a36308/" target="_blank" className="flex items-center md:gap-2 gap-1 text-blue-300 hover:underline">
    <span className="max-md:hidden"><Linkedin size={20} /></span><span className="md:hidden"><Linkedin size={14} /></span> LinkedIn
    </a>
  </div>
</section>

<div className="fixed bottom-14 right-14 z-10">
  {/* From Uiverse.io by RiccardoRapelli */}
  <label className="switch">
    <input id="input" type="checkbox" defaultChecked="darkTheme" />
    <div className="slider round">
      <div className="sun-moon">
        <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
          <circle cx={50} cy={50} r={50} />
        </svg>
        <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
          <circle cx={50} cy={50} r={50} />
        </svg>
        <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
          <circle cx={50} cy={50} r={50} />
        </svg>
        <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
          <circle cx={50} cy={50} r={50} />
        </svg>
        <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
          <circle cx={50} cy={50} r={50} />
        </svg>
        <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
          <circle cx={50} cy={50} r={50} />
        </svg>
        <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
          <circle cx={50} cy={50} r={50} />
        </svg>
        <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
          <circle cx={50} cy={50} r={50} />
        </svg>
        <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
          <circle cx={50} cy={50} r={50} />
        </svg>
        <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
          <circle cx={50} cy={50} r={50} />
        </svg>
        <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
          <circle cx={50} cy={50} r={50} />
        </svg>
        <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
          <circle cx={50} cy={50} r={50} />
        </svg>
      </div>
      <div className="stars">
        <svg id="star-1" className="star" viewBox="0 0 20 20">
          <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
        </svg>
        <svg id="star-2" className="star" viewBox="0 0 20 20">
          <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
        </svg>
        <svg id="star-3" className="star" viewBox="0 0 20 20">
          <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
        </svg>
        <svg id="star-4" className="star" viewBox="0 0 20 20">
          <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
        </svg>
      </div>
    </div>
  </label>
</div>


    </main>
  );
}
function ProjectCard({ title, desc, tech, github, live, image }) {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-700 hover:shadow-xl transition duration-300"
      whileHover={{ scale: 1.02 }}
    >
      {image && (
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-48 object-cover rounded-xl mb-4 border border-gray-800"
        />
      )}
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-2">{desc}</p>
      <p className="text-sm text-gray-500 mb-4 italic">Tech Stack: {tech}</p>
      <div className="flex flex-wrap gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-400 hover:underline"
          >
            <Github size={18} /> GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-green-400 hover:underline"
          >
            <ExternalLink size={18} /> Live Site
          </a>
        )}
      </div>
    </motion.div>
  );
}
