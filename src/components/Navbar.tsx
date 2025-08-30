import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = [
    { title: "Inicio", href: "#inicio" },
    { title: "Nosotros", href: "#nosotros" },
    { title: "Servicios", href: "#servicios" },
    { title: "Proyectos", href: "#proyectos" },
    { title: "Certificaciones", href: "#certificaciones" },
    { title: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="shadow-md fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "var(--color-gray-50)" }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="text-2xl font-bold flex items-center gap-2"
          style={{ color: "var(--color-primary)" }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16"
            style={{ color: "var(--text-secondary)" }}
          />
          VYPSAC
        </div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="transition-colors duration-300 hover:text-orange-500"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          {/* Aquí puedes agregar un botón para menú móvil */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
