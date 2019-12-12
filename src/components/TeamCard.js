import React from "react";

import CardWrapper from "./styles/CardWrapper";
import Card from "./styles/Card";
import CardInfo from "./styles/CardInfo";

function TeamCard({ number, currentTeam, teams, changeTeam }) {
  // console.log(number, currentTeam, teams, changeTeam);
  return (
    <CardWrapper>
      <h3>Select team</h3>
      <select value={number} onChange={e => changeTeam(e)}>
        {teams.map((team, index) => (
          <option value={index + 1} key={team.teamName}>
            {team.name}
          </option>
        ))}
      </select>
      {currentTeam && (
        <Card>
          <h3>
            {currentTeam.name}, <span>{currentTeam.abbreviation}</span>
          </h3>
          <CardInfo>
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
          </CardInfo>
        </Card>
      )}
    </CardWrapper>
  );
}

export default TeamCard;
