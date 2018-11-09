import { Card, CardItem, Text, Body } from "native-base";
import React, { Component } from "react";

import styles from "./NewsListItemStyle";

export default class NewsListItem extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <CardItem header>
          <Text>NativeBase</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>//Your text here</Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Text>GeekyAnts</Text>
        </CardItem>
      </Card>
    );
  }
}
