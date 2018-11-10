import { Card, CardItem, Text, Body } from "native-base";
import { Image, TouchableOpacity, Linking } from "react-native";
import moment from "moment";
import React, { Component } from "react";

import styles from "./NewsListItemStyle";

export default class NewsListItem extends Component {
  goToLink = link => {
    Linking.openURL(link);
  };

  render() {
    const { title, content, urlToImage, publishedAt, url } = this.props.news;

    let polishedDate;
    let polishedContent;

    //polishing content
    if (content) {
      const edgeIndex = content.indexOf("[+");
      polishedContent = content.slice(0, edgeIndex);
    }

    //polishing date
    if (publishedAt) {
      polishedDate = moment
        .utc(publishedAt)
        .local()
        .calendar();
    }

    return (
      <Card style={styles.container}>
        <TouchableOpacity
          onPress={() => this.goToLink(url)}
          activeOpacity={0.95}
        >
          <CardItem header>
            <Text style={styles.titleText}>{title}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={{ uri: urlToImage }} style={styles.mainImage} />
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{polishedContent}</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>{polishedDate}</Text>
          </CardItem>
        </TouchableOpacity>
      </Card>
    );
  }
}
