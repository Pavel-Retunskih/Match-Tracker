import {Card} from "../../../shared/card/Card.tsx";
import {Match} from "../model/type.ts";
import {useState} from "react";
import team_icon from '../../../assets/team_icon.png'
import {TeamInfo} from "../../team/ui/TeamInfo.tsx";

export function MatchCard({awayTeam, homeTeam, homeScore, awayScore, time, title, status}: Match) {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  console.log(time);
  console.log(title);
  const statusColor = {
    Scheduled: {color: 'bg-[#EB6402]', description: 'Match preparing'},
    Ongoing: {color: 'bg-[#43AD28]', description: 'Live'},
    Finished: {color: 'bg-[#EB0237]', description: 'Finished'},
  }
  return <Card>
    <div>
      <div className={'flex gap-2'}>
        <div className={'flex w-full justify-between'}>
          <div className={'flex items-center gap-4'}>
            <img src={team_icon} alt="Иконка команды"/>
            <span>{homeTeam.name}</span>
          </div>
          <div className={'flex flex-col gap-2 justify-center items-center'}>
            <div className={'flex gap-2 text-2xl'}><span>{homeScore}</span><span
                className={'animate-pulse'}>:</span><span>{awayScore}</span></div>
            <span
                className={`${statusColor[status].color} min-w-[96px] p-2 rounded-md text-center`}>{statusColor[status].description}</span>
          </div>
          <div className={'flex items-center'}>
            <img src={team_icon} alt="Иконка команды"/>
            <span>{awayTeam.name}</span>
          </div>

        </div>
        <button onClick={() => setOpenDetails(prev => !prev)}>+</button>
      </div>
      {openDetails && <div className={'flex justify-between '}>
        <TeamInfo {...homeTeam}/>
        <TeamInfo {...awayTeam}/>
      </div>}
    </div>
  </Card>
}