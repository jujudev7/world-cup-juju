import React from 'react';
import topscorersData from '../data/top-scorers.json';
import countryCodes from '../data/countries-codes.json';
import ReactCountryFlag from "react-country-flag";
import imgKlose from '/assets/images/players/klose-miroslav.png';
import imgMbappe from '/assets/images/players/mbappe-kylian.png';

const WorldCupTopScorers = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Les meilleurs buteurs de l'Histoire de la Coupe du monde</h1>
            <div className="container-topscorers">
                <table style={{ margin: '0 auto' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Rang</th>
                            <th>Name</th>
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
                                <td>
                                    {player.Name === "Miroslav Klose" ? (
                                        <a href="#miroslav-klose-details">
                                            <strong>{player.Name}</strong>
                                        </a>
                                    ) : player.Name === "Kylian Mbappé" ? (
                                        <a href="#kylian-mbappe-details">
                                            <strong>{player.Name}</strong>
                                        </a>
                                    ) : (
                                        <strong>{player.Name}</strong>
                                    )}
                                </td>

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
                                    {(player.Name === "Gerd Müller" || player.Name === "Helmut Rahn") && <span><strong>*</strong></span>}</td>
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

            <div className="top3-scorers">
                <div className="text-klose">

                    <img
                        src={imgKlose}
                        alt="Miroslav Klose"
                        style={{
                            shapeOutside: `url(${imgKlose})`,
                            shapeImageThreshold: '0.5',
                            shapeMargin: '10px'
                        }}
                    />
                    <h2>L'affaire est Klose</h2>

                    <p>
                        Né en Pologne (à Opole), le 9 juin 1978, <span id="miroslav-klose-details"><strong>Miroslav Klose</strong></span> est un joueur emblématique du football allemand et international. L'attaquant germano-polonais a participé à 4 Coupes du monde avec la <i>Nationalmannschaft</i> dans lesquelles il a particulièrement brillé, au point de devenir le meilleur buteur de l'Histoire de la plus grande compétition de football.
                    </p>
                    <p>
                        <strong>Coupe du Monde 2002 :</strong> Klose marque 5 buts en 7 matchs, permettant à l'Allemagne d'atteindre la finale, où elle s'incline face au Brésil (0-2).</p>
                    <p>
                        <strong>Coupe du Monde 2006 :</strong> Klose inscrit à nouveau 5 buts en 7 matchs, contribuant à la 3ème place de l'Allemagne dans "son" Mondial.</p>
                    <p>
                        <strong>Coupe du Monde 2010 :</strong> Klose marque 4 buts en 6 matchs, et l'Allemagne termine encore sur le podium (3ème).</p>
                    <p>
                        <strong>Coupe du Monde 2014 :</strong> Klose signe 2 buts en 7 matchs, le dernier en demi-finale contre le Brésil lors du fameux 7-1 ! Un but qui lui permet de dépasser Ronaldo et ainsi devenir le recordman de buts en Coupe du Monde avec un total de 16 réalisations.</p>
                    <p> Un record fêté avec le sacre planétaire de l'Allemagne quelques jours plus tard contre l'Argentine (1-0 a.p.). Klose ne pouvait rêver plus belle manière de clôturer son immense carrière internationale.
                    </p>
                    <h3>pour le moment...</h3>
                    <img
                        src={imgMbappe}
                        alt="Kylian Mbappé"
                        style={{
                            shapeOutside: `url(${imgMbappe})`,
                            shapeImageThreshold: '0.5',
                            shapeMargin: '20px'
                        }}
                    />
                    <p>
                        Mais avec déjà 12 buts en 2 éditions à seulement 24 ans,  <span id="kylian-mbappe-details"><strong>Kylian Mbappé</strong></span> pourrait menacer le record de Klose. Le natif de Bondy (93) fut l’un des grands artisans des brillants parcours des Bleus en Russie en 2018 et au Qatar en 2022.</p><p> Deux épopées achevées en finale, l’une heureuse (contre la Croatie 4-2), l’autre terriblement amère contre l’Argentine (3-3 a.p, 2-4 t.a.b). Et ce, malgré un triplé de Mbappé, deuxième joueur de l’histoire à signer telle performance en finale d’un Mondial, après l’Anglais <strong>Geoff Hurst</strong> lors de la Coupe du monde 1966 (face à l’Allemagne de l'Ouest, 4-2 a.p).
                    </p>  </div>
            </div>
        </div>
    );
}

export default WorldCupTopScorers;
