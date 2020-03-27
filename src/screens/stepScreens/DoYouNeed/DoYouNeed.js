import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import styles from '../../mainScreens/mainStyle';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const DoYouNeed = props => {
  const [youNeed, setYouNeed] = useState(0);
  const [youNeedInput, setYouNeedInput] = useState(0);
  const [youNeedFocus, setYouNeedFocus] = useState(false);
  const [placeholder, setPlaceholder] = useState('Example: $50,000...');
  const [needDisable, setNeedDisable] = useState(true);
  const [needErrorText, setNeedErrorText] = useState('');
  const {navigate} = props.navigation;

  const focusRef = React.createRef();

  useEffect(() => {
    focusRef.current.focus();
  }, []);
  const validateInput = text => {
    let textClear = text.replace(/\D+/g, '');
    setYouNeed(textClear);
    setYouNeedInput(textClear);
  };

  const numberWithCommas = x => {
    x = x.replace(/\D+/g, '').toString();
    let pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) {
      x = x.replace(pattern, '$1,$2');
    }
    return `$ ${x}`;
  };
  const sumbit = async () => {
    if (!needDisable) {
      const value = youNeed;
      navigate('SecondStep', {youNeed: value});
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View
            style={{
              paddingTop: 60,
              height: height,
              width: width,
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
                  width: '80%',
                  textAlign: 'center',
                  fontSize: Platform.OS === 'ios' ? 32 : 36,
                  color: 'black',
                  fontFamily: 'FuturaDemiC',
                }}>
                How much do you need?
              </Text>
            </View>
            <Text
              style={{
                textAlign: 'center',
                color: 'grey',
                fontFamily: 'FuturaDemiC',
              }}>
              (approximately)
            </Text>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <TextInput
                ref={focusRef}
                keyboardType={'numeric'}
                value={youNeedInput && numberWithCommas(youNeedInput)}
                placeholder={placeholder}
                onSubmitEditing={async () => sumbit()}
                onFocus={() => {
                  setPlaceholder('');
                }}
                onBlur={() => {
                  setPlaceholder('Example: $50,000...');
                }}
                onChangeText={text => {
                  validateInput(text);
                  text = text.replace(/\D+/g, '').toString();

                  if (text > 700000 || text == '') {
                    setNeedDisable(true);
                    setYouNeedFocus(true);
                    text == ''
                      ? setNeedErrorText('enter amount')
                      : setNeedErrorText('allowable amount is $ 700,000');
                  } else {
                    setNeedErrorText('');
                    setNeedDisable(false);
                    setYouNeedFocus(false);
                  }
                }}
                style={[
                  needDisable ? styles.stepInputBase : styles.stepInput,
                  youNeedFocus && styles.inputStyleError,
                ]}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: -22,
                  right: 38,
                  textAlign: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    width: '100%',
                    color: 'red',
                    fontFamily: 'FuturaDemiC',
                  }}>
                  {needErrorText}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 40,
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={[
                  needDisable ? styles.buttonDisable : styles.buttonActive,
                ]}
                disabled={needDisable}
                onPress={async () => sumbit()}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginVertical: 5,
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 20,
                  }}>
                  Get started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default DoYouNeed;
