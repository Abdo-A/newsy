import { createStackNavigator } from 'react-navigation';
import { Text, TouchableOpacity, View } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { colors, fontTypes, gaps } from '../../assets/style/base';
import BottomTabNavigator from './BottomTabNavigator';
import IntroScreen from '../Screens/IntroScreen/IntroScreen';
import SearchScreen from '../Screens/SearchScreen.js/SearchScreen';

export default createStackNavigator(
  {
    Tab: BottomTabNavigator,
    Intro: IntroScreen,
    Search: SearchScreen
  },
  {
    initialRouteName: 'Intro',

    //--navigationOptions for each screen:
    navigationOptions: ({ navigation }) => {
      //--first, we check which screen it is:
      let screen = navigation.state.routeName;

      //values we will modify then return:
      let tabBarVisible = true;
      let headerStyle = { backgroundColor: colors.primary };
      let headerTitle = '';
      let headerRight = '';
      headerTitleStyle = {};

      //For each screen:
      if (screen === 'Tab') {
        const { routes, index } = navigation.state;
        let tabScreen = routes[index].routeName;

        //for each tab screen

        //InternationalNews tab screen
        if (tabScreen === 'InternationalNews') {
          headerTitle = (
            <Text
              style={{
                fontFamily: fontTypes.spicy,
                marginLeft: gaps.md,
                fontSize: 30,
                color: colors.white,
                textAlign: 'center'
              }}
            >
              International News
            </Text>
          );
          headerRight = (
            <TouchableOpacity
              onPress={() => navigation.push('Search')}
              style={{ marginRight: 10 }}
            >
              <EntypoIcon
                name="magnifying-glass"
                size={30}
                color={colors.white.toString()}
              />
            </TouchableOpacity>
          );
        }

        //LocalNews tab screen
        if (tabScreen === 'LocalNews') {
          headerTitle = (
            <Text
              style={{
                fontFamily: fontTypes.spicy,
                marginLeft: gaps.md,
                fontSize: 30,
                color: colors.white,
                textAlign: 'center'
              }}
            >
              Local News
            </Text>
          );

          headerRight = (
            <TouchableOpacity
              onPress={() => navigation.push('Search')}
              style={{ marginRight: 10 }}
            >
              <EntypoIcon
                name="magnifying-glass"
                size={30}
                color={colors.white.toString()}
              />
            </TouchableOpacity>
          );
        }
      }

      if (screen === 'Intro') {
        headerStyle = {
          display: 'none'
        };
      }

      if (screen === 'Search') {
        headerTitle = (
          <View>
            <Text
              style={{
                fontFamily: fontTypes.spicy,
                marginLeft: gaps.md,
                fontSize: 28,
                color: colors.white,
                textAlign: 'center'
              }}
            >
              Search By Yourself 💩
            </Text>
          </View>
        );
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
