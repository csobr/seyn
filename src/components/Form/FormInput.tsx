import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

interface FormProps extends HTMLInputElement {
  value?: string;
  placeholder?: string;
  autoFocus?: boolean;
  autoCompleteType?: any
  textContentType?: any;
  keyboardType: any;
  autoCapitalize: any;
  onChangeText: any;
  
}

const FormInput: React.FC<FormProps> = props => {
  const {value, placeholder, ...rest} = props;
   const inputRef: React.RefObject<TextInput> = React.createRef();
const focusedInput = () => {
  inputRef.current && inputRef.current.setNativeProps(styles.input_focused)

}
const onBlur =() =>{
  inputRef.current && inputRef.current.setNativeProps(styles.input_onBlur)
}
  return (
    <>
  
      <Text style={styles.label}>{placeholder}</Text>
      <TextInput
        ref={inputRef}
        autoCorrect={false}
        autoFocus={false}
        value={value}
        style={styles.input}
        selectionColor={Colors.accent}
        onFocus={() => focusedInput()}
        onBlur={() => onBlur()}
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
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Colors.dark,
    flexDirection: 'column'
  },
  input_focused: {
    borderColor: Colors.accent,
  },
  input_onBlur:{
     borderColor: Colors.dark
  },
  label: {
    fontSize: 16,
    textAlign: 'left',
    width: "70%"
  },
});
export default FormInput;
