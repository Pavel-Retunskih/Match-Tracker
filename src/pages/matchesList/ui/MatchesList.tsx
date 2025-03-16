import {useGetMatchesQuery} from "../api/appApi.ts";
import {MatchCard} from "../../../entities/match/ui/Match.tsx";
import {Match} from "../../../entities/match/model/type.ts";
import {useAppSelector} from "../../../app/hooks/hooks.ts";
import {useMemo} from "react";

export function MatchesList() {
  const {data, isSuccess} = useGetMatchesQuery()

  const filter = useAppSelector(state => state.app.filter)

  const filteredMatches = useMemo(() => {
    if (!data) {
      return []
    }
    if (filter === 'All') {
      return data.data?.matches
    } else {
      return data.data?.matches.filter(match => match.status === filter)
    }
  }, [data, filter])

  return <>
    {isSuccess && filteredMatches.map((match: Match) => <MatchCard
        key={match.time} {...match} />)}
  </>
}
