import {MatchStatus} from "../../model/type.ts";
import {Score} from "./Score/Score.tsx";
import {TeamInfo} from "./TeamInfo/TeamInfo.tsx";

type Props = {
  awayTeamName: string;
  homeTeamName: string;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
}

export function MatchInfo({awayTeamName, homeTeamName, homeScore, status, awayScore}: Props) {

  return <div className={'flex w-full justify-between'}>
    <TeamInfo teamName={homeTeamName}/>
    <Score homeScore={homeScore} awayScore={awayScore} status={status}/>
    <TeamInfo teamName={awayTeamName} isReverse/>
  </div>
}