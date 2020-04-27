import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-native";
import {
  ReactReduxFirebaseProvider,
  isLoaded,
  isEmpty
} from "react-redux-firebase";

export default function AuthContainer({ children }) {
  const history = useHistory();
  const auth = useSelector(state => state.firebase.auth);
  if (
    isLoaded(auth) &&
    isEmpty(auth) &&
    history.location.pathname !== "/login"
  ) {
    return <Redirect to="login" />;
  } else if (!isLoaded(auth)) {
    /* TODO: make this an actual splash screen */
    return <Text>Loading splash screen...</Text>;
  } else if (!isEmpty(auth)) {
    return children;
  } else {
    return null;
  }
}
