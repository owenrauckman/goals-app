import React from "react";
import { SafeAreaView, View } from "react-native";
import TopNav from "../TopNav/Index";
import BottomNav from "../BottomNav/Index";
import WeeklyList from "../WeeklyList/Index";
import * as styles from "./styles";

export default function Main() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <TopNav />
        <WeeklyList />
        <BottomNav />
      </View>
    </SafeAreaView>
  );
}
