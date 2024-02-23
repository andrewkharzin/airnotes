import * as React from "react"
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1085}
    height={237}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M.358 207.034c-3.6 16 20.833 26.333 33.5 29.5h15.5l-3.5-6c-15.333-3.833-35.9-13.9-19.5-23.5 20.5-12 76-33.5 70-51.5s304.5 23 363.5 23 329.5 1.497 349-13c20-3.5 171.5-97.5 152-108.5s58.832-29.833 97.002-29l-53 128.5s11.5 14.5-3 28c-14.502 13.5 48.4-30.6 48-19-.4 11.6-33.5 32.5-33.5 32.5l22-3c17-12.833 46.2-38.5 27-38.5-19.2 0-36.5 11.5-42.5 5.5s0-5.5 0-5.5l61.5-154c-25.67-7-90.702-3.7-145.502 65.5-55 60-113.167 89.833-134.5 88.5-63 .833-208.3 2-285.5 0-96.5-2.5-105.5-16.5-218.5-16s-193 5-199 4.5-20 7-40.5 22.5-56 19.5-60.5 39.5Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={542.179}
        x2={542.179}
        y1={0}
        y2={236.534}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.174} stopColor="#FF05C8" />
        <stop offset={1} stopColor="#FF05C8" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgComponent
