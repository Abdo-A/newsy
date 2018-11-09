import { View } from "react-native";
import React, { Component } from "react";

import NewsList from "../../components/NewsList/NewsList";
import styles from "./InternationalNewsScreenStyle";

export default class InternationalNewsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NewsList />
      </View>
    );
  }
}
