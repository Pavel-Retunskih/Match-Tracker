import WarningIcon from "../../assets/icons/WarningIcon.tsx";
import RefreshIcon from "../../assets/icons/RefreshIcon.tsx";
import {useGetMatchesQuery} from "../matchesList/api/appApi.ts";
import {Select} from "../../shared/select/select.tsx";
import {useAppDispatch} from "../../app/hooks/hooks.ts";
import {changeFilter} from "../../app/slice/slice.ts";
import {memo, useCallback, useMemo} from "react";


export const Header = memo(() => {
  const {refetch, isFetching, isError} = useGetMatchesQuery()
  const dispatch = useAppDispatch();

  const data = useMemo(() => [
    {label: 'Все статусы', value: 'All'},
    {label: 'Live', value: 'Ongoing'},
    {label: 'Match preparing', value: 'Scheduled'},
    {label: 'Finished', value: 'Finished'},
  ], []);

  const handleChangeSelect = useCallback((filter: string) => {
    dispatch(changeFilter(filter));
  }, [dispatch])


  return <header className={'flex justify-between items-center mt-10 flex-wrap'}>
    <div className={' flex-col w-full justify-center'}>
      <h1 className={'text-3xl sm:text-4xl text-center font-tactic font-black text-nowrap'}>Match Tracker</h1>
      <Select data={data} onChange={handleChangeSelect}/>
    </div>

    <div className={'flex flex-wrap justify-center mt-2.5 gap-2 w-full'}>
      {isError &&
          <div
              className={'bg-[#0F1318] p-4 flex items-center rounded-md gap-2'}><WarningIcon></WarningIcon> <span>Ошибка: не удалось загрузить информацию</span>
          </div>}
      <button onClick={refetch}
              className={'p-4 w-full mt-2.5 bg-[#EB0237] rounded-md disabled:bg-[#701328]' +
                  ' flex gap-2 justify-center' +
                  ' hover:bg-[#A01131] cursor-pointer '}
              disabled={isFetching}><span>Обновить</span> <RefreshIcon
          className={isFetching ? 'animate-spin-reverse' : ''}/>
      </button>
    </div>
  </header>
})
Header.displayName = 'Header'