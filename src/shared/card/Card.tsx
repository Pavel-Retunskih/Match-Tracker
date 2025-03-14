import {memo, ReactNode} from "react";

type Props = {
  children: ReactNode
}

export const Card = memo(({children}: Props) => {
  return (
      <div className={'p-2 flex flex-col bg-primary-card  my-3 rounded-md'}>
        {children}
      </div>
  )
})
Card.displayName = 'Card'