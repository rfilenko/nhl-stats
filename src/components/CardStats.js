import React from "react";

import { CardSmallStats } from "./styles/Card";
import CardInfo from "./styles/CardInfo";

// icons
import { IoMdStats } from "react-icons/io";
import {
  GiBullseye,
  GiAbstract013,
  GiRevolt,
  GiSwordman
} from "react-icons/gi";

function CardStats({ teamStats }) {
  const {
    gamesPlayed,
    pts,
    wins,
    losses,
    ot,
    goalsPerGame,
    goalsAgainstPerGame,
    powerPlayPercentage,
    penaltyKillPercentage
  } = teamStats.splits[0].stat;
  return (
    <CardSmallStats>
      <div>
        <h3>
          <IoMdStats color="#f18000" size="30" /> Season team stats
        </h3>
        <CardInfo className="stats-info">
          <p>
            <GiBullseye size="15" />
            played&nbsp;-&nbsp;
            {gamesPlayed},
            <GiAbstract013 color="#ed5565" size="15" />
            pts&nbsp;-&nbsp;
            <i>{pts}</i>
          </p>
          <p>
            wins
            <span>
              <i className="wins">{wins}</i>
            </span>
            , losses
            <span>
              <i className="losses">{losses}</i>
            </span>
            , ot
            <span>
              <i className="ot">{ot}</i>
            </span>
          </p>

          <p>
            goals per game &nbsp;-&nbsp;
            <span>{goalsPerGame}</span>
          </p>
          <p>
            goals against per game &nbsp;-&nbsp;
            <span>{goalsAgainstPerGame}</span>
          </p>

          <p>
            <GiRevolt color="orange" size="20" />
            power play &nbsp;-&nbsp;
            <span>{powerPlayPercentage} %</span>
          </p>
          <p>
            <GiSwordman color="red" size="20" />
            penalty kill &nbsp;-&nbsp;
            <span>{penaltyKillPercentage} %</span>
          </p>
        </CardInfo>
      </div>
    </CardSmallStats>
  );
}

export default CardStats;
