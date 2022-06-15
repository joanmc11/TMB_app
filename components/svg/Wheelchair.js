import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Wheelchair = (props) => (
  <Svg
    width={17}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.499 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7.5 14h-1v-5a1 1 0 0 0-1-1h-5v-2h5a1 1 0 1 0 0-2h-5V6a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h5v5a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2Zm-6.8-1.6a4 4 0 0 1-7.2-2.4 4 4 0 0 1 2.4-3.66 1.003 1.003 0 0 0-.8-1.84 6 6 0 1 0 7.2 9.1 1 1 0 0 0-1.6-1.2Z"
      fill="#009688"
    />
  </Svg>
)

export default Wheelchair
