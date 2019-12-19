import React from "react";

import { CardSmall } from "./styles/Card";
import CardInfo from "./styles/CardInfo";

import { GameBadge, GameBadgeWon, GameBadgeTied } from "./styles/GameBadge";

// icons
import { MdWhatshot } from "react-icons/md/";

function CardPrev({ currentTeam }) {
  const {
    date,
    status,
    teams
  } = currentTeam.previousGameSchedule.dates[0].games[0];
  return (
    <CardSmall prev>
      <div>
        <h3>
          <MdWhatshot color="orange" size="20" /> previous game
          <span> {date}</span>
        </h3>
        <CardInfo>
          <p>
            {status.detailedState}
            &nbsp;
            <i>
              {teams.home.score}:{teams.away.score}
            </i>
          </p>
          <p>
            <span>
              {teams.home.team.name}
              &nbsp;vs&nbsp;
              {teams.away.team.name}
            </span>
            {teams.home.score < teams.away.score ? (
              <GameBadge>Away WON</GameBadge>
            ) : teams.home.score === teams.away.score ? (
              <GameBadgeTied>TIED game</GameBadgeTied>
            ) : (
              <GameBadgeWon>Home WON</GameBadgeWon>
            )}
          </p>
        </CardInfo>
      </div>
    </CardSmall>
  );
}

export default CardPrev;
