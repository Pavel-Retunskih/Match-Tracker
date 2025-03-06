import {PlayerType} from "../model/type.ts";
import avatar_global from '../../../assets/avatar_global.png'


export function Player({username, kills}: PlayerType) {

  return (
      <div className={'flex-wrap gap-3 px-6 py-2 flex justify-around items-center bg-[#101318]'}>
        <div className={'flex justify-between  items-center'}>
          <div className={'flex items-center gap-2 '}>
            <img src={avatar_global} alt="Изображение игрока"/>
            <span>{username}</span></div>
        </div>
        <div className={'flex items-center gap-2'}>
          <span className={'text-s text-[#FAFAFA66]'}>Убийств:</span>
          <span>{kills}</span>
        </div>

      </div>
  )
}