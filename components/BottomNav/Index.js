import React, { Fragment } from "react";
import { Link } from "react-router-native";
import { useLocation } from "react-router-dom";
import { SafeAreaView, Text, View, FlatList } from "react-native";
import * as styles from "./styles";
import colors from "../../config/colors";

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
  /* Hooks */
  const location = useLocation();

  /* Local constants */
  const isActive = path => path === location.pathname;

  return (
    <View style={styles.bottomNav}>
      {[
        { type: "Home", path: "/" },
        { type: "Explore", path: "/explore" },
        { type: "Profile", path: "/profile" }
      ].map(item => (
        <Link
          key={item.type}
          style={styles.bottomNavItem}
          to={item.path}
          underlayColor="transparent"
          style={styles.navItem}
        >
          <View style={styles.navItem}>
            <IconComponent
              type={item.type}
              style={{
                size: 16,
                color: isActive(item.path)
                  ? colors.richBlack
                  : colors.quickSilver
              }}
            />
            <Text
              style={styles.bottomNavText(
                isActive(item.path) ? colors.richBlack : colors.quickSilver
              )}
            >
              {item.type}
            </Text>
          </View>
        </Link>
      ))}
    </View>
  );
}
