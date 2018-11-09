import { createBottomTabNavigator } from "react-navigation";
import IonIcon from "react-native-vector-icons/Ionicons";
import React from "react";

import { colors } from "../../assets/style/base";
import InternationalNewsScreen from "../Screens/InternationalNewsScreen/InternationalNewsScreen";
import LocalNewsScreen from "../Screens/LocalNewsScreen/LocalNewsScreenStyle";

export default createBottomTabNavigator(
  {
    InternationalNews: {
      screen: InternationalNewsScreen,
      //--specific navigationOptions for each tab
      navigationOptions: {
        tabBarLabel: "International News",
        tabBarIcon: ({ tintColor }) => (
          <IonIcon name="ios-home" size={24} color={tintColor} />
        )
      }
    },
    LocalNews: {
      screen: LocalNewsScreen,
      navigationOptions: {
        tabBarLabel: "Local News",
        tabBarIcon: ({ tintColor }) => (
          <IonIcon name="ios-settings" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    //--routes config
    initialRouteName: "InternationalNews",
    order: ["InternationalNews", "LocalNews"],

    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.black
    }
  }
);
