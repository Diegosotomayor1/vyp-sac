import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contacto"
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
            Contacto
          </h2>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:outline-none"
                style={{
                  borderColor: "var(--color-gray-300)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--color-primary)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--color-gray-300)")
                }
              />
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:outline-none"
                style={{
                  borderColor: "var(--color-gray-300)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--color-primary)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--color-gray-300)")
                }
              />
              <textarea
                placeholder="Mensaje"
                rows={5}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:outline-none"
                style={{
                  borderColor: "var(--color-gray-300)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--color-primary)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--color-gray-300)")
                }
              ></textarea>
              <button
                type="submit"
                className="text-white font-bold py-3 px-8 rounded-full hover:opacity-80 transition-all duration-300"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Información de Contacto
            </h3>
            <p className="mb-2" style={{ color: "var(--text-secondary)" }}>
              <strong>Dirección:</strong> Urb. Los Jardines de Shangrila Mz I,
              Lt 5. Puente Piedra, Lima, Perú.
            </p>
            <p className="mb-2" style={{ color: "var(--text-secondary)" }}>
              <strong>Teléfono:</strong> 945377322
            </p>
            <p className="mb-2" style={{ color: "var(--text-secondary)" }}>
              <strong>Correo:</strong> vypsac@hotmail.com
            </p>
            {/* Placeholder para un mapa */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1380.1691628888675!2d-77.08314651224559!3d-11.92540506943719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d195cb43f507%3A0xf4ce44b761c14b86!2sLos%20Jardines%20de%20Shangrila!5e0!3m2!1ses-419!2spe!4v1756513376130!5m2!1ses-419!2spe"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
