import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import forgot__style from './forgot__styles';

const ForgotPass = props => {
  return (
    <>
      <SafeAreaView>
        <View style={forgot__style.wrapper}>
          <View>
            <Text style={forgot__style.title}>Forgot password</Text>
          </View>
          <TextInput
            style={forgot__style.input}
            onChangeText={() => console.log('hi')}
            asfa
          />
          <TextInput
            style={forgot__style.input}
            onChangeText={() => console.log('hi')}
            asfa
          />
          <TouchableOpacity
            style={forgot__style.buttonLog}
            onPress={() => {
              props.navigation.navigate('Main');
            }}>
            <Text style={forgot__style.textCenter}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={forgot__style.buttonSig}
            onPress={() => console.log('hi')}>
            <Text style={forgot__style.textCenter}>Sig In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={forgot__style.fogPas}
            onPress={() => console.log('hi')}>
            <Text style={forgot__style.textCenter}>forgot password</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ForgotPass;
