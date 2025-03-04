import {useGetMatchesQuery} from "../api/appApi.ts";
import {MatchCard} from "../../../entities/match/ui/Match.tsx";
import {Match} from "../../../entities/match/model/type.ts";

export function MatchesList() {
  const {data, isSuccess} = useGetMatchesQuery()
  return <>
    {isSuccess && data?.data.matches.map((match: Match) => <MatchCard
        key={match.time} {...match} />)}
  </>
}
