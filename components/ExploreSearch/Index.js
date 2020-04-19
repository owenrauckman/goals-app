import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import * as styles from "./styles";
import colors from "../../config/colors";
import { ternaryRender } from "../../lib";

/* SVGS */
import Magnify from "../../assets/svg/Magnify";
import ChevronUp from "../../assets/svg/ChevronUp";

export default function ExploreSearch() {
  /* Hooks */
  const [search, updateSearch] = useState("");

  /* Local Constants */
  const barWidth = `${Dimensions.get("window").width - 20}px`;

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={130}
      style={{ flex: 1 }}
      behavior="position"
    >
      <View style={styles.searchBar(barWidth)}>
        <View style={styles.searchBarContainer}>
          <Magnify
            height="20"
            width="20"
            fill={colors.quickSilver}
            style={styles.magnify}
          />
          <TextInput
            style={styles.input}
            value={search}
            onChangeText={text => updateSearch(text)}
            placeholderTextColor={colors.quickSilver}
            placeholder="Filter Results"
          ></TextInput>
        </View>
        <View style={styles.dateContainer}>
          <ChevronUp
            height="24"
            width="24"
            fill={colors.quickSilver}
            style={styles.chevron}
          />
          <Text style={styles.date}>Apr 19-26</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
