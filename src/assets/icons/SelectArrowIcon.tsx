import {Ref, SVGProps, forwardRef, memo} from 'react'

const SelectArrowIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="11.667206" height="6.368744" viewBox="0 0 11.6672 6.36874" fill="none"
         {...props} ref={ref}>
      <defs/>
      <path id="Vector"
            d="M10.76 0L0.89 0C0.09 0 -0.31 0.96 0.26 1.53L4.58 5.85C5.27 6.54 6.39 6.54 7.09 5.85L8.73 4.2L11.4 1.53C11.96 0.96 11.56 0 10.76 0Z"
            fill="#B4B5B6" fillOpacity="1.000000" fillRule="nonzero"/>
    </svg>

)
const ForwardRef = forwardRef(SelectArrowIcon)
const Memo = memo(ForwardRef)

export default Memo
