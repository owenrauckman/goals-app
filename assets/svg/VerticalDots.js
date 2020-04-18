import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function VerticalDots(props) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path d="M12 16a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m0-6a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m0-6a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2z"></Path>
    </Svg>
  );
}
