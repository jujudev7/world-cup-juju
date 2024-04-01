// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-navbar">
        <Link to="/" className="navbar-brand">Accueil</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/historique" className="nav-link">CM 2026</Link>
          </li>
          <li className="nav-item">
            <Link to="/cm2026" className="nav-link">Historique</Link>
            <ul className="sub-categories">
              <li><Link to="/cm2026/moments-emblématiques">Éditions précédentes</Link></li>
              <li><Link to="/cm2026/palmares">Palmarès</Link></li>
              <li><Link to="/cm2026/moments-emblématiques">Moments emblématiques</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/equipes" className="nav-link">Équipes</Link>
          </li>
          <li className="nav-item">
            <Link to="/joueurs" className="nav-link">Joueurs</Link>
          </li>
          <li className="nav-item">
            <Link to="/actualites" className="nav-link">Actualités</Link>
          </li>
          <li className="nav-item">
            <Link to="/reglementation" className="nav-link">Réglementation</Link>
          </li>
          <li className="nav-item">
            <Link to="/xxxxxxxxx" className="nav-link">Xxxxxxxxxx</Link>
          </li>
          <li className="nav-item">
            <Link to="/xxxxxxxxx" className="nav-link">Xxxxxxxxxx</Link>
          </li>
          <li className="nav-item">
            <Link to="/xxxxxxxxx" className="nav-link">Xxxxxxxxxx</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
