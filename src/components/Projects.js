import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import websiteImg1 from '../assets/Insta.png';
import websiteImg2 from '../assets/easy-bills.avif';
import websiteImg3 from '../assets/Netflix.png';
import { FaGithub, FaExternalLinkAlt, FaPython, FaInstagram } from 'react-icons/fa';
import { SiPhp, SiStreamlit, SiHtml5, SiCss3 } from 'react-icons/si';

export default function Projects() {
  const projectsRef = useRef(null); 
  const [animate, setAnimate] = useState(false); 

  const config = {
    projects: [
      {
        image: websiteImg3,
        description: 'Netflix Data Analysis Dashboard',
        techStack: ['Python', 'Streamlit'],
        link: 'https://gladwinjs.streamlit.app/',
      },
      {
        image: websiteImg2,
        description: 'Bill Payment Tracker Web Application',
        techStack: ['PHP', 'HTML', 'CSS'],
        link: 'https://github.com/gladwinjs/Bill-Payment-Reminder',
      },
      {
        image: websiteImg1,
        description: 'Instagram Web Scraping Tool.',
        techStack: ['Python', 'Instaloader'],
        link: 'https://github.com/gladwinjs/Web-Scrapping',
      },
    ],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const handleProjectLinkClick = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="flex flex-col py-20 px-5 justify-center bg-gradient-to-r from-[#2b2b2b] via-[#1c1c1c] to-[#ff005c] text-white"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <motion.h1
            className="text-4xl mb-5 w-[170px] font-bold border-b-4 border-teal-400 pb-2 text-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: animate ? 1 : 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            Projects
          </motion.h1>
          <p className="text-lg text-gray-300">
            Explore some of my best projects, built using various technologies such as Python, PHP, React, and more.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.projects.map((project, index) => (
            <motion.div
              className="relative transform transition-transform hover:scale-105 hover:shadow-2xl border-4 border-transparent rounded-xl hover:bg-gradient-to-br from-[#ff005c] to-[#00bfff] bg-opacity-90 p-5"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 50 }}
              transition={{ duration: 1.5, delay: index * 0.4, ease: 'easeInOut' }}
            >
              <motion.img
                className="h-[200px] w-[500px] object-cover rounded-lg shadow-lg transition-transform"
                src={project.image}
                alt={`Project ${index + 1}`}
                whileHover={{ scale: 1.1 }}
                loading="lazy" // Lazy load the images
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <p className="text-center text-white text-xl p-5">{project.description}</p>
                <div className="flex justify-center gap-3 text-xl text-teal-400">
                  {project.techStack.map((tech, i) => {
                    let icon;
                    switch (tech) {
                      case 'Python':
                        icon = <FaPython />;
                        break;
                      case 'Instaloader':
                        icon = <FaInstagram />;
                        break;
                      case 'PHP':
                        icon = <SiPhp />;
                        break;
                      case 'Streamlit':
                        icon = <SiStreamlit />;
                        break;
                      case 'HTML':
                        icon = <SiHtml5 />;
                        break;
                      case 'CSS':
                        icon = <SiCss3 />;
                        break;
                      default:
                        icon = null;
                    }
                    return (
                      <span key={i} className="text-lg flex items-center gap-1">
                        {icon} {tech}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
              <div className="absolute bottom-5 w-full flex justify-center gap-5">
                <a
                  className="btn bg-gradient-to-r from-[#ff005c] to-[#00bfff] text-white py-2 px-6 rounded-lg hover:scale-105 transition duration-300 transform hover:bg-gradient-to-l"
                  target="_blank"
                  href={project.link}
                  onClick={handleProjectLinkClick}
                  aria-label={`View the project: ${project.description}`}
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
