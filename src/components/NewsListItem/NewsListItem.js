import { Card, CardItem, Text, Body } from 'native-base';

import {
  Image,
  TouchableOpacity,
  Linking,
  ActivityIndicator
} from 'react-native';
import moment from 'moment';
import React, { PureComponent } from 'react';

import styles from './NewsListItemStyle';
import { colors } from '../../../assets/style/base';

export default class NewsListItem extends PureComponent {
  state = {
    imageLoading: false
  };

  componentDidMount() {
    this.setState(() => ({
      imageLoading: true
    }));
  }

  goToLink = (link) => {
    Linking.openURL(link);
  };

  render() {
    const { title, content, urlToImage, publishedAt, url } = this.props.news;

    let polishedDate;
    let polishedContent;

    //polishing content
    if (content) {
      const edgeIndex = content.indexOf('[+');
      polishedContent = content.slice(0, edgeIndex);
    }

    //polishing date
    if (publishedAt) {
      polishedDate = moment
        .utc(publishedAt)
        .local()
        .calendar();
    }

    onImageLoaded = () => {
      this.setState(() => ({
        imageLoading: false
      }));
    };

    return (
      <Card style={styles.container}>
        <TouchableOpacity
          onPress={() => this.goToLink(url)}
          activeOpacity={0.95}
        >
          <CardItem header>
            <Text style={styles.titleText}>{title}</Text>
          </CardItem>
          <CardItem style={styles.imageBody}>
            <Body>
              <Image
                source={{ uri: urlToImage }}
                style={styles.mainImage}
                onLoad={this.onImageLoaded}
              />
              {this.state.imageLoading || (
                <ActivityIndicator
                  size="large"
                  color={colors.secondary}
                  style={styles.imageLoadingIndicator}
                />
              )}
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={styles.contentText}>{polishedContent}</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text style={styles.dateText}>{polishedDate}</Text>
          </CardItem>
        </TouchableOpacity>
      </Card>
    );
  }
}
