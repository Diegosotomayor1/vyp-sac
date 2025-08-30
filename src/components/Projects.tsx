import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Hospital Nacional Sergio Bernales",
    category: "Salud",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/Hospital_Nacional_%22_Sergio_E._Bernales%22.jpg",
  },
  {
    title: "Pistas y Veredas en Chalamarca",
    category: "Obras Viales",
    image:
      "https://portal.andina.pe/EDPfotografia3/Thumbnail/2021/04/26/000769285W.jpg",
  },
  {
    title: "Galería Comercial en Gamarra",
    category: "Construcción Civil",
    image:
      "https://elmontonero.pe/upload/uploads_images/20369-imagen-gamarra.jpg",
  },
  {
    title: "Saneamiento Integral en Lajas",
    category: "Saneamiento",
    image: "https://diarioelpueblo.com.pe/wp-content/uploads/2025/04/agua.png",
  },
];

const Projects = () => {
  return (
    <section
      id="proyectos"
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
            Proyectos Destacados
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-lg shadow-lg group h-80"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {project.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
