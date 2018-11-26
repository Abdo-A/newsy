import { LinearGradient, Notifications, Permissions } from "expo";
import { Text, Button } from "native-base";
import * as Animatable from "react-native-animatable";
import axios from "axios";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";
import React, { Component } from "react";

import { colors } from "../../../assets/style/base";
import styles from "./IntroScreenStyle";

export default class IntroScreen extends Component {
  state = {
    notificationsToken: ""
  };

  componentDidMount() {
    this.registerForPushNotifications();
  }

  enterApp = () => {
    this.props.navigation.replace("Tab");
  };

  registerForPushNotifications = async () => {
    //check if notification permission is already given
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = status;

    //if no existing permission, ask user for permission
    if (status !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    //if no permission, exit the function
    if (finalStatus !== "granted") {
      return;
    }

    //get push notification token
    let token = await Notifications.getExpoPushTokenAsync();
    this.setState(
      () => ({
        notificationsToken: token
      })
      // () =>
      //   setTimeout(() => {
      //     this.sendPushNotification(
      //       this.state.notificationsToken,
      //       "notification title",
      //       "notification body"
      //     );
      //   }, 5000)
    );
  };

  sendPushNotification = (token, title, body) => {
    axios.post("https://exp.host/--/api/v2/push/send", {
      to: token,
      title: title,
      body: body,
      data: { message: `${title} - ${body}` }
    });
  };

  render() {
    return (
      <LinearGradient
        colors={[colors.primary.toString(), colors.primaryLight.toString()]}
        style={styles.container}
      >
        <Animatable.View animation="zoomInUp" style={styles.container}>
          <Text style={styles.header}>Newsy</Text>

          <Animatable.View
            animation="bounce"
            direction="alternate"
            duration={2000}
            iterationCount="infinite"
          >
            <FontAwesomeIcon name="newspaper-o" style={styles.paperIcon} />
          </Animatable.View>

          <Button
            rounded
            success
            style={styles.enterButton}
            onPress={this.enterApp}
          >
            <Text>Let Me In</Text>
          </Button>
        </Animatable.View>
      </LinearGradient>
    );
  }
}
