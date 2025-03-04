import {Ref, SVGProps, forwardRef, memo} from 'react'

const WarningIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="22.793091" height="20.503784" viewBox="0 0 22.7931 20.5038" fill="none"
         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ref={ref} {...props}>
      <defs/>
      <path id="Vector"
            d="M11.4 7.93L11.4 10.27M11.4 14.93L11.4 14.94M3.24 19.6L19.57 19.6C19.95 19.6 20.33 19.5 20.66 19.32C21 19.14 21.28 18.88 21.49 18.56C21.71 18.25 21.84 17.88 21.88 17.5C21.91 17.13 21.86 16.74 21.72 16.39L13.43 2.1C13.23 1.73 12.94 1.43 12.58 1.22C12.22 1.01 11.81 0.89 11.39 0.89C10.98 0.89 10.57 1.01 10.21 1.22C9.85 1.43 9.55 1.73 9.35 2.1L1.07 16.39C0.93 16.74 0.87 17.11 0.91 17.48C0.94 17.85 1.06 18.21 1.26 18.52C1.46 18.84 1.73 19.1 2.05 19.28C2.38 19.47 2.74 19.58 3.11 19.6"
            stroke="#EB0237" strokeOpacity="1.000000" strokeWidth="1.800000" strokeLinejoin="round"
            strokeLinecap="round"/>
    </svg>
)
const ForwardRef = forwardRef(WarningIcon)
const Memo = memo(ForwardRef)

export default Memo
