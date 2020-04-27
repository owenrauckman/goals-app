import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as styles from "./styles";
import { useLocation } from "react-router-dom";
import { useFirebase } from "react-redux-firebase"; // TODO, remove me after dev
import { useSelector } from "react-redux"; // TODO, remove me after dev

export default function TopNav() {
  /* Redux Firebase */
  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth);

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

  /* Logout TODO: remove this and the button after dev */
  const logout = async () => {
    await firebase.logout();
  };

  return (
    <View style={styles.topNav}>
      <Text style={styles.topNavHeading}>{generateHeading()}</Text>
      <TouchableOpacity onPress={() => logout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
