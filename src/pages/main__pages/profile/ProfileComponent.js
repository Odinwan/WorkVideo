import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Profile__style from './profile_styles';

const Profile = props => {
  return (
    <>
      <SafeAreaView>
        <View style={Profile__style.wrapper}>
          <View>
            <Text style={Profile__style.title}>Profile</Text>
          </View>
          <TouchableOpacity
            style={Profile__style.buttonLog}
            onPress={() => {
              props.navigation.navigate('Auth');
            }}>
            <Text style={Profile__style.textCenter}>home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile;
