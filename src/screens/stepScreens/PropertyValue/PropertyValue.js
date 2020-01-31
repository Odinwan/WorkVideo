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

const PropertyValue = props => {
  const [propertyVal, setPropertyValue] = useState(0);
  const [propertyValInput, setPropertyValueInput] = useState(0);
  const [propertyValueFocus, setPropertyValueFocus] = useState(false);
  const [propertyValueErrorText, setPropertyValueErrorText] = useState('');

  const [propertyDisable, setPropertyDisable] = useState(true);
  const {navigate} = props.navigation;
  const {youNeed} = props.navigation.state.params;
  const [placeholder, setPlaceholder] = useState('Example: $750,000...');

  const focusRef = React.createRef();

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const validateInput = text => {
    let textClear = text.replace(/\D+/g, '');
    setPropertyValue(textClear);
    setPropertyValueInput(textClear);
  };

  const numberWithCommas = x => {
    x = x.replace(/\D+/g, '').toString();
    let pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
    return `$ ${x}`;
  };

  const sumbit = () => {
    if (!propertyDisable) {
      navigate('ThirdStep', {
        youNeed: youNeed,
        propertyVal: propertyVal,
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
                  width: '90%',
                  textAlign: 'center',
                  fontSize: Platform.OS === 'ios' ? 32 : 36,
                  color: 'black',
                  fontFamily: 'FuturaDemiC',
                }}>
                Whats is your property value?
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
                value={propertyValInput && numberWithCommas(propertyValInput)}
                onFocus={() => {
                  setPlaceholder('');
                }}
                onBlur={() => {
                  setPlaceholder('Example: $750,000...');
                }}
                placeholder={placeholder}
                onSubmitEditing={() => sumbit()}
                onChangeText={text => {
                  validateInput(text);
                  text = text.replace(/\D+/g, '').toString();

                  if (text > 4000000 || text == '') {
                    setPropertyDisable(true);
                    setPropertyValueFocus(true);
                    text == ''
                      ? setPropertyValueErrorText('enter amount')
                      : setPropertyValueErrorText(
                          'allowable amount is $ 4000000',
                        );
                  } else {
                    setPropertyValueErrorText('');
                    setPropertyDisable(false);
                    setPropertyValueFocus(false);
                  }
                }}
                style={[
                  propertyDisable ? styles.stepInputBase : styles.stepInput,
                  propertyValueFocus && styles.inputStyleError,
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
                  {propertyValueErrorText}
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
                  propertyDisable ? styles.buttonDisable : styles.buttonActive,
                ]}
                disabled={propertyDisable}
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

PropertyValue.navigationOptions = {
  headerRight: () => <View />,
};

export default PropertyValue;
