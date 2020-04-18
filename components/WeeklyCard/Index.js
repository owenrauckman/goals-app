import React from "react";
import { Text, View, FlatList } from "react-native";
import * as styles from "./styles";

export default function WeeklyCard(props) {
  /* Props */
  const { title, index, isLast } = props;

  return (
    <View style={styles.card(isLast)}>
      <Text>{title}</Text>
    </View>
  );
}
