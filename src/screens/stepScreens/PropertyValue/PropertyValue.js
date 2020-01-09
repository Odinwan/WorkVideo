import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';

const MortrageBalance = props => {
  const [mortrageValue, setMortrageValue] = useState(0);
  const [mortrageDisable, setmortrageDisable] = useState(false);
  const {navigate} = props.navigation;
  const {youNeed, propertyValue} = props.navigation.state.params;

  useEffect(() => {
    mortrageValue == '' ? setmortrageDisable(true) : setmortrageDisable(false);
  }, [mortrageValue]);

  return (
    <>
      <SafeAreaView>
        <View style={{paddingHorizontal: 30, paddingVertical: 30}}>
          <Text style={{textAlign: 'center', marginVertical: 30}}>
            Whats is your property value
          </Text>
          <Text style={{textAlign: 'center', marginVertical: 30}}>
            (approxymately)
          </Text>
          <TextInput
            onChangeText={text => setMortrageValue(text)}
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}
          />
          <TouchableOpacity
            disabled={mortrageDisable}
            onPress={() =>
              navigate('MainPage', {
                youNeed: youNeed,
                mortrageValue: mortrageValue,
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

export default MortrageBalance;
