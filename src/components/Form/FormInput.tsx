import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

type FormProps = {
  labelValue: string;
  placeholderText: string;
};
const FormInput: React.FC<FormProps & React.HTMLAttributes<any>> = props => {
  const {labelValue, placeholderText} = props;
  return (
    <TextInput
      value={labelValue}
      placeholder={placeholderText}
      style={styles.input}
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
