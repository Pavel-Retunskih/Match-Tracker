import {memo} from "react";

type Props = {
  title: string,
  value: string | number,
}

export const StatCard = memo(({title, value}: Props) => {
  return <div className={'flex items-center gap-2 px-5'}>
    <span className={'text-xs md:text-s text-[#FAFAFA66]'}>{title}</span>
    <span className={'w-5'}>{value}</span>
  </div>
})