import { ScrollView, View, ActivityIndicator } from "react-native";
import React, { Component } from "react";

import { colors } from "../../../assets/style/base";
import { getDataFromApi } from "../../data/helperFunctions/getDataFromAPI";
import NewsListItem from "../NewsListItem/NewsListItem";
import styles from "./NewsListStyle";

export default class NewsList extends Component {
  state = {
    newsList: null,
    loading: false
  };

  async componentDidMount() {
    this.setState(() => ({
      loading: true
    }));

    const newsListResult = await getDataFromApi(this.props.api);

    this.setState(() => ({
      newsList: newsListResult.articles,
      loading: false
    }));
  }

  render() {
    if (this.state.loading || !this.state.newsList) {
      return (
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color={colors.secondary} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scrollView}>
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
            <NewsListItem news={this.state.newsList[3]} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
