import React, { useRef, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { mock } from "./mock";
import ExploreCard from "../../components/ExploreCard/Index";
import * as styles from "./styles";

export default function Explore() {
  /* Refs */
  const exploreScrollView = useRef(null);

  /*
    On Mount:
    Scroll down 100px (half the height of our cards) so the UI looks proper
  */
  useEffect(() => {
    if (exploreScrollView.current)
      exploreScrollView.current.scrollTo({ x: 0, y: 130, animated: true });
  }, []);

  return (
    <ScrollView
      ref={exploreScrollView}
      contentContainerStyle={styles.exploreCardContainer}
    >
      {mock.map((item, index) => (
        <ExploreCard key={index} data={item} index={index} />
      ))}
    </ScrollView>
  );
}
