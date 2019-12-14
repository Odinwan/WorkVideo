import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import sigin__style from './sigin__styles';

const SigIn = props => {
  return (
    <>
      <SafeAreaView>
        <View style={sigin__style.wrapper}>
          <View>
            <Text style={sigin__style.title}>Sig in</Text>
          </View>
          <TextInput
            style={sigin__style.input}
            onChangeText={() => console.log('hi')}
            asfa
          />
          <TextInput
            style={sigin__style.input}
            onChangeText={() => console.log('hi')}
            asfa
          />
          <TouchableOpacity
            style={sigin__style.fogPas}
            onPress={() => console.log('hi')}>
            <Text style={sigin__style.textCenter}>Sig in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={sigin__style.fogPas}
            onPress={() => {
              props.navigation.navigate('LogInPage');
            }}>
            <Text style={sigin__style.textCenter}>home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SigIn;
