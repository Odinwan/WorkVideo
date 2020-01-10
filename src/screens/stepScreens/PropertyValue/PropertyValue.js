import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from '../../mainScreens/main__style';

const MortrageBalance = props => {
  const [mortrageValue, setMortrageValue] = useState(0);
  const [mortrageDisable, setmortrageDisable] = useState(false);
  const {navigate} = props.navigation;
  const {youNeed, propertyValue} = props.navigation.state.params;

  useEffect(() => {
    mortrageValue == '' ? setmortrageDisable(true) : setmortrageDisable(false);
  }, [mortrageValue]);

  return (
    <View
      style={{
        backgroundColor: '#f0f0f0cf',
        flex: 1,
      }}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 30, paddingTop: 130}}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontWeight: '500',
                width: '90%',
                textAlign: 'center',
                fontSize: 30,
                color: 'black',
              }}>
              Whats is your property value
            </Text>
          </View>

          <Text
            style={{textAlign: 'center', marginVertical: 10, color: 'grey'}}>
            (approxymately)
          </Text>
          <TextInput
            keyboardType={'numeric'}
            onChangeText={text => setMortrageValue(text)}
            style={[mortrageDisable ? styles.stepInputBase : styles.stepInput]}
          />
          <TouchableOpacity
            style={[
              mortrageDisable ? styles.buttonDisable : styles.buttonActive,
            ]}
            disabled={mortrageDisable}
            onPress={() =>
              navigate('MainPage', {
                youNeed: youNeed,
                mortrageValue: mortrageValue,
                propertyValue: propertyValue,
              })
            }>
            <Text style={{textAlign: 'center', marginVertical: 5}}>
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MortrageBalance;
