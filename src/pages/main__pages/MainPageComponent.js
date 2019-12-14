import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

const Main = props => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 50,
          paddingVertical: 150,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{fontSize: 20}}>Main</Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 20,
          }}
          onPress={() => {
            props.navigation.navigate('Auth');
          }}>
          <Text>home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;
