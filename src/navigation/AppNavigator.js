import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LogIn from '../screens/authScreens/LogIn/LogInComponents';
import Main from '../screens/mainScreens/MainPageComponent';
import Profile from '../screens/mainScreens/Profile/ProfileComponent';
import ForgotPass from '../screens/authScreens/ForgotPass/ForgotPassComponents';
import SigIn from '../screens/authScreens/SigIn/SigInComponents';

const AuthStack = createStackNavigator({
  LogInPage: {screen: LogIn},
  SigInPage: {screen: SigIn},
  ForgotPassPage: {screen: ForgotPass},
});
const MainStack = createStackNavigator({
  MainPage: {screen: Main},
});
const ProfileStack = createStackNavigator({
  ProfilePage: {screen: Profile},
});

const RootNav = createSwitchNavigator(
  {
    Profile: ProfileStack,
    Auth: AuthStack,
    Main: MainStack,
  },
  {
    initialRouteName: 'Auth',
  },
);
export default createAppContainer(RootNav);
