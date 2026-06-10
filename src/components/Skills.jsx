import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
  FaCode, FaServer, FaCloud, FaDocker, FaGitAlt,
  FaPython, FaJava, FaNode, FaReact, FaAws
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiRedhatopenshift, SiTypescript, SiAngular } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const frontendSkills = [
    { name: 'HTML', icon: <FaCode /> },
    { name: 'CSS', icon: <FaCode /> },
    { name: 'JavaScript', icon: <FaCode /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Angular', icon: <SiAngular /> },
    { name: 'JavaFX', icon: <FaCode /> },
    { name: 'Tailwind', icon: <FaCode /> },
  ];

  const backendSkills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'Django/Flask', icon: <FaServer /> },
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'C#', icon: <FaCode /> },
    { name: 'SQL', icon: <FaServer /> },
    { name: 'REST API', icon: <FaServer /> },
    { name: 'GraphQL', icon: <FaServer /> },
    { name: 'Microservices', icon: <FaServer /> },
    { name: 'API Integration', icon: <FaServer /> },
    { name: 'API Testing', icon: <FaServer /> },
    
  ];

  const devopsSkills = [
    { name: 'OpenShift', icon: <SiRedhatopenshift /> },
    { name: 'Kubernetes', icon: <SiKubernetes /> },
    { name: 'Terraform', icon: <SiTerraform /> },
    { name: 'Ansible', icon: <SiAnsible /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Git/GitHub', icon: <FaGitAlt /> },
    { name: 'Linux', icon: <FaServer /> },
  ];

  const SkillCarousel = ({ skills, reverse = false }) => {
    const count = skills.length;
    const anglePer = 360 / count;
    const radius = Math.round(80 / Math.tan(Math.PI / count)) + 90;
    const speed = reverse ? -0.225 : 0.225;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const rootRef = useRef(null);
    const stageRef = useRef(null);
    const rotationRef = useRef(0);
    const draggingRef = useRef(false);
    const pausedRef = useRef(false);   // paused on hover
    const visibleRef = useRef(true);   // paused when scrolled off-screen
    const lastXRef = useRef(0);

    // Drive rotation by mutating the transform directly (no React re-render per frame).
    useEffect(() => {
      let raf;
      const tick = () => {
        if (!prefersReduced && visibleRef.current && !draggingRef.current && !pausedRef.current) {
          rotationRef.current += speed;
          if (stageRef.current) {
            stageRef.current.style.transform = `translateZ(-${radius}px) rotateY(${rotationRef.current}deg)`;
          }
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [speed, radius, prefersReduced]);

    // Skip the loop's work entirely while the carousel is out of view.
    useEffect(() => {
      const el = rootRef.current;
      if (!el || typeof IntersectionObserver === 'undefined') return;
      const io = new IntersectionObserver(
        ([entry]) => {
          visibleRef.current = entry.isIntersecting;
        },
        { threshold: 0 }
      );
      io.observe(el);
      return () => io.disconnect();
    }, []);

    const handlePointerDown = (e) => {
      draggingRef.current = true;
      lastXRef.current = e.clientX;
      e.currentTarget.setPointerCapture?.(e.pointerId);
    };

    const handlePointerMove = (e) => {
      if (!draggingRef.current) return;
      const dx = e.clientX - lastXRef.current;
      lastXRef.current = e.clientX;
      rotationRef.current += dx * 0.4;
      if (stageRef.current) {
        stageRef.current.style.transform = `translateZ(-${radius}px) rotateY(${rotationRef.current}deg)`;
      }
    };

    const endDrag = () => {
      draggingRef.current = false;
    };

    return (
      <div
        ref={rootRef}
        className="skills-carousel"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => {
          pausedRef.current = false;
          endDrag();
        }}
      >
        <div
          ref={stageRef}
          className="carousel-stage"
          style={{ transform: `translateZ(-${radius}px) rotateY(0deg)` }}
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="carousel-card"
              style={{ transform: `rotateY(${index * anglePer}deg) translateZ(${radius}px)` }}
            >
              <div className="card-face card-front">
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
              <div className="card-face card-back" />
              <div className="card-face card-left" />
              <div className="card-face card-right" />
              <div className="card-face card-top" />
              <div className="card-face card-bottom" />
              <div className="card-shadow" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const SkillCategory = ({ title, skills, direction = 'wave' }) => {
    const isMarquee = direction === 'left' || direction === 'right';
    const isCarousel = direction === 'carousel' || direction === 'carousel-reverse';

    const renderSkillCard = (skill, index, keySuffix = '') => {
      const baseDelay = Math.min(index * 0.05, 0.5);
      const isWave = direction === 'wave';

      return (
        <motion.div
          key={`${skill.name}-${keySuffix}`}
          className="skill-item"
          whileHover={{ scale: 1.05, rotate: 3 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={
            isInView
              ? isWave
                ? { opacity: 1, scale: 1, y: [0, -8, 0] }
                : { opacity: 1, scale: 1 }
              : {}
          }
          transition={
            isWave
              ? {
                  opacity: { delay: baseDelay, duration: 0.4 },
                  scale: { delay: baseDelay, duration: 0.4 },
                  y: {
                    delay: baseDelay,
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  },
                }
              : { delay: baseDelay, duration: 0.4 }
          }
        >
          <div className="skill-icon">{skill.icon}</div>
          <span>{skill.name}</span>
        </motion.div>
      );
    };

    const marqueeItems = [...skills, ...skills];

    return (
      <motion.div
        className="skill-category"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h3>{title}</h3>
        {isCarousel ? (
          <SkillCarousel skills={skills} reverse={direction === 'carousel-reverse'} />
        ) : isMarquee ? (
          <div className={`skills-marquee marquee-${direction}`}>
            <div className="marquee-track">
              {marqueeItems.map((skill, index) =>
                renderSkillCard(skill, index % skills.length, `${direction}-${index}`)
              )}
            </div>
          </div>
        ) : (
          <div className="skills-grid">
            {skills.map((skill, index) => renderSkillCard(skill, index, `wave-${index}`))}
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="skills-content">
          <SkillCategory title="Frontend" skills={frontendSkills} direction='carousel-reverse' />
          <SkillCategory title="Backend" skills={backendSkills} direction='carousel' />
          <SkillCategory title="DevOps & Cloud" skills={devopsSkills} direction="carousel-reverse" />
        </div>
      </div>
    </section>
  );
};

export default Skills;

