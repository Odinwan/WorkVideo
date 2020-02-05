import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './mainStyle';
import Main from './MainPageComponent';

const SuccessPage = props => {
  const {navigate} = props.navigation;
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          height: '100%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textTransform: 'uppercase',
            fontWeight: '500',
            width: Platform.OS === 'ios' ? '76%' : '81%',
            textAlign: 'center',
            fontSize: 30,
            color: 'black',
            fontFamily: 'FuturaDemic',
          }}>
          Your application has been send
        </Text>
        <Text
          style={{
            marginTop: 20,
            textTransform: 'uppercase',
            fontWeight: '500',
            width: Platform.OS === 'ios' ? '76%' : '81%',
            textAlign: 'center',
            fontSize: 15,
            color: 'black',
            fontFamily: 'FuturaDemic',
          }}>
          Thank you, we will contact you within next 24 hours
        </Text>
        <Text
          style={{
            marginTop: 20,
            textTransform: 'uppercase',
            fontWeight: '500',
            width: Platform.OS === 'ios' ? '76%' : '81%',
            textAlign: 'center',
            fontSize: 12,
            color: 'gray',
            fontFamily: 'FuturaDemic',
          }}>
          (business day only )
        </Text>

        <TouchableOpacity
          style={styles.MainButton}
          onPress={async () => {
            navigate('FirstStep');
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 5,
              textTransform: 'uppercase',
              fontWeight: 'bold',
              color: 'white',
              fontSize: 20,
              paddingHorizontal: 40,
            }}>
            Again
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

SuccessPage.navigationOptions = {
  headerRight: () => <View />,
};

export default SuccessPage;
