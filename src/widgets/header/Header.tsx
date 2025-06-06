import WarningIcon from "../../assets/icons/WarningIcon.tsx";
import RefreshIcon from "../../assets/icons/RefreshIcon.tsx";
import {memo} from "react";
import {useGetMatchesQuery} from "../../pages/matchesList/api/appApi.ts";
import {MatchesFilterSelect} from "../../features/ui/MatchesFilterSelect.tsx";


export const Header = memo(() => {
  const {refetch, isFetching, isError} = useGetMatchesQuery()


  return <header className={'flex flex-col lg:flex-row justify-between items-center w-full'}>
    <div className={'flex gap-2 flex-col w-full lg:flex-row'}>
      <h1 className={'text-[32px] sm sm:text-4xl text-center lg:text-left font-tactic font-black text-nowrap'}>
        Match Tracker
      </h1>
      <MatchesFilterSelect/>
    </div>

    <div
        className={'flex flex-col-reverse w-full justify-end items-end xl:items-center xl:flex-row gap-2'}>
      {isError &&
          <div
              className={'bg-[#0F1318] p-4 flex rounded-md gap-2 w-full'}><WarningIcon/><span className={'text-nowrap'}>Ошибка: не удалось загрузить информацию</span>
          </div>}
      <button onClick={refetch}
              className={'p-4 w-full lg:max-w-[204px] mt-2.5 lg:mt-0 bg-[#EB0237] rounded-md' +
                  ' disabled:bg-[#701328]' +
                  ' flex gap-2 justify-center' +
                  ' hover:bg-[#A01131] cursor-pointer '}
              disabled={isFetching}><span>Обновить</span> <RefreshIcon
          className={isFetching ? 'animate-spin-reverse' : ''}/>
      </button>
    </div>
  </header>
})
Header.displayName = 'Header'