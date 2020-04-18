import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { View } from "react-native";

export default function User(props) {
  const { style } = props;

  return (
    <View style={{ alignItems: "center" }}>
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
        <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></Path>
        <Circle cx="12" cy="7" r="4"></Circle>
      </Svg>
    </View>
  );
}
