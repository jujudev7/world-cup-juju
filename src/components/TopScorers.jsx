import React from 'react';
import topscorersData from '../data/top-scorers.json';
import countryCodes from '../data/countries-codes.json';
import ReactCountryFlag from "react-country-flag";

const WorldCupTopScorers = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Les meilleurs buteurs de l'Histoire de la Coupe du monde</h1>
            <div className="container-topscorers">
                <table style={{ margin: '0 auto' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Rang</th>
                            <th>Joueur</th>
                            <th>Équipe</th>
                            <th style={{ textAlign: 'center' }}>Buts</th>
                            <th style={{ textAlign: 'center' }}>Matchs</th>
                            <th style={{ textAlign: 'center' }}>Ratio</th>
                            <th>Détail par édition</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topscorersData.map((player, index) => (
                            <tr key={index}>
                                <td style={{ textAlign: 'center' }}>{player.Rang}</td>
                                <td><strong>{player.Joueur}</strong></td>
                                <td><ReactCountryFlag
                                    countryCode={countryCodes.countryCode[player.Team]}
                                    svg
                                    style={{
                                        width: '1em',
                                        height: '1em',
                                        marginRight: '5px'
                                    }}
                                    title={player.Team}
                                />
                                    {player.Team}
                                    {(player.Joueur === "Gerd Müller" || player.Joueur === "Helmut Rahn") && <span><strong>*</strong></span>}</td>
                                <td style={{ textAlign: 'center' }}><strong>{player.Buts}</strong></td>
                                <td style={{ textAlign: 'center' }}>{player.Matchs}</td>
                                <td style={{ textAlign: 'center' }}>{player.Ratio}</td>
                                <td>{player["DetailByEdition"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ul className="legend">
                    <li><strong>*</strong> Allemagne de l'Ouest</li>
                    <li><strong>Année en gras</strong>, les joueurs vainqueurs de l'édition</li>
                    <li><strong>Nombre en gras</strong>, les joueurs finissant meilleur buteur de l'édition</li>
                </ul>
            </div>
        </div>
    );
}

export default WorldCupTopScorers;
