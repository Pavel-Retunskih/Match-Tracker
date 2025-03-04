import {Ref, SVGProps, forwardRef, memo} from 'react'

const ArrowIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink" {...props} ref={ref}>
      <defs>
        <clipPath id="clip69_1486">
          <rect id="chevron-up" rx="0.000000" width="27.200001" height="27.200001"
                transform="translate(0.400000 0.400000)" fill="white" fill-opacity="0"/>
        </clipPath>
      </defs>
      <g clip-path="url(#clip69_1486)">
        <path id="Icon" d="M7 17.5L14 10.5L21 17.5" stroke="#FAFAFA" strokeOpacity="1.000000" strokeWidth="2.000000"
              strokeLinejoin="round" strokeLinecap="round"/>
      </g>
    </svg>
)
const ForwardRef = forwardRef(ArrowIcon)
const Memo = memo(ForwardRef)

export default Memo
