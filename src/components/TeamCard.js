import React from "react";

import CardWrapper from "./styles/CardWrapper";
import Card from "./styles/Card";
import Select from "./styles/Select";
import CardInfo from "./styles/CardInfo";

// icons
import { MdWhatshot } from "react-icons/md/";
import { IoMdLocate } from "react-icons/io";
import {
  GiBlockHouse,
  GiTimeTrap,
  GiDividedSquare,
  GiCrenulatedShield
} from "react-icons/gi";
import { IoIosTime } from "react-icons/io";
import { FaInternetExplorer } from "react-icons/fa";

function TeamCard({ number, currentTeam, teams, changeTeam }) {
  // console.log(number, currentTeam, teams, changeTeam);
  return (
    <CardWrapper>
      <h3>Select a team</h3>
      <Select value={number} onChange={e => changeTeam(e)}>
        {teams.map((team, index) => (
          <option value={index + 1} key={team.teamName}>
            {team.name}
          </option>
        ))}
      </Select>
      {currentTeam && (
        <Card>
          <h3>
            <MdWhatshot color="#4a5568" size="20" />
            {currentTeam.name}, <span>{currentTeam.abbreviation}</span>
          </h3>
          <CardInfo>
            <p>
              <IoMdLocate /> <span>{currentTeam.locationName}</span>
            </p>
            <p>
              <GiBlockHouse />
              <span>
                {currentTeam.venue.name}, in {currentTeam.venue.city}
              </span>
            </p>
            <p>
              <GiTimeTrap />
              <span> {currentTeam.firstYearOfPlay}</span>
            </p>
            <p>
              <GiDividedSquare /> <span>{currentTeam.division.name}</span>
            </p>
            <p>
              <GiCrenulatedShield /> <span>{currentTeam.conference.name}</span>
            </p>
            <p>
              <IoIosTime />
              <span>
                {currentTeam.venue.timeZone.id},
                {currentTeam.venue.timeZone.offset}
                {currentTeam.venue.timeZone.tz}
              </span>
            </p>
            <p>
              <FaInternetExplorer />
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
