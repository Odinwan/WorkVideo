import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from '../../mainScreens/main__style';

const DoYouNeed = props => {
  const [youNeed, setYouNeed] = useState(0);
  const [needDisable, setNeedDisable] = useState(false);
  const {navigate} = props.navigation;

  useEffect(() => {
    youNeed == '' ? setNeedDisable(true) : setNeedDisable(false);
  }, [youNeed]);

  return (
    <View
      style={{
        backgroundColor: '#f0f0f0cf',
        flex: 1,
      }}>
      <SafeAreaView>
        <View
          style={{
            paddingHorizontal: 30,
            paddingTop: 130,
          }}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontWeight: '500',
                width: '60%',
                textAlign: 'center',
                fontSize: 30,
                color: 'black',
              }}>
              How much do you need
            </Text>
          </View>
          <Text
            style={{textAlign: 'center', marginVertical: 10, color: 'grey'}}>
            (approxymately)
          </Text>
          <TextInput
            keyboardType={'numeric'}
            onChangeText={text => setYouNeed(text)}
            style={[needDisable ? styles.stepInputBase : styles.stepInput]}
          />
          <TouchableOpacity
            style={[needDisable ? styles.buttonDisable : styles.buttonActive]}
            disabled={needDisable}
            onPress={() => navigate('SecondStep', {youNeed: youNeed})}>
            <Text
              style={{textAlign: 'center', marginVertical: 5, color: 'black'}}>
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DoYouNeed;
