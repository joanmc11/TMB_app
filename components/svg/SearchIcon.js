import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SearchIcon = (props) => (
  <Svg
    width={18}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m15.677 16.607-5.715-5.716a6 6 0 0 1-7.719-9.133 6 6 0 0 1 9.134 7.718l5.715 5.716-1.414 1.414-.001.001ZM6.485 2a4 4 0 1 0 2.917 1.264l.605.6-.682-.68-.012-.012A3.972 3.972 0 0 0 6.485 2Z"
      fill="#FF5252"
    />
  </Svg>
)

export default SearchIcon
