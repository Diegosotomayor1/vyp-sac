import { motion } from "framer-motion";
import aboutImage from "../assets/nosotros.png";

const About = () => {
  return (
    <section
      id="nosotros"
      className="py-20"
      style={{ backgroundColor: "var(--color-gray-50)" }}
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
            Quiénes Somos
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            V Y P CONSTRUCTORA Y SERVICIOS GENERALES S.A.C. es una empresa líder
            en el ramo de la construcción, con una sólida trayectoria desde
            2011.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            {/* Placeholder de imagen */}
            <img
              src={aboutImage}
              alt="Equipo de VYPSAC"
              className="rounded-lg drop-shadow-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Nuestra Misión
            </h3>
            <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
              Ejecutar proyectos de construcción de alta calidad que contribuyan
              al desarrollo del país, garantizando la satisfacción de nuestros
              clientes, la seguridad de nuestros colaboradores y el respeto por
              el medio ambiente.
            </p>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Nuestros Valores
            </h3>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "var(--text-secondary)" }}
            >
              <li>Visión a largo plazo</li>
              <li>Seguridad y calidad en todas nuestras actividades</li>
              <li>Compromiso de cumplimiento de los plazos</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
