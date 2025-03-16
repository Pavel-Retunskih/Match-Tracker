import {Select} from "../../shared/select/select.tsx";
import {memo, useCallback, useMemo} from "react";
import {useAppDispatch} from "../../app/hooks/hooks.ts";
import {changeFilter} from "../../app/slice/slice.ts";


export const MatchesFilterSelect = memo(() => {

  const dispatch = useAppDispatch();

  const handleChangeSelect = useCallback((filter: string) => {
    dispatch(changeFilter(filter));
  }, [dispatch])

  const data = useMemo(() => [
    {label: 'Все статусы', value: 'All'},
    {label: 'Live', value: 'Ongoing'},
    {label: 'Match preparing', value: 'Scheduled'},
    {label: 'Finished', value: 'Finished'},
  ], []);

  return <Select data={data} onChange={handleChangeSelect}/>
})