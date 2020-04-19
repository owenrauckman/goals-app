import React, { useState } from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import * as styles from "./styles";
import colors from "../../config/colors";
import { ternaryRender } from "../../lib";

/* SVGS */
import Plus from "../../assets/svg/Plus";
import Minus from "../../assets/svg/Minus";

export default function ExploreCard(props) {
  /* Props */
  const { data, index } = props;

  /* Hooks */
  const [isSelected, updateIsSelected] = useState(data.selected); // TODO:, remove this after UI POC is done

  /* Local Constants */
  const cardWidth = `${Dimensions.get("window").width / 2 - 20}px`;

  return (
    <View style={styles.card(cardWidth, index % 2 === 0)}>
      <Image style={styles.image} source={{ uri: data.image }} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={e => {
            updateIsSelected(!isSelected);
          }}
        >
          {ternaryRender(
            isSelected,
            <Minus height="16" width="16" fill={colors.hotPink} />,
            <Plus height="16" width="16" fill={colors.hotPink} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
