import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      qualification: 'BSc Computer Science',
      institution: 'Nelson Mandela University',
      period: '2021 - 2024',
      description: 'Graduated with 18 distinctions and a triple major in Mathematics, Applied Mathematics, and Computer Science. Member of the Golden Key International Honour Society.',
    },
    {
      qualification: 'Java Backend Developer',
      institution: 'Zaio.io',
      period: '2023 - 2024',
      description: 'Completed the Java Backend Development course, building production-style backend services and APIs.',
    },
    {
      qualification: 'Data Engineer Master’s Programme',
      institution: 'Naspers Labs',
      period: '2020 - 2021',
      description: 'Completed a Data Engineering programme covering statistics and the core tooling used by data engineers.',
    },
    {
      qualification: 'National Certificate in IT (Systems Development)',
      institution: 'MICT-SETA',
      period: '2020 - 2021',
      description: 'Completed NQF Level 5 as a software developer.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="education" className="education" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <motion.div
          className="education-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="education-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-body">
                <h3>{item.qualification}</h3>
                <div className="education-meta">
                  <span className="education-institution">{item.institution}</span>
                  <span className="education-period">{item.period}</span>
                </div>
                <p className="education-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
