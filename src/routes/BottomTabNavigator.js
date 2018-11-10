import { createBottomTabNavigator } from "react-navigation";
import { Text } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

import { colors } from "../../assets/style/base";
import InternationalNewsScreen from "../Screens/InternationalNewsScreen/InternationalNewsScreen";
import LocalNewsScreen from "../Screens/LocalNewsScreen/LocalNewsScreen";

export default createBottomTabNavigator(
  {
    InternationalNews: {
      screen: InternationalNewsScreen,
      //--specific navigationOptions for each tab
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: tintColor
            }}
          >
            International
          </Text>
        ),
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcon name="earth" size={30} color={tintColor} />
        )
      }
    },
    LocalNews: {
      screen: LocalNewsScreen,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: tintColor
            }}
          >
            Local
          </Text>
        ),
        tabBarIcon: ({ tintColor }) => (
          <Ionicon name="ios-flag" size={35} color={tintColor} />
        )
      }
    }
  },
  {
    //--routes config
    initialRouteName: "InternationalNews",
    order: ["InternationalNews", "LocalNews"],

    tabBarOptions: {
      activeTintColor: colors.primary.toString(),
      inactiveTintColor: colors.black.toString()
    }
  }
);
