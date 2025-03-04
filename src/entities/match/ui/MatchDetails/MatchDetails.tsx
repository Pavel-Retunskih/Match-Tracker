import {TeamInfo} from "../../../team/ui/TeamInfo.tsx";
import {Team} from "../../../team/model/type.ts";

type Props = {
  homeTeam: Team
  awayTeam: Team
  openDetails: boolean
}

export function MatchDetails({homeTeam, awayTeam, openDetails}: Props) {
  return <div
      className={`flex justify-between transition-all duration-1000 overflow-hidden ${
          openDetails ? 'opacity-100 max-h-96 scale-100' : 'opacity-0 max-h-0 scale-95'
      }`}>
    <TeamInfo {...homeTeam}/>
    <TeamInfo {...awayTeam}/>
  </div>
}