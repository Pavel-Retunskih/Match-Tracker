import {useGetMatchesQuery} from "../api/appApi.ts";
import {MatchCard} from "../../../entities/match/ui/Match.tsx";
import {Match} from "../../../entities/match/model/type.ts";


export function MatchesList() {
  const {data, refetch, isFetching, isSuccess, isError} = useGetMatchesQuery()
  return <div className={'max-w-[1836px] mx-auto'}>
    <header className={'flex justify-between items-center mt-10'}>
      <h1 className={'text-4xl text-pop font-tactic font-black text-mint-500'}>Match Tracker</h1>
      <div className={'flex gap-2'}>
        {isError &&
            <span
                className={'bg-[#0F1318] p-4 flex items-center rounded-md'}>Ошибка: не удалось загрузить информацию</span>}
        <button onClick={refetch} className={'h-[56px] p-4 w-[204px] bg-[#EB0237] rounded-md disabled:bg-[#701328]' +
            ' hover:bg-[#A01131] cursor-pointer'}
                disabled={isFetching}>Обновить
        </button>
      </div>
    </header>
    {isFetching && <div> Loading...</div>}
    {isSuccess && data?.data.matches.map((match: Match) => <MatchCard
        key={match.time} {...match} />)}
  </div>;
}
