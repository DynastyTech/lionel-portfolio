import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaChess, FaMusic, FaHeart, FaBrain } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const hobbies = [
    { icon: <FaBrain />, text: 'Learning new things tech daily' },
    { icon: <FaMusic />, text: 'Deejaying & socializing occasionally' },
    { icon: <FaHeart />, text: 'Helping others grow' },
    { icon: <FaChess />, text: 'Mathematics & problem solving' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          
          <motion.div variants={itemVariants} className="about-content">
            <div className="about-text">
              <motion.p
                variants={itemVariants}
                className="about-description"
              >
                I’m a Platform Engineer at IBM with 5+ years of professional experience building and shipping full-stack and cloud-native software.
                By day I work with Hybrid Cloud, OpenShift, Kubernetes, Terraform, and CI/CD automation; alongside that I design full-stack web and mobile apps with React, Angular, Node.js, Java, and Flutter, modernize legacy systems, and turn ideas into real, production-ready solutions.

                <br/>
                <br/>
                <br/>
                With a background in Computer Science and Mathematics (18 distinctions and a triple major!) and being a member of the Golden Key International Honour Society, problem-solving is basically my superpower. I’m an AWS Certified Cloud Practitioner and Terraform Practitioner (Advanced), and I’ve been building with AI-assisted tools like Cursor and Claude Code daily since 2022. I’m big on AI, DevOps, and anything that pushes tech forward.
                I take pride in my work, always go the extra mile, and I’m constantly learning, experimenting, and building things that make life easier for businesses and communities.
            
              </motion.p>
              
              

          
            </div>
          
            
            <motion.div
              variants={itemVariants}
              className="about-hobbies"
            >
              <h3>My Hobbies & Interests</h3>
              <div className="hobbies-grid">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    className="hobby-card"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="hobby-icon">{hobby.icon}</div>
                    <p>{hobby.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

