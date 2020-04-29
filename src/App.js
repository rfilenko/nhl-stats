import React, { useState, useEffect } from 'react';

import './App.css';

import axios from 'axios';
import Loader from 'react-loader-spinner';

import { Wrapper } from './components/styles/Wrapper';
import Header from './components/Header';
import MainContent from './components/styles/MainContent';
import Sidebar from './components/styles/Sidebar';

import TeamCard from './components/TeamCard';
import Roster from './components/Roster';

function App() {
  const [number, setNumber] = useState(5);
  const [currentTeam, setCurrentTeam] = useState(null);
  const [teams, setTeams] = useState([]);
  const [teamStats, setTeamStats] = useState({});
  const [players, setPlayers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const firstNumber = number;
    const firstUrl = `https://statsapi.web.nhl.com/api/v1/teams/${firstNumber}/roster`;
    const teamsUrl = `https://statsapi.web.nhl.com/api/v1/teams?expand=team.schedule.previous&expand=team.schedule.next`;
    async function getTeamsInfo() {
      const response = await axios.get(teamsUrl);
      setTeams(response.data.teams);
      setCurrentTeam(response.data.teams[number - 1]);
    }
    getTeamsInfo();
    getPlayers(firstUrl);
    getTeamStats();

    return () => {};
  }, []);

  //show content
  setTimeout(() => {
    teams.length > 0 && setShowContent(true);
  }, 2000);

  // team Stats
  const statsUrl = `https://statsapi.web.nhl.com/api/v1/teams/${number}/stats`;
  async function getTeamStats() {
    const response = await axios.get(statsUrl);
    // setTeams(response.data.teams);
    setTeamStats(response.data.stats[0]);
  }

  async function getPlayers(value) {
    const response = await axios.get(value);
    setPlayers(response.data.roster);
  }
  const changeTeam = (e) => {
    //get selected option value
    const updatedNumber = parseFloat(e.target.value);
    //get players info
    const playersUrl = `https://statsapi.web.nhl.com/api/v1/teams/${updatedNumber}/roster`;
    getPlayers(playersUrl);

    //update team info
    setCurrentTeam(teams[updatedNumber - 1]);

    getTeamStats();
    setNumber(e.target.value);
    setIsVisible(true);
  };

  return (
    <>
      <Header />
      <Loader
        type="Bars"
        color="#9F7AEA"
        height={200}
        width={200}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        timeout={1750}
      />
      <Wrapper>
        <MainContent>
          {showContent ? (
            <TeamCard
              currentTeam={currentTeam}
              number={number}
              teams={teams}
              teamStats={teamStats}
              changeTeam={changeTeam}
            />
          ) : null}
        </MainContent>
        <Sidebar>
          <Roster
            players={players}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        </Sidebar>
      </Wrapper>
    </>
  );
}

export default App;
