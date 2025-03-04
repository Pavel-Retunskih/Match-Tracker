import team_icon from "../../../../../assets/team_icon.png";


export function TeamInfo({teamName, isReverse}: { teamName: string, isReverse?: boolean }) {

  return <div className={`flex items-center gap-4 ${isReverse ? 'flex-row-reverse' : ''}`}>
    <img src={team_icon} alt="Иконка команды"/>
    <span>{teamName}</span>
  </div>
}