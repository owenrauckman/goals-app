import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Redirect } from "react-router-native";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import * as styles from "./styles";
import colors from "../../config/colors";

export default function Profile() {
  /* Redux Firebase */
  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth);

  /* Local Constants */
  const cardWidth = `${Dimensions.get("window").width - 60}px`;
  const cardHalfWidth = `${Dimensions.get("window").width / 2 - 60}px`;

  /* Sign In */
  const signIn = async () => {
    try {
      await firebase.login({
        email: email,
        password: password
      });
    } catch (e) {
      // TODO: UI state for these
      console.log("error logging in up", e);
    }
  };

  /* Sign Up */
  const signUp = async () => {
    try {
      await firebase.createUser({ email, password });
    } catch (e) {
      // TODO: UI state for these
      console.log("error signing up", e);
    }
  };

  /* Hooks */
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const history = useHistory();

  /* Watch for a successful login and push to the homepage */
  useEffect(() => {
    if (firebase.auth().currentUser) history.push("/");
  }, [auth]);

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView keyboardVerticalOffset={0} behavior="position">
        <View style={styles.fullWidth(cardWidth)}>
          <Text style={styles.formText}>Email</Text>
          <TextInput
            style={styles.formText}
            value={email}
            onChangeText={text => updateEmail(text)}
            placeholderTextColor={colors.quickSilver}
            placeholder="Email"
            autoCapitalize={"none"}
          ></TextInput>
        </View>
        <View style={styles.fullWidth(cardWidth)}>
          <Text style={styles.formText}>Password</Text>
          <TextInput
            style={styles.formText}
            value={password}
            onChangeText={text => updatePassword(text)}
            placeholderTextColor={colors.quickSilver}
            placeholder="Password"
            autoCapitalize={"none"}
            secureTextEntry={true}
          ></TextInput>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button(false)}
            onPress={() => signUp()}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button(true)}
            onPress={() => signIn()}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
