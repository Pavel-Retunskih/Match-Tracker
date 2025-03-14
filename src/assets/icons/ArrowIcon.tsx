import {Ref, SVGProps, forwardRef, memo} from 'react'

const ArrowIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
         {...props} ref={ref}>
      <defs>
        <clipPath id="clip68_8409">
          <rect id="mainIcon/arrow drop-list down" rx="0.000000" width="26.667219" height="26.667219"
                transform="translate(0.666390 0.666390)" fill="white" fillOpacity="0"/>
        </clipPath>
      </defs>
      <g clipPath="url(#clip68_8409)">
        <path id="Vector"
              d="M9.47 10.5L14 15.02L18.53 10.5C18.98 10.04 19.72 10.04 20.17 10.5C20.63 10.95 20.63 11.69 20.17 12.14L14.82 17.5C14.36 17.95 13.63 17.95 13.17 17.5L7.82 12.14C7.36 11.69 7.36 10.95 7.82 10.5C8.27 10.05 9.02 10.04 9.47 10.5Z"
              fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero"/>
        <path id="Vector"
              d="M15.13 13.89L18.53 10.5C18.98 10.04 19.72 10.04 20.17 10.5C20.63 10.95 20.63 11.69 20.17 12.14L14.82 17.5C14.36 17.95 13.63 17.95 13.17 17.5L7.82 12.14C7.36 11.69 7.36 10.95 7.82 10.5C8.27 10.05 9.02 10.04 9.47 10.5L12.87 13.89L14 15.02L15.13 13.89Z"
              fill="#FFFFFF" fillOpacity="1.000000" fillRule="evenodd"/>
      </g>
    </svg>
)
const ForwardRef = forwardRef(ArrowIcon)
const Memo = memo(ForwardRef)

export default Memo
