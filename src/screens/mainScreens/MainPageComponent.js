import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Main = props => {
  const [impovement, setImpovement] = useState(0);
  const [mortrage, setMortrage] = useState(0);
  const {youNeed, mortrageValue, propertyValue} = props.navigation.state.params;

  useEffect(() => {
    monthlyAmount();
    maximumAmount();
  });

  const monthlyAmount = () => {
    let result = (youNeed * 0.0999) / 12;
    setImpovement(result.toFixed(1));
  };

  const maximumAmount = () => {
    let percent = propertyValue * 0.8;
    const result = percent - mortrageValue;
    setMortrage(result.toFixed(0));
  };

  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 30, paddingVertical: 30}}>
        <Text>Congratulation! you have been pre-approved</Text>
        <Text>
          You are eligible for the «Canadian home improvement program» Available
          amount: up to ${mortrage} CAD
        </Text>
        {mortrage > 300000 ? (
          <Text>You can get the loan up to $300,000 CAD</Text>
        ) : null}
        <Text>${impovement} / 12 month</Text>
        <Text>
          To secure your pre-approval please provide your contact details below
          .
        </Text>

        <View style={{marginTop: 30}}>
          <View style={{flexDirection: 'row', marginLeft: 6}}>
            <Text>Name</Text>
            <Text>*</Text>
          </View>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <View style={{flexDirection: 'row', marginLeft: 6}}>
            <Text>Last Name</Text>
            <Text>*</Text>
          </View>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <View style={{flexDirection: 'row', marginLeft: 6}}>
            <Text>Phone</Text>
            <Text>*</Text>
          </View>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <View style={{flexDirection: 'row', marginLeft: 6}}>
            <Text>Email</Text>
            <Text>*</Text>
          </View>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <View style={{flexDirection: 'row', marginLeft: 6}}>
            <Text>Post Code</Text>
            <Text>*</Text>
          </View>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <View style={{flexDirection: 'row', marginLeft: 6}}>
            <Text>Referall</Text>
            <Text>*</Text>
          </View>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            marginVertical: 15,
          }}
          onPress={() => {
            console.log('hi');
          }}>
          <Text style={{textAlign: 'center', marginVertical: 5}}>
            Get started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;
