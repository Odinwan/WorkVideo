import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PropertyValue from '../screens/stepScreens/PropertyValue/PropertyValue';
import Main from '../screens/mainScreens/MainPageComponent';
import DoYouNeed from '../screens/stepScreens/DoYouNeed/DoYouNeed';
import MortrageBalance from '../screens/stepScreens/MortrageBalance/MortrageBalance';
import SuccessPage from '../screens/mainScreens/SuccessPage';
import logo from '../../../WorkVideo/assets/images/logo.png';
import {Image, View, StatusBar} from 'react-native';
import InterestRate from '../screens/stepScreens/InterestRate/InterestRate';

const navigationOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#1aa037',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  headerTitleContainerStyle: {
    justifyContent: 'center',
  },
  headerTitleStyle: {
    justifyContent: 'center',
  },
  headerTitle: () => (
    <>
      <StatusBar backgroundColor={'#007002'} barStyle="light-content" />
      <View>
        <View style={{}}>
          <Image
            source={logo}
            style={{
              height: 40,
              width: 140,
            }}
          />
        </View>
      </View>
    </>
  ),
  headerLayoutPreset: 'center',
};

const StepStack = createStackNavigator({
  FirstStep: {screen: DoYouNeed, navigationOptions},
  SecondStep: {screen: InterestRate, navigationOptions},
  ThirdStep: {screen: PropertyValue, navigationOptions},
  FourStep: {screen: MortrageBalance, navigationOptions},
  MainPage: {screen: Main, navigationOptions},
});

const SuccessStack = createStackNavigator({
  Success: {screen: SuccessPage, navigationOptions},
});

const RootNav = createSwitchNavigator(
  {
    Step: StepStack,
    Succes: SuccessStack,
  },
  {
    initialRouteName: 'Step',
  },
);

export default createAppContainer(RootNav);
