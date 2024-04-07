// Palmares.jsx
import React from 'react';
import palmaresData from '../data/palmares-world-cup.json';
import countryCodes from '../data/countries-codes.json';
import ReactCountryFlag from "react-country-flag"

function Palmares() {
  return (
    <div>
      <h1>Palmarès de la Coupe du monde de football</h1>
      <table>
        <thead>
          <tr>
            <th>Édition</th>
            <th>Année</th>
            <th>Vainqueur</th>
            <th>Score</th>
            <th>Finaliste</th>
            <th>Troisième</th>
          </tr>
        </thead>
        <tbody>
          {palmaresData.map((item) => (
            <tr key={item.id}>
              <td>{item.Edition}</td>
              <td className="year">{item.Année}</td>
              <td>
                <ReactCountryFlag
                  countryCode={countryCodes.countryCode[item.Vainqueur]}
                  svg
                  style={{
                    width: '1em',
                    height: '1em',
                    marginRight: '5px'
                  }}
                  title={item.Vainqueur}
                />
                {item.Vainqueur}
              </td>
              <td>{item.Score}</td>
              <td>
                <ReactCountryFlag
                  countryCode={countryCodes.countryCode[item.Finaliste]}
                  svg
                  style={{
                    width: '1em',
                    height: '1em',
                    marginRight: '5px'
                  }}
                  title={item.Finaliste}
                />
                {item.Finaliste}
              </td>
              <td>
                <ReactCountryFlag
                  countryCode={countryCodes.countryCode[item.Troisième]}
                  svg
                  style={{
                    width: '1em',
                    height: '1em',
                    marginRight: '5px'
                  }}
                  title={item.Troisième}
                />
                {item.Troisième}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Palmares;
