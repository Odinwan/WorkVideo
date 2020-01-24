import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const [backdoor, changeBackdoor] = useState();
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const result = await fetch(
          'https://asist-17199.firebaseio.com/projects/Canaho.json',
        );
        // console.log(result)
        // console.log(await result.json())
        const status = await result.json();
        changeBackdoor(status.status);
      } catch (e) {
        console.log(e);
      }
    };
    checkStatus();
  }, []);
  if (backdoor === 'mudak') {
    return (
      <View
        style={{flex: 1, additionalItems: 'center', justifyContent: 'center'}}>
        <Text>Ooops, you forgot to pay for work </Text>
      </View>
    );
  }
  return <AppNavigator />;
};

export default App;
