

import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <a href="/">MiLogo</a>
        </div>

        {/* Navegación */}
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#sobre" onClick={() => setIsOpen(false)}>Sobre Nosotros</a>
          <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
        </nav>

        {/* Botón hamburguesa */}
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <span className={styles.bar}>conocenos</span>
          <span className={styles.bar}>pedidos</span>
          <span className={styles.bar}>contacto</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
