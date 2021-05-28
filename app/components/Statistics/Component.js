import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Statistics = ({ content }) => {
  return (
    <div className="statistics-cointainer">
      {content.length > 0 && (
        <table className="statistics">
          <thead>
            <tr>
              <th className="default">Posicion</th>
              <th className="mobile">POS</th>
              <th>Equipo</th>
              <th>JJ</th>
              <th>JG</th>
              <th>JE</th>
              <th>JP</th>
              <th>GD</th>
              <th>GF</th>
              <th>GC</th>
              <th className="default">Puntos</th>
              <th className="mobile">PNT</th>
            </tr>
          </thead>
          <tbody>
            {_.map(content, (item, index) => (
              <tr className={index % 2 ? 'light' : ''} key={_.uniqueId()}>
                <td>{item.position}</td>
                <td>
                  <img src={item.image} alt={item.team} />
                </td>
                <td>{item.games}</td>
                <td>{item.win}</td>
                <td>{item.tie}</td>
                <td>{item.loss}</td>
                <td>{item.score_diff}</td>
                <td>{item.f_goals}</td>
                <td>{item.a_goals}</td>
                <td>{item.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

Statistics.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number,
      image: PropTypes.string,
      team: PropTypes.string,
      games: PropTypes.number,
      win: PropTypes.number,
      loss: PropTypes.number,
      tie: PropTypes.number,
      f_goals: PropTypes.number,
      a_goals: PropTypes.number,
      score_diff: PropTypes.number,
      points: PropTypes.number
    })
  )
};

export default Statistics;
