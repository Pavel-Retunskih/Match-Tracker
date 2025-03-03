import {Player} from "../../player/ui/Player.tsx";
import {Team} from "../model/type.ts";

export function TeamInfo({points, players, place, total_kills}: Team) {
  return (<div className={'flex flex-col gap-2 mt-11'}>
    <div className={'flex max-w-[874px] w-full justify-between items-center gap-2'}>
      {players.map(({username, kills}) => <Player key={username} kills={kills} username={username}/>)}
    </div>
    <div className={'flex justify-around bg-[#101318] py-[12px] px-[24px]'}>
      <span>Points: {points}</span>
      <span>Место: {place}</span>
      <span>Всего убийств: {total_kills}</span>
    </div>
  </div>)
}