import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Minus(props) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"></Path>
    </Svg>
  );
}
