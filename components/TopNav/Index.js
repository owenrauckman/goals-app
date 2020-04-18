import React from "react";
import { Text, View } from "react-native";
import * as styles from "./styles";

export default function TopNav() {
  return (
    <View style={styles.topNav}>
      <Text style={styles.topNavHeading}>Your Week</Text>
    </View>
  );
}
