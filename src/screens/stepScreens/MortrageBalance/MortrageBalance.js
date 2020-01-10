import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from '../../mainScreens/main__style';

const PropertyValue = props => {
  const [propertyValue, setPropertyValue] = useState(0);
  const [propertyDisable, setPropertyDisable] = useState(false);
  const {navigate} = props.navigation;
  const {youNeed} = props.navigation.state.params;

  useEffect(() => {
    propertyValue == '' ? setPropertyDisable(true) : setPropertyDisable(false);
  }, [propertyValue]);

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
              What is your mortrage balance
            </Text>
          </View>

          <Text
            style={{textAlign: 'center', marginVertical: 10, color: 'grey'}}>
            (approxymately)
          </Text>
          <TextInput
            keyboardType={'numeric'}
            onChangeText={text => setPropertyValue(text)}
            style={[propertyDisable ? styles.stepInputBase : styles.stepInput]}
          />
          <TouchableOpacity
            style={[
              propertyDisable ? styles.buttonDisable : styles.buttonActive,
            ]}
            disabled={propertyDisable}
            onPress={() =>
              navigate('ThirdStep', {
                youNeed: youNeed,
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

export default PropertyValue;
