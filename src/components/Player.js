import React, { useState, useEffect } from "react";
import axios from "axios";

import { WrapperPlayer } from "./styles/Wrapper";
import Header from "./Header";
import MainContent from "./styles/MainContent";

import { CardPlayer } from "./styles/Card";
import CardInfo from "./styles/CardInfo";
import Badge from "./styles/Badge";

function Player({ props: { history, match } }) {
  const [playerInfo, setPlayerInfo] = useState([]);
  useEffect(() => {
    const playerIdUrl = `https://statsapi.web.nhl.com/api/v1/people/${match.params.id}`;
    async function getPlayerInfo() {
      const response = await axios.get(playerIdUrl);
      setPlayerInfo(response.data.people[0]);
    }
    getPlayerInfo();
  }, []);

  return (
    <>
      <Header />
      <WrapperPlayer>
        <MainContent>
          <Badge>player information</Badge>
          <button onClick={() => history.goBack()}>go back</button>
          {playerInfo && (
            <CardPlayer>
              <h3>
                {playerInfo.firstName}
                <b> {playerInfo.lastName}</b>
              </h3>
              <CardInfo>
                <p>
                  height: <span>{playerInfo.height}</span> , weight:
                  <span>{playerInfo.weight}</span>
                </p>
                <p>
                  age: <span>{playerInfo.currentAge}</span> , nationality:
                  <span>{playerInfo.nationality}</span>
                </p>
                <p>
                  birthCity:
                  <span>
                    {playerInfo.birthCity}, {playerInfo.birthStateProvince}
                  </span>
                </p>
                <p>
                  primaryNumber : <span>{playerInfo.primaryNumber}</span>
                </p>
                {playerInfo.captain === "yes" ? (
                  <p>
                    captain: <span>{playerInfo.captain ? "yes" : "no"}</span>
                  </p>
                ) : null}
              </CardInfo>
            </CardPlayer>
          )}
        </MainContent>
      </WrapperPlayer>
    </>
  );
}

export default Player;
