import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">Our Aventures</div>
      <nav className="navbar">
        <ul>
          <li><Link to="/landing">Inicio</Link></li>
          <li><Link to="/mis-aventuras">Mis Aventuras</Link></li>
          <li><Link to="/otras-aventuras">Ver Otras Aventuras</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;