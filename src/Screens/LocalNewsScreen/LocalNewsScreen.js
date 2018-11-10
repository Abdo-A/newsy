import { View, Text, ActivityIndicator } from "react-native";
import React, { Component } from "react";

import { IPUrl, locationUrl, localNewsUrl } from "../../data/apiLinks";
import { getDataFromApi } from "../../data/helperFunctions/getDataFromAPI";
import NewsList from "../../components/NewsList/NewsList";
import styles from "./LocalNewsScreenStyle";
import { hasLocalNews } from "../../data/helperFunctions/hasLocalNews";
import { colors } from "../../../assets/style/base";

export default class LocalNewsScreen extends Component {
  state = {
    localNewsUrl: null,
    loading: false,
    noLocalNews: false
  };

  async componentDidMount() {
    //Start Loading State
    this.setState(() => ({
      loading: true
    }));

    //Get User IP
    const ipData = await getDataFromApi(IPUrl);
    const ip = ipData.ip;

    //Get User Location
    const locationData = await getDataFromApi(locationUrl("81.0.3.255"));
    let country_code = locationData.country_code;

    //Check if this location is supported
    if (!hasLocalNews(country_code)) {
      country_code = "US";
      this.setState(() => ({
        noLocalNews: true
      }));
    }

    //Get Local News
    this.setState(() => ({
      localNewsUrl: localNewsUrl(country_code),
      loading: false
    }));
  }

  render() {
    if (this.state.loading || !this.state.localNewsUrl) {
      return (
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color={colors.secondary} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {this.state.noLocalNews && (
          <Text style={styles.errorText}>
            Sorry, your country local news is not supported yet..
          </Text>
        )}
        <NewsList api={this.state.localNewsUrl} />
      </View>
    );
  }
}
