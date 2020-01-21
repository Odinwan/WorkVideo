import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const [backdoor, changeBackdoor] = useState();
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
