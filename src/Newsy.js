import { Text } from "react-native";
import Expo from "expo";
import React, { Component } from "react";

import { loadFonts } from "../assets/style/fonts/loadFonts";
import MainNavigator from "./routes/MainNavigator";

export default class Newsy extends Component {
  state = {
    fontLoaded: false
  };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Promise.all(loadFonts);

    this.setState(() => ({ fontLoaded: true }));
  }

  render() {
    if (!this.state.fontLoaded) {
      return <Expo.AppLoading />;
    }

    return <MainNavigator />;
  }
}
