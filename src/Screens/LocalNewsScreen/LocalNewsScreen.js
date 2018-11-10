import { View, Text, ActivityIndicator } from "react-native";
import React, { Component } from "react";

import { getDataFromApi } from "../../data/helperFunctions/getDataFromAPI";
import { locationUrl, localNewsUrl } from "../../data/apiLinks";
import NewsList from "../../components/NewsList/NewsList";
import styles from "./LocalNewsScreenStyle";

export default class LocalNewsScreen extends Component {
  state = {
    localNewsUrl: null,
    loading: false
  };

  async componentDidMount() {
    this.setState(() => ({
      loading: true
    }));

    const location = await getDataFromApi(locationUrl);

    this.setState(() => ({
      localNewsUrl: localNewsUrl(location.country_code),
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
        <NewsList api={this.state.localNewsUrl} />
      </View>
    );
  }
}
