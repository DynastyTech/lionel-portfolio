import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [flippedCard, setFlippedCard] = useState(null);
  const [loadedPreviews, setLoadedPreviews] = useState(() => new Set());
  const flipTimerRef = useRef(null);

  // Touch devices can't hover, so they tap to flip instead of hovering.
  const isTouch =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: none)').matches;

  const openProjectLink = (url) => {
    if (!url || url === '#') return;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Only load a project's live-preview iframe once its card has been flipped,
  // so we don't fetch every external site on initial render.
  const markPreviewLoaded = (index) => {
    setLoadedPreviews((prev) => {
      if (prev.has(index)) return prev;
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  const handleCardEnter = (index) => {
    if (isTouch) return;
    clearTimeout(flipTimerRef.current);
    flipTimerRef.current = setTimeout(() => {
      setFlippedCard(index);
      markPreviewLoaded(index);
    }, 2000);
  };

  const handleCardLeave = () => {
    if (isTouch) return;
    clearTimeout(flipTimerRef.current);
    setFlippedCard(null);
  };

  const handleCardClick = (index, link) => {
    if (isTouch) {
      // First tap flips to the preview; tapping again flips back.
      setFlippedCard((prev) => (prev === index ? null : index));
      markPreviewLoaded(index);
      return;
    }
    openProjectLink(link);
  };

  //testing projects

  const projects = [
    {
      title: 'Fitness e-commerce platform',
      description: 'Developed modern e-commerce prototype for FitTeam. Mobile-responsive design ready.',
      technologies: ['Railway', 'React', 'Node.js', 'Stripe','Vite', '  CI/CD','TypeScript','SQLite', 'Axios', 'ExperessJs'],
      link: 'https://DynastyTech.github.io/fit-team-prototype/#/',
      
    },
    {
      title: 'Document Verification Dashboard',
      description: 'Developed document processing dashboards for Standard Bank with AI integration for automated document analysis and processing.',
      technologies: ['AI/ML', 'React', 'Node.js', 'Python', 'Dashboard Development'],
      link: '#',
      github: '#'
    },
    {
      title: 'Analytics Dashboard - Ethio Telecom',
      description: 'Currently developing analytics dashboard for Ethio Telecom company to provide insights and data visualization.',
      technologies: ['Analytics', 'Data Visualization', 'React', 'API Integration'],
      link: '#',
      github: '#'
    },
    {
      title: 'Psychologist Booking website',
      description: 'Building and maintaining the company\'s website and mobile app.',
      technologies: ['Mobile Application Development', 'Web development', 'Testing', 'UI/UX Design','React Native', 'React', 'Node.js', 'MongoDB'],
      link: 'https://amari.health/',
      github: '#'
    },
    {
      title: 'Xcentric Brand website',
      description: 'Building and maintaining the company\'s website.',
      technologies: ['Mobile Application Development', 'Web development', 'Testing', 'UI/UX Design','React Native', 'React', 'Node.js', 'MongoDB, Vercel'],
      link: 'https://DynastyTech.github.io/Xcentric/',
      github: '#'
    },
    {
      title: 'Munsoft website',
      description: 'Modernized the company\'s website.',
      technologies: ['Mobile Application Development', 'Web development', 'Testing', 'UI/UX Design','React Native', 'React', 'Node.js', 'MongoDB, Vercel'],
      link: 'https://munsoft.co.za',
      github: '#'
    },
    {
      title: 'Site Inspection App',
      description: 'Built site inspection app to automate site inspection processes, with AI integrated to produce comprehensive reports.',
      technologies: ['AI Integration', 'Mobile Development', 'Automation', 'Report Generation'],
      link: '#',
      github: '#'
    },
    {
      title: 'Daily News App',
      description: 'Built a daily news app to provide users with the latest news and updates.',
      technologies: ['Flutter', 'Mobile Development', 'REST & RESTful API', 'Android & iOS Development'],
      link: '#',
      github: '#'
    },
    {
      title: 'Project Management Dashboard',
      description: 'Full-stack project management dashboard built for Polymorph Systems to streamline project workflows and team collaboration.',
      technologies: ['Full Stack', 'React', 'Node.js', 'Database', 'REST API'],
      link: '#',
      github: '#'
    },
    {
      title: 'Document Processing Dashboard',
      description: 'Developed document processing dashboards for Nedbank with AI integration for automated document analysis and processing.',
      technologies: ['AI/ML', 'React', 'Node.js', 'Python', 'Dashboard Development'],
      link: '#',
      github: '#'
    },
    {
      title: 'Credit Application Dashboard',
      description: 'Developed Credit Application dashboard for FRG with AI integration for automated document analysis and processing.',
      technologies: ['AI/ML', 'React', 'Node.js', 'Python', 'Dashboard Development'],
      link: '#',
      github: '#'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="projects-carousel-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1.2,
              slideShadows: false,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation
            pagination={{ clickable: true }}
            className="project-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide 
                key={project.title}
                onMouseEnter={() => handleCardEnter(index)}
                onMouseLeave={handleCardLeave}
              >
                <motion.div
                  className={`project-card ${
                    project.link !== '#' ? 'project-card-clickable' : ''
                  } ${flippedCard === index ? 'is-flipped' : ''}`}
                  variants={itemVariants}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleCardClick(index, project.link)}
                  onKeyDown={(e) => {
                    if (e.key !== 'Enter' && e.key !== ' ') return;
                    e.preventDefault();
                    if (isTouch) {
                      handleCardClick(index, project.link);
                    } else {
                      openProjectLink(project.link);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={
                    isTouch
                      ? `Tap to preview ${project.title}`
                      : project.link !== '#'
                      ? `Open ${project.title} project`
                      : `${project.title} project preview`
                  }
                >
                  <div className="project-card-inner">
                    <div className="project-card-face project-card-front">
                      <div className="project-header">
                        <h3>{project.title}</h3>
                        <div className="project-links">
                          {project.link !== '#' && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              aria-label={`Open ${project.title} live site`}
                            >
                              <FaExternalLinkAlt />
                            </a>
                          )}
                          {project.github !== '#' && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              aria-label={`Open ${project.title} GitHub repo`}
                            >
                              <FaGithub />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tech">
                        {project.technologies.map((tech, i) => (
                          <span key={tech + i} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="project-card-face project-card-back">
                      {project.link !== '#' ? (
                        <>
                          <p className="project-preview-title">Live Preview</p>
                          <div className="project-preview-frame">
                            <iframe
                              title={`${project.title} preview`}
                              src={loadedPreviews.has(index) ? project.link : undefined}
                              loading="lazy"
                              sandbox="allow-same-origin allow-scripts allow-forms"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </>
                      ) : (
                        <div className="project-nda">
                          <p className="nda-title">Preview Restricted</p>
                          <p className="nda-text">This project is protected by an NDA.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

