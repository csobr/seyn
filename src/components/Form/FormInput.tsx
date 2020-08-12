import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

interface FormProps extends HTMLInputElement {
  value: string;
  placeholder: string;
}
const FormInput: React.FC<FormProps> = props => {
  const {value, placeholder, ...rest} = props;

  return (
    <>
      <Text style={styles.label}>{placeholder}</Text>
      <TextInput value={value} {...rest} style={styles.input} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '70%',
    borderRadius: 3,
    borderWidth: 1,
    marginBottom: 30,
    borderColor: Colors.dark,
    padding: 15,
  },
  label: {
    fontSize: 16,
    textAlign: 'left',
    width: '70%',
  },
});
export default FormInput;
