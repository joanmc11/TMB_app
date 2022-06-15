import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Clock = (props) => (
  <Svg
    width={19}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5 2.833c-3.866 0-7 3.433-7 7.667s3.134 7.667 7 7.667 7-3.433 7-7.667-3.134-7.667-7-7.667ZM.75 10.5C.75 5.207 4.668.917 9.5.917s8.75 4.29 8.75 9.583-3.918 9.583-8.75 9.583S.75 15.793.75 10.5ZM9.5 4.75c.483 0 .875.429.875.958v4.395l2.369 2.594c.341.375.341.981 0 1.356a.822.822 0 0 1-1.238 0l-2.625-2.875a1.007 1.007 0 0 1-.256-.678V5.708c0-.529.392-.958.875-.958Z"
      fill="#00796B"
    />
  </Svg>
)

export default Clock
