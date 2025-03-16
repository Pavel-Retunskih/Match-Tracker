import {useEffect, useState} from "react";
import {MatchStatus} from "../../../model/type.ts";

type Props = {
  awayScore: number;
  homeScore: number;
  status: MatchStatus;
};

export function Score({homeScore, awayScore, status}: Props) {
  const [prevHomeScore, setPrevHomeScore] = useState(homeScore);
  const [prevAwayScore, setPrevAwayScore] = useState(awayScore);
  const [isAwayScoreScoreChanged, setAwayScoreScoreChanged] = useState(false);
  const [isHomeScoreScoreChanged, setHomeScoreScoreChanged] = useState(false);

  const statusColor = {
    Scheduled: {color: "bg-[#EB6402]", description: "Match preparing"},
    Ongoing: {color: "bg-[#43AD28]", description: "Live"},
    Finished: {color: "bg-[#EB0237]", description: "Finished"},
  };

  // Отслеживаем изменения в счете
  useEffect(() => {
    if (homeScore !== prevHomeScore) {
      setPrevHomeScore(prevHomeScore);
      setHomeScoreScoreChanged(true);
      setTimeout(() => setHomeScoreScoreChanged(false), 500);
    }
    if (awayScore !== prevAwayScore) {
      setPrevAwayScore(awayScore);
      setAwayScoreScoreChanged(true);
      setTimeout(() => setAwayScoreScoreChanged(false), 500);
    }
  }, [homeScore, awayScore, prevHomeScore, prevAwayScore]);

  return (
      <div className={"flex flex-col gap-1 justify-center items-center"}>
        <div className={"flex gap-2 text-inter text-[20px] font-semibold leading-tight"}>
          {/* Анимация для homeScore */}
          <span
              className={`w-[20px] transition-opacity duration-500 ${
                  isHomeScoreScoreChanged ? "opacity-0" : "opacity-100"
              }`}
          >
          {homeScore}
        </span>
          <span className={"animate-pulse"}>:</span>
          <span
              className={`w-[20px] text-right transition-opacity duration-500 ${
                  isAwayScoreScoreChanged ? "opacity-0" : "opacity-100"
              }`}
          >
          {awayScore}
        </span>
        </div>
        <span
            className={`${statusColor[status].color} min-w-[96px] px-5 py-[6px] text-[12px] rounded-md text-center leading-tight`}
        >
        {statusColor[status].description}
      </span>
      </div>
  );
}