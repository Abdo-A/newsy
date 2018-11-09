import { createStackNavigator, Header } from "react-navigation";
import { Text } from "react-native";
import React from "react";

import { colors, fontTypes, gaps } from "../../assets/style/base";
import BottomTabNavigator from "./BottomTabNavigator";
import IntroScreen from "../Screens/IntroScreen/IntroScreen";

export default createStackNavigator(
  {
    Tab: BottomTabNavigator,
    Intro: IntroScreen
  },
  {
    initialRouteName: "Intro",

    //--navigationOptions for each screen:
    navigationOptions: ({ navigation }) => {
      //--first, we check which screen it is:
      let screen = navigation.state.routeName;

      //values we will modify then return:
      let tabBarVisible = true;
      let headerStyle = { backgroundColor: colors.primary };
      let headerTitle = "";
      let headerRight = "";
      headerTitleStyle = {};

      //For each screen:
      if (screen === "Tab") {
        const { routes, index } = navigation.state;
        let tabScreen = routes[index].routeName;

        //for each tab screen

        //InternationalNews tab screen
        if (tabScreen === "InternationalNews") {
          headerTitle = (
            <Text
              style={{
                fontFamily: fontTypes.spicy,
                marginLeft: gaps.md,
                fontSize: 30,
                color: colors.white,
                textAlign: "center"
              }}
            >
              International News
            </Text>
          );
        }

        //LocalNews tab screen
        if (tabScreen === "LocalNews") {
          headerTitle = (
            <Text
              style={{
                fontFamily: fontTypes.spicy,
                marginLeft: gaps.md,
                fontSize: 30,
                color: colors.white,
                textAlign: "center"
              }}
            >
              Local News
            </Text>
          );
        }
      }

      if (screen === "Intro") {
        headerStyle = {
          display: "none"
        };
      }

      return {
        tabBarVisible,
        headerStyle,
        headerTitle,
        headerRight,
        headerTitleStyle
        // and so on..
      };
    }
  }
);
