import React, { useState, useEffect } from "react";

import WrapperCentered from "./styles/WrapperCentered";
import Header from "./Header";
import MainContent from "./styles/MainContent";
import Sidebar from "./styles/Sidebar";
import List from "./styles/List";

function Roster({ players, isVisible, setIsVisible }) {
  console.log(players, isVisible);
  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);
  return (
    <WrapperCentered>
      <Header />
      <h3>Roster</h3>
      <MainContent></MainContent>
      <Sidebar>
        {isVisible && (
          <>
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
      </Sidebar>
    </WrapperCentered>
  );
}

export default Roster;
