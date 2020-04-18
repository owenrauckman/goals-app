import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import TopNav from "./components/TopNav/Index";
import BottomNav from "./components/BottomNav/Index";
import Home from "./pages/Home/Index";
import Explore from "./pages/Explore/Index";
import Profile from "./pages/Profile/Index";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <TopNav />
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/profile" component={Profile} />
          <BottomNav />
        </View>
      </NativeRouter>
    </SafeAreaView>
  );
}
