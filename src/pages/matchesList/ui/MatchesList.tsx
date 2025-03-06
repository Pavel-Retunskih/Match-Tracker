import {useGetMatchesQuery} from "../api/appApi.ts";
import {MatchCard} from "../../../entities/match/ui/Match.tsx";
import {Match} from "../../../entities/match/model/type.ts";
import {useAppSelector} from "../../../app/hooks/hooks.ts";

export function MatchesList() {
  const {data, isSuccess} = useGetMatchesQuery()

  const filter = useAppSelector(state => state.app.filter)

  const getFilteredMatches = ({data}: { data: { matches: Match[] } }) => {
    if (filter === 'All') {
      return data?.matches
    } else {
      return data?.matches.filter(match => match.status === filter)
    }
  }

  return <>
    {isSuccess && getFilteredMatches(data)?.map((match: Match) => <MatchCard
        key={match.time} {...match} />)}
  </>
}
