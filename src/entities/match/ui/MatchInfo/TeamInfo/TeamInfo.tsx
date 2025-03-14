import team_icon from "../../../../../assets/team_icon.png";
import {memo} from "react";


export const TeamInfo = memo(({teamName, isReverse}: { teamName: string, isReverse?: boolean }) => {

  return <div className={`flex items-center gap-4 ${isReverse ? 'flex-row-reverse' : ''}`}>
    <img className={'h-12 w-12'} src={team_icon} alt="Иконка команды"/>
    <span>{teamName}</span>
  </div>
})
TeamInfo.displayName = 'TeamInfo'
