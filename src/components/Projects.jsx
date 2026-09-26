import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { projects } from "../data";
import { useTheme } from "../context/ThemeContext";
import { Reveal, scaleIn } from "../utils/animations";

function ProjectCard({ project }) {
  const { dark } = useTheme();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-48 bg-slate-200 dark:bg-slate-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300' fill='%23${dark ? '1E293B' : 'E2E8F0'}'%3E%3Crect width='600' height='300'/%3E%3Ctext x='300' y='160' text-anchor='middle' fill='%2314B8A6' font-size='24' font-family='sans-serif'%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E`;
          }}
        />
        {project.role && (
          <span className="absolute top-3 left-3 tech-pill !bg-[var(--color-accent)] !text-white text-xs font-semibold">
            {project.role}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          className={`text-lg font-bold mb-1 ${
            dark ? "text-white" : "text-slate-800"
          }`}
        >
          {project.title}
        </h3>
        {project.subtitle && (
          <p
            className={`text-sm mb-3 ${
              dark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {project.subtitle}
          </p>
        )}

        {/* Expandable description */}
        <div className="relative mb-4">
          <p
            className={`text-sm leading-relaxed ${
              dark ? "text-slate-300" : "text-slate-600"
            } ${!expanded ? "line-clamp-3" : ""}`}
          >
            {project.description}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 mt-2 text-xs font-medium hover:underline"
            style={{ color: "var(--color-accent)" }}
          >
            {expanded ? (
              <>
                Show less <FiChevronUp size={14} />
              </>
            ) : (
              <>
                Read more <FiChevronDown size={14} />
              </>
            )}
          </button>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill text-xs">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                dark
                  ? "text-slate-400 hover:text-[var(--color-accent)]"
                  : "text-slate-500 hover:text-[var(--color-accent)]"
              }`}
            >
              <FiGithub size={15} />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                dark
                  ? "text-slate-400 hover:text-[var(--color-accent)]"
                  : "text-slate-500 hover:text-[var(--color-accent)]"
              }`}
            >
              <FiExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { dark } = useTheme();

  return (
    <section
      id="projects"
      className="section-padding"
      style={{
        background: dark ? "var(--color-dark-bg)" : "var(--color-bg-alt)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="section-title">
              Featured{" "}
              <span style={{ color: "var(--color-accent)" }}>Projects</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A selection of projects I've contributed to.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} variants={scaleIn} custom={i}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
