import WarningIcon from "../../assets/icons/WarningIcon.tsx";
import RefreshIcon from "../../assets/icons/RefreshIcon.tsx";
import {useGetMatchesQuery} from "../matchesList/api/appApi.ts";

export function Header() {
  const {refetch, isFetching, isError} = useGetMatchesQuery()
  return <header className={'flex justify-between items-center mt-10'}>
    <h1 className={'text-4xl text-pop font-tactic font-black text-mint-500'}>Match Tracker</h1>
    <div className={'flex gap-2'}>
      {isError &&
          <div
              className={'bg-[#0F1318] p-4 flex items-center rounded-md gap-2'}><WarningIcon></WarningIcon> <span>Ошибка: не удалось загрузить информацию</span>
          </div>}
      <button onClick={refetch} className={'h-[56px] p-4 w-[204px] bg-[#EB0237] rounded-md disabled:bg-[#701328]' +
          ' flex gap-2 justify-center' +
          ' hover:bg-[#A01131] cursor-pointer'}
              disabled={isFetching}><span>Обновить</span> <RefreshIcon
          className={isFetching ? 'animate-spin-reverse' : ''}/>
      </button>
    </div>
  </header>
}