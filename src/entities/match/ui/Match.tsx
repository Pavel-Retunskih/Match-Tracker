import {Card} from "../../../shared/card/Card.tsx";
import {Match} from "../model/type.ts";
import {useState} from "react";
import ArrowIcon from "../../../assets/icons/ArrowIcon.tsx";
import {MatchInfo} from "./MatchInfo/MatchInfo.tsx";
import {MatchDetails} from "./MatchDetails/MatchDetails.tsx";

export function MatchCard({awayTeam, homeTeam, homeScore, awayScore, status}: Match) {
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  return <Card>
    <div className={'flex flex-col lg:flex-row gap-2'}>
      <MatchInfo status={status} homeTeamName={homeTeam.name} awayScore={awayScore} awayTeamName={awayTeam.name}
                 homeScore={homeScore}/>
      <button onClick={() => setOpenDetails(prev => !prev)} className={'hidden lg:flex justify-center items-center'}>
        <ArrowIcon
            className={`transition-transform duration-300 ${openDetails ? 'rotate-180' : ''}`}/>
      </button>
    </div>
    <MatchDetails openDetails={openDetails} awayTeam={awayTeam} homeTeam={homeTeam}/>
    <button onClick={() => setOpenDetails(prev => !prev)}
            className={'flex lg:hidden justify-center items-center '}>
      <ArrowIcon
          className={`transition-transform duration-300 ${openDetails ? 'rotate-180' : ''}`}/>
    </button>
  </Card>
}