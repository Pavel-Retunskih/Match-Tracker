import {PlayerType} from "../model/type.ts";
import avatar_global from '../../../assets/avatar_global.png'
import {StatCard} from "../../../shared/statCard/statCard.tsx";


export function Player({username, kills}: PlayerType) {

  return (
      <div className={'flex-wrap gap-[6px] flex-grow py-2 flex justify-around items-center rounded bg-[#101318]'}>
        <div className={'flex justify-between  items-center'}>
          <div className={'flex items-center gap-2 '}>
            <img src={avatar_global} className={'h-8 w-8 md:h-9 md:w-9'} alt="Изображение игрока"/>
            <span>{username}</span></div>
        </div>
        <StatCard title={'Убийств:'} value={kills}/>
      </div>
  )
}