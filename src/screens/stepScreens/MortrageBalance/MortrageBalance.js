import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';

const PropertyValue = props => {
  const [propertyValue, setPropertyValue] = useState(0);
  const [propertyDisable, setPropertyDisable] = useState(false);
  const {navigate} = props.navigation;
  const {youNeed} = props.navigation.state.params;

  useEffect(() => {
    propertyValue == '' ? setPropertyDisable(true) : setPropertyDisable(false);
  }, [propertyValue]);

  return (
    <>
      <SafeAreaView>
        <View style={{paddingHorizontal: 30, paddingVertical: 30}}>
          <Text style={{textAlign: 'center', marginVertical: 30}}>
            What is your mortrage balance
          </Text>
          <Text style={{textAlign: 'center', marginVertical: 30}}>
            (approxymately)
          </Text>
          <TextInput
            onChangeText={text => setPropertyValue(text)}
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}
          />
          <TouchableOpacity
            disabled={propertyDisable}
            onPress={() =>
              navigate('ThirdStep', {
                youNeed: youNeed,
                propertyValue: propertyValue,
              })
            }>
            <Text style={{textAlign: 'center', marginVertical: 30}}>
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default PropertyValue;
