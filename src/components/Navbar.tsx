import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour contrôler l'ouverture du menu déroulant

  // Fonction pour basculer l'état du menu déroulant
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Liste des éléments du menu avec leurs liens correspondants
  const menuItems = [
    { path: '/', label: 'Accueil' },
    { path: '/cm2026', label: 'CM 2026' },
    {
      label: 'Historique',
      dropdownItems: [
        { path: '/historique/palmares', label: 'Palmarès' },
        { path: '/historique/editions-precedentes', label: 'Éditions précédentes' },
        { path: '/historique/meilleurs-buteurs', label: 'Meilleurs Buteurs' },
        { path: '/historique/moments-emblematiques', label: 'Moments emblématiques' }
      ]
    },
    { path: '/equipes', label: 'Équipes' },
    { path: '/joueurs', label: 'Joueurs' },
    // { path: '/actualites', label: 'Actualités' },
    { path: '/reglementation', label: 'Réglementation' },
    { path: '/xxxxxxxxx', label: 'Xxxxxxxxxx' },
    { path: '/xxxxxxxxx', label: 'Xxxxxxxxxx' },
    { path: '/xxxxxxxxx', label: 'Xxxxxxxxxx' }
  ];

  return (
    <nav className="navbar">
      <div className="container-navbar">
        <Link to="/" className="navbar-brand">Accueil</Link>
        <ul className="navbar-nav">
          {menuItems.map((menuItem, index) => (
            <li key={index} className={`nav-item ${menuItem.dropdownItems ? 'dropdown' : ''}`}>
              {menuItem.dropdownItems ? (
                <>
                  <a className="nav-link" onClick={toggleDropdown}>{menuItem.label}</a>
                  {isOpen && (
                    <ul className="dropdown-menu">
                      {menuItem.dropdownItems.map((dropdownItem, index) => (
                        <li key={index}><Link to={dropdownItem.path}>{dropdownItem.label}</Link></li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={menuItem.path} className="nav-link">{menuItem.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
