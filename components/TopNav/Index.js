import React from "react";
import { Text, View } from "react-native";
import * as styles from "./styles";
import { useLocation } from "react-router-dom";

export default function TopNav() {
  /* Hooks */
  const location = useLocation();

  /* Local Constannts */
  const generateHeading = () => {
    switch (location.pathname) {
      case "/":
        return "Your Week";
      case "/explore":
        return "Find Goals";
      case "/profile":
        return "Profile";
      default:
        return "";
    }
  };

  return (
    <View style={styles.topNav}>
      <Text style={styles.topNavHeading}>{generateHeading()}</Text>
    </View>
  );
}
