import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../data";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { dark } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6 border-t"
      style={{
        background: dark ? "#0F172A" : "#1E293B",
        borderColor: dark ? "#1E293B" : "#334155",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-5">
        {/* Social */}
        <div className="flex gap-4">
          {[
            { icon: <FiGithub size={18} />, href: personalInfo.github, label: "GitHub" },
            { icon: <FiLinkedin size={18} />, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: <FiMail size={18} />, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-2 rounded-lg text-slate-400 hover:text-[var(--color-accent)] transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-500 flex items-center gap-1.5">
          © {year} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
