import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: 50,
    paddingVertical: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  input: {
    paddingLeft: 10,
    margin: 20,
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  buttonLog: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'green',
  },
  buttonSig: {
    width: '100%',
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: 'blue',
  },
  fogPas: {
    marginTop: 20,
  },
});
