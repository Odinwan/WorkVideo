import {StyleSheet, View} from 'react-native';
import React from 'react';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0cf',
    flex: 1,
  },
  redText: {
    color: 'red',
  },
  blackText: {
    color: 'black',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  inputStyleError: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  buttonActive: {
    backgroundColor: '#99f77b',
    borderRadius: 5,
    marginVertical: 15,
    paddingVertical: 15,
    opacity: 1,
  },
  buttonDisable: {
    opacity: 0.3,
    backgroundColor: '#99f77b',
    borderRadius: 5,
    marginVertical: 15,
    paddingVertical: 15,
  },
  stepInput: {
    borderWidth: 1,
    borderColor: '#99f77b',
    borderRadius: 5,
    marginTop: 100,
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: 'black',
    backgroundColor: 'white',
  },
  stepInputBase: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginTop: 100,
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: 'black',
    backgroundColor: 'white',
  },
  Input: {
    borderWidth: 1,
    borderColor: '#99f77b',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: 'black',
    backgroundColor: 'white',
  },
  InputBase: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: 'black',
    backgroundColor: 'white',
  },
});
