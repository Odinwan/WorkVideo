import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LogIn from '../pages/auth__pages/log__in/LogInComponents';
import Main from '../pages/main__pages/MainPageComponent';
import Profile from '../pages/main__pages/profile/ProfileComponent';
import ForgotPass from '../pages/auth__pages/fog__pass/ForgotPassComponents';
import SigIn from '../pages/auth__pages/sig__in/SigInComponents';

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
