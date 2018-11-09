import { createBottomTabNavigator } from "react-navigation";
import { Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

import { colors } from "../../assets/style/base";
import InternationalNewsScreen from "../Screens/InternationalNewsScreen/InternationalNewsScreen";
import LocalNewsScreen from "../Screens/LocalNewsScreen/LocalNewsScreen";
import styles from "../Screens/IntroScreen/IntroScreenStyle";

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
          <EntypoIcon name="magnifying-glass" size={30} color={tintColor} />
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
