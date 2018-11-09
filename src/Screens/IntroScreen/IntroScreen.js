import { LinearGradient } from "expo";
import { Text, Button, H1 } from "native-base";
import { View } from "react-native";
import React, { Component } from "react";

import styles from "./IntroScreenStyle";
import { colors } from "../../../assets/style/base";

export default class IntroScreen extends Component {
  render() {
    return (
      <LinearGradient
        colors={[colors.primary.toString(), colors.primaryLight.toString()]}
        style={styles.container}
      >
        <Text style={styles.header}>Newsy</Text>
        <Button rounded success style={styles.enterButton}>
          <Text>Let Me In</Text>
        </Button>
      </LinearGradient>
    );
  }
}
