import {TeamInfo} from "../../../team/ui/TeamInfo.tsx";
import {Team} from "../../../team/model/type.ts";
import {Separator} from "../../../../shared/separator/separator.tsx";

type Props = {
  homeTeam: Team
  awayTeam: Team
  openDetails: boolean
}

export function MatchDetails({homeTeam, awayTeam, openDetails}: Props) {
  return <div
      className={`flex flex-col lg:gap-8 lg:flex-row gap-2 justify-between transition-all duration-1000 overflow-hidden ${
          openDetails ? 'opacity-100 max-h-96 scale-100 mt-4 md:mt-11' : 'opacity-0 max-h-0 scale-95'
      }`}>
    <TeamInfo {...homeTeam}/>
    <Separator/>
    <TeamInfo {...awayTeam}/>
  </div>
}