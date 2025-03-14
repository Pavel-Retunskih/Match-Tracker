import {MatchStatus} from "../../../model/type.ts";

type Props = {
  awayScore: number;
  homeScore: number;
  status: MatchStatus;
}

export function Score({homeScore, awayScore, status}: Props) {
  const statusColor = {
    Scheduled: {color: 'bg-[#EB6402]', description: 'Match preparing'},
    Ongoing: {color: 'bg-[#43AD28]', description: 'Live'},
    Finished: {color: 'bg-[#EB0237]', description: 'Finished'},
  }
  return <div className={'flex flex-col gap-1 justify-center items-center'}>
    <div className={'flex gap-2 text-inter text-[20px] font-semibold leading-tight'}>
      <span>{homeScore}</span><span
        className={'animate-pulse'}>:</span><span>{awayScore}</span></div>
    <span
        className={`${statusColor[status].color} min-w-[96px] px-5 py-[6px] text-[12px] rounded-md text-center leading-tight`}>{statusColor[status].description}</span>
  </div>
}