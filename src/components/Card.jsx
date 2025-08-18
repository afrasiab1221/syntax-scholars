import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.2,
    },
  }),
};

const Card = ({ title, description, buttonText, index }) => {
  const ref = useRef(null);

  // Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse movement → rotation
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  // Handle mouse move
  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX / 10);
    y.set(offsetY / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        rotateX: -5, // 👈 always tilted upwards
        rotateY: 5, // 👈 slight sideways angle
        transformPerspective: 1000, // adds depth so it looks 3D
      }}
      className="bg-white rounded-2xl shadow-lg p-6 text-center 
             transition-transform duration-300 hover:scale-105"
    >
      <h1 className="text-2xl font-bold text-primary">{title}</h1>
      <p className="mt-2 text-gray-600">{description}</p>
      {buttonText && (
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
          {buttonText}
        </button>
      )}
    </motion.div>
  );
};

export default Card;
