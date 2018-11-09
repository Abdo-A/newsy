import { LinearGradient } from "expo";
import { Text, Button } from "native-base";
import * as Animatable from "react-native-animatable";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import React, { Component } from "react";

import { colors } from "../../../assets/style/base";
import styles from "./IntroScreenStyle";

export default class IntroScreen extends Component {
  enter = () => {
    this.props.navigation.replace("Tab");
  };

  render() {
    return (
      <LinearGradient
        colors={[colors.primary.toString(), colors.primaryLight.toString()]}
        style={styles.container}
      >
        <Animatable.View animation="zoomInUp" style={styles.container}>
          <Text style={styles.header}>Newsy</Text>

          <Animatable.View
            animation="bounce"
            direction="alternate"
            duration={2000}
            iterationCount="infinite"
          >
            <FontAwesomeIcon name="newspaper-o" style={styles.paperIcon} />
          </Animatable.View>

          <Button
            rounded
            success
            style={styles.enterButton}
            onPress={this.enter}
          >
            <Text>Let Me In</Text>
          </Button>
        </Animatable.View>
      </LinearGradient>
    );
  }
}
