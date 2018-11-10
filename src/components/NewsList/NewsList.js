import { ScrollView, View, ActivityIndicator } from "react-native";
import React, { Component } from "react";

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
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scrollView}>
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
            <NewsListItem news={this.state.newsList[0]} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
