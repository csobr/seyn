import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

function FormInput({
  labelValue,
  placeholderText,
}: {
  labelValue: string;
  placeholderText: string;
  arg: string;
}) {
  return (
    <TextInput
      value={labelValue}
      placeholder={placeholderText}
      style={styles.input}
      autoCapitalize="none"
    />
  );
}
const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 30,
    borderColor: Colors.black,
    borderBottomWidth: 1,
  },
});
export default FormInput;
