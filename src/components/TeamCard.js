import React from 'react';

import CardWrapper from './styles/CardWrapper';
import CardStats from './CardStats';
import CardSchedule from './CardSchedule';
import CardPrev from './CardPrev';

import Select from './styles/Select';
import TeamInfoCard from './TeamInfoCard';

function TeamCard({ number, currentTeam, teams, changeTeam, teamStats }) {
  return (
    <CardWrapper>
      <h3>Select a team</h3>
      <Select value={number} onChange={(e) => changeTeam(e)}>
        {teams.map((team, index) => (
          <option value={index + 1} key={team.teamName}>
            {team.name}
          </option>
        ))}
      </Select>
      {currentTeam && (
        <div className="inner-wrap">
          <div className="team-stats">
            <CardStats teamStats={teamStats} />
            {/* //disable 
            <CardSchedule currentTeam={currentTeam} />
              */}

            <CardPrev currentTeam={currentTeam} />
          </div>
          <TeamInfoCard currentTeam={currentTeam} />
        </div>
      )}
    </CardWrapper>
  );
}

export default TeamCard;
