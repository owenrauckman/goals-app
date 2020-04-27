import React, { useEffect } from "react";
import { SafeAreaView, View, ScrollView, Text } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { store, rrfProps } from "./redux/store";
import TopNav from "./components/TopNav/Index";
import BottomNav from "./components/BottomNav/Index";
import AuthContainer from "./components/AuthContainer/Index";
import Home from "./pages/Home/Index";
import Explore from "./pages/Explore/Index";
import Profile from "./pages/Profile/Index";
import Login from "./pages/Login/Index";

export default function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <SafeAreaView style={{ flex: 1 }}>
          <NativeRouter>
            <View style={{ flex: 1 }}>
              <Route exact path="/login" component={Login} />
              <AuthContainer>
                <TopNav />
                <Route exact path="/" component={Home} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/profile" component={Profile} />
                <BottomNav />
              </AuthContainer>
            </View>
          </NativeRouter>
        </SafeAreaView>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
