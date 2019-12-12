import React from "react";
import List from "./styles/List";

function Roster({ players, isVisible }) {
  return (
    <>
      {isVisible && (
        <>
          <h3>Roster</h3>
          <List>
            {players.map(p => {
              const positionName = p.position.name.toLowerCase();
              const positionType = p.position.type.toLowerCase();
              return (
                <li key={p.jerseyNumber}>
                  <p>
                    <span>{p.jerseyNumber}</span> {p.person.fullName}
                    ,&nbsp;
                  </p>
                  <p>
                    {positionName === positionType
                      ? positionName
                      : positionType}
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
