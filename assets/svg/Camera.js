import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Camera(props) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path d="M4 4h3l2-2h6l2 2h3a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2m8 3a5 5 0 00-5 5 5 5 0 005 5 5 5 0 005-5 5 5 0 00-5-5m0 2a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3z"></Path>
    </Svg>
  );
}
