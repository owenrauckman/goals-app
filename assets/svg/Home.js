import React from "react";
import Svg, { Path, Polyline } from "react-native-svg";

export default function Home(props) {
  const { style } = props;
  return (
    <Svg
      viewBox="0 0 24 24"
      width={style.size ? `${style.size}px` : "100%"}
      height={style.size ? `${style.size}px` : "100%"}
      stroke={style.color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></Path>
      <Polyline points="9 22 9 12 15 12 15 22"></Polyline>
    </Svg>
  );
}
