import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import styled from "styled-components";

const WrapperCentered = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

function App() {
  const [number, setNumber] = useState(5);
  const [currentTeam, setCurrentTeam] = useState(null);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const teamsUrl = `https://statsapi.web.nhl.com/api/v1/teams`;
    async function getTeamsInfo() {
      const response = await axios.get(teamsUrl);
      setTeams(response.data.teams);
      setCurrentTeam(response.data.teams[number - 1]);
    }
    getTeamsInfo();
  }, []);
  const changeTeam = e => {
    //get selected option value
    const updatedNumber = parseFloat(e.target.value);
    //update team info
    setCurrentTeam(teams[updatedNumber - 1]);
    setNumber(e.target.value);
  };

  return (
    <WrapperCentered>
      {
        <div className="team-wrap">
          <h3>Select team</h3>
          <select value={number} onChange={e => changeTeam(e)}>
            {teams.map((team, index) => (
              <option value={index + 1} key={team.teamName}>
                {team.name}
              </option>
            ))}
          </select>
          {currentTeam && (
            <>
              <div className="team-card">
                <h3>
                  {currentTeam.name}, <span>{currentTeam.abbreviation}</span>
                </h3>
                <div className="team-info">
                  <p>
                    location: <span>{currentTeam.locationName}</span>
                  </p>
                  <p>
                    venue:
                    <span>
                      {currentTeam.venue.name}, in {currentTeam.venue.city}
                    </span>
                  </p>
                  <p>
                    Playing from: <span> {currentTeam.firstYearOfPlay}</span>
                  </p>
                  <p>
                    division: <span>{currentTeam.division.name}</span>
                  </p>
                  <p>
                    conference: <span>{currentTeam.conference.name}</span>
                  </p>
                  <p>
                    timeZone:
                    <span>
                      {currentTeam.venue.timeZone.id},
                      {currentTeam.venue.timeZone.offset}
                      {currentTeam.venue.timeZone.tz}
                    </span>
                  </p>
                  <p>
                    web:
                    <a
                      href={currentTeam.officialSiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      official site
                    </a>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      }
    </WrapperCentered>
  );
}

export default App;
