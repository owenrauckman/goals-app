import React, { useState } from "react";
import { Text, Image, View, FlatList, TouchableOpacity } from "react-native";
import * as styles from "./styles";
import colors from "../../config/colors";
import { ternaryRender } from "../../lib";

/* SVGS */
import Checkmark from "../../assets/svg/Checkmark";
import VerticalDots from "../../assets/svg/VerticalDots";

export default function WeeklyCard(props) {
  /* Props */
  const { data, isLast } = props;

  /* Hooks */
  // TODO: remove this when we remove mock data
  const [goals, updateGoals] = useState(data.goals ? data.goals : []);

  return ternaryRender(
    data.type === "DAY",
    <View style={styles.card(isLast)}>
      <Text style={styles.day}>{data.day}</Text>
      {goals.map((goal, index) => (
        <View style={styles.goalContainer} key={index}>
          <View style={styles.checkmarkContainer(goal.completed)}>
            <Text>
              {ternaryRender(
                goal.completed,
                <Checkmark height="16" width="16" fill={colors.richBlack} />
              )}
            </Text>
          </View>
          <TouchableOpacity
            key={goal.title}
            style={styles.goalTodoContainer(goal.completed)}
            onPress={e => {
              updateGoals(
                goals.map(g => {
                  if (g.id === goal.id) goal.completed = !goal.completed;
                  return g;
                })
              );
            }}
          >
            <Text style={styles.goalTitle(goal.completed)}>{goal.title}</Text>
            <Text style={styles.goalMessage(goal.completed)}>
              {goal.message}
            </Text>
          </TouchableOpacity>
          <View style={styles.verticalDotsContainer}>
            <VerticalDots height="16" width="16" fill={colors.quickSilver} />
          </View>
        </View>
      ))}
    </View>,
    <View style={styles.nudge}>
      <Image style={styles.nudgeImage} source={{ uri: data.photo }} />
      <View style={styles.nudgeContent}>
        <View>
          <Text style={styles.nudgeHeading}>{data.title}</Text>
          <Text style={styles.nudgeDescription}>{data.description}</Text>
        </View>
        <View style={styles.nudgeButton}>
          <Text style={styles.nudgeButtonText}>{data.ctaText}</Text>
        </View>
      </View>
    </View>
  );
}
