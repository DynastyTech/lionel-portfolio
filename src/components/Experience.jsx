import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Platform Engineer',
      company: 'IBM South Africa',
      period: 'May 2025 - Current',
      description: 'Built AI-driven analytics dashboards for a telecom client in Ethiopia to support drive-test analytics and network optimisation, and developed a document-processing pilot for major South African banks (Nedbank, FNB, SARB, Standard Bank) focused on automation and data extraction. Provisioned and managed IBM Cloud infrastructure with Terraform (IaC) and enabled hybrid-cloud connectivity via IBM Satellite Connect, collaborating with Solution Architects and senior AI, Data, and Software Engineers.',
      technologies: ['OpenShift', 'Kubernetes', 'Terraform', 'Ansible', 'IBM Cloud', 'AI Integration']
    },
    {
      title: 'AI Software Engineer (Freelance)',
      company: 'Marisa Peer',
      period: 'Feb 2026 - Apr 2026',
      description: 'Delivered focused AI engineering for an internationally recognised wellness and personal-development brand. Built and integrated AI-assisted tools using modern LLM APIs (OpenAI, Anthropic) to support content and operational workflows, shipping quickly on tight timelines. Ran concurrently with my full-time role at IBM.',
      technologies: ['OpenAI', 'Anthropic', 'LLM APIs', 'AI Integration', 'Cursor', 'Claude Code']
    },
    {
      title: 'Freelance Software Engineer',
      company: 'DynastyTech Solutions',
      period: '2021 - Current',
      description: 'Build and ship production software for clients in parallel with full-time roles — end-to-end websites, internal tools, and AI-integrated applications. Designed and developed Munsoft\'s live website (munsoft.co.za) and ongoing internal tools, originated through a self-pitched on-site prototype.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS']
    },
    {
      title: 'Junior Software Engineer',
      company: 'MG-Consulting Engineers PTY LTD',
      period: 'Feb 2025 - May 2025',
      description: 'Designed and built a full-stack site-inspection platform to automate field inspections and reporting. Built a responsive React frontend and Node.js/REST backend, integrated AI-assisted report generation to cut manual reporting time, and containerised services for cloud-native deployment within an Agile team.',
      technologies: ['React', 'Node.js', 'REST APIs', 'AI Integration', 'CI/CD', 'Appwrite']
    },
    {
      title: 'Full-Stack Java Developer',
      company: 'Amari Health',
      period: 'Feb 2023 - Nov 2024',
      description: 'Designed and developed full-stack Java applications and internal tools supporting Amari Health\'s wellness platform over a 22-month engagement. Built robust Java backend services with modern frontend interfaces, integrating internal systems and third-party APIs, while applying AI-assisted workflows to accelerate delivery — in parallel with my final years of BSc studies.',
      technologies: ['Java', 'React Native', 'React', 'Node.js', 'MongoDB', 'UI/UX Design']
    },
    {
      title: 'Software Dev Vac Work',
      company: 'Polymorph Systems',
      period: 'Dec 2022 - Jan 2023',
      description: 'Built a full-stack project-management dashboard for internal company operations. Developed Angular / Angular Material frontend components and backend logic using AWS Lambda, DynamoDB, and EC2 — the first professional environment where I adopted AI-assisted coding in my daily workflow.',
      technologies: ['Angular', 'AWS Lambda', 'DynamoDB', 'EC2', 'Full Stack']
    },
    {
      title: 'Mathematics Tutor',
      company: 'Nelson Mandela University & University of Pretoria',
      period: 'Feb 2022 - Nov 2024',
      description: 'Helping first year engineering students with mathematics.',
      technologies: ['Mathematics', 'Teaching', 'Problem Solving']
    },
    {
      title: 'IT Trainer',
      company: 'Moshal',
      period: 'Dec 2021 - Nov 2024',
      description: 'Assisting Moshal students with basic computing and MS skills.',
      technologies: ['Training', 'Microsoft Office', 'Basic Computing']
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Umuzi.org',
      period: 'Aug 2020 – Apr 2021',
      description: 'Started my professional software engineering career on Umuzi.org\'s intensive work-readiness programme. Built full-stack web applications in JavaScript, React, Node.js, and Git-based workflows, and was selected on performance for placement at Sanlam Investments.',
      technologies: ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'Full Stack Development']
    },
    {
      title: 'BI Learnership',
      company: 'Sanlam Investments / Umuzi.org',
      period: 'Nov 2020 – Apr 2021',
      description: 'Business Intelligence at Sanlam investments, through Umuzi.org as a recruit.',
      technologies: ['Business Intelligence', 'Data Analysis', 'SQL']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <div className="timeline-company">
                    <FaBriefcase /> {exp.company}
                  </div>
                  <div className="timeline-period">
                    <FaCalendarAlt /> {exp.period}
                  </div>
                </div>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

