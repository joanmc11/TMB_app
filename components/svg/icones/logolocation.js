import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { View } from 'react-native'

const logolocation = (props) => (
  <View style={{ borderRadius:100, backgroundColor:'white', height:85, width:85, justifyContent:"center", alignItems:'center'}}>
  <Svg
    width={79}
    height={79}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.448 43.71h-3.687L0 79h79L62.016 43.594h-3.353l-3.352 4.96h4.246l12.18 25.833H7.263l12.18-26.064h4.246l-3.24-4.613Zm-3.687-23.527h13.632s1.587-6.574 8.38-6.574c6.794 0 8.94 6.574 8.94 6.574h13.52S58.277-.101 38.885 0c-19.39.101-22.124 20.183-22.124 20.183Zm36.874 24.91-.063.079c-.564.703-1.147 1.418-1.742 2.136C46.159 54.16 39.51 61.255 39.11 61.24c-.495-.018-9.178-9.235-15.308-17.645-6.997-9.598-6.928-19.029-6.928-19.029l13.297-.115s2.108 8.038 8.715 7.957c6.607-.08 9.051-7.842 9.051-7.842h13.186s-.521 7.174-4.023 14.531"
      fill="#FF002A"
    />
  </Svg>
  </View>
)

export default logolocation

