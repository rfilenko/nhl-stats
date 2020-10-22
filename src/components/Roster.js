import React from 'react';
import List from './styles/List';
import { Link } from 'react-router-dom';
import { MdInfoOutline } from 'react-icons/md/';
import { GiHockey } from 'react-icons/gi/';
import { FaHockeyPuck } from 'react-icons/fa/';

function Roster({ players, isVisible }) {
  return (
    <>
      {isVisible && (
        <>
          <h3>Roster</h3>
          <List>
            {players.map((p, idx) => {
              const positionName = p.position.name.toLowerCase();
              const positionType = p.position.type.toLowerCase();
              return (
                <li key={`${idx}_${p.jerseyNumber}`}>
                  <Link to={`/player/${p.person.id}`} id={p.person.id}>
                    <MdInfoOutline size="32" color="#ff8383" />
                  </Link>
                  <p>
                    <span>{p.jerseyNumber}</span> {p.person.fullName}
                    ,&nbsp;
                  </p>
                  <p>
                    {positionName === positionType
                      ? positionName
                      : positionType}
                    {positionName === 'goalie' ? (
                      <FaHockeyPuck color="#4a5568" size="15" />
                    ) : (
                      <GiHockey color="#4a5568" size="15" />
                    )}
                  </p>
                </li>
              );
            })}
          </List>
        </>
      )}
    </>
  );
}

export default Roster;
