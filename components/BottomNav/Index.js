import React, { Fragment } from "react";
import { SafeAreaView, Text, View, FlatList } from "react-native";
import * as styles from "./styles";

/* SVGS */
import Home from "../../assets/svg/Home";
import Explore from "../../assets/svg/Search";
import Profile from "../../assets/svg/User";

/* Local Constants */
const iconComponents = {
  Home,
  Explore,
  Profile
};

/* Return the correct icon component given a type */
function IconComponent(props) {
  const { type, style } = props;
  const SpecificStory = iconComponents[type];
  return <SpecificStory style={style} />;
}

export default function BottomNav() {
  return (
    <View style={styles.bottomNav}>
      {["Home", "Explore", "Profile"].map(item => (
        <View key={item} style={styles.bottomNavItem}>
          <IconComponent type={item} style={{ size: 16, color: "black" }} />
          <Text style={styles.bottomNavText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}
