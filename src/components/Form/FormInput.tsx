
import React from 'react';
import {View,Text, TextInput, StyleSheet, Platform} from 'react-native';
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
    <View style={styles.InputContainer} ref={inputRef}>
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
     
    </View>
  );
};

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: 'row',
    width: '70%',
    marginBottom: 30,
    padding: Platform.OS === 'android' ? 0 : 4,
    backgroundColor: '#EDE8E4',
   borderBottomWidth:1,
  },
  input:{
    flex:1,
    paddingBottom:5,
    paddingLeft: 3,
    paddingTop: 20,
    includeFontPadding: false,

  },
  input_focused: {
    borderBottomColor: Colors.accent,
  },
  input_onBlur:{
     borderBottomColor: Colors.dark
  },
  label: {
    fontSize: 11,
    paddingLeft: 3,
    position: 'absolute',
    paddingTop: 1,

  },
});
export default FormInput;
