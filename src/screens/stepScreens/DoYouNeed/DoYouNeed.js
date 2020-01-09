import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';

const DoYouNeed = props => {
  const [youNeed, setYouNeed] = useState(0);
  const [needDisable, setNeedDisable] = useState(false);
  const {navigate} = props.navigation;

  useEffect(() => {
    youNeed == '' ? setNeedDisable(true) : setNeedDisable(false);
  }, [youNeed]);

  return (
    <>
      <SafeAreaView>
        <View style={{paddingHorizontal: 30, paddingVertical: 30}}>
          <Text style={{textAlign: 'center', marginVertical: 30}}>
            How much do you need
          </Text>
          <Text style={{textAlign: 'center', marginVertical: 30}}>
            (approxymately)
          </Text>
          <TextInput
            onChangeText={text => setYouNeed(text)}
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}
          />
          <TouchableOpacity
            disabled={needDisable}
            onPress={() => navigate('SecondStep', {youNeed: youNeed})}>
            <Text style={{textAlign: 'center', marginVertical: 30}}>
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default DoYouNeed;
