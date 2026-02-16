// src/components/ServiceCard.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function ServiceCard({ service, index }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="service-card"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -18,
        rotateX: 6,
        rotateY: -6,
        scale: 1.03,
      }}
      onClick={() => navigate(`/services/${service.id}`)}
      style={{ "--accent": service.accent }}
    >
      <div className="service-glow" />

      <h3>{service.title}</h3>
      <h4>{service.subtitle}</h4>
      <p>{service.description}</p>

      <div className="service-cta">
        Explore →
      </div>
    </motion.div>
  );
}
