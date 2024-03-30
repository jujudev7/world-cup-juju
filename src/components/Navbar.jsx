// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Accueil</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/historique" className="nav-link">CM 2026</Link>
          </li>
          <li className="nav-item">
            <Link to="/cm2026" className="nav-link">Historique</Link>
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
            <Link to="/historique" className="nav-link">Historique</Link>
          </li>
          <li className="nav-item">
            <Link to="/historique" className="nav-link">Historique</Link>
          </li>
          <li className="nav-item">
            <Link to="/historique" className="nav-link">Historique</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
