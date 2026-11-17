"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  Mail,
  ExternalLink,
  Code2,
  Server,
  Wrench,
  CheckCircle2,
  Menu,
  X,
  ArrowUp,
  ChevronRight,
  Send,
  Sparkles,
  Layout,
  Globe,
  Smartphone,
  Zap,
  Search,
  Users,
  Calendar,
  Layers,
  RefreshCw,
} from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Why Me", href: "#why-me" },
  { name: "Contact", href: "#contact" },
];

const SKILLS = {
  frontend: [
    { name: "HTML5", },
    { name: "CSS3", },
    { name: "JavaScript", },
    { name: "React.js", },
    { name: "Next.js", },
    { name: "Tailwind CSS", },
    { name: "Bootstrap", },
  ],
  backend: [
    { name: "Node.js", },
    { name: "Express.js", },
    { name: "MongoDB", },
    { name: "REST APIs", },
    { name: "Mongoose", },
    { name: "JWT Auth", },
  ],
  tools: [
    { name: "Git", },
    { name: "GitHub", },
    { name: "VS Code", },
    { name: "Cursor AI ", },
    { name: "Claude", },
    { name: "Vercel", },
  ],
};

const PROJECTS = [
  {
    title: "The Aura Store",
    description:
      "A modern full-stack e-commerce platform offering seamless product browsing, active cart management, dynamic category filtering, and secure checkout workflows.",
    tags: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    live: "https://the-aura-store.vercel.app/",
    category: "Full-Stack Web App",
  },
  {
    title: "Flavor Haven Restaurant",
    description:
      "Interactive restaurant web experience highlighting online menu exploration, table reservations, and automated image compression.",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    live: "https://flavor-haven-two.vercel.app/",
    category: "Full-Stack Web App",
  },
  {
    title: "JABAI",
    description:
      "Innovative AI-powered platform designed to provide interactive capabilities with high-performance user interface components.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "API Integration"],
    live: "https://jabai-seven.vercel.app/",
    category: "GYM Web Application",
  },
  {
    title: "City Vets Pet Clinic",
    description:
      "Full-service web platform built for a modern pet clinic offering appointment booking, service showcases, and client communication tools.",
    tags: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    live: "https://www.cityvetspetclinic.com/",
    category: "Full-Stack Web App",
  },
  {
    title: "Royal Stay Hotel",
    description:
      "Luxury hotel reservation web portal with room browsing, virtual booking flow, and responsive high-end aesthetic design.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    live: "https://royals-stay-hotel.netlify.app/",
    category: "Booking System",
  },
  {
    title: "TravelX",
    description:
      "Modern travel agency landing page featuring interactive destination hubs, tour scheduling, and responsive layout structures.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://the-travelx.netlify.app/",
    category: "Landing Page",
  },
];

const SERVICES = [
  {
    title: "Business Websites",
    description:
      "Custom-coded, high-converting websites designed specifically to establish authority and drive sales for businesses.",
    icon: Globe,
  },
  {
    title: "Landing Pages",
    description:
      "Ultra-fast, conversion-focused single-page sites designed to showcase product launches or active ad campaigns.",
    icon: Layout,
  },
  {
    title: "Portfolio Websites",
    description:
      "Bespoke personal platforms tailored for executives, freelancers, and creatives seeking premium digital positioning.",
    icon: Sparkles,
  },
  {
    title: "Booking Systems",
    description:
      "Seamless scheduling architectures equipped with automated slot management, notifications, and customer databases.",
    icon: Calendar,
  },
  {
    title: "Website Redesign",
    description:
      "Modernizing legacy websites into responsive, hyper-fast platforms with updated UI/UX and current technical standards.",
    icon: RefreshCw,
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "Scalable web applications built end-to-end with dynamic database systems, robust authentication, and API integrations.",
    icon: Layers,
  },
];

const WHY_CHOOSE_ME = [
  {
    title: "Responsive Design",
    description: "Flawless rendering on mobile, tablet, and widescreen displays.",
    icon: Smartphone,
  },
  {
    title: "Clean Code",
    description: "Maintainable, scalable, and fully documented developer architecture.",
    icon: Code2,
  },
  {
    title: "Fast Performance",
    description: "Optimized image handling, lazy loading, and quick core web vitals.",
    icon: Zap,
  },
  {
    title: "Modern UI/UX",
    description: "Glassmorphism, crisp dark modes, and subtle, tactile interactions.",
    icon: Sparkles,
  },
  {
    title: "SEO Friendly",
    description: "Structured metadata and semantic HTML built for high search visibility.",
    icon: Search,
  },
  {
    title: "Client-Focused Solutions",
    description: "Clear timelines, proactive communication, and business-driven results.",
    icon: Users,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("access_key", "39f1da46-aaaa-4de9-ac9b-edb249d41075");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const res = await response.json();

      if (res.success) {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", message: "" });
          setFormSubmitted(false);
        }, 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0B0F19] text-gray-100 min-h-screen selection:bg-cyan-500 selection:text-black font-sans relative overflow-hidden">

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none" />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#0B0F19]/80 backdrop-blur-md border-b border-gray-800/80 py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="#" className="flex items-center space-x-2 group">
            <span className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg group-hover:scale-105 transition-transform">
              AW
            </span>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Abdullah<span className="text-cyan-400">.dev</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 relative py-1 ${isActive ? "text-cyan-400" : "text-gray-300"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-md shadow-purple-500/10 hover:shadow-cyan-500/20 hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0B0F19]/95 backdrop-blur-lg border-b border-gray-800 px-4 pt-2 pb-6 space-y-3"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center mt-4 w-full px-5 py-3 rounded-xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-24">
        <section className="min-h-[85vh] flex items-center relative py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-12 gap-12 items-center">

              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="md:col-span-7 space-y-6 text-center md:text-left"
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs sm:text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  <span>Available for Freelance & Full-time Roles</span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none"
                >
                  Hi, I&apos;m <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Abdullah Waheed
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg sm:text-xl text-gray-400 font-medium"
                >
                  Full-Stack Developer
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="text-base text-gray-400 max-w-xl leading-relaxed"
                >
                  I build robust, high-performance, and visually captivating business websites and web applications. Specializing in modern JavaScript frameworks and user-focused digital experiences.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4 justify-center md:justify-start pt-2"
                >
                  <a
                    href="#projects"
                    className="px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-95 transition-all shadow-lg shadow-purple-500/20 hover:scale-[1.02] active:scale-95 flex items-center space-x-2"
                  >
                    <span>View Projects</span>
                    <ChevronRight size={18} />
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-3.5 rounded-xl font-semibold text-gray-300 bg-gray-900 border border-gray-800 hover:border-gray-700 hover:text-white transition-all hover:bg-gray-800/50 hover:scale-[1.02] active:scale-95"
                  >
                    Contact Me
                  </a>
                </motion.div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-5 flex justify-center relative"
              >
                <div className="relative w-full max-w-md aspect-square rounded-2xl p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 shadow-2xl shadow-purple-500/20">
                  <div className="w-full h-full bg-[#0E1424] rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative border border-gray-800/80">

                    <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                      <div className="flex space-x-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                      </div>
                      <span className="text-xs text-gray-500 font-mono">DeveloperPortfolio.jsx</span>
                    </div>

                    <div className="font-mono text-xs sm:text-sm space-y-2 py-4 text-gray-300">
                      <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                      <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-emerald-400">&quot;Abdullah Waheed&quot;</span>,</p>

                      <p className="pl-4"><span className="text-cyan-400">role</span>: <span className="text-emerald-400">&quot;Full-Stack Developer&quot;</span>,</p>
                      <p className="pl-4"><span className="text-cyan-400">stack</span>: [<span className="text-emerald-400">&quot;Next.js&quot;</span>, <span className="text-emerald-400">&quot;Node.js&quot;</span>, <span className="text-emerald-400">&quot;MongoDB&quot;</span>],</p>

                      <p className="pl-4"><span className="text-cyan-400">passion</span>: <span className="text-emerald-400">&quot;Crafting Digital Value&quot;</span></p>
                      <p>&#125;;</p>
                      <p className="pt-2"><span className="text-purple-400">function</span> <span className="text-blue-400">buildFuture</span>() &#123;</p>

                      <p className="pl-4"><span className="text-purple-400">return</span> developer.<span className="text-cyan-400">createImpact</span>();</p>
                      <p>&#125;</p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 p-3 rounded-xl flex items-center justify-between text-xs text-cyan-300 font-medium">
                      <span>status: Ready to collaborate</span>
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-2">
                About Me
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">
                Passionate about turning modern ideas into reality
              </p>
            </motion.div>

            <div className="grid md:grid-cols-12 gap-12 items-center">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="md:col-span-5 flex justify-center"
              >
                <div className="relative group w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-gray-800 to-gray-900 border border-gray-800 p-2 shadow-xl">
                  <div className="w-full h-full rounded-xl bg-gray-950 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 mb-4 shadow-lg">
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center font-bold text-2xl text-cyan-400">
                        AW
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white relative z-10">Abdullah Waheed</h3>
                    <p className="text-sm text-cyan-400 font-medium mb-2 relative z-10">Full-Stack Developer</p>
                    <p className="text-xs text-gray-400 relative z-10 max-w-xs">
                      Dedicated to continuous growth and creating clean software architecture.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="md:col-span-7 space-y-6 text-gray-300"
              >
                <h3 className="text-2xl font-bold text-white">
                  Creating business value through code and modern engineering
                </h3>
                <p className="leading-relaxed">
                  I am a motivated Full-Stack Developer with a deep focus on crafting clean, responsive, and performance-driven digital products. Whether working with growing startups or established businesses, my priority is delivering reliable web applications that solve real-world problems.
                </p>
                <p className="leading-relaxed">
                  My experience spans frontend user interface design using Next.js and Tailwind CSS as well as backend REST API design, database structures, and performance optimizations. I take pride in writing scalable code that ensures long-term viability.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800/80">
                    <span className="text-2xl font-bold text-cyan-400">100%</span>
                    <p className="text-sm text-gray-400 font-medium mt-1">Responsive Precision</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800/80">
                    <span className="text-2xl font-bold text-purple-400">Fast</span>
                    <p className="text-sm text-gray-400 font-medium mt-1">Performance First</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Skill Sections */}
        <section id="skills" className="py-20 relative bg-gray-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-2">
                Tech Stack
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">
                Core competencies & tools
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-[#111827] border border-gray-800 p-6 rounded-2xl shadow-xl hover:border-gray-700 transition-all"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Code2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Frontend</h3>
                </div>
                <div className="space-y-4">
                  {SKILLS.frontend.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-gray-900/80 border border-gray-800/60 flex items-center justify-between hover:border-blue-500/40 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-200">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-[#111827] border border-gray-800 p-6 rounded-2xl shadow-xl hover:border-gray-700 transition-all"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Server size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Backend</h3>
                </div>
                <div className="space-y-4">
                  {SKILLS.backend.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-gray-900/80 border border-gray-800/60 flex items-center justify-between hover:border-purple-500/40 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-200">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-[#111827] border border-gray-800 p-6 rounded-2xl shadow-xl hover:border-gray-700 transition-all"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Wrench size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Tools & Workflow</h3>
                </div>
                <div className="space-y-4">
                  {SKILLS.tools.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-gray-900/80 border border-gray-800/60 flex items-center justify-between hover:border-cyan-500/40 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-200">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-2">
                Portfolio
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">
                Featured Work & Deployments
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
                >
                  <div className="h-44 bg-gray-900/90 relative overflow-hidden flex items-center justify-center p-6 border-b border-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20 group-hover:scale-105 transition-transform duration-500" />
                    <div className="text-center relative z-10">
                      <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2 block">
                        {project.category}
                      </span>
                      <h4 className="text-xl font-bold text-white tracking-tight">{project.title}</h4>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white flex items-center justify-center space-x-2 hover:opacity-95 transition-all shadow-md shadow-purple-500/10 hover:shadow-cyan-500/20"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 relative bg-gray-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-2">
                Services
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">
                Solutions tailored to your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-[#111827] border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/20 mb-5 group-hover:scale-110 transition-transform">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        {/* WHY ME */}
        <section id="why-me" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-2">
                Why Work With Me
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">
                Engineering excellence with a client-first approach
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {WHY_CHOOSE_ME.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-start space-x-4 p-5 rounded-xl bg-gray-900/40 border border-gray-800/80"
                  >
                    <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 relative bg-gray-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-2">
                Get In Touch
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">
                Let&apos;s build something exceptional together
              </p>
            </motion.div>

            <div className="grid md:grid-cols-12 gap-12 items-start">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="md:col-span-5 space-y-6"
              >
                <div className="p-6 rounded-2xl bg-[#111827] border border-gray-800 space-y-6">
                  <h3 className="text-xl font-bold text-white">Contact Information</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Have a project in mind or an open role? Reach out via email or connect through social links below.
                  </p>

                  <div className="space-y-4 pt-2">
                    <a
                      href="mailto:abdullah101206@gmail.com"
                      className="flex items-center space-x-3 p-3 rounded-xl bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all text-sm"
                    >
                      <Mail className="text-cyan-400 shrink-0" size={18} />
                      <span className="truncate">abdullah101206@gmail.com</span>
                    </a>

                    <a
                      href="https://github.com/abdullah101206"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-xl bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all text-sm"
                    >
                      <FaGithub className="text-cyan-400 shrink-0" size={18} />
                      <span>github.com/abdullah101206</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/abdullah-waheed-developer/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-xl bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all text-sm"
                    >
                      <FaLinkedin className="text-cyan-400 shrink-0" size={18} />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="md:col-span-7"
              >
                <div className="p-8 rounded-2xl bg-[#111827] border border-gray-800 shadow-xl">
                  {formSubmitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                        <CheckCircle2 size={32} />
                      </div>
                      <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                      <p className="text-sm text-gray-400 max-w-md mx-auto">
                        Thank you for getting in touch. I will respond to your request as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@gmail.com"
                          className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+92 300 1234567"
                          className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                          Message
                        </label>
                        <textarea
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about your project or inquiry..."
                          className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:opacity-95 transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center space-x-2 disabled:opacity-50"
                      >
                        <span>{loading ? "Sending..." : "Send Message"}</span>
                        <Send size={16} />
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800/80 bg-[#080B12] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <Link href="#" className="flex items-center space-x-2">
                <span className="p-1.5 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm">
                  AW
                </span>
                <span className="font-bold text-lg text-white">
                  Abdullah<span className="text-cyan-400">.dev</span>
                </span>
              </Link>
              <p className="text-xs text-gray-500 mt-2">
                &copy; {new Date().getFullYear()} Abdullah Waheed. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
              {NAV_LINKS.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-cyan-400 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}