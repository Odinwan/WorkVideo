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

const MortrageValue = props => {
  const [mortrageVal, setMortrageValue] = useState(0);
  const [mortrageValInput, setMortrageValueInput] = useState(0);
  const [mortrageValueFocus, setMortrageValueFocus] = useState(false);
  const [mortrageValueErrorText, setMortrageValueErrorText] = useState('');

  const [mortrageDisable, setmortrageDisable] = useState(true);
  const [placeholder, setPlaceholder] = useState('Example: $350,000...');

  const {navigate} = props.navigation;
  const {youNeed, propertyVal} = props.navigation.state.params;

  const focusRef = React.createRef();

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const validateInput = text => {
    let textClear = text.replace(/\D+/g, '');
    setMortrageValue(textClear);
    setMortrageValueInput(textClear);
  };

  const numberWithCommas = x => {
    x = x.replace(/\D+/g, '').toString();
    let pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
    return `$ ${x}`;
  };

  const sumbit = () => {
    if (!mortrageDisable) {
      navigate('MainPage', {
        youNeed: youNeed,
        propertyVal: propertyVal,
        mortrageVal: mortrageVal,
      });
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
                  width: '100%',
                  textAlign: 'center',
                  fontSize: Platform.OS === 'ios' ? 32 : 34,
                  color: 'black',
                  fontFamily: 'FuturaDemiC',
                }}>
                What is your mortrage balance?
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
                value={mortrageValInput && numberWithCommas(mortrageValInput)}
                onSubmitEditing={() => sumbit()}
                onFocus={() => {
                  setPlaceholder('');
                }}
                onBlur={() => {
                  setPlaceholder('Example: $350,000...');
                }}
                placeholder={placeholder}
                onChangeText={text => {
                  validateInput(text);
                  text = text.replace(/\D+/g, '').toString();

                  if (text > 4000000 || text == '') {
                    setmortrageDisable(true);
                    setMortrageValueFocus(true);
                    text == ''
                      ? setMortrageValueErrorText('enter amount')
                      : setMortrageValueErrorText(
                          'allowable amount is $ 4,000,000',
                        );
                  } else {
                    setMortrageValueErrorText('');
                    setmortrageDisable(false);
                    setMortrageValueFocus(false);
                  }
                }}
                style={[
                  mortrageDisable ? styles.stepInputBase : styles.stepInput,
                  mortrageValueFocus && styles.inputStyleError,
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
                  {mortrageValueErrorText}
                </Text>
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: Platform.OS === 'ios' ? 150 : 100,
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={[
                  mortrageDisable ? styles.buttonDisable : styles.buttonActive,
                ]}
                disabled={mortrageDisable}
                onPress={() => sumbit()}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginVertical: 5,
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 20,
                  }}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

MortrageValue.navigationOptions = {
  headerRight: () => <View />,
};

export default MortrageValue;
