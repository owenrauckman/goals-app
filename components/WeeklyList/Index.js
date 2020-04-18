import React from "react";
import { Text, View, FlatList } from "react-native";
import * as styles from "./styles";
import { mock } from "./mock";
import WeeklyCard from "../WeeklyCard/Index";

export default function WeeklyList() {
  return (
    <FlatList
      style={styles.flatListContainer}
      data={mock}
      renderItem={({ item, index }) => (
        <WeeklyCard
          title={item.title}
          index={index}
          isLast={index === mock.length - 1}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
}
