import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './main__style';

const Main = props => {
  const [impovement, setImpovement] = useState(0);
  const [mortrage, setMortrage] = useState(0);
  const {youNeed, mortrageValue, propertyValue} = props.navigation.state.params;

  const [nameForm, setNameForm] = useState('');
  const [lastNameForm, setLastNameForm] = useState('');
  const [phoneForm, setPhoneForm] = useState('');
  const [emailForm, setEmailForm] = useState('');
  const [postCodeForm, setPostCodeForm] = useState('');
  const [referallForm, setReferallForm] = useState('');

  const [nameFormValid, setNameFormValid] = useState(false);
  const [lastNameFormValid, setLastNameFormValid] = useState(false);
  const [phoneFormValid, setPhoneFormValid] = useState(false);
  const [emailFormValid, setEmailFormValid] = useState(false);

  const [nameFormFocus, setNameFormFocus] = useState(false);
  const [lastNameFormFocus, setLastNameFormFocus] = useState(false);
  const [phoneFormFocus, setPhoneFormFocus] = useState(false);
  const [emailFormFocus, setEmailFormFocus] = useState(false);

  const [formValid, setFormValid] = useState(false);
  const [errorValid, setErrorValid] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  useEffect(() => {
    monthlyAmount();
    maximumAmount();
  });

  useEffect(() => {
    emailFormFocus && validate(emailForm);
    nameForm.length != 0 ? setNameFormValid(true) : setNameFormValid(false);
    lastNameForm.length != 0
      ? setLastNameFormValid(true)
      : setLastNameFormValid(false);
    phoneForm.length != 0 ? setPhoneFormValid(true) : setPhoneFormValid(false);
    emailForm.length != 0 && errorEmail === ''
      ? setEmailFormValid(true)
      : setEmailFormValid(false);

    if (
      nameFormValid &&
      lastNameFormValid &&
      phoneFormValid &&
      emailFormValid
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [
    nameForm,
    lastNameForm,
    phoneForm,
    emailForm,
    nameFormValid,
    lastNameFormValid,
    phoneFormValid,
    emailFormValid,
    errorEmail,
    emailForm,
    errorValid,
  ]);

  const monthlyAmount = () => {
    let result = (youNeed * 0.0999) / 12;
    setImpovement(result.toFixed(1));
  };

  const maximumAmount = () => {
    let percent = propertyValue * 0.8;
    const result = percent - mortrageValue;
    setMortrage(result.toFixed(0));
  };

  const validate = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      setErrorEmail('Email is Not Correct');
    } else {
      setErrorEmail('');
    }
  };
  const errorValidation = () => {
    setErrorValid('Enter required fields');
  };
  const api = () => {
    setNameFormFocus(true);
    setLastNameFormFocus(true);
    setPhoneFormFocus(true);
    setEmailFormFocus(true);
    validate(emailForm);
    formValid
      ? (console.log(
          nameForm,
          lastNameForm,
          phoneForm,
          emailForm,
          postCodeForm,
          referallForm,
        ),
        setErrorValid(''))
      : errorValidation();
  };
  nameFormFocus && nameForm.length !== 0 ? styles.Input : styles.InputBase,
    nameFormFocus && !nameFormValid && styles.inputStyleError,
    console.log('nameFormFocus', nameFormFocus);
  console.log('nameForm.length', nameForm.length);
  console.log('nameFormFocus', nameFormFocus);
  console.log('!nameFormValid', !nameFormValid);
  console.log('____________________');

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.container}
      scrollEnabled={false}>
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={{paddingHorizontal: 30, paddingVertical: 30}}>
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
                Congratulation! you have been pre-approved
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: '500',
                  width: '90%',
                  textAlign: 'center',
                  fontSize: 15,
                  color: 'black',
                }}>
                You are eligible for the «Canadian home improvement program»
                Available amount: up to{' '}
                <Text style={{color: 'green'}}>${mortrage}</Text> CAD
              </Text>
            </View>
            {mortrage > 300000 ? (
              <View
                style={{
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    marginTop: 20,
                    fontWeight: '500',
                    width: '90%',
                    textAlign: 'center',
                    fontSize: 13,
                    color: 'grey',
                  }}>
                  You can get the loan up to{' '}
                  <Text style={{color: 'green'}}>$300,000</Text> CAD
                </Text>
              </View>
            ) : null}
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: 'green',
                  backgroundColor: '#defff3',
                  paddingVertical: 20,
                  marginTop: 20,
                  fontWeight: '500',
                  width: '90%',
                  textAlign: 'center',
                  fontSize: 15,
                }}>
                ${impovement} / 12 month
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: '500',
                  width: '90%',
                  textAlign: 'center',
                  fontSize: 13,
                  color: 'black',
                }}>
                To secure your pre-approval please provide your contact details
                below .
              </Text>
            </View>

            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text>Name</Text>
                <Text
                  style={[
                    nameFormFocus && !nameFormValid
                      ? styles.redText
                      : styles.blackText,
                  ]}>
                  *
                </Text>
              </View>
              <TextInput
                onChangeText={text => {
                  setNameForm(text);
                  setNameFormFocus(true);
                }}
                value={nameForm}
                style={[
                  nameFormFocus && nameForm.length !== 0
                    ? styles.Input
                    : styles.InputBase,
                  nameFormFocus && !nameFormValid && styles.inputStyleError,
                ]}
              />
            </View>
            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text>Last Name</Text>
                <Text
                  style={[
                    lastNameFormFocus && !lastNameFormValid
                      ? styles.redText
                      : styles.blackText,
                  ]}>
                  *
                </Text>
              </View>
              <TextInput
                onChangeText={text => {
                  setLastNameForm(text);
                  setLastNameFormFocus(true);
                }}
                value={lastNameForm}
                style={[
                  lastNameFormFocus && lastNameForm.length !== 0
                    ? styles.Input
                    : styles.InputBase,
                  lastNameFormFocus &&
                    !lastNameFormValid &&
                    styles.inputStyleError,
                ]}
              />
            </View>
            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text>Phone</Text>
                <Text
                  style={[
                    phoneFormFocus && !phoneFormValid
                      ? styles.redText
                      : styles.blackText,
                  ]}>
                  *
                </Text>
              </View>
              <TextInput
                keyboardType={'numeric'}
                onChangeText={text => {
                  setPhoneForm(text);
                  setPhoneFormFocus(true);
                }}
                value={phoneForm}
                style={[
                  phoneFormFocus && phoneForm.length !== 0
                    ? styles.Input
                    : styles.InputBase,
                  phoneFormFocus && !phoneFormValid && styles.inputStyleError,
                ]}
              />
            </View>
            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text>Email</Text>
                <Text
                  style={[
                    emailFormFocus && !emailFormValid
                      ? styles.redText
                      : styles.blackText,
                  ]}>
                  * {errorEmail}
                </Text>
              </View>
              <TextInput
                onChangeText={text => {
                  setEmailForm(text);
                  setEmailFormFocus(true);
                }}
                value={emailForm}
                style={[
                  emailFormFocus && emailForm.length !== 0
                    ? styles.Input
                    : styles.InputBase,
                  emailFormFocus && !emailFormValid && styles.inputStyleError,
                ]}
              />
            </View>
            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text>Post Code</Text>
              </View>
              <TextInput
                onChangeText={text => setPostCodeForm(text)}
                value={postCodeForm}
                style={[
                  styles.inputStyle,
                  postCodeForm != '' ? styles.Input : styles.InputBase,
                ]}
              />
            </View>
            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text>Referall</Text>
              </View>
              <TextInput
                onChangeText={text => setReferallForm(text)}
                value={referallForm}
                style={[
                  styles.inputStyle,
                  referallForm != '' ? styles.Input : styles.InputBase,
                ]}
              />
            </View>
            <TouchableOpacity style={styles.buttonActive} onPress={api}>
              <Text style={{textAlign: 'center', marginVertical: 5}}>
                Get started
              </Text>
            </TouchableOpacity>
            {errorValid != '' && (
              <Text
                style={{color: 'red', textAlign: 'center', marginVertical: 5}}>
                {errorValid}
              </Text>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Main;
