import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

interface FormProps extends HTMLInputElement {
  labelValue: string;
  placeholderText: string;
}
const FormInput: React.FC<FormProps> = props => {
  const {labelValue, placeholderText} = props;
  return (
    <TextInput
      value={labelValue}
      placeholder={placeholderText}
      style={styles.input}
      {...props}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    width: 240,
    borderColor: Colors.dark,
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 5,
    marginBottom: 30,
  },
});
export default FormInput;
