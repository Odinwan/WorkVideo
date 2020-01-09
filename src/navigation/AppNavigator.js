import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PropertyValue from '../screens/stepScreens/PropertyValue/PropertyValue';
import Main from '../screens/mainScreens/MainPageComponent';
import DoYouNeed from '../screens/stepScreens/DoYouNeed/DoYouNeed';
import MortrageBalance from '../screens/stepScreens/MortrageBalance/MortrageBalance';

const StepStack = createStackNavigator({
  FirstStep: {screen: DoYouNeed},
  SecondStep: {screen: MortrageBalance},
  ThirdStep: {screen: PropertyValue},
  MainPage: {screen: Main},
});

const RootNav = createSwitchNavigator(
  {
    Step: StepStack,
  },
  {
    initialRouteName: 'Step',
  },
);
export default createAppContainer(RootNav);
