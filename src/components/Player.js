import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { WrapperPlayer } from './styles/Wrapper';
import Header from './Header';

import { CardPlayer } from './styles/Card';
import CardInfo from './styles/CardInfo';
import Badge from './styles/Badge';
import TeamInfoCard from './TeamInfoCard';

function Player({ props: { match } }) {
  const [playerInfo, setPlayerInfo] = useState([]);
  const [current, setCurrent] = useState(null);
  const [num, setNum] = useState(null);

  //get player info
  useEffect(() => {
    const playerIdUrl = `https://statsapi.web.nhl.com/api/v1/people/${match.params.id}`;
    async function getPlayerInfo() {
      const response = await axios.get(playerIdUrl);
      setNum(response.data.people[0].currentTeam.id);
      setPlayerInfo(response.data.people[0]);
    }
    getPlayerInfo();
  }, [match.params.id]);

  //set currentTeam
  useEffect(() => {
    const teamsUrl = `https://statsapi.web.nhl.com/api/v1/teams/${
      num ? num : 5
    }`;
    fetch(teamsUrl)
      .then((resp) => resp.json())
      .then(function (data) {
        setCurrent(data.teams[0]);
      });
  }, [playerInfo, num]);

  const primaryPosition = () => {
    return playerInfo.primaryPosition?.name !==
      playerInfo.primaryPosition?.type ? (
      <>
        <span>{playerInfo.primaryPosition?.code.toLowerCase()},</span>
        <span>{playerInfo.primaryPosition?.name.toLowerCase()},</span>
        <span>{playerInfo.primaryPosition?.type.toLowerCase()}</span>
      </>
    ) : (
      ((<span>{playerInfo.primaryPosition?.code.toLowerCase()}</span>),
      (<span>{playerInfo.primaryPosition?.name.toLowerCase()}</span>))
    );
  };

  return (
    <>
      <Header />
      <WrapperPlayer>
        <header>
          <Badge>Player details page</Badge>
          <Link to={`/`}>
            <button>go back</button>
          </Link>
        </header>
        <div className="playerInfo">
          {playerInfo && (
            <CardPlayer>
              <h3>
                {playerInfo.firstName}
                <b>{playerInfo.lastName},</b>
                <b className="shirt">{playerInfo.primaryNumber}</b>
              </h3>
              <CardInfo>
                {playerInfo.active && (
                  <p>
                    status:{' '}
                    <span>
                      {playerInfo.active ? 'active player' : 'ended career'}
                    </span>
                  </p>
                )}
                <p>position: {primaryPosition()}</p>

                {playerInfo.captain === 'yes' ? (
                  <p>
                    captain: <span>{playerInfo.captain ? 'yes' : 'no'}</span>
                  </p>
                ) : null}
                {playerInfo.rookie && (
                  <p>
                    rookie: <span>{playerInfo.rookie}</span>
                  </p>
                )}
                <p>
                  height: <span>{playerInfo.height}, </span> weight:
                  <span>{playerInfo.weight}</span>
                </p>
                <p>
                  age: <span>{playerInfo.currentAge}, </span> nationality:
                  <span>{playerInfo.nationality}</span>
                </p>
                <p>
                  birthCity:
                  <span>
                    {playerInfo.birthCity}, {playerInfo.birthStateProvince}
                  </span>
                </p>
              </CardInfo>
            </CardPlayer>
          )}
        </div>
        {current && <TeamInfoCard currentTeam={current} />}
      </WrapperPlayer>
    </>
  );
}

export default Player;
