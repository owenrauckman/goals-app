import React from "react";
import { Text, View, FlatList } from "react-native";
import * as styles from "./styles";
import { mock } from "./mock";
import WeeklyCard from "../../components/WeeklyCard/Index";

export default function Home() {
  return (
    <FlatList
      data={mock}
      renderItem={({ item, index }) => (
        <WeeklyCard
          data={item}
          index={index}
          isLast={index === mock.length - 1}
        />
      )}
      keyExtractor={item => item.id}
      style={styles.weeklyCardContainer}
    />
  );
}
