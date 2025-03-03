import {ReactNode} from "react";

type Props = {
  children: ReactNode
}

export function Card({children}: Props) {
  return (
      <div className={'p-4 flex flex-col bg-[#0B0E12]  my-3 rounded-md'}>
        {children}
      </div>
  )
}