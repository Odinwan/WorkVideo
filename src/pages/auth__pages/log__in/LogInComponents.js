import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import LogInStyle from './login__styles';

const LogIn = props => {
  return (
    <>
      <SafeAreaView>
        <View style={LogInStyle.wrapper}>
          <View>
            <Text style={LogInStyle.title}>Login</Text>
          </View>
          <TextInput
            style={LogInStyle.input}
            onChangeText={() => console.log('hi')}
            asfa
          />
          <TextInput
            style={LogInStyle.input}
            onChangeText={() => console.log('hi')}
            asfa
          />
          <TouchableOpacity
            style={LogInStyle.buttonLog}
            onPress={() => {
              props.navigation.navigate('Main');
            }}>
            <Text style={LogInStyle.textCenter}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={LogInStyle.buttonSig}
            onPress={() => {
              props.navigation.navigate('SigInPage');
            }}>
            <Text style={LogInStyle.textCenter}>Sig In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={LogInStyle.fogPas}
            onPress={() => {
              props.navigation.navigate('ForgotPassPage');
            }}>
            <Text style={LogInStyle.textCenter}>forgot password</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LogIn;
