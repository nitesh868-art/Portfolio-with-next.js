'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with React, Tailwind CSS, and Framer Motion. Fully responsive and dark mode supported.",
    demoLink: "https://your-portfolio.vercel.app",
    codeLink: "https://github.com/nitesh868-art/Portfolio-with-next.js.git",
  },
  {
    title: "ToDo App",
    description:
      "A simple and efficient task management app using React. Includes add, delete, and mark-complete functionalities.",
    demoLink: "https://your-todo-app.vercel.app",
    codeLink: "https://github.com/nitesh868-art/To-do-using-react-.git",
  },
  {
    title: "E-commerce Product Page",
    description:
      "An interactive product page using React, styled-components, and fake API. Features product filter, images, and cart logic.",
   
    codeLink: "https://github.com/nitesh868-art/bidding-project-.git",
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 px-6 section-transparent">
      <div className="max-w-7xl mx-auto professional-glass-card p-12 card-hover-effect">
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl professional-heading text-white mb-6">
            My <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 professional-body max-w-3xl mx-auto">
            Showcasing my expertise through innovative projects and real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card border border-blue-700/30 rounded-xl p-8 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 bg-gradient-to-br from-gray-800/30 to-gray-900/30 card-hover-effect hover:brightness-110"
              onMouseMove={e => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty('--x', `${x}%`);
                card.style.setProperty('--y', `${y}%`);
              }}
              onMouseLeave={e => {
                const card = e.currentTarget;
                card.style.setProperty('--x', '50%');
                card.style.setProperty('--y', '50%');
              }}
            >
              <div className="glass-spotlight" />
              <h3 className="text-2xl font-bold mb-4 text-white professional-subheading">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-6 professional-body leading-relaxed">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary text-white px-6 py-3 professional-btn text-sm font-semibold"
                >
                  Live Demo <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-secondary px-6 py-3 professional-btn text-sm font-semibold"
                >
                  GitHub <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 