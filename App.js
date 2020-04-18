import React, { Fragment } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import styled, { css } from "@emotion/native";

// SVGS
import Home from "./assets/svg/Home";
import Search from "./assets/svg/Search";
import User from "./assets/svg/User";

const topNav = css`
  padding: 40px;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  z-index: +1;
  box-shadow: 0px 18px 10px rgba(0, 0, 0, 0.05);
`;

const flatListContainer = css`
  padding-top: 124px; /* Padding + font-szie + card margin */
`;

const spacer = css`
  padding-top: 124px;
  background: red;
`;

const topNavHeading = css`
  font-size: 24px;
  font-weight: bold;
`;

const bottomNav = css`
  border: solid 1px transparent;
  padding: 20px 40px 0px 40px;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  box-shadow: 0px -18px 10px rgba(0, 0, 0, 0.05);
`;

const bottomNavItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const bottomNavText = css`
  font-size: 12px;
  padding: 5px 0px 0px 0px;
`;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d722",
    title: "Fourth Item"
  }
];

const card = isLast => css`
  background: white;
  padding: 80px 40px;
  margin: 10px 0px;
  border-radius: 25px;
  box-shadow: 0px 0px 20px rgba(201, 201, 201, 0.5);
  margin: ${isLast ? "0 0 198px 0" : 0};
`;

function Item({ title, index, isLast }) {
  return (
    <View style={card(isLast)}>
      <Text>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <Fragment>
        <View style={{ flex: 1, display: "flex" }}>
          <View style={topNav}>
            <Text style={topNavHeading}>Weekly View</Text>
          </View>
          <FlatList
            style={flatListContainer}
            data={DATA}
            renderItem={({ item, index }) => (
              <Item
                title={item.title}
                index={index}
                isLast={index === DATA.length - 1}
              />
            )}
            keyExtractor={item => item.id}
          />
          <View style={bottomNav}>
            <View style={bottomNavItem}>
              <Home style={{ size: 16, color: "black" }} />
              <Text style={bottomNavText}>Home</Text>
            </View>
            <View style={bottomNavItem}>
              <Search style={{ size: 16, color: "black" }} />
              <Text style={bottomNavText}>Explore</Text>
            </View>
            <View style={bottomNavItem}>
              <User style={{ size: 16, color: "black" }} />
              <Text style={bottomNavText}>Profile</Text>
            </View>
          </View>
        </View>
      </Fragment>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
