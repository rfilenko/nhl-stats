import React from 'react';
import { Card } from './styles/Card';
import CardInfo from './styles/CardInfo';

// icons
import { MdWhatshot } from 'react-icons/md/';
import { IoMdLocate } from 'react-icons/io';
import {
  GiBlockHouse,
  GiTimeTrap,
  GiDividedSquare,
  GiCrenulatedShield,
} from 'react-icons/gi';
import { IoIosTime } from 'react-icons/io';
import { FaInternetExplorer } from 'react-icons/fa';

const TeamInfoCard = ({ currentTeam }) => {
  if (!currentTeam) {
    return <p>No team info available</p>;
  } else {
    return (
      <Card className="team-info">
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
    );
  }
};

export default TeamInfoCard;
