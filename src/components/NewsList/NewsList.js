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
    await this.getNewsFromApi();
  }

  getNewsFromApi = async () => {
    this.setState(() => ({
      loading: true
    }));

    //Get articless
    const newsListResult = await getDataFromApi(this.props.api);

    //Filter articles:
    const filteredArticles = newsListResult.articles.filter(
      article => article.urlToImage && article.title
    );

    //Set state
    this.setState(() => ({
      newsList: filteredArticles,
      loading: false
    }));
  };

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
            {this.state.newsList.map(item => (
              <NewsListItem news={item} key={item.url} />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
