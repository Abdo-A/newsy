import { createMaterialTopTabNavigator } from 'react-navigation';
import { Text } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import { colors } from '../../assets/style/base';
import InternationalNewsScreen from '../Screens/InternationalNewsScreen/InternationalNewsScreen';
import LocalNewsScreen from '../Screens/LocalNewsScreen/LocalNewsScreen';

export default createMaterialTopTabNavigator(
  {
    InternationalNews: {
      screen: InternationalNewsScreen,
      //--specific navigationOptions for each tab
      navigationOptions: {
        tabBarLabel: 'International',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcon name="earth" size={30} color={tintColor} />
        )
      }
    },
    LocalNews: {
      screen: LocalNewsScreen,
      navigationOptions: {
        tabBarLabel: 'Local',
        tabBarIcon: ({ tintColor }) => (
          <Ionicon name="ios-flag" size={35} color={tintColor} />
        )
      }
    }
  },
  {
    //--routes config
    initialRouteName: 'InternationalNews',
    order: ['InternationalNews', 'LocalNews'],
    tabBarPosition: 'bottom',

    tabBarOptions: {
      showIcon: true,
      upperCaseLabel: true,
      activeTintColor: colors.primary.toString(),
      inactiveTintColor: colors.black.toString(),
      style: {
        height: 65,
        backgroundColor: colors.white.darken(0.05),
        borderTopWidth: 0.5,
        borderTopColor: colors.primary
      },
      iconStyle: {
        width: 35,
        height: 30,
        marginBottom: -5
      },
      indicatorStyle: {
        backgroundColor: colors.secondary
      }
    }
  }
);
