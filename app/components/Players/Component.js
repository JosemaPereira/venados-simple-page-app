import React from 'react';
import _ from 'lodash';

const Players = ({ content }) => {
  const keys = Object.keys(content);
  const translations = {
    forwards: 'Delanteros',
    centers: 'Centros',
    defenses: 'Defensas',
    goalkeepers: 'Porteros',
    coaches: 'Cuerpo técnico'
  };
  return (
    <div className="positions">
      {keys.length > 0 && (
        <>
          {_.map(keys, k => (
            <>
              <h3 className="position-title">{translations[k]}</h3>
              <div className="position-content" key={_.uniqueId()}>
                {_.map(content[k], item => (
                  <div className="profile-card" key={_.uniqueId()}>
                    <div className="profile-card-inner">
                      <div className="profile-front">
                        <div className="picture">
                          <img
                            src={item.image}
                            alt={`${item.name} ${item.first_surname}`}
                          />
                        </div>
                        <div className="team-content">
                          <h3 className="name">{`${item.name} ${
                            item.first_surname
                          } ${item.second_surname}`}</h3>
                        </div>
                      </div>
                      <div className="profile-back">
                        <div className="team-content">
                          <h3 className="name">{`${
                            item.number ? `#${item.number}` : ''
                          } ${item.name} ${item.first_surname} ${
                            item.second_surname
                          }`}</h3>
                          <h4 className="positionName">
                            {item.position || item.role}
                          </h4>
                          <span>{item.birth_place}</span>
                          <h4 className="information">Fecha de nacimiento:</h4>
                          <span>{item.birthday_parse}</span>
                          {item.height && (
                            <>
                              <h4 className="information">Altura:</h4>
                              <span>{item.height}m</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </>
      )}
    </div>
  );
};
export default Players;
