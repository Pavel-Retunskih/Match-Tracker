import {Player} from "../../player/ui/Player.tsx";
import {Team} from "../model/type.ts";

export function TeamInfo({points, players, place, total_kills}: Team) {
  return (<div className={'flex flex-col gap-2 mt-11'}>
    <div className={'flex w-full justify-between items-center gap-2'}>
      {players.map(({username, kills}) => <Player key={username} kills={kills} username={username}/>)}
    </div>
    <div className={'flex justify-around bg-[#101318] py-[12px] px-[24px]'}>
      <div className={'text-s gap-2 flex'}><span className={'text-[#FAFAFA66]'}>Points:</span>
        <span>{points}</span>
      </div>
      <div className={'text-s gap-2 flex'}><span className={'text-[#FAFAFA66]'}>Место:</span>
        <span>{place}</span>
      </div>
      <div className={'text-s gap-2 flex'}><span className={'text-[#FAFAFA66]'}>Всего
        убийств:</span> <span>{total_kills}</span></div>
    </div>
  </div>)
}