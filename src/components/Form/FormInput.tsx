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
    width: 200,
    height: 30,
    borderColor: Colors.black,
    borderBottomWidth: 1,
  },
});
export default FormInput;
