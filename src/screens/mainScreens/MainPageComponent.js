import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  View,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './mainStyle';

const Main = props => {
  console.log('props', props);
  const [impovement, setImpovement] = useState(0);
  const [mortrage, setMortrage] = useState(0);
  const [mortrageValue, setMortrageValue] = useState(0);
  const {youNeed, mortrageVal, propertyVal} = props.navigation.state.params;

  const [nameForm, setNameForm] = useState('');
  const [lastNameForm, setLastNameForm] = useState('');
  const [phoneForm, setPhoneForm] = useState('');
  const [emailForm, setEmailForm] = useState('');
  const [postCodeForm, setPostCodeForm] = useState('');
  const [refferalForm, setRefferalForm] = useState('');

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
  const [loader, setLoaderValue] = useState(false);

  const {navigate} = props.navigation;

  useEffect(() => {
    console.log('props', props);
  }, []);

  useEffect(() => {
    console.log(mortrage);
    if (mortrage < 1000) {
      setMortrageValue(1000);
    } else if (mortrage > 300000) {
      setMortrageValue(300000);
    } else {
      setMortrageValue(mortrage);
    }
    console.log('youNeed', youNeed);
    console.log('mortrage', mortrage);
  }, [mortrage, youNeed]);

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
    phoneForm.length >= 11 ? setPhoneFormValid(true) : setPhoneFormValid(false);
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

  const validatedInputs = (text, type) => {
    let numreg = /^[0-9]+$/;
    if (type == 'phone') {
      if (text.length > 1) {
        if (numreg.test(text) && text != '') {
          setPhoneForm(text);
          setPhoneFormFocus(true);
        }
      } else {
        setPhoneForm(text);
      }
    }
  };

  const monthlyAmount = () => {
    let result = (youNeed * 0.0999) / 12;
    setImpovement(result.toFixed(1));
  };

  const maximumAmount = () => {
    let percent = propertyVal * 0.8;
    const result = percent - mortrageVal;
    setMortrage(result.toFixed(0));
  };

  const validate = text => {
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
  const numberWithCommas = x => {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
    return x;
  };
  const submit = async () => {
    setLoaderValue(true);
    await fetch('https://homemortgageadvice.ca/mform/', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        annual_household_income: youNeed,
        existing_mortgage_amount: mortrageVal,
        property_value: propertyVal,
        lastname: lastNameForm,
        firstname: nameForm,
        phonenumber: phoneForm,
        email_address: emailForm,
        postal_code: postCodeForm,
        referral: refferalForm,
      }),
    })
      .then(function(res) {
        console.log('nice', res);
      })
      .catch(function(res) {
        console.log('error');
      });
    navigate('Success');
    setLoaderValue(false);
  };

  const api = () => {
    setNameFormFocus(true);
    setLastNameFormFocus(true);
    setPhoneFormFocus(true);
    setEmailFormFocus(true);
    validate(emailForm);
    formValid ? (setErrorValid(''), submit()) : errorValidation();
  };

  const NameRef = React.createRef();
  const LastNameRef = React.createRef();
  const PhoneRef = React.createRef();
  const EmailRef = React.createRef();
  const CodeRef = React.createRef();
  const RefferalReff = React.createRef();

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.container}
      scrollEnabled={false}>
      <SafeAreaView style={{position: 'relative'}}>
        {loader && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1000,
              backgroundColor: '#00000059',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        )}
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
                  width: Platform.OS === 'ios' ? '90%' : '100%',
                  textAlign: 'center',
                  fontSize: 25,
                  color: 'black',
                  fontFamily: 'FuturaDemic',
                }}>
                {mortrage < 0
                  ? `Sorry, You can not be pre-approved  this moment.`
                  : `Congratulation! you have been pre-approved`}
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontWeight: '500',
                  width: Platform.OS === 'ios' ? '90%' : '100%',
                  textAlign: 'center',
                  fontSize: 25,
                  color: 'green',
                  fontFamily: 'FuturaDemic',
                }}>
                {youNeed && `$ ${numberWithCommas(youNeed)}`}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
              }}>
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
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontSize: 20,
                    fontFamily: 'FuturaDemic',
                    color: 'grey',
                  }}>
                  {mortrage < 0
                    ? `To explore other options leave your information and we will contact you`
                    : `You are eligible for the «Canadian home improvement program»`}
                </Text>
              </View>
              {mortrage > 0 ? (
                <View
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontWeight: '500',
                      width: '100%',
                      textAlign: 'center',
                      fontSize: 20,
                      fontFamily: 'FuturaDemic',
                      color: 'grey',
                    }}>
                    Available amount: up to{' '}
                    <Text style={{color: 'green'}}>
                      ${numberWithCommas(mortrageValue)}
                    </Text>{' '}
                    CAD
                  </Text>
                </View>
              ) : null}
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
                  <Text style={{color: 'green'}}>$700,000</Text> CAD
                </Text>
              </View>
            ) : null}
            <Text />
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  marginTop: 40,
                  fontWeight: '500',
                  width: '90%',
                  textAlign: 'center',
                  fontSize: 20,
                  fontFamily: 'FuturaDemic',
                  color: 'black',
                  textTransform: 'uppercase',
                }}>
                average monthly payment
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: '#defff3',
                  paddingVertical: 5,
                  marginTop: 20,
                  width: '90%',
                }}>
                <View>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: '#21a33e',
                      fontSize: 35,
                      fontFamily: 'FuturaDemic',
                    }}>
                    ${numberWithCommas(impovement)}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      marginTop: -10,
                      textAlign: 'center',
                      marginLeft: 50,
                      fontSize: 18,
                      fontWeight: '600',
                      color: '#21a33e',
                      fontFamily: 'FuturaDemic',
                    }}>
                    / month
                  </Text>
                </View>
              </View>
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
                  fontSize: 20,
                  color: 'black',
                  fontFamily: 'FuturaDemic',
                }}>
                To secure your pre-approval please provide your contact details
                below
              </Text>
            </View>

            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text style={{fontFamily: 'FuturaDemic'}}>Name</Text>
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
                ref={NameRef}
                onSubmitEditing={() => LastNameRef.current.focus()}
                onChangeText={text => {
                  setNameForm(text);
                  setNameFormFocus(true);
                }}
                value={nameForm}
                style={[
                  nameFormFocus && nameForm.length !== 0
                    ? styles.Input
                    : styles.InputBase,
                  nameFormFocus && !nameFormValid && styles.inputStyleErrorMain,
                ]}
              />
            </View>
            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text style={{fontFamily: 'FuturaDemic'}}>Last Name</Text>
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
                ref={LastNameRef}
                onSubmitEditing={() => PhoneRef.current.focus()}
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
                    styles.inputStyleErrorMain,
                ]}
              />
            </View>
            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text style={{fontFamily: 'FuturaDemic'}}>Phone</Text>
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
                ref={PhoneRef}
                onSubmitEditing={() => EmailRef.current.focus()}
                onChangeText={text => {
                  validatedInputs(text, 'phone');
                }}
                value={phoneForm}
                style={[
                  phoneFormFocus && phoneForm.length !== 0
                    ? styles.Input
                    : styles.InputBase,
                  phoneFormFocus &&
                    !phoneFormValid &&
                    styles.inputStyleErrorMain,
                ]}
              />
            </View>
            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text style={{fontFamily: 'FuturaDemic'}}>Email</Text>
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
                ref={EmailRef}
                onSubmitEditing={() => CodeRef.current.focus()}
                onChangeText={text => {
                  setEmailForm(text);
                  setEmailFormFocus(true);
                }}
                value={emailForm}
                style={[
                  emailFormFocus && emailForm.length !== 0
                    ? styles.Input
                    : styles.InputBase,
                  emailFormFocus &&
                    !emailFormValid &&
                    styles.inputStyleErrorMain,
                ]}
              />
            </View>
            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text style={{fontFamily: 'FuturaDemic'}}>Post Code</Text>
              </View>
              <TextInput
                ref={CodeRef}
                onSubmitEditing={() => RefferalReff.current.focus()}
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
                <Text style={{fontFamily: 'FuturaDemic'}}>Referall</Text>
              </View>
              <TextInput
                ref={RefferalReff}
                onChangeText={text => setRefferalForm(text)}
                value={refferalForm}
                style={[
                  styles.inputStyle,
                  refferalForm != '' ? styles.Input : styles.InputBase,
                ]}
              />
            </View>
            <TouchableOpacity style={styles.MainButton} onPress={api}>
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 5,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: 25,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
            {errorValid != '' && (
              <Text
                style={{
                  color: 'red',
                  fontFamily: 'FuturaDemiC',
                  textAlign: 'center',
                  marginVertical: 5,
                }}>
                {errorValid}
              </Text>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

Main.navigationOptions = {
  headerRight: () => <View />,
};

export default Main;
