import { motion } from "framer-motion";
import certificationsImage from "../assets/certificados.png";

const certificationsData = [
  {
    name: "ISO 9001",
    logo: certificationsImage,
  },
];

const Certifications = () => {
  return (
    <section
      id="certificaciones"
      className="py-20"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Nuestras Certificaciones
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Comprometidos con los más altos estándares de calidad, seguridad y
            gestión.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-8 w-full">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 w-full flex items-center justify-center"
            >
              <img
                src={cert.logo}
                alt={cert.name}
                className="w-full max-w-3xl filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
