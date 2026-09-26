import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../data";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { dark } = useTheme();
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && text === currentRole) {
      const timer = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timer);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: dark
          ? "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)"
          : "linear-gradient(135deg, #1E293B 0%, #334155 50%, #1E293B 100%)",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
        style={{ background: "var(--color-accent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[var(--color-accent)] font-semibold text-sm tracking-widest uppercase mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Hi, I'm{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--color-accent) 0%, #5EEAD4 100%)",
              }}
            >
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-3">
            {personalInfo.title}
            <span style={{ color: "var(--color-accent)" }}>{text}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ color: "var(--color-accent)" }}
            >
              |
            </motion.span>
          </p>

          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 mb-8">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            <a href={personalInfo.cvPath} download className="btn-primary">
              <FiDownload size={16} />
              Download CV
            </a>
            <Link
              to="contact"
              smooth
              offset={-80}
              duration={600}
              className="btn-ghost !border-slate-400 !text-slate-300 hover:!bg-[var(--color-accent)] hover:!border-[var(--color-accent)] hover:!text-white cursor-pointer"
            >
              <FiMail size={16} />
              Contact Me
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex justify-center lg:justify-start gap-4">
            {[
              { icon: <FiGithub size={20} />, href: personalInfo.github, label: "GitHub" },
              { icon: <FiLinkedin size={20} />, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: <FiMail size={20} />, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-lg border border-slate-600 text-slate-400 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative">
            {/* Decorative ring */}
            <div
              className="absolute -inset-2 rounded-full opacity-20 blur-sm"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent) 0%, #5EEAD4 100%)",
              }}
            />
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover object-top border-4 border-slate-700"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='288' height='288' fill='%231E293B'%3E%3Crect width='288' height='288' rx='144'/%3E%3Ctext x='144' y='155' text-anchor='middle' fill='%2314B8A6' font-size='48' font-family='sans-serif'%3ENN%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 rounded-full bg-slate-400" />
        </div>
      </motion.div>
    </section>
  );
}
