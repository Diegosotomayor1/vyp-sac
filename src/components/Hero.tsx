import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="h-screen flex items-center justify-center relative text-white"
      style={{ backgroundColor: "var(--color-gray-100)" }}
    >
      {/* Placeholder para una imagen o video de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="text-center z-10 p-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Construyendo el Futuro del Perú
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          style={{ color: "var(--color-gray-200)" }}
        >
          Líderes en construcción con experiencia, calidad y compromiso desde
          2011.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="#proyectos"
          className="text-white font-bold py-3 px-8 rounded-full hover:opacity-80 transition-all duration-300 text-lg"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          Ver Proyectos
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
