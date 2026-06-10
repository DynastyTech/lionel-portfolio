import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaAws, FaShieldAlt, FaJava, FaPython, FaBrain, FaCertificate,
} from 'react-icons/fa';
import { SiTerraform, SiRedhatopenshift } from 'react-icons/si';
import './Certifications.css';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2026', icon: <FaAws />, featured: true },
    { name: 'Terraform Practitioner (Advanced)', issuer: 'IBM', year: '2026', icon: <SiTerraform /> },
    { name: 'Red Hat OpenShift Admin I (DO180)', issuer: 'Red Hat', year: '2025', icon: <SiRedhatopenshift /> },
    { name: 'Certified Ethical Hacker (CEHv10)', issuer: 'Simplilearn', year: '2020', icon: <FaShieldAlt /> },
    { name: 'Full-Stack Java Developer', issuer: 'Zaio.io', year: '2024', icon: <FaJava /> },
    { name: 'App Modernization w/ watsonx Code Assistant for Z', issuer: 'IBM', year: '2025', icon: <FaBrain /> },
    { name: 'Enterprise Design Thinking Practitioner', issuer: 'IBM', year: '2025', icon: <FaCertificate /> },
    { name: 'Python for Data Science', issuer: 'IBM', year: '2020', icon: <FaPython /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        <motion.div
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className={`certification-card ${cert.featured ? 'is-featured' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.04, y: -4 }}
            >
              <div className="certification-icon">{cert.icon}</div>
              <div className="certification-body">
                <h3>{cert.name}</h3>
                <div className="certification-meta">
                  <span className="certification-issuer">{cert.issuer}</span>
                  <span className="certification-year">{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="certifications-note"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.7 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          30+ additional certifications and digital badges available on LinkedIn.
        </motion.p>
      </div>
    </section>
  );
};

export default Certifications;
