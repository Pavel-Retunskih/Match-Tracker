import {memo} from "react";

export const Separator = memo(() => {
  const after = 'after:block after:absolute after:top-[50%] after:right-0 after:w-[46%] after:h-[1px] after:bg-[#313A47]'
  const before = 'before:block before:absolute before:top-[50%] before:left-0 before:w-[46%] before:h-[1px] before:bg-[#313A47]'
  return <span
      className={`text-[#313A47] text-s flex justify-center lg:hidden ${after} ${before}`}>VS</span>
})