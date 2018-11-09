import { Text, Button } from "native-base";
import { View } from "react-native";
import React, { Component } from "react";

export default class IntroScreen extends Component {
  render() {
    return (
      <View>
        <Button rounded success>
          <Text>Success</Text>
        </Button>
      </View>
    );
  }
}
