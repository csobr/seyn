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
    width: 220,
    height: 30,
    borderColor: Colors.dark,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
export default FormInput;
