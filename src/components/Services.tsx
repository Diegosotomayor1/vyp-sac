import { motion } from "framer-motion";
import { FaFaucet, FaHardHat, FaHospital, FaRoad } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaHardHat className="text-4xl" style={{ color: 'var(--color-primary)' }} />,
    title: "Construcción Civil",
    description:
      "Edificaciones comerciales, residenciales e institucionales de gran envergadura.",
  },
  {
    icon: <FaHospital className="text-4xl" style={{ color: 'var(--color-primary)' }} />,
    title: "Infraestructura de Salud",
    description:
      "Especialistas en la construcción y acondicionamiento de hospitales, clínicas y centros de salud.",
  },
  {
    icon: <FaRoad className="text-4xl" style={{ color: 'var(--color-primary)' }} />,
    title: "Obras Viales",
    description:
      "Construcción y mejoramiento de carreteras, pistas, veredas y accesos viales.",
  },
  {
    icon: <FaFaucet className="text-4xl" style={{ color: 'var(--color-primary)' }} />,
    title: "Proyectos de Saneamiento",
    description:
      "Sistemas de agua potable y alcantarillado para el desarrollo de comunidades.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Nuestros Servicios
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
              style={{ backgroundColor: 'var(--color-gray-50)' }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {service.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
