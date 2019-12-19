import React from "react";

import { CardSmall } from "./styles/Card";
import CardInfo from "./styles/CardInfo";

// icons
import { MdWhatshot } from "react-icons/md/";
import { GiTimeTrap } from "react-icons/gi";

function CardSchedule({ currentTeam }) {
  const { date } = currentTeam.nextGameSchedule.dates[0];
  return (
    <CardSmall>
      <div>
        <h3>
          <MdWhatshot color="#54a960" size="20" /> next game
          <span> {date}</span>
        </h3>
        <CardInfo>
          <p>
            <GiTimeTrap />
            <span>
              {currentTeam.nextGameSchedule.dates[0].games[0].gameDate}
            </span>
          </p>
          <p>
            {
              currentTeam.nextGameSchedule.dates[0].games[0].status
                .detailedState
            }
          </p>
          <p>
            <span>
              <i className="wins">
                {
                  currentTeam.nextGameSchedule.dates[0].games[0].teams.home
                    .leagueRecord.wins
                }
              </i>
              <i className="losses">
                {
                  currentTeam.nextGameSchedule.dates[0].games[0].teams.home
                    .leagueRecord.losses
                }
              </i>
              {
                currentTeam.nextGameSchedule.dates[0].games[0].teams.home.team
                  .name
              }
            </span>
            &nbsp;vs&nbsp;
            <span>
              {
                currentTeam.nextGameSchedule.dates[0].games[0].teams.away.team
                  .name
              }
              <i className="wins">
                {
                  currentTeam.nextGameSchedule.dates[0].games[0].teams.away
                    .leagueRecord.wins
                }
              </i>
              <i className="losses">
                {
                  currentTeam.nextGameSchedule.dates[0].games[0].teams.away
                    .leagueRecord.losses
                }
              </i>
            </span>
          </p>
        </CardInfo>
      </div>
    </CardSmall>
  );
}

export default CardSchedule;
