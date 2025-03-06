import {ReactNode} from "react";

type Props = {
  children: ReactNode
}

export function Card({children}: Props) {
  return (
      <div className={'p-4 flex flex-col bg-primary-card  my-3 rounded-md'}>
        {children}
      </div>
  )
}