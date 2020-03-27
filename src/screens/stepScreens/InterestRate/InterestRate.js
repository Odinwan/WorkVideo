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
import PropertyValue from '../PropertyValue/PropertyValue';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const InterestRate = props => {
  const [interestRate, setInterestRate] = useState(0);
  const [prevValue, setPrevValue] = useState(0);
  const [interestRateInput, setInterestRateInput] = useState(0);
  const [interestRateFocus, setInterestRateFocus] = useState(false);
  const [placeholder, setPlaceholder] = useState('Example: $50,000...');
  const [interestRateDisable, setInterestRateDisable] = useState(true);
  const [interestRateErrorText, setInterestRateErrorText] = useState('');
  const {navigate} = props.navigation;
  const {youNeed} = props.navigation.state.params;
  const focusRef = React.createRef();

  useEffect(() => {
    focusRef.current.focus();
  }, []);
  const validateInput = text => {
    let clear = text.replace(/^\.|[^\d\.]/g, '');
    setPrevValue(interestRate);
    setInterestRate(clear);
    setInterestRateInput(clear);
  };

  const numberWithCommas = x => {
    x = x.replace('%', '');
    if (prevValue < x) {
      return `${x}%`;
    } else {
      return `${x}`;
    }
  };
  const sumbit = async () => {
    if (!interestRateDisable) {
      const value = interestRate;
      navigate('ThirdStep', {youNeed: youNeed, interestRate: value});
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
                interest Rate
              </Text>
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <TextInput
                ref={focusRef}
                keyboardType={'numeric'}
                value={interestRateInput && numberWithCommas(interestRateInput)}
                placeholder={placeholder}
                onSubmitEditing={async () => sumbit()}
                onFocus={() => {
                  setPlaceholder('');
                }}
                onBlur={() => {
                  setPlaceholder('Example: % 10...');
                }}
                onChangeText={text => {
                  text = text.replace('%', '');
                  validateInput(text);
                  let clear = text.replace(/^\.|[^\d\.]/g, '');
                  if (clear > 20 || clear < 2) {
                    setInterestRateDisable(true);
                    setInterestRateFocus(true);
                    text < 1.99
                      ? setInterestRateErrorText(
                          'percentage cannot be lower than 1.99',
                        )
                      : setInterestRateErrorText(
                          'percentage cannot be higher than 19.99',
                        );
                  } else {
                    setInterestRateErrorText('');
                    setInterestRateDisable(false);
                    setInterestRateFocus(false);
                  }
                }}
                style={[
                  interestRateDisable ? styles.stepInputBase : styles.stepInput,
                  interestRateFocus && styles.inputStyleError,
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
                  {interestRateErrorText}
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
                  interestRateDisable
                    ? styles.buttonDisable
                    : styles.buttonActive,
                ]}
                disabled={interestRateDisable}
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
InterestRate.navigationOptions = {
  headerRight: () => <View />,
};
export default InterestRate;
