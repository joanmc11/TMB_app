import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Warning = (props) => (
  <Svg
    width={26}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.23.75h1.54l11.445 21.455-.77 1.295H1.52l-.77-1.295L12.23.75ZM13 2.99 2.99 21.75h19.985L13 2.99ZM14.094 20v-1.75h-2.188V20h2.188Zm-2.188-3.5v-7h2.188v7h-2.188Z"
      fill="#FF5252"
    />
  </Svg>
)

export default Warning
