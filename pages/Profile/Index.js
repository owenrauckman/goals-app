import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import * as styles from "./styles";
import colors from "../../config/colors";

/* SVGS */
import Camera from "../../assets/svg/Camera";

export default function Profile() {
  /* Local Constants */
  const cardWidth = `${Dimensions.get("window").width - 60}px`;
  const cardHalfWidth = `${Dimensions.get("window").width / 2 - 60}px`;

  /* Hooks */
  const [name, updateName] = useState("Owen Rauckman");
  const [age, updateAge] = useState("26");
  const [email, updateEmail] = useState("owenrauckman@gmail.com");
  const [password, updatePassword] = useState("************");

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView keyboardVerticalOffset={0} behavior="position">
        <View style={styles.imageContainer}>
          <View style={styles.updatePhotoContainer}>
            <Camera height="16" width="16" fill={colors.brilliantAzure} />
          </View>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://avatars3.githubusercontent.com/u/7818684?s=460&u=43c46198217260bbf7f3f3f2fdea1f969390a42c&v=4"
            }}
          ></Image>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.fullWidth(cardWidth)}>
            <Text style={styles.formText}>Name</Text>
            <TextInput
              style={styles.formText}
              value={name}
              onChangeText={text => updateName(text)}
              placeholderTextColor={colors.quickSilver}
              placeholder="Name"
            ></TextInput>
          </View>
          <View style={styles.halfContainer}>
            <View style={styles.halfWidth(cardHalfWidth, true, false)}>
              <Text style={styles.formText}>Age</Text>
              <TextInput
                style={styles.formText}
                value={age}
                onChangeText={text => updateAge(text)}
                placeholderTextColor={colors.quickSilver}
                placeholder="Age"
              ></TextInput>
            </View>
            <View style={styles.halfWidth(cardHalfWidth, false, true)}>
              <Text style={styles.allHabitsText}>All Habits</Text>
            </View>
          </View>
          <View style={styles.fullWidth(cardWidth)}>
            <Text style={styles.formText}>Email</Text>
            <TextInput
              style={styles.formText}
              value={email}
              onChangeText={text => updateEmail(text)}
              placeholderTextColor={colors.quickSilver}
              placeholder="Email"
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
            ></TextInput>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button(false)}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button(true)}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
