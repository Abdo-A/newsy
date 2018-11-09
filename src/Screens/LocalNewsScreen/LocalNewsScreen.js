import { Text, View } from "react-native";
import React, { Component } from "react";

import styles from "./LocalNewsScreenStyle";

export default class LocalNewsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LocalNewsScreen</Text>
      </View>
    );
  }
}
