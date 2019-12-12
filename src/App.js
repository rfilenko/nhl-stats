import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import WrapperCentered from "./components/styles/WrapperCentered";
import TeamCard from "./components/TeamCard";

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
      <TeamCard
        currentTeam={currentTeam}
        number={number}
        teams={teams}
        changeTeam={changeTeam}
      />
    </WrapperCentered>
  );
}

export default App;
