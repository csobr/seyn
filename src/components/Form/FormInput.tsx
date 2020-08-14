import React from 'react';
import {Text, TextInput, StyleSheet, Alert} from 'react-native';
import Colors from '../../styles/Colors';
interface FormProps extends HTMLInputElement {
  value: string;
  placeholder: string;
}

const FormInput: React.FC<FormProps> = props => {
  const [isFocused, setFocus] = React.useState({});
  const {value, placeholder, ...rest} = props;
  const inputRef: React.RefObject<TextInput> = React.createRef();

  return (
    <>
      <Text style={styles.label}>{placeholder}</Text>
      <TextInput
        ref={() => inputRef}
        autoCorrect={false}
        value={value}
        style={styles.input}
        selectionColor={Colors.accent}
        returnKeyType="next" 
         blurOnSubmit={false}
        onSubmitEditing={() => inputRef.current?.focus()}
      
        {...rest}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '70%',
    marginBottom: 30,
    padding: 15,
    backgroundColor: Colors.home,
  },
  textinput_focused: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Colors.dark,
  },
  textinput_onfocused: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Colors.accent,
  },

  label: {
    fontSize: 16,
    textAlign: 'left',
    width: '70%',
  },
});
export default FormInput;
