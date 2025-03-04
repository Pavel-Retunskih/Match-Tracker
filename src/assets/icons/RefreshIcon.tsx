import {Ref, SVGProps, forwardRef, memo} from 'react'

const RefreshIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="26.000000" height="26.000000" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink" {...props} ref={ref}>
      <defs>
        <clipPath id="clip72_343">
          <rect id="mainIcon/Refresh" rx="0.000000" width="25.000000" height="25.000000"
                transform="translate(0.500000 0.500000)" fill="white" fillOpacity="0"/>
        </clipPath>
      </defs>
      <rect id="mainIcon/Refresh" rx="0.000000" width="25.000000" height="25.000000"
            transform="translate(0.500000 0.500000)" fill="#FFFFFF" fillOpacity="0"/>
      <g clipPath="url(#clip72_343)">
        <path id="Union"
              d="M13.08 2.43C7.89 2.43 3.62 6.4 3.2 11.46L2.16 11.46C1.83 11.46 1.54 11.66 1.41 11.96C1.28 12.27 1.36 12.62 1.59 12.85L3.41 14.66C3.73 14.97 4.24 14.97 4.55 14.66L6.37 12.85C6.61 12.62 6.68 12.27 6.55 11.96C6.43 11.66 6.13 11.46 5.8 11.46L4.83 11.46C5.25 7.31 8.78 4.06 13.08 4.06C16.08 4.06 18.71 5.64 20.16 8C20.4 8.39 20.9 8.51 21.28 8.27C21.66 8.04 21.78 7.54 21.55 7.15C19.81 4.32 16.66 2.43 13.08 2.43Z"
              fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero"/>
        <g opacity="0.500000">
          <path id="Union"
                d="M22.57 11.33C22.26 11.02 21.75 11.02 21.43 11.33L19.6 13.14C19.37 13.37 19.3 13.72 19.42 14.03C19.55 14.33 19.85 14.53 20.17 14.53L21.15 14.53C20.74 18.68 17.19 21.93 12.87 21.93C9.85 21.93 7.22 20.35 5.76 17.99C5.52 17.6 5.02 17.48 4.64 17.72C4.26 17.96 4.14 18.46 4.37 18.84C6.12 21.67 9.27 23.56 12.87 23.56C18.08 23.56 22.36 19.59 22.78 14.53L23.83 14.53C24.16 14.53 24.46 14.33 24.58 14.03C24.71 13.72 24.63 13.37 24.4 13.14L22.57 11.33Z"
                fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero"/>
        </g>
      </g>
    </svg>

)
const ForwardRef = forwardRef(RefreshIcon)
const Memo = memo(ForwardRef)

export default Memo
