import React from "react";
import Svg, { Circle, Line } from "react-native-svg";
import { View } from "react-native";

export default function Search(props) {
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
        <Circle cx="11" cy="11" r="8"></Circle>
        <Line x1="21" y1="21" x2="16.65" y2="16.65"></Line>
      </Svg>
    </View>
  );
}
