import { Text } from "react-native";
import React, { Component } from "react";

import MainNavigator from "./routes/MainNavigator";

export default class Newsy extends Component {
  state = {
    isReady: false
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return <MainNavigator />;
  }
}
