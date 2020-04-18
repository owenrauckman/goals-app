import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Checkmark(props) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"></Path>
    </Svg>
  );
}
