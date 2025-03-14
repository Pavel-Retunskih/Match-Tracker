import {Player} from "../../player/ui/Player.tsx";
import {Team} from "../model/type.ts";
import {StatCard} from "../../../shared/statCard/statCard.tsx";

export function TeamInfo({points, players, place, total_kills}: Team) {
  return (<div className={'flex flex-col gap-2 flex-grow'}>
    <div className={'flex w-full justify-between items-center gap-2'}>
      {players.map(({username, kills}) => <Player key={username} kills={kills} username={username}/>)}
    </div>
    <div className={'flex justify-between bg-[#101318] py-[14px] px-3 rounded'}>
      <StatCard title={'Points'} value={points}/>
      <StatCard title={'Место:'} value={place}/>
      <StatCard title={'Всего убийств:'} value={total_kills}/>
    </div>
  </div>)
}