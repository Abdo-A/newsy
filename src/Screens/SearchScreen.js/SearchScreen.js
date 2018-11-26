import { Text, Button } from "native-base";
import { View, TextInput, Keyboard } from "react-native";
import React, { Component } from "react";

import { keywordNewsUrl } from "../../data/apiLinks";
import NewsList from "../../components/NewsList/NewsList";
import styles from "./SearchScreenStyle";

export default class SearchScreen extends Component {
  state = {
    query: "",
    newsUrl: "",
    inputError: "",
    searchSubmitted: false
  };

  onInputChange = text => {
    this.setState({
      query: text
    });
  };

  onSubmit = () => {
    if (!this.state.query) {
      this.setState(() => ({
        inputError: "🤷‍♂️"
      }));
      return;
    } else {
      Keyboard.dismiss();

      this.setState(() => ({
        newsUrl: ""
      }));

      setTimeout(() => {
        this.setState(prevState => ({
          searchSubmitted: true,
          inputError: "",
          newsUrl: keywordNewsUrl(prevState.query)
        }));
      }, 100);
    }
  };

  onNoResultedNews = () => {
    this.setState(() => ({
      inputError: "🙅‍♂️"
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="Search"
            onChangeText={this.onInputChange}
            style={styles.searchInput}
            autoFocus
            underlineColorAndroid="transparent"
          />
          <Button
            rounded
            success
            style={styles.searchButton}
            onPress={this.onSubmit}
          >
            <Text>Search</Text>
          </Button>
        </View>
        {this.state.inputError ? (
          <View style={styles.inputErrorContainer}>
            <Text style={styles.inputErrorText}>{this.state.inputError}</Text>
          </View>
        ) : null}
        {this.state.searchSubmitted && this.state.newsUrl ? (
          <NewsList
            api={this.state.newsUrl}
            scrollerStyle={{ marginTop: 60 }}
            onNoResultedNews={this.onNoResultedNews}
          />
        ) : null}
      </View>
    );
  }
}
