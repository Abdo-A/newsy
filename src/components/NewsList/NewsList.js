import { ScrollView, View } from "react-native";
import React, { Component } from "react";

import NewsListItem from "../NewsListItem/NewsListItem";
import styles from "./NewsListStyle";

export default class NewsList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignSelf: "center" }}>
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
          </View>
        </ScrollView>
      </View>
    );
  }
}
