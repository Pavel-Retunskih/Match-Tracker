import WarningIcon from "../../assets/icons/WarningIcon.tsx";
import RefreshIcon from "../../assets/icons/RefreshIcon.tsx";
import {useGetMatchesQuery} from "../matchesList/api/appApi.ts";
import {Select} from "../../shared/select/select.tsx";
import {useAppDispatch} from "../../app/hooks/hooks.ts";
import {changeFilter} from "../../app/slice/slice.ts";


export function Header() {
  const dispatch = useAppDispatch();
  const data = [
    {label: 'Все статусы', value: 'All'},
    {label: 'Live', value: 'Ongoing'},
    {label: 'Match preparing', value: 'Scheduled'},
    {label: 'Finished', value: 'Finished'},
  ]
  const handleChangeSelect = (filter: string) => {
    dispatch(changeFilter(filter));
  }

  const {refetch, isFetching, isError} = useGetMatchesQuery()
  return <header className={'flex justify-between items-center mt-10 flex-wrap'}>
    <div className={'flex gap-6 items-center flex-wrap'}>
      <h1 className={'text-4xl text-pop font-tactic font-black text-mint-500 text-nowrap'}>Match Tracker</h1>
      <Select data={data} onChange={handleChangeSelect}/>
    </div>

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