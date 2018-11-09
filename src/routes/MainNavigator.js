import { createStackNavigator, Header } from "react-navigation";

import { colors } from "../../assets/style/base";
import BottomTabNavigator from "./BottomTabNavigator";
import IntroScreen from "../Screens/IntroScreen/IntroScreen";

export default createStackNavigator(
  {
    Tab: BottomTabNavigator,
    Intro: IntroScreen
  },
  {
    initialRouteName: "Tab",

    //--navigationOptions for each screen:
    navigationOptions: ({ navigation }) => {
      //--first, we check which screen it is:
      let screen = navigation.state.routeName;

      //values we will modify then return:
      let tabBarVisible = true;
      let headerStyle = {};
      let headerTitle = "";
      let headerRight = "";
      headerTitleStyle = {
        color: colors.white
      };

      //For each screen:
      if (screen === "Tab") {
        const { routes, index } = navigation.state;
        let tabScreen = routes[index].routeName;

        //for each tab screen

        //InternationalNews tab screen
        if (tabScreen === "InternationalNews") {
          headerTitle = "InternationalNews";
          headerStyle = {
            backgroundColor: colors.primary
          };
        }

        //LocalNews tab screen
        if (tabScreen === "LocalNews") {
          headerTitle = "LocalNews";
          headerStyle = {
            backgroundColor: colors.primary
          };
        }
      }

      if (screen === "Intro") {
        headerTitle = "Intro";
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
