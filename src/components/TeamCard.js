import React from "react";

import CardWrapper from "./styles/CardWrapper";
import { Card, CardSmall } from "./styles/Card";
import Select from "./styles/Select";
import CardInfo from "./styles/CardInfo";
import { GameBadge, GameBadgeWon, GameBadgeTied } from "./styles/GameBadge";

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
        <div className="inner-wrap">
          <div className="schedule">
            <CardSmall>
              <div>
                <h3>
                  <MdWhatshot color="#54a960" size="20" /> next game
                  <span> {currentTeam.nextGameSchedule.dates[0].date}</span>
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
                          currentTeam.nextGameSchedule.dates[0].games[0].teams
                            .home.leagueRecord.wins
                        }
                      </i>
                      <i className="losses">
                        {
                          currentTeam.nextGameSchedule.dates[0].games[0].teams
                            .home.leagueRecord.losses
                        }
                      </i>
                      {
                        currentTeam.nextGameSchedule.dates[0].games[0].teams
                          .home.team.name
                      }
                    </span>
                    &nbsp;vs&nbsp;
                    <span>
                      {
                        currentTeam.nextGameSchedule.dates[0].games[0].teams
                          .away.team.name
                      }
                      <i className="wins">
                        {
                          currentTeam.nextGameSchedule.dates[0].games[0].teams
                            .away.leagueRecord.wins
                        }
                      </i>
                      <i className="losses">
                        {
                          currentTeam.nextGameSchedule.dates[0].games[0].teams
                            .away.leagueRecord.losses
                        }
                      </i>
                    </span>
                  </p>
                </CardInfo>
              </div>
            </CardSmall>
            <CardSmall prev>
              <div>
                <h3>
                  <MdWhatshot color="orange" size="20" /> previous game
                  <span> {currentTeam.previousGameSchedule.dates[0].date}</span>
                </h3>
                <CardInfo>
                  <p>
                    {
                      currentTeam.previousGameSchedule.dates[0].games[0].status
                        .detailedState
                    }
                    &nbsp;
                    <i>
                      {
                        currentTeam.previousGameSchedule.dates[0].games[0].teams
                          .home.score
                      }
                      :
                      {
                        currentTeam.previousGameSchedule.dates[0].games[0].teams
                          .away.score
                      }
                    </i>
                  </p>
                  <p>
                    <span>
                      {
                        currentTeam.previousGameSchedule.dates[0].games[0].teams
                          .home.team.name
                      }
                      &nbsp;vs&nbsp;
                      {
                        currentTeam.previousGameSchedule.dates[0].games[0].teams
                          .away.team.name
                      }
                    </span>
                    {currentTeam.previousGameSchedule.dates[0].games[0].teams
                      .home.score <
                    currentTeam.previousGameSchedule.dates[0].games[0].teams
                      .away.score ? (
                      <GameBadge>Away WON</GameBadge>
                    ) : currentTeam.previousGameSchedule.dates[0].games[0].teams
                        .home.score ===
                      currentTeam.previousGameSchedule.dates[0].games[0].teams
                        .away.score ? (
                      <GameBadgeTied>TIED game</GameBadgeTied>
                    ) : (
                      <GameBadgeWon>Home WON</GameBadgeWon>
                    )}
                  </p>
                </CardInfo>
              </div>
            </CardSmall>
          </div>
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
                <GiCrenulatedShield />{" "}
                <span>{currentTeam.conference.name}</span>
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
        </div>
      )}
    </CardWrapper>
  );
}

export default TeamCard;
