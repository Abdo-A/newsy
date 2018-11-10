import { Card, CardItem, Text, Body } from "native-base";
import { Image } from "react-native";
import moment from "moment";
import React, { Component } from "react";

import styles from "./NewsListItemStyle";

export default class NewsListItem extends Component {
  componentDidMount() {}

  render() {
    const { title, content, urlToImage, publishedAt } = this.props.news;

    //polishing content
    const edgeIndex = content.indexOf("[+");
    const polishedContent = content.slice(0, edgeIndex);

    //polishing date
    const polishedDate = moment(publishedAt).calendar();

    return (
      <Card style={styles.container}>
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
      </Card>
    );
  }
}
