const Footer = () => {
  return (
    <footer className="text-white py-8" style={{ backgroundColor: 'var(--color-gray-800)' }}>
      <div className="container mx-auto px-6 text-center">
        <p style={{ color: 'var(--color-gray-200)' }}>
          &copy; {new Date().getFullYear()} V Y P CONSTRUCTORA Y SERVICIOS
          GENERALES S.A.C. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
