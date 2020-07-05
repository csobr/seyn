import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

interface FormProps extends HTMLInputElement {
  value: string;
  placeholder: string;
}
const FormInput: React.FC<FormProps> = props => {
  const {value, placeholder, ...rest} = props;

  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      style={styles.input}
      {...rest}
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
